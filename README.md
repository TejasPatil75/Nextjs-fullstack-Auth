````markdown
# Next.js Full-Stack Authentication System

Welcome to the **Next.js Full-Stack Authentication System**!  
This project is a complete, modern authentication solution built with **Next.js**, **TypeScript**, and **MongoDB**. It includes user registration, login, JWT-based session management, email verification, and password reset functionality — all with a sleek UI and dark mode support.

---

## ✨ Features

- **Secure User Authentication**: Signup, login, and logout with hashed passwords (`bcryptjs`) and JWT sessions.  
- **JWT-based Sessions**: Uses HTTP-only cookies for secure, stateless authentication.  
- **Protected Routes**: Middleware ensures only authenticated users can access restricted pages.  
- **Email Verification**: Users verify their accounts via email links.  
- **Forgot/Reset Password**: Secure flow for password reset using tokenized email links.  
- **Modern UI/UX**:  
  - Built with **Tailwind CSS** for responsive design.  
  - **Framer Motion** animations and smooth transitions.  
  - **React Hot Toast** for user-friendly notifications.  
  - **Dark/Light Mode** toggle.  
- **Full-Stack Solution**: Next.js App Router for frontend & backend.  
- **Database Integration**: **Mongoose** with **MongoDB** for persistence.  

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)  
- **Authentication**: [JWT](https://jwt.io/), [bcryptjs](https://www.npmjs.com/package/bcryptjs)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Animations**: [Framer Motion](https://www.framer.com/motion/)  
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)  
- **Emailing**: [Nodemailer](https://nodemailer.com/)  
- **API**: Next.js API Routes  

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20+  
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)  
- SMTP service (e.g., Gmail with App Password)  

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tejaspatil75/nextjs-fullstack-auth.git
   cd nextjs-fullstack-auth
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `.env.local` in the root directory:

   ```env
   # MongoDB Connection
   MONGO_URI=your_mongodb_connection_string

   # JWT Secret
   TOKEN_SECRET=yoursupersecretkeythatislongandrandom

   # App domain (for email links)
   DOMAIN=http://localhost:3000

   # Nodemailer config (Gmail example)
   NODEMAILER_HOST=smtp.gmail.com
   NODEMAILER_PORT=465
   NODEMAILER_USER=your-email@gmail.com
   NODEMAILER_PASS=your_gmail_app_password
   ```

   > **Note**: For Gmail, generate an [App Password](https://support.google.com/accounts/answer/185833).

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to preview.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/          # Authentication API routes
│   ├── (pages)/      # Frontend pages (Login, Signup, Profile, etc.)
│   ├── layout.tsx    # Global layout with theme + toaster
│   └── globals.css   # Tailwind global styles
├── components/       # Reusable UI components
├── dbConfig/         # MongoDB config
├── helpers/          # Utilities (JWT, mail handling, etc.)
├── middleware.ts     # Protect routes using JWT
└── models/           # Mongoose schemas
```

---

## ⛓️ API Endpoints

| Method | Endpoint                   | Description                                  |
| ------ | -------------------------- | -------------------------------------------- |
| `POST` | `/api/users/signup`        | Register new user                            |
| `POST` | `/api/users/login`         | Authenticate user & set JWT cookie           |
| `GET`  | `/api/users/logout`        | Logout by clearing cookie                    |
| `GET`  | `/api/users/me`            | Get logged-in user's details                 |
| `POST` | `/api/users/verifyemail`   | Verify account via email token               |
| `POST` | `/api/users/resetpassword` | Reset password via token                     |
| `POST` | `/api/users/profile`       | Helper for sending verification/reset emails |

---

## ☁️ Deployment

The easiest deployment option is [Vercel](https://vercel.com/).

* Push code to GitHub/GitLab/Bitbucket.
* Import repo into Vercel.
* Add environment variables in **Vercel Project Settings**.

For more info: [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📜 License

This project is licensed under the MIT License.
Feel free to fork and customize! 🚀

```
```
