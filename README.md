# Cheat-sheet maker

**[Checkout the website](https://cheatsheet-maker.herokuapp.com/)**.

A fullstack application to create and share tabulated cheat sheets using markdown syntax. The backend is developed with node-JS, express-JS and mongo-db while the frontend is developed with React.

Visit the client repository [here](https://github.com/abhidadhaniya23/cheat-sheets-maker-client).

All credits for the design, frontend application part and backend api of the website go to [Mohamad Tarhini](https://github.com/mdtarhini)

### Why this project?

- This project was created by [Mohamad Tarhini](https://mdtarhini.com/)
- Since this was a very popular project and many people are using it for their own purposes but unfortunately, we can not able to access the web application. So I decided to host this project on my own.
- Heroku is no longer free for hosting NodeJs applications. So I decided to host this popular cheatsheet maker on (Vercel)[https://vercel.com/].
- Also, I mentioned (client repository)[https://github.com/abhidadhaniya23/cheat-sheets-maker-client] link above. If you want to contribute to the client side of the project, you can do that there.

### Environment variables

- After creating a mongoDB cluster, assign the connection string to the variable `dbURI` in `.env` (create the file if not already present) of the main directory.

- You will also need to assign a value for the variable `jwtSecret` in `.env` which is needed by [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) used for generating web tokens.
