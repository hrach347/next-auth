# 🔐 Next.js Google Auth Template

A minimal, production-ready authentication template built with Next.js (App Router) and NextAuth using Google OAuth.

This project demonstrates a clean authentication flow with protected routes, client and server session handling, and a simple, extendable structure ready for real-world applications.

### ✨ Features

- Google OAuth login
- JWT session strategy
- Secure dashboard route
- Client-side and server-side auth handling
- Clean project structure (App Router)

### </> Stack
- Next.js
- NextAuth
- Google OAuth 2.0 / OpenId Connect
- React


### 📚 Resources

- NextAuth.js — https://next-auth.js.org/
- Auth.js — https://authjs.dev/
- Google OAuth 2.0 — https://developers.google.com/identity/protocols/oauth2
- OpenID Connect — https://openid.net/developers/how-connect-works/
- Google Cloud Console — https://console.cloud.google.com/

---

## 🔧 Google OAuth Setup

### 1) Create Google OAuth Credentials (Google Cloud Console)

- Go to **Google Cloud Console** → **APIs & Services** → **Credentials**
- Click **Create Credentials** → **OAuth client ID**
- Choose **Web application**
- Add an **Authorized redirect URI**: `http://localhost:3000/api/auth/callback/google`
- For production, add your live domain too:`https://yourdomain.com/api/auth/callback/google`
- Copy the generated **Client ID** and **Client Secret**

---

### 2) Environment Variables

Create `.env.local` in the project root:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Required to sign/encrypt NextAuth cookies/JWT
NEXTAUTH_SECRET=your_random_secret

# Base URL of your app (local + production)
NEXTAUTH_URL=http://localhost:3000
```

###  3) Run locally
```
npm install
npm run dev
```

---

## 🚀 Ready to Build

You now have a clean, secure authentication foundation powered by Google OAuth and NextAuth.

This template is intentionally minimal, built to be extended, not cluttered.

From here you can:

- Add a database (Prisma) for persistent users
- Implement role-based access control
- Protect API routes and server actions
- Add additional OAuth providers
- Deploy to production with proper domain restrictions


## Authentication is no longer a blocker - it’s your base layer.