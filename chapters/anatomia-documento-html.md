# Anatomia de um documento HTML
- [Anatomia de um documento HTML](#anatomia-de-um-documento-html)
  - [Exercício](#exercício)
      - [Instruções](#instruções)
  - [Espaço em branco](#espaço-em-branco)
  - [Carateres especiais em HTML](#carateres-especiais-em-html)
  - [Comentários em HTML](#comentários-em-html)

Anteriormente vimos o que são elementos HTML e algumas das suas características. Pela combinação desses elementos é possível criar uma página HTML completa.

Um documento HTML mínimo pode ser algo como:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Neste documento vemos diferentes elementos HTML:

1. `<!doctype html>` o doctype é uma declaração inicial na primeira linha de um documento html que indica ao browser que tipo de documento se seguirá e que conjunto de regras é que o documento segue. Historicamente pode encontrar definições de doctpype diferentes, mas a web moderna precisa apenas desta definição simples.
2. `<html></html>` Este elemento engloba todo o documento. É a raiz do árvore do documento e todos os restantes elementos são interiores.
3. `<head></head>` Este elemento é um contentor para todo os tipos de dados que quiser incluir na página e que não são renderizados como conteúdo. Isto inclui o título da página (utilizado pelo browser), palavras chave, descrição, declaração de estilos a utilizar, entre outros.
4. `<meta charset="utf-8" />` O elemento `<meta>` é utilizado para definir diferentes tipos de metadados que não são definidos por outros elementos. No exemplo define a codificação de caracteres como sendo UTF-8, que inclui a maioria de caracteres das linguagens humanas.
5. `<title></title>` este elemento define o título da página que aparecerá nos separador do browser e nos bookmarks.
6. `<body></body>` Este elemento é o contentor de todos os elementos HTML que são renderizados para o utilizador. No exemplo apenas inclui um parágrafo `<p></p>`.

## Exercício

Agora que o temos um documento HTMl devemos começar a utilizar um editor de texto em vez do playground online[^editor_texto].

[^editor_texto]: Recomenda-se a utilização do [Visual Studio Code](https://code.visualstudio.com/), uma vez que é bastante completo e bem suportado. No entanto qualquer editor de texto permite editar HTML. Se por acaso estive num computador que não tenha nenhum editor e onde não possa instalar um, pode utilizar uma [versão web do editor](https://vscode.dev/). Pode também consultar uma [lista de editores de código fonte](https://github.com/collections/text-editors) para escolher um.

1. Copie o código do documento HTML básico parar um ficheiro novo. Grave-o com o nome `index.html`. Esta será a sua página de entrada.
2. Abra o ficheiro com o browser e verifique que a página foi renderizada corretamente antes de seguir as instruções seguintes.

#### Instruções

1. A seguir à tag `<body>` adicione uma linha para colocar o cabeçalho principal do documento. O html permite definir _Headings_ de diferentes níveis por ordem de importância. O título de uma página é normalmente definido pelo _Heading 1_. O elemento HTML para o definir é `<h1></h1>`. Experimente adicionar este elemento e coloque o texto “A minha página” entre as tags de abertura e de fecho do _heading 1_
2. Altere o texto do parágrafo para descrever algo sobre si. Por exemplo uma pequena biografia.
3. Selecione algumas palavras importantes da sua biografia e marque-as com o elemento `<strong>`.
4. Adicione uma hiperligação `<a>` dentro desse parágrafo para um website a seu gosto, ou para a escola.
5. Adicione uma imagem `<img>` à página. Coloque-a a seguir ao parágrafo. Se a imagem for muito grande utilize `width=...` e `height=...` para a redimensionar. A imagem pode estar online ou pode ser uma imagem de um ficheiro no seu computador.

Um exemplo de um resultado possível pode ser visto a seguir:

```html
<!doctype html>
<html lang="pt-PT">
  <head>
    <meta charset="utf-8" />
    <title>David Sousa-Rodrigues</title>
  </head>
  <body>
    <h1>A minha página pessoal</h1>
    <p>Sou professor na 
        <a href="https://www.ipleiria.pt/esadcr/" title="ESADcr">
        Escola Superior de Artes e Design</a> das Caldas da Rainha. 
        Gosto de ensinar e de jogar Xadrez</p>
    <img src="foto-01.jpg" 
         alt="Foto de David Sousa-Rodrigues" 
         width="300">
  </body>
</html>
```

![](anatomia-documento-html-assets/exemplo-pagina-exercicio.png)

## Espaço em branco

No exemplo anterior pode ter reparado que há imenso espaço em branco dentro dos elementos HTML. O espaço em branco em HTML é opcional. Os dois exemplos seguintes são equivalentes.

```html
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Em HTML o espaço em branco dentro de um elemento HTML é normalmente colapsado a um espaço. Isto inclui quebras de linha, tabulações e espaços. A vantagem desta abordagem é que nos permite aumentar a legibilidade do código HTML.

## Carateres especiais em HTML

Os carateres `<, >, ", ' e &` são especiais uma vez que fazem parte da sintaxe do HTML. Quando é necessário inserir estes carateres no próprio texto é devemos utilizar uma codificação especial para os representar. Cada caráter pode ser escrito por uma referência que começa com o caráter `&` e termina com ponto e virgula `;`.

| caráter | Referência |
| -------| -----|
| < | \&lt; |
| > | \&gt; |
| " | \&quot; |
| ' | \&apos; |
| & | \&amp; |

A [lista de referência de carateres](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) é extensa e pode ser consultada online. Para além da referência de nomes de carateres é também possível referenciálos pelo seu número  decimal ou hexadecimal.

Por exemplo, o caráter **&beta;** pode ser escrito em HTML com as referências **\&beta;** **\&#946**, ou **\&#x3B2;**. Note que as representações numéricas possuem o simbolo # seguido de um número. No caso da representação hexadecimal o número começa com um `x`. Online as representações do caráter estão normalmente no formato **U+003B2**, onde o **U+** indica tratar-se da representação em codificação Unicode e o número aparece com zeros à esquerda que podem ser incluidos ou não quando se referência o número no HTML da nossa página.

## Comentários em HTML

O HTML tem um mecanismo para definir comentários no código. Um comentário é algo que não será renderizado pelo browser e que serve apenas para incluir notas no código para facilitar o desenvolvimento da página web. Os comentários utilizam uma TAG especial `<!-- comentário -->`. No exemplo anterior podemos adicionar comentários que descrevam o código:

```html
<!doctype html>
<html lang="pt-PT">
  <head>
    <meta charset="utf-8" />
    <title>David Sousa-Rodrigues</title>
  </head>
  <body>
    <!-- Escrever um Cabeçalho melhor, talvez mudar para o nome -->
    <h1>A minha página pessoal</h1>

    <!-- 
        Pequena Bio, não se quer muito longa. Os comentários
        HTML podem ocupar multiplas linhas. 
    -->
    <p>Sou professor na 
        <a href="https://www.ipleiria.pt/esadcr/" title="ESADcr">
        Escola Superior de Artes e Design</a> das Caldas da Rainha. 
        Gosto de ensinar e de jogar Xadrez</p>

    <!-- Tirar uma foto nova. Esta é muito antiga -->
    <img src="foto-01.jpg" 
         alt="Foto de David Sousa-Rodrigues" 
         width="300">
  </body>
</html>
```

Tudo o que estiver dentro da tag de comentário será ignorado pelo browser.