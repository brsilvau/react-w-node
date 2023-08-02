# ReactJS 18 with Node.js Express 4.18.2 Example

This is a basic example project demonstrating the integration of ReactJS 18 with Node.js using Express 4.18.2. The project showcases how to set up and run a simple React frontend with a Node.js backend.

## Prerequisites

Before running the project, ensure you have the following installed:

    Node.js (v14.0.0 or higher)
    npm (v7.0.0 or higher)
    Python (v3.6 or higher) - required for creating and activating the virtual environment.

## Setup

Follow the steps below to set up and run the project:
1. Clone the repository
```
    git clone <repository_url>
    cd react-nodejs-example
```
2. Create and Activate the Virtual Environment

Navigate to the root directory of the project and set up a virtual environment for Node.js using the following command (you only need to do this once):

```
python -m venv env-node
```
Activate the virtual environment using the following command:
```
source env-node/bin/activate
```
3. Install Node.js Dependencies

While the virtual environment is active, install the Node.js dependencies for the backend by running the following command:
```
npm install
```
4. Start the Backend

To start the Node.js Express backend, use the following command in the root directory:
```
npm start
```
The backend server will run on port 3001.

5. Start the Frontend

Open another terminal and navigate to the "client" directory:
```
cd client
```
Install the frontend dependencies:
```
npm install
```
Now, start the React development server for the frontend:
```
npm start
```
The React app will run on port 3000 by default.

## Project Structure

The project has the following structure:

```
react-nodejs-example/
  ├── client/             # React frontend code
  │   ├── public/
  │   └── src/
  │       ├── components/
  │       ├── App.js
  │       └── index.js
  ├── node_modules/
  ├── server.js            # Node.js Express backend code
  ├── package.json         # Backend dependencies and scripts
  ├── package-lock.json    # Auto-generated file for npm dependencies
  └── README.md            # Project documentation (you are reading this!)
```

The backend is implemented in the server.js file, while the React frontend is in the client/src directory. The backend serves as a simple API that can be consumed by the frontend.

Feel free to modify and expand the project as needed to explore more complex React and Node.js interactions.

Happy coding! 🚀

BS.
