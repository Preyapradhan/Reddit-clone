
# Reddit Clone 

A static page implementation of a Reddit-inspired platform, designed to closely match provided designs and dynamically fetch popular posts using the Reddit API. This project combines static design elements with dynamic API integrations for the "Popular" section.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Additional Considerations](#additional-considerations)
- [Front-End of the Reddit-clone](#front-end-of-the-reddit-clone)
- [Available Scripts](#available-scripts)

---

## Project Overview

This project replicates a Reddit-like page, focusing on creating a pixel-perfect static design with dynamic integration for the "Popular" section using the Reddit Open API. 

While most sections are static, the **Popular** section fetches real-time data for posts from Reddit. You can sort posts dynamically based on options like **hot**, **new**, or **controversial**.

### Design Goals

- Build a static page that matches the provided design specifications as closely as possible.
- Ensure a dynamic and functional **Popular** section powered by the Reddit API.
- Optionally implement a **Search** feature and pagination for enhanced functionality.

---

## Features

- **Dynamic Popular Section**:
  - Fetches posts using the Reddit API: `https://www.reddit.com/r/{subreddit}/{sort}/.json?limit={limit}`.
  - Sort options: **hot**, **new**, **controversial**, etc.
  - Customizable subreddit and post limit.

- **Optional Search Functionality**:
  - Implements search using: `https://www.reddit.com/search.json?q={query}`.

- **Static Sections**:
  - Favorites, Reddit Feeds, and other non-dynamic sections are hardcoded.

- **Pixel-Perfect Design**:
  - Matches the provided design specifications as closely as possible.

---

## Technologies Used

- **Frontend Framework**: React 
- **Styling**: CSS or any preferred framework like Tailwind CSS
- **API Integration**: Reddit Open API

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Preyapradhan/Reddit-clone.git
   cd Reddit-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Access the application at `http://localhost:3000`.

---

## API Integration

- **Fetch Posts**:
  - Use the API: `https://www.reddit.com/r/{subreddit}/{sort}/.json?limit={limit}`.
  - Replace `{subreddit}` with the desired subreddit name (e.g., `technology`).
  - Replace `{sort}` with sorting options like **hot**, **new**, or **controversial**.
  - Replace `{limit}` with the number of posts to fetch.

- **Search Posts**:
  - Use the API: `https://www.reddit.com/search.json?q={query}`.
  - Replace `{query}` with the desired search term.

- **Pagination**:
  - Use `after` and `before` parameters to navigate through results.

---

## Additional Considerations

- Be mindful of [Reddit's API rate limits](https://www.reddit.com/dev/api/).
- All links and buttons in the design are static unless specifically mentioned.

---

## Front-End of the Reddit-clone

![Screenshot 2025-01-08 220641](https://github.com/user-attachments/assets/88715e20-ea79-493e-b201-c54a2e63c75b)

![Screenshot 2025-01-08 220655](https://github.com/user-attachments/assets/5f9d31f1-d02d-42e4-8047-d638304fa4e8)

![Screenshot 2025-01-08 220612](https://github.com/user-attachments/assets/830b719a-372b-4036-93d6-67ae98ba83a3)

![Screenshot 2025-01-08 220626](https://github.com/user-attachments/assets/14636b4d-1822-4e18-b481-1852767cc95d)

---

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

---


