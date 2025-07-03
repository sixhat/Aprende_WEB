all: htmls pdfs sebenta

htmls:
	@echo "Generating HTML files..."
	@find . -iname '*.md' -not -path './chapters/Sebenta.md' -exec ,md2html.sh {} \;

pdfs:
	@echo "Generating PDF files..."
	@find . -iname '*.md' -not -path './chapters/Sebenta.md' -exec ,md2pdf.sh {} \;

sebenta: clean_sebenta
	@echo "Generating a single PDF file..."
	@cd chapters && pandoc --pdf-engine=lualatex --top-level-division=chapter -s --citeproc -V papersize=a4 -V colorlinks -V urlcolor=blue -f markdown+hard_line_breaks -t pdf --highlight-style tango --toc=true -V mainfont:SourceSerif4 -V monofont:SourceCodePro --lua-filter /Users/david/bin/md-links-2-html-links-fliter.lua ../Readme.md *.md ../referencias.md -o Sebenta.pdf

clean_sebenta:
	@echo "Cleaning up the Sebenta..."
	@rm -f chapters/Sebenta.*
	