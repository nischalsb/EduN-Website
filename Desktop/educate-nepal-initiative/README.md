# Educate Nepal Initiative

A web application dedicated to supporting and advancing educational opportunities in Nepal.

## Tech Stack

**Frontend:**
- **Framework:** React with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** TanStack Query
- **Forms:** React Hook Form with Zod for validation

**Backend & Infrastructure:**
- **Local Database:** DynamoDB Local
- **Local Services:** LocalStack (for emulating AWS services like SES)
- **Containerization:** Docker

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd educate-nepal-initiative
    ```

2.  **Install frontend dependencies:**
    ```sh
    npm install
    ```

3.  **Start the local development services:**
    This will spin up local instances of DynamoDB and LocalStack.
    ```sh
    docker-compose up -d
    ```

4.  **Run the frontend development server:**
    ```sh
    npm run dev
    ```

    The application should now be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build locally.
