# Uzhavan Nanban - Your Smart Farming Companion

Uzhavan Nanban (Farmer's Friend) is a web-based AgriTech application designed to help farmers with crop management, pest detection, and market access. This project is built using HTML, CSS (with Tailwind CSS), and JavaScript, and it leverages the Gemini API to provide intelligent, personalized advice.

## Features

  * **Crop Advisory**: Get personalized recommendations for crops based on soil type, season, and location.
  * **Pest & Disease Detection**: Upload a photo of an affected plant leaf to receive an AI-powered report on potential pests or diseases.
  * **Marketplace**: A simple interface to buy and sell crops, with AI-generated descriptions for listings.
  * **Multilingual Support**: The app's interface can be switched between English, Tamil, Hindi, and Punjabi.
  * **Daily Tips**: The login screen features a "Tip of the Day" powered by the Gemini API, offering helpful and encouraging advice to farmers.

## Technology Stack

  * **Frontend**: HTML, CSS, JavaScript
  * **Styling**: [**Tailwind CSS**](https://tailwindcss.com/) for rapid and responsive UI development.
  * **API**: [**Google Gemini API**](https://ai.google.dev/models/gemini) for generating intelligent content like crop plans, pest reports, and market descriptions.

## Files

  * `index.html`: The main application file containing the user interface for all four main features (Advisory, Detect, Market, Profile). It includes the core JavaScript logic for navigation and API calls.
  * `login.html`: The entry point for the application. It contains the login form for phone number authentication and a section for the "Tip of the Day."
  * `javascript.js`: An additional JavaScript file that was likely used for development but is now deprecated. The core logic has been moved and integrated directly into `login.html` and `index.html`.

## How to Run

1.  **Clone the repository:**

    ```
    git clone https://github.com/your-username/uzhavan-nanban.git
    ```

2.  **Open the files:**
    You can run this project by simply opening the `login.html` file in your web browser. No local server is required.

3.  **API Key:**
    The application uses a placeholder for the Gemini API key. For the AI features to work, you will need to:

      * Get a Gemini API key from Google AI Studio.
      * Replace the empty string in the `callGeminiAPI` function in both `login.html` and `index.html` with your actual key.

    <!-- end list -->

    ```javascript
    const apiKey = "YOUR_API_KEY_HERE";
    ```

4.  **Usage:**

      * Start by opening `login.html` in your browser.
      * Enter a 10-digit phone number and click "Send OTP & Login" to be redirected to the main application.
      * Use the bottom navigation bar to switch between different features like Crop Advisory, Pest Detection, and Marketplace.
      * You can change the language in the "My Profile" section.

## Author

This project was created as a demonstration of building a simple yet functional AgriTech application using modern web technologies and generative AI.
