# Lista de Filmes

## Descrição do Projeto

O **"Lista de Filmes"** é um aplicativo web desenvolvido para exibir uma lista de filmes com suas respectivas imagens e links para assisti-los. O projeto foi desenvolvido no início do período da faculdade como um trabalho acadêmico valendo nota, com o objetivo de praticar conceitos básicos de React, Next.js e estilização com Tailwind CSS.

## Estrutura do Projeto

O projeto é composto pelos seguintes principais componentes:

- **Header**: Exibe um logotipo e um título no topo da página.
- **CardFilm**: Representa um filme individual com uma imagem, título e link para assistir.
- **Footer**: Contém uma mensagem de direitos autorais na parte inferior da página.
- **Home**: A página principal que apresenta uma lista de filmes utilizando o componente `CardFilm`.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework CSS para estilos utilitários e design responsivo.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Arquivos Principais

- **`components/CardFilm/CardFilm.tsx`**: Componente para exibir informações de um filme. Recebe `title`, `image`, e `link` como props.
- **`components/Header/header.tsx`**: Componente que exibe o cabeçalho da página com o logotipo e o título.
- **`components/Footer/footer.tsx`**: Componente que exibe o rodapé com a mensagem de direitos autorais.
- **`pages/index.tsx`**: Página principal que utiliza o componente `CardFilm` para listar vários filmes.
- **`styles/globals.css`**: Arquivo de estilo global que inclui a configuração do Tailwind CSS e ajustes de tema.
- **`styles.css`**: Arquivo de estilo para componentes individuais como `CardFilm`, `Header`, e `Footer`.
