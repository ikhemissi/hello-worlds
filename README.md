# hello-worlds

A simple hello world app written in various programming languages

These apps will have at least 1 dependency to illustrate how we can install dependencies within a Docker container.

## Configuration

You can customize the behavior of the app using the following environment variables:

| Environment variable | Default value | Description                                                  |
|----------------------|---------------|--------------------------------------------------------------|
| PORT                 | 80            | Port on which the app listens to requests                    |
| GREETEE              | world         | Customize the second part of `Hello world`                   |
| VERSION              | N/A           | App version, returned in the X-Version header                |
| ENVIRONMENT          | N/A           | Deployment environment, returned in the X-Environment header |
