# Next.js Full-Stack Authentication System

Welcome to the **Next.js Full-Stack Authentication System**! This project is a complete, modern authentication solution built with Next.js, TypeScript, and MongoDB. It includes user registration, login, JWT-based session management, email verification, and password reset functionality — all with a sleek UI and dark mode support.

**[Link](https://nextjs-fullstack-auth-six.vercel.app/)**

<img width="1920" height="866" alt="Screenshot 2025-10-04 020311" src="https://github.com/user-attachments/assets/c19a2c12-453f-490e-872c-765272c4e06c" />


---

## ✨ Features

- **Secure User Authentication**: Signup, login, and logout with hashed passwords (`bcryptjs`) and JWT sessions.
- **JWT-based Sessions**: Uses HTTP-only cookies for secure, stateless authentication.
- **Protected Routes**: Middleware ensures only authenticated users can access restricted pages.
- **Email Verification**: Users verify their accounts via secure, tokenized email links.
- **Forgot/Reset Password**: A complete and secure flow for password recovery.
- **Modern UI/UX**:
  - Built with **Tailwind CSS** for a clean and responsive design.
  - **Framer Motion** for smooth animations and page transitions.
  - **React Hot Toast** for user-friendly notifications.
  - **Dark Mode**

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=nodemailer&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## 🚀 Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [MongoDB](https://www.mongodb.com/) (a local instance or a free Atlas cloud database)
- An SMTP service for sending emails (e.g., Gmail with an "App Password")

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tejaspatil75/nextjs-fullstack-auth.git](https://github.com/tejaspatil75/nextjs-fullstack-auth.git)
    cd nextjs-fullstack-auth
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the following configuration:
    ```env
    # MongoDB Connection URI
    MONGO_URI=your_mongodb_connection_string

    # JWT Secret Key (a long, random string)
    TOKEN_SECRET=yoursupersecretkeythatislongandrandom

    # App domain (for email verification and password reset links)
    DOMAIN=http://localhost:3000

    # Nodemailer config (Gmail SMTP example)
    NODEMAILER_HOST=smtp.gmail.com
    NODEMAILER_PORT=465
    NODEMAILER_USER=your-email@gmail.com
    NODEMAILER_PASS=your_gmail_app_password
    ```
    > **Note**: For `NODEMAILER_PASS` with Gmail, you need to generate an "App Password". You can find instructions [here](https://support.google.com/accounts/answer/185833).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/          # Backend API routes for authentication
│   ├── (pages)/      # Frontend pages (Login, Signup, Profile, etc.)
│   ├── layout.tsx    # Root layout with theme and toaster providers
│   └── globals.css   # Global styles with Tailwind CSS
├── components/       # Reusable React components
├── dbConfig/         # MongoDB connection configuration
├── helpers/          # Helper functions (mailing, JWT token handling)
├── middleware.ts     # Edge middleware for protecting routes
└── models/           # Mongoose schemas for database models
```

---

## ⛓️ API Endpoints

| Method | Endpoint                    | Description                                         |
| :----- | :-------------------------- | :-------------------------------------------------- |
| `POST` | `/api/users/signup`         | Registers a new user.                               |
| `POST` | `/api/users/login`          | Authenticates a user and returns a JWT cookie.      |
| `GET`  | `/api/users/logout`         | Clears the JWT cookie to log the user out.          |
| `GET`  | `/api/users/me`             | Retrieves the current logged-in user's data.        |
| `POST` | `/api/users/verifyemail`    | Verifies a user's email using a token.              |
| `POST` | `/api/users/resetpassword`  | Updates the user's password using a valid token.    |
| `POST` | `/api/users/profile`        | Internal helper for sending verification/reset emails. |

---

## ☁️ Deployment

The easiest way to deploy this Next.js application is with [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Add the environment variables from your `.env.local` file to the Vercel project settings.
4.  Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
