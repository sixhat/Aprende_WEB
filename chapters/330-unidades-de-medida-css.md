# Unidades de Medida em CSS

Em CSS, as unidades de medida são cruciais para definir o tamanho e o espaçamento dos elementos. Elas são divididas em duas categorias principais: absolutas e relativas.

## Unidades Absolutas

As unidades absolutas são fixas e não mudam de tamanho com base em outros elementos ou no tamanho do ecrã. São mais adequadas para media de impressão, onde as dimensões físicas são conhecidas.

- **`px` (Píxeis):** A unidade absoluta mais comum para ecrã. Um píxel é o menor ponto de um ecrã de exibição que se pode manipular.
- **`pt` (Pontos):** Usada tradicionalmente em tipografia para impressão (1pt = 1/72 de polegada).
- **`pc` (Paicas):** Também de uso tipográfico (1 paica = 12 pontos).
- **`cm` (Centímetros):** Unidade do sistema métrico.
- **`mm` (Milímetros):** Unidade do sistema métrico.
- **`in` (Polegadas):** Onde 1 polegada equivale a 2,54cm.

## Unidades Relativas

As unidades relativas são mais flexíveis e seu valor é calculado com base noutra medida, como o tamanho da fonte do elemento pai ou as dimensões da janela do navegador (viewport). Elas são ideais para criar designs responsivos e escaláveis.

- **`em`:** Relativa ao tamanho da fonte do próprio elemento (para propriedades como `width`) ou do elemento pai (para `font-size`).
- **`rem` (root em):** Relativa ao tamanho da fonte do elemento raiz (`<html>`) do documento. Isso permite um escalonamento mais previsível em toda a página.
- **`%` (Percentagem):** Relativa ao tamanho do elemento pai.
- **`vw` (Viewport Width):** Uma percentagem da largura da janela de visualização do navegador. Por exemplo, `10vw` equivale a 10% da largura da viewport.
- **`vh` (Viewport Height):** Uma percentagem da altura da janela de visualização do navegador.
- **`vmin`:** Uma percentagem da menor dimensão da viewport (seja altura ou largura).
- **`vmax`:** Uma percentagem da maior dimensão da viewport.

Um exemplo de uso de unidades relativas:

```css
body {
  font-size: 16px; /* Tamanho base da fonte */
}
h1 {
  font-size: 2rem; /* 2 vezes o tamanho da fonte base, ou 32px */
}
p {
  font-size: 1.5em; /* 1.5 vezes o tamanho da fonte do elemento pai */
  width: 50%; /* 50% da largura do elemento pai */
}
.container {
  width: 80vw; /* 80% da largura da viewport */
  height: 50vh; /* 50% da altura da viewport */
}
``` 

> **EXTRA:** Mais informações sobre unidades de medida podem ser encontradas online em [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units).