# CapyData

Bem-vindo ao **CapyData**, um projeto que integra um backend e um frontend para gerenciamento de dados, utilizando um banco de dados configurado via Docker Compose.

![Texto alternativo](/images/image.png)

## Estrutura de Pastas

- **backend/**: Contém o código-fonte do servidor (API).
- **frontend/**: Contém o código-fonte da aplicação cliente (interface do usuário).
- **docker-compose.yml**: Arquivo de configuração para subir o banco de dados usando Docker.

## Tecnologias Utilizadas

### Backend

- **Node.js**
- **Express**: Framework web para Node.js.
- **Knex**: Query builder para SQL.
- **MySQL2**: Cliente MySQL para Node.js.
- **bcryptjs**: Biblioteca para hash de senhas.
- **Multer**: Middleware para manipulação de arquivos.
- **CORS**: Middleware para habilitar CORS.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

### Frontend

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento.
- **React Router DOM**: Roteamento no React.
- **Styled-components**: Estilização de componentes React.
- **React Hook Form**: Gerenciamento de formulários.
- **SWR**: Revalidação de dados em cache.
- **Axios**: Cliente HTTP.
- **React Icons**: Biblioteca de ícones.

### Banco de Dados

- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Plataforma para containerização de aplicações.

## Pré-requisitos

- **Node.js** instalado (versão 20 ou superior).
- **Docker** e **Docker Compose** instalados.

## Como Subir o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/LiviaLausch/CapyData.git
cd CapyData
```

### 2. Subir o Banco de Dados com Docker

Na raiz do projeto, execute:

```bash
docker compose up -d
```

Isso irá subir o container do MySQL definido no `docker-compose.yml`.

### 3. Configurar e Iniciar o Backend

#### 3.1. Instalar Dependências

```bash
cd backend
npm install
```

#### 3.2. Iniciar o Servidor

Para ambiente de desenvolvimento:

```bash
npm run dev
```

O backend estará rodando em `http://localhost:3000`.

### 4. Configurar e Iniciar o Frontend

#### 4.1. Instalar Dependências

```bash
cd frontend
npm install
```

#### 4.2. Iniciar a Aplicação

```bash
npm run dev
```

O frontend estará acessível em `http://localhost:5173`.