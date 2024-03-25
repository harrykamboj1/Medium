# Blog Application like Medium

## Description

This project is a clone of the Medium blogging platform, which provides users with a platform to publish articles, share insights, and engage with a community of readers. Medium is known for its clean and intuitive user interface, making it easy for both writers and readers to navigate and interact with content.

## Technologies Used

### Frontend

- React.js
- Zod as the validation library, type inference for the frontend types
- TypeScript

### Backend

- Cloudflare Workers
- Prisma (with connection pooling)
- JWT (JSON Web Tokens) for authentication

### Database

- PostgreSQL

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `frontend` directory and install frontend dependencies:
- cd frontend
- npm install
3. Navigate to the `backend` directory and install backend dependencies:
- cd ../backend
- npm install
4. Set up environment variables:

- Create a `.env` file in the `backend` directory and define the required environment variables including database connection details, JWT secret, etc.

5. Start the backend server:
- npm run dev
6. Start the frontend server:
- cd ../frontend
- npm run dev


7. Access the application in your web browser.

## Contributing

Contributions are welcome to enhance the features or fix any bugs in the Blog Application like Medium project. Follow these steps to contribute:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and test them thoroughly.
5. Commit your changes with descriptive commit messages.
6. Push your changes to your forked repository on GitHub.
7. Submit a pull request (PR) to the `main` branch of the original repository.
8. Provide a clear description of your changes in the PR.

Your contribution will be reviewed by the project maintainers, and any necessary feedback will be provided. Thank you for contributing to the Blog Application like Medium project!


