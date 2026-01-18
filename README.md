# LuxeStay 🏨✨

**LuxeStay** is a premium vacation rental platform built to demonstrate a modern, full-stack web application. It features a high-performance Next.js frontend with stunning visuals and a robust Express/Node.js backend.

![LuxeStay Banner](/placeholder-image.png)

## 🚀 Live Demo
*   **Frontend:** [Add Vercel Link Here]
*   **Backend:** [Add Render/Railway Link Here]

## ✨ Key Features
*   **Dynamic Masonry Gallery**: A visually striking display of properties using custom layouts.
*   **Advanced Search & Filtering**: Real-time filtering by location, price, and amenities.
*   **Seamless Booking Flow**: User-friendly booking experience with date selection and simulated Stripe payments.
*   **Authentication**: Secure user login and registration using JWT and HTTP-only cookies.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
*   **Modern UI/UX**: Built with Tailwind CSS, Shadcn UI, and Framer Motion for smooth animations.

## 🛠️ Tech Stack

### Frontend (Client)
*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, Shadcn UI
*   **State Management**: Zustand, TanStack Query
*   **Animations**: Framer Motion
*   **Forms**: React Hook Form + Zod

### Backend (Server)
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (Mongoose)
*   **Authentication**: JWT, bcrypt
*   **Validation**: Zod
*   **Logging**: Winston

## ⚙️ Getting Started

### Prerequisites
*   Node.js (v18+)
*   MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/GeorgieW1/LUXESTAY.git
    cd LUXESTAY
    ```

2.  **Install Dependencies**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Setup**
    *   Create a `.env` file in `/server` and `/client` based on the `.env.example` (or `LIVE_ENV_PARAMS.txt` guidelines).

4.  **Run Locally**
    ```bash
    # Start Backend (Port 5000)
    cd server
    npm run dev

    # Start Frontend (Port 3000)
    cd client
    npm run dev
    ```

## 📈 Future Improvements
*   Complete Stripe Payment Webhooks.
*   User Dashboard for managing bookings.
*   Admin Panel for property management.
*   Real-time chat with hosts.

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
