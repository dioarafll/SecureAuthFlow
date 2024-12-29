

# User Authentication Flow with 2FA, JWT, and Phone Verification

This project implements a robust **user authentication flow** with essential features such as **sign-up**, **sign-in**, **password recovery**, **phone verification**, **two-factor authentication (2FA)**, and **account verification**. Designed for scalability and security, it utilizes **JWT** for authentication and incorporates a seamless multi-step process to ensure user safety.

---

## Demo  

Frontend aplikasi di-deploy di **Netlify**: [Akses Demo di Sini](https://secureauthflow.netlify.app/).  



## 🚀 Available Routes

The following routes are available in the application for various user authentication tasks:

- **/register** - User registration page.
- **/** or **/login** - User login page.
- **/forgot-password** - Page for users to reset their password.
- **/phone-verification** - Page to verify the phone number.
- **/verify-account** - Page to verify the user's account.
- **/mfa** - Multi-factor authentication (2FA) page for added security.

## ⚙️ Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn** (preferred package managers)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository-name.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd your-repository-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

### Running the App

Once the server is running, open your browser and go to the following routes for each user authentication function:

- **http://localhost:3000/register** - To register a new account.
- **http://localhost:3000/login** - To log in to an existing account.
- **http://localhost:3000/forgot-password** - To recover your password.
- **http://localhost:3000/phone-verification** - To verify your phone number.
- **http://localhost:3000/verify-account** - To verify your account.
- **http://localhost:3000/mfa** - To set up multi-factor authentication (2FA).

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces.
- **React Router** - For managing routing and navigation.
- **TypeScript** - A superset of JavaScript that adds static typing for better development experience.
- **Tailwind CSS** - Utility-first CSS framework for responsive and modern styling.
- **JWT (JSON Web Tokens)** - Secure token-based authentication.
- **Phone Verification (SMS)** - Integration with SMS providers for phone number verification.
- **2FA (Two-Factor Authentication)** - Adds an extra layer of security for user accounts.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify the repository name and other project-specific details to fit your actual setup. Enjoy building your secure authentication system!

