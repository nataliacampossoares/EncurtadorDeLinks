# Encurtador de Links

Este é um projeto simples de um encurtador de links desenvolvido em Node.js e Next.js. Ele permite que os usuários encurtem URLs longas para facilitar o compartilhamento.
O usuário pode inserir uma URL para ser encurtada, editar sua legenda e URL original, bem como excluí-la, além de visualizar estatísticas de acesso.
A API faz o tratamento e armazenamento dos dados em um banco de dados PostgreSQL e possui rota para redirecionamento com base no código gerado.

## 👨‍💻 Membros do Grupo

| Nome                  | GitHub                                           |
| --------------------- | ------------------------------------------------ |
| Natália Campos Soares | [GitHub](https://github.com/nataliacampossoares) |
| Valmir Paiva Stachin  | [GitHub](https://github.com/valmirpst)           |

## Links da aplicação

- [Link do frontend no Vercel](https://encurtador-de-links-theta.vercel.app/)
- [Link do backend no Render](https://encurtadordelinks-aksq.onrender.com/)

## 🛠️ Tecnologias Utilizadas

### Backend / API

- Node.js
- Fastify
- PostgreSQL
- Drizzle ORM
- Zod
- NanoID (para geração de códigos)
- Neon (serviço de banco de dados PostgreSQL)

### Frontend / Web

- Next.js
- React
- Lucide icons
- Tailwind CSS
- Fetch API

## 🚀 Como Executar o Projeto

Para executar este projeto, siga as etapas abaixo:

1. Clone o repositório:

2. Instale as dependências de cada projeto:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. Crie o arquivo `.env` em ambos os diretórios (`backend` e `frontend`) de acordo com o arquivo `.env.example` fornecido.:

4. Inicie os servidores de desenvolvimento:

```bash
# No diretório backend
npm run dev

# No diretório frontend
npm run dev
```

## Funcionalidade extra

#### Descrição da Implementação

A funcionalidade de barra de pesquisa foi implementada para permitir que os usuários filtrem os links cadastrados com base na legenda associada a cada link. Essa funcionalidade foi desenvolvida para melhorar a experiência do usuário, o que facilita a localização de links específicos.

##### No backend

- Foi criada uma rota na API para receber os parâmetros de busca e retornar os links correspondentes.

##### No frontend

- Foi adicionada uma barra de pesquisa na seção dos links.

## 🏫 Disciplina

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web, ministrada pelo professor Rafael Liberato.
