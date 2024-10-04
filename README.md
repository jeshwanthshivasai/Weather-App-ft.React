# 🌞⛅☔ Weather App

![Weather App Screenshot](![image](https://github.com/user-attachments/assets/9963678f-b79a-487a-ab8f-9d074615ee5b)
)

A simple and clean weather application that provides real-time weather updates for any city in the world. This project is built with **React** and uses the **OpenWeather API** to fetch current weather information such as temperature, weather conditions, and more.

## 🚀 Live Demo
Check out the live version of the app [here](https://your-demo-link-here.com).

## 📋 Features

- 🌍 Search for any city in the world to get real-time weather data.
- 🌡️ Display current temperature in Celsius.
- ⛅ Display an icon representing the current weather condition.
- 🔄 Loading indicator while fetching the data.
- 🚫 Error handling for invalid city names and empty search input.
- Responsive design that adapts to different screen sizes.

## 🎨 User Interface

The UI is clean and minimalistic, with a background that gives the app a modern feel. The weather icon is displayed alongside the city name, temperature, and weather description.

## 🛠️ Technologies Used

- **React.js** - Frontend framework for building user interfaces.
- **CSS** - Styling for the app layout and design.
- **OpenWeather API** - API for fetching real-time weather data.
- **HTML5** - For the basic structure of the app.

## 📝 Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

## ⚙️ Installation & Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your **OpenWeather API key**:

    ```env
    REACT_APP_API_KEY=your_openweather_api_key
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open the app in your browser:

    ```
    http://localhost:3000
    ```

## 📂 Project Structure

```bash
weather-app/
├── public/
├── src/
│   ├── App.jsx      # Main component
│   ├── index.css    # Styling
│   ├── index.js     # React DOM rendering
├── .env             # API key configuration
├── package.json     # Project dependencies
└── README.md        # Project documentation
