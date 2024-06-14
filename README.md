# Web Based Minesweeper Backend

## Project Description
This is the backend service for the Minesweeper game, built using Express.js and Node.js. It handles game logic, user management, and interacts with the database to store and retrieve game states.

## Features
- **User Authentication**: Sign up, login, and session management.
- **Game Logic**: Handling Minesweeper game operations like creating a new game, revealing cells, and checking game status.
- **Database Interaction**: Storing user data, game states, and scores.
- **RESTful API**: Exposing endpoints for frontend interaction.

## Installation Instructions
To set up the backend service, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/asifurrahmanbubt/Web-Based-Minesweeper-Backend
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd minesweeper-express-backend
    ```
    
3. **Unzip the node_modules**

4. **Install Dependencies**:
    ```bash
    npm install
    ```

5. **Setup Environment Variables**:
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

6. **Run Migrations and Seed Data**:
    ```bash
    npx knex migrate:latest
    npx knex seed:run
    ```

7. **Start the Server**:
    ```bash
    npm start
    ```

## Usage
After setting up and running the server, the backend will be available on `http://localhost:3000`. You can interact with the API using tools like Postman or via the frontend.

### API Endpoints
- **User Authentication**:
    - `POST /api/auth/signup`: Create a new user.
    - `POST /api/auth/login`: Login a user.

- **Game Operations**:
    - `POST /api/game`: Start a new game.
    - `PATCH /api/game/:id`: Make a move in the game.
    - `GET /api/game/:id`: Get the current game state.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
