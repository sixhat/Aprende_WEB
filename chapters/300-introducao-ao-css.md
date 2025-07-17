# Introdução ao CSS

- [Introdução ao CSS](#introdução-ao-css)
  - [O que é CSS?](#o-que-é-css)
  - [Onde colocar o CSS?](#onde-colocar-o-css)
    - [CSS Inline](#css-inline)
    - [CSS Interno](#css-interno)
    - [CSS Externo](#css-externo)
  - [Anatomia de uma regra CSS](#anatomia-de-uma-regra-css)
  - [Exercício](#exercício)
  - [Seletores CSS](#seletores-css)
    - [Seletor de elemento](#seletor-de-elemento)
    - [Seletor de classe](#seletor-de-classe)
    - [Seletor de ID](#seletor-de-id)
    - [Seletores combinados](#seletores-combinados)
  - [Propriedades CSS básicas](#propriedades-css-básicas)
    - [Cores](#cores)
    - [Tipografia](#tipografia)
    - [Espaçamento](#espaçamento)
  - [Comentários em CSS](#comentários-em-css)
  - [Exercício Prático](#exercício-prático)

CSS (Cascading Style Sheets) é a linguagem utilizada para definir a apresentação visual de documentos HTML. Enquanto o HTML define a estrutura e o conteúdo de uma página web, o CSS é responsável por controlar a aparência, layout, cores, tipografia e todos os aspectos visuais da página.

O termo "Cascading" (em cascata) refere-se ao facto de as regras CSS poderem ser aplicadas em camadas, onde estilos mais específicos sobrepõem estilos mais gerais, criando um sistema hierárquico de aplicação de estilos.

## O que é CSS?

CSS permite separar completamente o conteúdo (HTML) da apresentação (CSS), seguindo o princípio da separação de responsabilidades. Esta separação traz várias vantagens:

- **Manutenibilidade**: Alterações visuais podem ser feitas sem modificar o HTML
- **Reutilização**: O mesmo CSS pode ser aplicado a múltiplas páginas
- **Consistência**: Garantia de aparência uniforme em todo o website
- **Eficiência**: Redução do tamanho dos ficheiros HTML
- **Acessibilidade**: Melhor suporte para diferentes dispositivos e necessidades especiais

## Onde colocar o CSS?

Existem três formas principais de incluir CSS num documento HTML:

### CSS Inline

O CSS inline é aplicado diretamente no elemento HTML através do atributo `style`:

```html
<p style="color: red; font-size: 16px;">Este texto é vermelho e tem 16px de tamanho.</p>
```

**Vantagens:**
- Aplicação imediata e específica
- Útil para testes rápidos

**Desvantagens:**
- Mistura conteúdo com apresentação
- Dificulta a manutenção
- Não permite reutilização
- Maior especificidade (dificulta sobrescrever)

### CSS Interno

O CSS interno é colocado dentro do elemento `<head>` do documento HTML, usando a tag `<style>`:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>Este texto será azul e terá 18px de tamanho.</p>
</body>
</html>
```

**Vantagens:**
- Separação entre conteúdo e apresentação
- Permite reutilização dentro da mesma página
- Carregamento mais rápido (não há ficheiro externo)

**Desvantagens:**
- Não pode ser reutilizado entre páginas
- Aumenta o tamanho do ficheiro HTML

### CSS Externo

O CSS externo é colocado num ficheiro separado com extensão `.css` e ligado ao HTML através da tag `<link>`:

**Ficheiro `estilos.css`:**
```css
p {
    color: green;
    font-size: 20px;
}
```

**Ficheiro HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <p>Este texto será verde e terá 20px de tamanho.</p>
</body>
</html>
```

**Vantagens:**
- Separação completa entre conteúdo e apresentação
- Reutilização entre múltiplas páginas
- Facilita a manutenção
- Melhor organização do projeto
- Cache do browser (carregamento mais rápido em visitas subsequentes)

**Desvantagens:**
- Requer um pedido HTTP adicional
- Dependência de ficheiro externo

> **RECOMENDAÇÃO**: Para projetos web, utilize sempre CSS externo. Esta é a abordagem mais profissional e mantível.

## Anatomia de uma regra CSS

Uma regra CSS é composta por várias partes:

```css
seletor {
    propriedade: valor;
    propriedade: valor;
}
```

![Estrutura de uma regra CSS](introducao-ao-css-assets/regra-css.png)

**Exemplo prático:**
```css
p {
    color: red;
    font-size: 16px;
    margin: 10px;
}
```

**Componentes:**
1. **Seletor** (`p`): Define qual elemento HTML será afetado
2. **Chaves** (`{}`): Delimitam o bloco de declarações
3. **Propriedade** (`color`, `font-size`, `margin`): Define que aspeto será modificado
4. **Valor** (`red`, `16px`, `10px`): Define como a propriedade será aplicada
5. **Ponto e vírgula** (`;`): Separa cada declaração

> **NOTA**: O ponto e vírgula é obrigatório no final de cada declaração, exceto na última declaração de um bloco (embora seja recomendado incluí-lo sempre).

## Exercício

No [playground online da Mozilla](https://developer.mozilla.org/en-US/play), experimente o seguinte código HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 32px;
        }
        
        p {
            color: gray;
            font-size: 16px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <h1>Título Principal</h1>
    <p>Este é um parágrafo com estilo aplicado através de CSS.</p>
    <p>Este é outro parágrafo que terá o mesmo estilo.</p>
</body>
</html>
```

Experimente alterar:
- A cor do título para vermelho (`red`)
- O tamanho da fonte dos parágrafos para 18px
- Adicionar uma nova propriedade `text-align: center` ao título

## Seletores CSS

Os seletores são padrões que permitem selecionar elementos HTML específicos para aplicar estilos. Existem vários tipos de seletores:

### Seletor de elemento

Seleciona todos os elementos de um determinado tipo:

```css
p {
    color: black;
}

h1 {
    color: blue;
}

body {
    font-family: Arial, sans-serif;
}
```

### Seletor de classe

Seleciona elementos que possuem um atributo `class` específico. As classes são precedidas por um ponto (`.`):

**HTML:**
```html
<p class="destaque">Este parágrafo tem destaque.</p>
<p>Este parágrafo é normal.</p>
<p class="destaque">Este parágrafo também tem destaque.</p>
```

**CSS:**
```css
.destaque {
    color: red;
    font-weight: bold;
}
```

### Seletor de ID

Seleciona um elemento único que possui um atributo `id` específico. IDs são precedidos por uma cardinal (`#`):

**HTML:**
```html
<p id="introducao">Este é o parágrafo de introdução.</p>
<p>Este é um parágrafo normal.</p>
```

**CSS:**
```css
#introducao {
    color: green;
    font-size: 20px;
}
```

> **IMPORTANTE**: Cada ID deve ser único numa página HTML. Se precisar de aplicar o mesmo estilo a múltiplos elementos, utilize classes.

### Seletores combinados

É possível combinar seletores para criar regras mais específicas:

```css
/* Seleciona todos os parágrafos dentro de um div */
div p {
    color: gray;
}

/* Seleciona parágrafos que têm a classe "especial" */
p.especial {
    background-color: yellow;
}

/* Seleciona elementos com classe "botao" que também têm classe "primario" */
.botao.primario {
    background-color: blue;
    color: white;
}
```

## Propriedades CSS básicas

### Cores

```css
/* Cores por nome */
color: red;
color: blue;
color: green;

/* Cores hexadecimais */
color: #FF0000; /* vermelho */
color: #0000FF; /* azul */
color: #00FF00; /* verde */

/* Cores RGB */
color: rgb(255, 0, 0); /* vermelho */
color: rgba(255, 0, 0, 0.5); /* vermelho com 50% de transparência */

/* Cores HSL */
color: hsl(0, 100%, 50%); /* vermelho */
color: hsla(0, 100%, 50%, 0.5); /* vermelho com 50% de transparência */
```

### Tipografia

```css
/* Família de fontes */
font-family: Arial, sans-serif;
font-family: "Times New Roman", serif;
font-family: "Courier New", monospace;

/* Tamanho da fonte */
font-size: 16px;
font-size: 1.2em;
font-size: 120%;

/* Peso da fonte */
font-weight: normal;
font-weight: bold;
font-weight: 400;
font-weight: 700;

/* Estilo da fonte */
font-style: normal;
font-style: italic;

/* Alinhamento do texto */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### Espaçamento

```css
/* Margem externa */
margin: 10px;
margin: 10px 20px; /* vertical horizontal */
margin: 10px 20px 30px 40px; /* top right bottom left */

/* Margem interna */
padding: 10px;
padding: 10px 20px;
padding: 10px 20px 30px 40px;

/* Espaçamento entre linhas */
line-height: 1.5;
line-height: 24px;
```

## Comentários em CSS

Os comentários em CSS são úteis para documentar o código e são ignorados pelo browser:

```css
/* Este é um comentário de uma linha */

/*
   Este é um comentário
   de múltiplas linhas
*/

p {
    color: red; /* Cor do texto */
    /* font-size: 16px; */ /* Esta linha está comentada */
}
```

## Exercício Prático

Crie um ficheiro HTML com o seguinte conteúdo e experimente aplicar diferentes estilos:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício CSS</title>
    <style>
        /* Adicione aqui os seus estilos CSS */
    </style>
</head>
<body>
    <header>
        <h1>Meu Website</h1>
        <p class="subtitulo">Bem-vindo ao meu site pessoal</p>
    </header>
    
    <main>
        <h2>Sobre Mim</h2>
        <p>Este é um parágrafo sobre mim.</p>
        <p class="destaque">Este parágrafo tem destaque especial.</p>
        
        <h2>Contactos</h2>
        <p id="contacto">Pode contactar-me através do email.</p>
    </main>
    
    <footer>
        <p>© 2024 Meu Website</p>
    </footer>
</body>
</html>
```

**Desafios:**
1. Estilize o `h1` com uma cor azul e tamanho 36px
2. Aplique uma cor de fundo cinzenta ao `header`
3. Faça com que a classe `.destaque` tenha texto vermelho e negrito
4. Aplique uma margem de 20px a todos os parágrafos
5. Centralize o texto do `footer`
6. Estilize o elemento com ID `#contacto` com uma cor verde

Esta introdução ao CSS fornece as bases necessárias para começar a estilizar páginas web. Nos próximos capítulos, exploraremos conceitos mais avançados como especificidade, herança, layouts responsivos e muito mais.
