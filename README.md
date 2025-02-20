# Infantem 

Welcome to the Infantem project! The documentation for the app will appear here. Thanks for checking it out!

## Index
- [Introduction](#infantem)
- [Setup guide](#setup-guide)
  - [Linux setup](#linux-setup)
  - [Windows setup](#windows-setup)
  - [Mac setup](#mac-setup)
- [Checking Everything Works](#checking-everything-works)
- [Contributing](#contributing)

## Setup guide

### Linux setup

Follow these steps to set up the project on a Linux machine:

#### 1. Clone the repository
```sh
git clone https://github.com/ISPP-G-8/infantem.git  # With HTTP or SSH 
cd infantem 
```

#### 2. Backend Setup 

- Install Java (Recommended: Java 21):
  - **Ubuntu/Debian**:
    ```sh
    sudo apt update && sudo apt install openjdk-21-jdk
    java --version
    ```
  - **Fedora**:
    ```sh
    sudo dnf install java-21-openjdk
    java --version
    ```
  - **Arch Linux**:
    ```sh
    sudo pacman -S jdk-openjdk
    java --version
    ```

- Install MySQL:
  ```sh
  sudo apt install mysql-server  # For Ubuntu/Debian
  sudo dnf install mysql-server  # For Fedora
  sudo pacman -S mysql  # For Arch Linux
  ```
- Secure MySQL installation:
  ```sh
  sudo mysql_secure_installation
  ```
  Follow the prompts to set a root password and disable insecure settings.

- Create the database and user:
  ```sh
  sudo mysql -u root -p
  CREATE DATABASE infantem_db;
  CREATE USER 'spring_user'@'localhost' IDENTIFIED BY 'StrongPassword123!';
  GRANT ALL PRIVILEGES ON infantem_db.* TO 'spring_user'@'localhost';
  FLUSH PRIVILEGES;
  EXIT;

- Build and run the backend:
  ```sh
  ./mvnw spring-boot:run
  ```

#### 3. Frontend Setup 

- Install Node.js and npm:
  - **Ubuntu/Debian**:
    ```sh
    sudo apt install nodejs npm
    ```
  - **Fedora**:
    ```sh
    sudo dnf install nodejs npm
    ```
  - **Arch Linux**:
    ```sh
    sudo pacman -S nodejs npm
    ```
  - Verify installation:
    ```sh
    node -v && npm -v
    ```
- Install dependencies:
  ```sh
  cd frontend
  npm install
  ```
- Install Expo CLI:
  ```sh
  npm install -g expo-cli
  ```
- Start the development server:
    You can run the app using:
  ```sh
  npm expo start --web   
  npm expo start --ios  
  npm expo start --android  
  ```
  Running `npm expo start` without options will show the Expo developer tools where you can select the platform manually.

### Windows setup

_(This section needs to be completed. Please contribute if you have experience setting up the project on Windows.)_

### Mac setup

_(This section needs to be completed. Please contribute if you have experience setting up the project on macOS.)_


## Checking everything works

1. Start the backend and ensure it runs without errors (Default port is 8080).
2. Start the frontend and verify that it compiles successfully (Default port is 8081).
3. Open the app in a web browser, emulator, or physical device and check that it loads correctly.
4. Ensure that the frontend can communicate with the backend:
   - The `App` component in the frontend makes a request to `http://localhost:8080/api/v1/example`.
   - If the backend is running correctly, the app should display:
     ```
     Backend is up and running! :D
     ```
   - If the connection fails, it will display:
     ```
     Failed to connect to the backend.
     ```
   - If the request is still in progress, it will display:
     ```
     Checking backend status...
     ```
> If any issues arise during the setup, check the backend logs, ensure MySQL is running, confirm the API endpoint is accessible, and verify that the frontend is installed correctly. If you still can't troubleshoot the error, contact me, and let's try to fix it together.
> — Javier Santos

## Contributing
If you have experience setting up the project on Windows or macOS, please help complete those sections! Feel free to update the README. 

