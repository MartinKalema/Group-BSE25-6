# Dental Clinic System.

This project is focused on building and managing the backend for a Dental Clinic System, supporting a fully developed frontend. The backend integrates a range of modern technologies to ensure smooth deployment, monitoring, and scalability across different environments.

## Key Technologies

- **Version Control**: Managed through GitHub, ensuring code integrity and version tracking.
- **CI/CD Automation**: GitHub Actions are used to automate workflows, including running tests, builds, and deployments.
- **Containerization**: Docker is utilized to package the application, providing consistency across environments.
- **Build Process**: ESBuild is employed to handle the bundling and building of the React frontend project.
- **Orchestration & Scaling**: Kubernetes is responsible for container management, providing auto-scaling and high availability.
- **Test Automation**: Unit and integration tests are continuously run, with Selenium used for automated end-to-end testing.
- **Code Quality**: CodeCov ensures test coverage standards, and CodeRabbit AI offers automated code reviews for quality assurance.
- **Monitoring**: Application health is tracked using tools like Grafana, Prometheus, or Datadog.
- **Task Management**: Project tasks are allocated and tracked using ClickUp.

## Workflow

The project follows a structured development cycle:

- **Branching Strategy**: We maintain two branches—Staging and Production. All new changes are pushed to the Staging branch for testing.
- **Testing & Monitoring**: The staging environment undergoes extensive testing, including unit, integration, load, and stress tests. Monitoring is also conducted here before pushing changes to production.

By combining CI/CD pipelines, test coverage, and robust container management, the backend ensures that the system scales efficiently, remains secure, and performs optimally under various conditions.

## Installation

### Prerequisites

- Git
- Docker
- Node.js and npm
- Kubernetes (minikube or any other Kubernetes distribution)
- ESBuild
- GitHub account

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/project-repo.git
   cd project-repo

   ```

2. **Install Dependencies Navigate to the frontend and backend directories to install the required packages:**

   ```bash
   # Install frontend dependencies
        cd frontend
        npm install
    # Install backend dependencies
        cd ../backend
        npm install

    # Install backend dependencies
        cd ../backend
        npm install

   ```

3. **Setup Docker Build and run the Docker containers for the frontend and backend applications:**

   ```bash
   # Build and start the Docker containers
    docker-compose up --build

   ```

4. **Deploy to Kubernetes (Staging) Deploy the application to your Kubernetes environment:**

   ```bash
   # Apply the Kubernetes deployment configuration
    kubectl apply -f k8s/deployment.yaml

   ```

5. **Run Tests Run unit and integration tests to ensure the application works as expected**

   ```bash
   # Run tests for the application
   npm test

   ```

6. **Run Tests Run unit and integration tests to ensure the application works as expected**
   ```bash
   npm start
   ```

## Project Architecture

The project is a full-stack web application with CI/CD implementation that automates the development lifecycle from code integration to deployment. Below is the architectural breakdown:

- **Frontend**: Developed using React, with ESBuild for efficient bundling and optimization.
- **Backend**: Built with Node.js and Express, managing the server-side logic and API endpoints.
- **CI/CD Pipeline**: Configured using GitHub Actions to automate builds, tests, and deployments. It ensures that code quality checks and automated tests are run on every push.
- **Containerization**: Docker is used for containerizing the application, ensuring consistency across development, staging, and production environments.
- **Orchestration**: Kubernetes manages the deployment, scaling, and operation of application containers.
- **Testing**: Selenium is used for end-to-end testing, while CodeCov checks code coverage.
- **Monitoring**: Grafana, Prometheus, or Datadog are integrated to monitor application performance and system health.

## Directory Structure

Below is the directory structure of the project, showing the key folders and files:

```plaintext
project-repo/
├── frontend/                # React frontend application
│   ├── src/                 # Source code
│   └── package.json         # Frontend dependencies
├── backend/                 # Node.js backend application
│   ├── src/                 # Source code
│   └── package.json         # Backend dependencies
├── .github/                 # GitHub Actions workflows
│   └── workflows/           # CI/CD configuration files
├── docker-compose.yml       # Docker configuration
├── k8s/                     # Kubernetes deployment files
└── README.md                # Project documentation
```

### Contribution Guide

We welcome contributions! To contribute, follow these steps:

1. **Fork the repository** and clone it to your local machine:

   ```bash
   git clone https://github.com/MartinKalema/Group_BSE25-6.git
   ```

2. **Create a new branch** for your changes:

   ```bash
   git checkout -b feature-branch-name
   ```

3. **Make your changes** and ensure everything works.

4. **Commit your changes** with a meaningful message:

   ```bash
   git commit -m "feat: Brief description of your changes"
   ```

5. **Push your changes** to your fork:

   ```bash
   git push origin feature-branch-name
   ```

6. **Open a pull request** on GitHub and describe your changes.
