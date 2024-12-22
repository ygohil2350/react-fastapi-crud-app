# Full Stack Application with FastAPI, React Vite, and Docker

This project is a full-stack web application built using FastAPI for the backend and React Vite for the frontend. Both the backend and frontend are containerized using Docker and managed via Docker Compose. The application also uses a PostgreSQL database.

## Features

- Backend: FastAPI with a PostgreSQL database.
- Frontend: React with Vite and TypeScript.
- Containerization: Dockerized backend, frontend, and database.
- Task Automation: A task file for common commands.

## Project Structure

project/
├── fastapi-app/
│   ├── app/
│   │   ├── crud.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── database.py
│   ├── Dockerfile
│   └── pyproject.toml
├── react-app/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── pnpm-lock.yaml
├── docker-compose.yml
├── Taskfile.yml
└── README.md

## Prerequisites

- [Docker](https://www.docker.com/): Make sure Docker and Docker Compose are installed.
- [Poetry](https://python-poetry.org/): For managing backend dependencies.
- [pnpm](https://pnpm.io/): For managing frontend dependencies.

## Setup and Usage

1. Clone the Repository

```bash
git clone 
cd react-fastapi-crud-app
```

2. Clone the Repository
Use Docker Compose to build and run all services.

```bash
docker-compose up --build
```

- Frontend: Accessible at http://localhost:3000
- Backend: Accessible at http://localhost:8000
- API Documentation: Available at http://localhost:8000/docs

3. Task Automation

The `taskfile.yml` provides shortcuts for common tasks. Install the [Taskfile CLI](https://taskfile.dev/) if not already installed.

### Available Tasks

- Start the app:
    ```bash 
    task up
    ```

- Stop the app:
    ```bash
    task down
    ```

## Backend Details
The FastAPI backend is located in the `fastapi-app/` directory.

### Key Features

- Database: PostgreSQL database with SQLAlchemy.
- Endpoints: Includes a /users endpoint as an example.
- Dependencies: Managed via Poetry.

### Backend Commands

- Install dependencies:

```bash
cd fastapi-app
poetry install
```
- Run backend locally:

```bash
poetry run uvicorn app.main:app --reload
```

## Frontend Details

The React Vite frontend is located in the `react-app/` directory.

### Key Features

- Framework: React with Vite and TypeScript.
- Hot Reloading: Enabled for development.
- Dependencies: Managed via pnpm.

### Frontend Commands

- Install dependencies:
```bash
cd react-app
pnpm install
```
- Run frontend locally:
```bash
pnpm run dev
```

## Future Improvements
- Add authentication with OAuth2 or JWT.
- Implement CI/CD pipelines for automated deployment.
- Add testing suites for both backend and frontend.

## License
This project is licensed under the MIT License.
