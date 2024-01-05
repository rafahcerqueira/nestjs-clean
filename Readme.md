**<h1> NestJS Clean </h1>**

**<h2> Descrição do Projeto </h2>**

Este projeto é uma aplicação desenvolvida em Nest.js utilizando TypeScript. O código está organizado e padronizado, seguindo boas práticas de desenvolvimento.

**<h2> Tecnologias Utilizadas </h2>**

- **Nest.js:** Framework para construção de aplicativos server-side com TypeScript, fornecendo uma arquitetura modular e escalável.

- **Docker/Docker-compose:** Utilizados para facilitar a criação, implantação e execução da aplicação em contêineres.

- **JWT (JSON Web Token):** Mecanismo seguro para autenticação e transmissão de informações entre partes.

- **Zod:** Biblioteca de validação de esquemas para garantir a integridade dos dados.

- **Vitest:** Ferramenta de teste para garantir a qualidade e a confiabilidade do código.

- **PNPM:** Gerenciador de pacotes que oferece um sistema de armazenamento eficiente e consistente.

- **Bcryptjs:** Utilizado para o hash seguro de senhas.

- **SWC:** Transpiler eficiente para converter código TypeScript para JavaScript.

**<h2> Funcionalidades Principais: </h2>**

- **Autenticação Segura:** Implementação de autenticação JWT para garantir a segurança das informações.

- **Validação de Dados:** Utilização da biblioteca Zod para validar dados e assegurar a integridade dos mesmos.

- **Testes Automatizados:** Integração de testes automatizados com Vitest para garantir a confiabilidade do código.

- **Proteção de Rotas com Guards:** Implementação de guards para proteger rotas sensíveis da aplicação.

**<h2> Como Iniciar o Projeto </h2>**

**1. Pré-requisitos:**

- Instale o Node.js: Node.js
- Instale o Docker: Docker

**2. Clonar o Repositório:**

```console
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

**3. Instalar Dependências:**

```console
pnpm install
```

**4. Configurar o Ambiente:**

- **Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente conforme necessário.**

**5. Executar a Aplicação:**

```console
docker-compose up --build
```

**6. Acesso à Aplicação:**
A aplicação estará disponível em http://localhost:3333
