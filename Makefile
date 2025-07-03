all: htmls pdfs

htmls:
	@echo "Generating HTML files..."
	@find . -iname '*.md' -exec ,md2html.sh {} \;

pdfs:
	@echo "Generating PDF files..."
	@find . -iname '*.md' -exec ,md2pdf.sh {} \;

sebenta: pdfs
	@echo "Generating single PDF file..."
	@pdfunite Readme.pdf */*.pdf sebenta.pdf
