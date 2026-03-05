# 🌍 Globe Scope Explorer

A modern **country explorer web app** built with React.
Users can search for countries and view detailed information such as population, region, capital, and flags.

This project demonstrates **dynamic routing, API data fetching, and responsive UI design**.

---

## 🚀 Features

* 🔍 Search countries by name
* 🌎 View detailed information about each country
* 🧭 Dynamic routing for country pages
* ⚡ Fast performance using Vite
* 🎨 Modern and responsive UI
* 📡 Real-time data from REST Countries API

---

## 🛠 Tech Stack

This project is built using modern frontend technologies:

* React
* React Router
* Vite
* JavaScript
* CSS / Tailwind (if used)

---

## 📦 Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/your-username/globe-scope-explorer.git
cd globe-scope-explorer
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 🌐 API Used

This project uses the **REST Countries API** to fetch country data.

Example endpoint:

```
     https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true&fields=name,capital,population,region,subregion,flags
    
```

---

## 📁 Project Structure

```
src
 ├── components
 │   ├── Navbar.tsx
 │
 ├── routes
 │   ├── home.tsx
 │   ├── country.tsx
 │   ├── countries.tsx
 │   ├── about.tsx
 │
 ├── root.tsx
 ├── routes.tsx
```

---

## 🔗 Routing Example

Dynamic route for country details:

```
/country/:countryName
```

Example:

```
/country/india
```

---

## 🎯 What I Learned

While building this project I practiced:

* React component architecture
* Dynamic routing with React Router
* Fetching and handling API data
* Managing loading states
* Creating responsive layouts

---

## 📸 Screenshots

(Add screenshots of your project here)

---

## 📌 Future Improvements

* Dark / Light mode
* Region filtering
* Favorite countries
* Pagination or infinite scroll
* Improved animations

---

## 🤝 Contributing

Contributions are welcome.
If you want to improve this project, feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created by **Govind Shah**

If you like this project, consider giving it a ⭐ on GitHub!
