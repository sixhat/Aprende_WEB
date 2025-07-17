# Elementos HTML para o Head

- [Elementos HTML para o Head](#elementos-html-para-o-head)
  - [O que é o elemento `<head>`?](#o-que-é-o-elemento-head)
  - [Estrutura básica do head](#estrutura-básica-do-head)
  - [O elemento `<title>`](#o-elemento-title)
  - [Meta tags fundamentais](#meta-tags-fundamentais)
    - [Charset - Codificação de caracteres](#charset---codificação-de-caracteres)
    - [Viewport - Responsividade](#viewport---responsividade)
    - [Description - Descrição da página](#description---descrição-da-página)
    - [Keywords - Palavras-chave](#keywords---palavras-chave)
    - [Author - Autor da página](#author---autor-da-página)
  - [Meta tags para redes sociais](#meta-tags-para-redes-sociais)
    - [Open Graph (Facebook)](#open-graph-facebook)
    - [Twitter Cards](#twitter-cards)
  - [O elemento `<link>`](#o-elemento-link)
    - [Folhas de estilo CSS](#folhas-de-estilo-css)
    - [Favicon](#favicon)
    - [Preloading e Prefetching](#preloading-e-prefetching)
  - [O elemento `<script>`](#o-elemento-script)
    - [Scripts internos](#scripts-internos)
    - [Scripts externos](#scripts-externos)
    - [Atributos defer e async](#atributos-defer-e-async)
  - [O elemento `<style>`](#o-elemento-style)
  - [O elemento `<base>`](#o-elemento-base)
  - [Exemplo prático completo](#exemplo-prático-completo)
  - [Exercício](#exercício)
  - [Boas práticas](#boas-práticas)

O elemento `<head>` é uma das partes mais importantes de um documento HTML, apesar de não ser visível aos utilizadores. Contém metadados sobre a página, informações para motores de busca, ligações para recursos externos e configurações essenciais para o funcionamento correto da página web.

## O que é o elemento `<head>`?

O `<head>` é um contentor que armazena metadados sobre o documento HTML. Estes metadados não são exibidos na página, mas são utilizados por:

- **Browsers** - Para interpretar e renderizar a página corretamente
- **Motores de busca** - Para indexar e classificar a página
- **Redes sociais** - Para criar previsualizações quando a página é partilhada
- **Ferramentas de desenvolvimento** - Para análise e debugging

## Estrutura básica do head

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    <meta name="description" content="Descrição da página">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo da página -->
</body>
</html>
```

## O elemento `<title>`

O elemento `<title>` define o título do documento que aparece:
- No separador/aba do browser
- Nos resultados de motores de busca
- Nos favoritos/bookmarks
- No histórico de navegação

```html
<title>Página Inicial - Meu Website</title>
```

**Boas práticas para o título:**
- Máximo de 60 caracteres (para não ser truncado nos resultados de busca)
- Seja descritivo e específico
- Inclua palavras-chave relevantes
- Use a estrutura: "Título específico - Nome do site"

```html
<!-- Bom exemplo -->
<title>Receita de Bacalhau à Brás - Cozinha Portuguesa</title>

<!-- Exemplo menos eficaz -->
<title>Receita</title>
```

## Meta tags fundamentais

As meta tags fornecem informações sobre o documento HTML. Utilizam sempre o elemento `<meta>` com diferentes atributos.

### Charset - Codificação de caracteres

Define a codificação de caracteres utilizada no documento:

```html
<meta charset="UTF-8">
```

> **IMPORTANTE**: Esta deve ser sempre a primeira meta tag no head para garantir que caracteres especiais (como acentos portugueses) sejam interpretados corretamente.

### Viewport - Responsividade

Essential para design responsivo e dispositivos móveis:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Parâmetros do viewport:**
- `width=device-width` - Define a largura como a largura do dispositivo
- `initial-scale=1.0` - Define o zoom inicial como 100%
- `maximum-scale=1.0` - Limita o zoom máximo (opcional)
- `user-scalable=no` - Desativa o zoom pelo utilizador (não recomendado)

### Description - Descrição da página

Fornece uma breve descrição da página para motores de busca:

```html
<meta name="description" content="Aprenda a fazer bacalhau à brás com esta receita tradicional portuguesa. Ingredientes, modo de preparação e dicas de cozinha.">
```

**Boas práticas:**
- 150-160 caracteres máximo
- Seja conciso e descritivo
- Inclua palavras-chave relevantes
- Evite duplicar o título

### Keywords - Palavras-chave

Embora menos importante atualmente, ainda pode ser útil:

```html
<meta name="keywords" content="bacalhau, receita portuguesa, cozinha tradicional, bacalhau à brás">
```

> **NOTA**: A maioria dos motores de busca modernos não utilizam esta meta tag para classificação, mas pode ser útil para organização interna.

### Author - Autor da página

Identifica o autor do conteúdo:

```html
<meta name="author" content="Maria Silva">
```

## Meta tags para redes sociais

### Open Graph (Facebook)

Controla como a página aparece quando partilhada no Facebook e outras redes sociais:

```html
<meta property="og:title" content="Receita de Bacalhau à Brás">
<meta property="og:description" content="Aprenda a fazer bacalhau à brás com esta receita tradicional portuguesa.">
<meta property="og:image" content="https://exemplo.com/imagem-bacalhau.jpg">
<meta property="og:url" content="https://exemplo.com/receita-bacalhau">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Cozinha Portuguesa">
```

### Twitter Cards

Similares ao Open Graph, mas específicas para Twitter:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Receita de Bacalhau à Brás">
<meta name="twitter:description" content="Aprenda a fazer bacalhau à brás com esta receita tradicional portuguesa.">
<meta name="twitter:image" content="https://exemplo.com/imagem-bacalhau.jpg">
```

## O elemento `<link>`

O elemento `<link>` estabelece ligações entre o documento atual e recursos externos.

### Folhas de estilo CSS

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap">
```

### Favicon

O favicon é o pequeno ícone que aparece no separador do browser:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### Preloading e Prefetching

Para otimizar o carregamento da página:

```html
<!-- Preload: carrega recursos críticos imediatamente -->
<link rel="preload" href="fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="critical.css" as="style">

<!-- Prefetch: carrega recursos que podem ser necessários -->
<link rel="prefetch" href="next-page.html">
<link rel="prefetch" href="images/hero-image.jpg">
```

## O elemento `<script>`

O elemento `<script>` permite incluir código JavaScript no documento.

### Scripts internos

```html
<script>
    console.log("Este script é executado quando a página carrega");
    
    // Função para alterar o título da página
    function alterarTitulo() {
        document.title = "Novo Título";
    }
</script>
```

### Scripts externos

```html
<script src="script.js"></script>
<script src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.min.js"></script>
```

### Atributos defer e async

Controlam quando o script é executado:

```html
<!-- defer: executa após o HTML ser parseado -->
<script src="script.js" defer></script>

<!-- async: executa assim que for carregado -->
<script src="analytics.js" async></script>
```

**Diferenças:**
- **defer**: Mantém a ordem de execução, espera pelo parsing do HTML
- **async**: Executa imediatamente, pode não manter a ordem

## O elemento `<style>`

Permite incluir CSS diretamente no documento:

```html
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
    }
    
    h1 {
        color: #333;
        text-align: center;
    }
</style>
```

> **RECOMENDAÇÃO**: Para projetos maiores, prefira CSS externo usando `<link>`.

## O elemento `<base>`

Define a URL base para todas as URLs relativas no documento:

```html
<base href="https://exemplo.com/pasta/">
```

Com esta base, uma ligação `<a href="pagina.html">` seria interpretada como `https://exemplo.com/pasta/pagina.html`.

> **CUIDADO**: O elemento `<base>` afeta todas as URLs relativas no documento, incluindo âncoras (`#secao`) e JavaScript.

## Exemplo prático completo

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <!-- Codificação de caracteres - deve ser sempre primeiro -->
    <meta charset="UTF-8">
    
    <!-- Viewport para responsividade -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Título da página -->
    <title>Receitas Tradicionais Portuguesas - Cozinha da Avó</title>
    
    <!-- Meta tags para SEO -->
    <meta name="description" content="Descubra receitas tradicionais 
          portuguesas com instruções passo a passo. Bacalhau, francesinha, 
          pastéis de nata e muito mais.">
    <meta name="keywords" content="receitas portuguesas, cozinha tradicional, 
          bacalhau, pastéis de nata">
    <meta name="author" content="Maria Santos">
    
    <!-- Meta tags para redes sociais -->
    <meta property="og:title" content="Receitas Tradicionais Portuguesas">
    <meta property="og:description" content="Descubra receitas tradicionais 
          portuguesas com instruções passo a passo.">
    <meta property="og:image" 
          content="https://cozinhadaavo.pt/images/og-image.jpg">
    <meta property="og:url" content="https://cozinhadaavo.pt">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" 
          href="/favicon-32x32.png">
    
    <!-- Folhas de estilo -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?
          family=Merriweather:wght@300;400;700&display=swap">
    
    <!-- Preload de recursos críticos -->
    <link rel="preload" href="fonts/logo-font.woff2" as="font" 
          type="font/woff2" crossorigin>
    
    <!-- Scripts -->
    <script src="js/analytics.js" async></script>
    <script src="js/main.js" defer></script>
    
    <!-- Estilos críticos inline -->
    <style>
        /* CSS crítico para evitar flash of unstyled content */
        .header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
        }
    </style>
</head>
<body>
    <!-- Conteúdo da página -->
    <header class="header">
        <h1>Cozinha da Avó</h1>
    </header>
    
    <main>
        <p>Bem-vindo ao nosso site de receitas tradicionais portuguesas!</p>
    </main>
</body>
</html>
```

## Exercício

Crie um documento HTML com o seguinte head completo:

1. **Informações básicas:**
   - Charset UTF-8
   - Viewport responsivo
   - Título: "Loja de Livros Online - Livraria Central"
   - Descrição: "Encontre os melhores livros online com entrega rápida. Romance, ficção científica, história e muito mais."

2. **Meta tags para redes sociais:**
   - Open Graph com título, descrição e imagem
   - Twitter Cards

3. **Recursos:**
   - Favicon
   - Ligação para uma folha de estilo externa
   - Fonte do Google Fonts (escolha uma)
   - Script externo com defer

4. **Teste o resultado** no [playground da Mozilla](https://developer.mozilla.org/en-US/play)

**Exemplo de estrutura:**

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <!-- Complete com as meta tags e links necessários -->
</head>
<body>
    <h1>Livraria Central</h1>
    <p>A sua livraria online de confiança</p>
</body>
</html>
```

## Boas práticas

1. **Ordem dos elementos:**
   - `<meta charset>` sempre primeiro
   - `<title>` e meta tags de SEO
   - `<link>` para CSS
   - `<script>` no final (ou com defer/async)

2. **Performance:**
   - Minimize o número de recursos externos
   - Use preload para recursos críticos
   - Prefira async/defer para scripts não críticos

3. **SEO:**
   - Título único e descritivo para cada página
   - Meta description relevante e concisa
   - Open Graph para melhor partilha social

4. **Acessibilidade:**
   - Sempre defina o `lang` no elemento `<html>`
   - Use títulos descritivos
   - Inclua meta tags appropriadas

5. **Segurança:**
   - Valide sempre recursos externos
   - Use HTTPS para todos os recursos
   - Considere Content Security Policy (CSP)

O domínio dos elementos do head é fundamental para criar websites profissionais, otimizados para motores de busca e com boa experiência de utilizador. Estes elementos, embora invisíveis, são a base técnica de qualquer projeto web bem-sucedido.
