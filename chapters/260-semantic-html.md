# HTML Semântico

HTML semântico é o uso de elementos HTML que transmitem o significado da informação que contêm, em vez de apenas definir sua aparência. Os elementos semânticos descrevem claramente o seu propósito tanto para o browsers como para o utilizador.

Por exemplo, `<h1>` é um elemento semântico, que indica que o seu texto é o cabeçalho principal da página. Usar `<h1>` é melhor do que usar `<p style="font-size: 24px; font-weight: bold;">`, pois o `<h1>` possui um significado semântico que o `<p>` com estilos não possui.

## Por que usar HTML Semântico?

O uso de HTML semântico tem várias vantagens:

- **Acessibilidade:** Leitores de ecrã e outras tecnologias assistivas usam a semântica do HTML para interpretar o conteúdo da página para utilizadores com necessidadse. Um HTML bem estruturado e semântico torna a navegação mais fácil para estes utilizadores.
- **SEO (Search Engine Optimization):** Motores de busca como o Google usam a estrutura semântica para entender o conteúdo da página, o que melhora o ranking nos resultados de busca.
- **Manutenibilidade:** O código torna-se mais fácil de ler e entender para outros utilizadores. É mais fácil de manter e atualizar um código que descreve seu próprio significado.
- **Consistência:** Ajuda a criar uma estrutura de página mais consistente e lógica.

## Exemplos de Elementos Semânticos

Aqui estão alguns dos elementos HTML semânticos mais comuns e como eles são usados para estruturar uma página:

- `<header>`: Define o cabeçalho de um documento ou de uma seção. Geralmente contém o logotipo, o título principal e a navegação.
- `<nav>`: Define um conjunto de links de navegação.
- `<main>`: Especifica o conteúdo principal e único de um documento. O conteúdo dentro do `<main>` deve ser único para o documento, excluindo-se conteúdo que se repete em outras páginas, como barras laterais, navegação, etc.
- `<article>`: Define um conteúdo independente e autocontido. Um `article` deve fazer sentido por si só e deve ser possível distribuí-lo independentemente do resto do site. Exemplos incluem um post de blog, um artigo de notícias ou um comentário de fórum.
- `<section>`: Define uma seção em um documento. É um agrupamento temático de conteúdo, geralmente com um cabeçalho.
- `<aside>`: Define um conteúdo à parte do conteúdo principal, como uma barra lateral (sidebar).
- `<footer>`: Define o rodapé de um documento ou de uma seção. Geralmente contém informações de autoria, direitos de autor, links para informações de contato, etc.
- `<figure>` e `<figcaption>`: `<figure>` é usado para agrupar conteúdo de media, como imagens, diagramas, etc., e `<figcaption>` fornece uma legenda para o `<figure>`.

## Exemplo de Estrutura de Página com HTML Semântico

```html
<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de HTML Semântico</title>
</head>
<body>

    <header>
        <h1>O Meu Blog</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>O que é HTML Semântico?</h2>
            <p>HTML semântico é o uso de tags HTML que transmitem o significado...</p>
        </article>

        <section>
            <h3>Comentários</h3>
            <article>
                <h4>João disse:</h4>
                <p>Ótimo artigo!</p>
            </article>
        </section>
    </main>

    <aside>
        <h3>Posts Recentes</h3>
        <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2025 Meu Blog. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

## Elementos não semânticos

Elementos como `<div>` e `<span>` são exemplos de elementos não semânticos. Eles não dizem nada sobre o seu conteúdo.

- `<div>`: É um contentor genérico para outros elementos, usado para agrupar elementos para fins de estilização (com CSS) ou para manipulação com JavaScript.
- `<span>`: É um contentor genérico para texto, usado para agrupar uma parte do texto para estilização ou para outros fins.

Embora sejam úteis, o uso excessivo de `<div>`s (às vezes chamado de "div-itis") pode levar a um código HTML menos semântico e mais difícil de entender. Prefira sempre utilizar um elemento semântico quando houver um que se encaixe no propósito do seu conteúdo.

