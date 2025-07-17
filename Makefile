all: 
	@echo "Available targets:"
	@echo "  mdbook: Generate the book using mdbook"
	@echo "  htmls: Generate HTML files from Markdown"
	@echo "  pdfs: Generate PDF files from Markdown"
	@echo "  sebenta: Generate a single PDF file from the book"

mdbook: clean
	mdbook build

serve:
	mdbook serve

htmls: clean
	@echo "Generating HTML files..."
	find . -iname '*.md' -not -path './chapters/Sebenta.md' -exec ,md2html.sh {} \;

clean:
	rm -f chapters/*.html
	rm -f chapters/*.pdf

pdfs:
	@echo "Generating PDF files..."
	find . -iname '*.md' -not -path './chapters/Sebenta.md' -exec ,md2pdf.sh {} \;

sebenta: clean_sebenta
	@echo "Generating a single PDF file..."
	cd chapters && pandoc --pdf-engine=lualatex --top-level-division=chapter -s --citeproc -V papersize=a4 -V colorlinks -V urlcolor=blue -f markdown+hard_line_breaks -t pdf --highlight-style tango --toc=true -V mainfont:SourceSerif4 -V monofont:SourceCodePro --lua-filter /Users/david/bin/md-links-2-html-links-fliter.lua ../Readme.md *.md ../referencias.md -o Sebenta.pdf
	mv chapters/Sebenta.pdf .
	
clean_sebenta:
	@echo "Cleaning up the Sebenta..."
	rm -f chapters/Sebenta.*
	
