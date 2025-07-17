// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Introdução às Tecnologias Web</li><li class="chapter-item expanded "><a href="como-funciona-a-web.html"><strong aria-hidden="true">1.</strong> Como funciona a web</a></li><li class="chapter-item expanded "><a href="estrutura-de-um-website.html"><strong aria-hidden="true">2.</strong> Estrutura de um website</a></li><li class="chapter-item expanded "><a href="ferramentas-e-ambientes.html"><strong aria-hidden="true">3.</strong> Ferramentas e ambientes de desenvolvimento</a></li><li class="chapter-item expanded affix "><li class="part-title">Introdução ao HTML</li><li class="chapter-item expanded "><a href="210-introducao-ao-html.html"><strong aria-hidden="true">4.</strong> Introdução ao HTML</a></li><li class="chapter-item expanded "><a href="220-anatomia-documento-html.html"><strong aria-hidden="true">5.</strong> Anatomia de um documento HTML</a></li><li class="chapter-item expanded "><a href="230-elementos-html-para-o-body.html"><strong aria-hidden="true">6.</strong> Elementos HTML para o body</a></li><li class="chapter-item expanded "><a href="240-elementos-para-o-head.html"><strong aria-hidden="true">7.</strong> Elementos HTML para o HEAD</a></li><li class="chapter-item expanded affix "><li class="part-title">Introdução ao CSS</li><li class="chapter-item expanded "><a href="300-introducao-ao-css.html"><strong aria-hidden="true">8.</strong> Introdução ao CSS</a></li><li class="chapter-item expanded "><a href="especificidade-e-heranca.html"><strong aria-hidden="true">9.</strong> Especificidade e herança de regras CSS</a></li><li class="chapter-item expanded "><a href="exercicios-css.html"><strong aria-hidden="true">10.</strong> Exercícios práticos de CSS</a></li><li class="chapter-item expanded affix "><li class="part-title">Introdução ao JavaScript</li><li class="chapter-item expanded affix "><li class="part-title">Publicação e Hosting</li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
