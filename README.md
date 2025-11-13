# 📝 ToDo List - WebApp (Angular)

A modern **Angular** web application for managing your daily tasks, built with scalability, clean architecture, and responsiveness.  
It was created to integrate with **[ToDo - API (ASP.NET)](https://github.com/schutz-luca/todo-api-dotnet)** as backend.

---

## 🚀 Features

- **Task Management** — Create, view, edit, and delete tasks  
- **Responsive Design** — Works perfectly across devices  
- **Dark/Light Mode** — Toggle for personalized themes  
- **Loading Indicator** — Real-time feedback on API operations  
- **Task Status** — Visual indicators for “To Do”, “Doing”, and “Done”

---

## 📁 Folder Structure

```
.
├── src/
│   ├── app/
│   │   ├── core/              # Core services, models, and interceptors
│   │   ├── features/
│   │   │   └── tasks/         # Task module (list, form, detail)
│   │   ├── shared/            # Shared UI components and modules
│   │   └── utils/             # Utilities like status mappers
│   ├── environments/          # Environment configuration files
│   ├── index.html             # Main HTML entry point
│   ├── main.ts                # Angular bootstrap file
│   └── styles.scss            # Global SCSS styles
├── angular.json               # Angular CLI configuration
├── package.json               # Project dependencies
└── tsconfig.json              # TypeScript configuration
```

---

## 🧰 Prerequisites

Before starting, make sure you have:

- **Node.js** ≥ 18.x  
- **npm** (comes with Node.js)  
- **Angular CLI** installed globally  
  ```bash
  npm install -g @angular/cli
  ```

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd todo-webapp-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open the browser**
   Then navigate to **[http://localhost:4200](http://localhost:4200)**

---

## 🔗 Integration with the .NET API

This Angular app is designed to work with the companion backend repository:  
👉 **[ToDo API (ASP.NET)](https://github.com/schutz-luca/todo-api-dotnet)**

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE.txt) file for details.

---

**Luca Schutzenhofer**  
Software Engineer, Sr. Full‑Stack Developer, Frontend Expert
