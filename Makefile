# Makefile para Build del Informe - 1ASI0732 Diseño de Experimentos

# Configuración
DOCS_AV1 = \
	docs/00-caratula.md \
	docs/01-registro-versiones.md \
	docs/02-collaboration-insights.md \
	docs/03-contenido.md \
	docs/04-student-outcome.md \
	docs/10-cap1-introduccion.md \
	docs/20-cap2-requirements-elicitation.md \
	docs/30-cap3-requirements-specification.md \
	docs/40-cap4-product-design.md \
	docs/50-cap5-product-implementation.md \
	docs/90-conclusiones.md \
	docs/bibliografia.md \
	docs/anexos.md

OUTPUT_DIR = output
PDF_AV1 = $(OUTPUT_DIR)/report-av1.pdf
PDF_TB1 = $(OUTPUT_DIR)/report-tb1.pdf
PDF_AV2 = $(OUTPUT_DIR)/report-av2.pdf
PDF_TB2 = $(OUTPUT_DIR)/report-tb2.pdf

PANDOC = pandoc
PANDOC_FLAGS = \
	--from markdown+pipe_tables+table_captions+yaml_metadata_block+implicit_figures+footnotes+fenced_code_blocks+fenced_code_attributes+header_attributes+raw_tex \
	--to pdf \
	--template=config/template.tex \
	--lua-filter=config/condicionales.lua \
	--pdf-engine=lualatex \
	--toc \
	--toc-depth=4 \
	--number-sections \
	--highlight-style=github \
	--resource-path=.:assets \
	--metadata-file=config/build.yaml

# Variables de entorno para metadatos
export CURSO = "1ASI0732 Diseño de Experimentos de Ingeniería de Software"
export NRC = "[PENDIENTE]"
export PROFESOR = "Julio Manuel Noriega Melendez"
export CICLO = "2026-20"
export STARTUP = "[PENDIENTE]"
export PRODUCTO = "[PENDIENTE]"

# Targets principales
.PHONY: all clean pdf-av1 pdf-tb1 pdf-av2 pdf-tb2 html-av1 check-deps optimize-images init-repo

all: pdf-av1

# Verificar dependencias
check-deps:
	@echo "Verificando dependencias..."
	@which $(PANDOC) > /dev/null || (echo "Error: pandoc no instalado"; exit 1)
	@which lualatex > /dev/null || (echo "Error: lualatex no instalado (TeX Live/MiKTeX)"; exit 1)
	@python3 -c "import PIL" 2>/dev/null || echo "Advertencia: Pillow no instalado (optimización imágenes)"
	@echo "Dependencias OK"

# Crear directorio de salida
$(OUTPUT_DIR):
	mkdir -p $(OUTPUT_DIR)

# Build PDF AV1
pdf-av1: check-deps $(OUTPUT_DIR) $(PDF_AV1)

$(PDF_AV1): $(DOCS_AV1) config/template.tex config/condicionales.lua config/build.yaml
	@echo "=== Generando PDF Avance 1 ==="
	$(PANDOC) $(PANDOC_FLAGS) \
		--metadata=curso:"$(CURSO)" \
		--metadata=nrc:"$(NRC)" \
		--metadata=profesor:"$(PROFESOR)" \
		--metadata=ciclo:"$(CICLO)" \
		--metadata=startup:"$(STARTUP)" \
		--metadata=producto:"$(PRODUCTO)" \
		-o $@ $(DOCS_AV1)
	@echo "=== PDF generado: $@ ==="

# Build HTML AV1 (para revisión rápida)
html-av1: check-deps $(OUTPUT_DIR)
	@echo "=== Generando HTML Avance 1 ==="
	$(PANDOC) \
		--from markdown+pipe_tables+table_captions+yaml_metadata_block+implicit_figures+footnotes+fenced_code_blocks \
		--to html5 \
		--template=config/template.html \
		--toc --toc-depth=4 --number-sections --self-contained \
		--css=config/style.css \
		--resource-path=.:assets \
		--metadata=curso:"$(CURSO)" \
		-o $(OUTPUT_DIR)/report-av1.html $(DOCS_AV1)
	@echo "=== HTML generado: $(OUTPUT_DIR)/report-av1.html ==="

# Optimizar imágenes
optimize-images:
	@echo "=== Optimizando imágenes ==="
	python3 config/optimize_images.py --input-dir assets/images --output-dir assets/images_optimized --max-width 1200 --quality 85 --format WEBP

# Limpiar archivos generados
clean:
	rm -rf $(OUTPUT_DIR)
	rm -rf assets/images_optimized
	@echo "Limpieza completada"

# Inicializar repositorio Git con estructura
init-repo:
	@echo "=== Inicializando repositorio Git ==="
	git init
	git checkout -b main
	git checkout -b develop
	@echo "Ramas main y develop creadas"
	@echo "Configurando GitFlow..."
	git config --local branch.main.mergeoptions "--no-ff"
	git config --local branch.develop.mergeoptions "--no-ff"
	@echo "Agregando .gitignore..."
	cp .gitignore .gitignore 2>/dev/null || true
	@echo "Commit inicial..."
	git add .
	git commit -m "chore: initial commit - project structure for 1ASI0732 AV1"
	@echo "=== Repositorio listo ==="
	@echo "Siguiente: crear organización en GitHub y push:"
	@echo "  git remote add origin https://github.com/<org>/<repo>.git"
	@echo "  git push -u origin main develop"

# Validar estructura de archivos requeridos
validate:
	@echo "=== Validando estructura AV1 ==="
	@for f in $(DOCS_AV1); do \
		if [ ! -f $$f ]; then echo "FALTA: $$f"; else echo "OK: $$f"; fi; \
	done
	@echo "=== Validación completa ==="

# Verificar tamaño de imágenes
check-images:
	@echo "=== Verificando imágenes > 500KB ==="
	@find assets/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +500k -exec ls -lh {} \;

# Ayuda
help:
	@echo "Makefile - 1ASI0732 Diseño de Experimentos"
	@echo ""
	@echo "Targets:"
	@echo "  make pdf-av1        - Genera PDF para Avance 1 (Semana 4)"
	@echo "  make html-av1       - Genera HTML para revisión rápida"
	@echo "  make optimize-images - Optimiza imágenes a WebP"
	@echo "  make validate       - Verifica que todos los .md existan"
	@echo "  make check-images   - Busca imágenes muy pesadas"
	@echo "  make init-repo      - Inicializa Git con GitFlow"
	@echo "  make clean          - Limpia archivos generados"
	@echo "  make check-deps     - Verifica dependencias instaladas"
	@echo "  make help           - Muestra esta ayuda"
	@echo ""
	@echo "Variables de entorno (exportar antes de make):"
	@echo "  export NRC=\"12345\""
	@echo "  export STARTUP=\"MiStartup\""
	@echo "  export PRODUCTO=\"MiProducto\""