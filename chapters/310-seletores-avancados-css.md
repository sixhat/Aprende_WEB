# Seletores avançados do CSS

Os seletores avançados de CSS permitem uma maior precisão e flexibilidade na aplicação de estilos aos elementos de uma página web. Entre os seletores mais utilizados estão os combinadores de irmãos (siblings), filhos (children) e os pseudo-elementos.

- [Seletores avançados do CSS](#seletores-avançados-do-css)
  - [Combinadores de filhos (children)](#combinadores-de-filhos-children)
  - [Combinadores de irmãos (siblings)](#combinadores-de-irmãos-siblings)
  - [Pseudo-elementos](#pseudo-elementos)

## Combinadores de filhos (children)
O combinador de filhos (`>`) seleciona apenas os elementos que são filhos diretos de um determinado elemento. Por exemplo:

```css
div > p {
  color: blue;
}
```
Neste exemplo, apenas os parágrafos (`<p>`) que são filhos diretos de um `<div>` terão o texto azul.

## Combinadores de irmãos (siblings)
Existem dois tipos principais de combinadores de irmãos:

- **Irmão adjacente (`+`)**: Seleciona o elemento imediatamente a seguir ao elemento de referência.
  ```css
  h2 + p {
    margin-top: 0;
  }
  ```
  Neste caso, apenas o primeiro `<p>` imediatamente a seguir a um `<h2>` será afetado.

- **Irmão geral (`~`)**: Seleciona todos os elementos irmãos que seguem o elemento de referência, não apenas o primeiro.
  ```css
  h2 ~ p {
    color: green;
  }
  ```
  Aqui, todos os `<p>` que seguem um `<h2>` como irmãos terão o texto verde.

- **Irmão de qualquer tipo (`*`)**: Seleciona todos os irmãos, independentemente do tipo de elemento.
  ```css
  h2 ~ * {
    margin-bottom: 10px;
  }
  ```
  Neste exemplo, todos os elementos irmãos de `<h2>` terão uma margem inferior de 10 pixels.

> **EXPERIMENTE** online no [CodePen](https://codepen.io/sixhat/pen/yyYXjYy?editors=1100) os diferentes tipos de seletores anteriores. 

## Pseudo-elementos
Os pseudo-elementos permitem estilizar partes específicas de um elemento, como a primeira letra ou linha de um texto, ou inserir conteúdo antes ou depois do elemento.

Exemplos comuns:

- `::first-line`: Seleciona a primeira linha de um bloco de texto.
  ```css
  p::first-line {
    font-weight: bold;
  }
  ```
- `::first-letter`: Seleciona a primeira letra de um bloco de texto.
  ```css
  p::first-letter {
    font-size: 200%;
  }
  ```
- `::before` e `::after`: Permitem inserir conteúdo antes ou depois do conteúdo real do elemento.
  ```css
  h1::before {
    content: "★ ";
    color: gold;
  }
  ```

Estes seletores avançados são essenciais para criar layouts e estilos mais sofisticados e dinâmicos, tornando o CSS uma ferramenta poderosa para o design web.

> **EXPERIMENTE** online no [CodePen](https://codepen.io/sixhat/pen/azvwGNJ?editors=1100) os pseudo-elementos mencionados.
