# SheltR-Disaster-Assistance-System
**__SheltR__** is a **Disaster Assistance System** that helps users find nearby safety facilities, view real-time weather and disaster updates, and access multilingual safety guidance during emergencies.

It bridges the gap between **authorities, responders, and the public**, ensuring that critical alerts and resources reach those who need them most.

By quickly delivering, the system empowers individuals seeking shelter or evacuating, helping to reduce harm and save lives.

By reducing communication delays and providing real-time updates, the system plays a vital role in saving lives, reducing damage, and maintaining order during life-threatening situations.

SheltR’s mission is to empower individuals and communities with immediate, accessible, and life-saving information during emergencies through innovative technology and real-time data integration.


![GitHub repo size](https://img.shields.io/github/repo-size/ManwaniDiksha/SheltR-Disaster-Assistance-System)
![GitHub last commit](https://img.shields.io/github/last-commit/ManwaniDiksha/SheltR-Disaster-Assistance-System)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built with Node.js](https://img.shields.io/badge/Built%20with-Node.js-blue)
![Frontend: HTML CSS JS](https://img.shields.io/badge/Frontend-HTML%2C%20CSS%2C%20JS-orange)
![Database: MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

> **Empowering communities with real-time disaster awareness and life-saving information.**

## 📑 Table of Contents
- [Features](#-features)
- [System Modules](#-system-modules)
- [Tech Stack](#-tech-stack)
- [Project Sturcture](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [User Interface](#-user-interface)
- [Future Enhancements](#-future-enhancements)
- [Creators](#creators)
- [License](#-license)

## 🚀 Features

- **User Location Detection:** Uses browser geolocation APIs to detect user coordinates automatically. Provides manual input fallback (postal code or city) for users who deny permission. Stores user location for querying nearby safety facilities and alerts.

- **Range/Distance Filtering:** Allows users to specify a search radius (e.g., 2 km, 5km, 7 km) around their location. Uses geospatial database queries to filter facilities within the chosen distance. 

- **Facility Information:** Shows contact number(s), address (with map links), and current availability/capacity status for each listed facility. Updates availability data in real-time or via periodic admin inputs. 

- **Real-Time Weather Dashboard:** Displays current weather and warnings based on user input (pincode or lat-long). Integrates with OpenWeatherMap or similar APIs for detailed weather metrics. Shows temperature, precipitation, wind speed, and severe weather alerts. 

- **Global Recent Disaster Updates:** Fetches and displays recent global or regional disasters using ReliefWeb API. Provides event type, location, and time details.

- **Disaster Dos & Don’ts Dashboard:** Shows guidance content with safety instructions tailored to specific disaster types. Presents clear, easy-to-understand, and multi-lingual “dos & don’ts” to help users prepare or respond.

- **Multi-language Safety Guidance:** Comprehensive and clear dos & don’ts covered for 13 disaster types with trilingual support (English, Hindi, Gujarati).

- **Secure Authentication:** Email-based account creation with validation with secure token-based (JWT-based) authentication and bcrypt hashing for password security.

## 🧩 System Modules

- **Authentication Module:** Handles secure user registration, login, and session management using JWT tokens and bcrypt password hashing. Provides auto-login functionality and user profile management with simplified forms for emergency access.

- **Location Detection & Mapping Module:** Integrates browser geolocation and Nominatim geocoding for precise positioning. Uses Leaflet.js with OpenStreetMap tiles to display interactive maps with user locations and facility markers, including adjustable search radii and navigation features.

- **Facility Finder Module:** Locates and displays nearby emergency facilities (hospitals, shelters, fire stations) using real-time data from OpenStreetMap APIs. Shows contact information, availability status, and provides direct address to critical resources during emergencies. 

- **Dos & Don’ts Dashboard Module:** Provides safety guidance for 13 disaster types in English, Hindi, and Gujarati. Features clear “Dos/Don’ts” format with emoji-based visual categorization and tabbed navigation for quick access to emergency protocols.

- **Weather Dashboard Module:** Delivers real-time weather data and 5-day forecasts via OpenWeatherMap API. Displays current conditions, severe weather alerts, and forecasting information with intuitive icons and location-based weather intelligence.

- **Recent Disaster Updates Module:** Aggregates global disaster alerts from ReliefWeb API, showing real-time information on earthquakes, floods, storms, and other emergencies. Features categorized disaster listings with visual indicators and impact assessment data. 

- **Static Information Modules (About Us Module and Contact Module):** About Us provides mission and team information, while Contact offers support channels. Both maintain consistent branding and accessibility standards for organizational transparency and user support.

## 💻 Tech Stack

| **Layer**                  | **Technology**                     | **Purpose** |
|------------------------|--------------------------------|---------|
| **Frontend**               | HTML5, CSS3, JavaScript (ES6+) | Build interactive & dynamic UI with API integration |
| **Backend**                | Node.js + Express.js            | API server, data management |
| **Database**               | MongoDB + Mongoose             | Stores user data |
| **Mapping & Location**     | OpenStreetMap + Leaflet.js      | Interactive maps and emergency facility visualization |
| **Geocoding**              | Nominatim API                  | Convert addresses to coordinates & vice versa |
| **Weather Data**           | OpenWeatherMap API             | Real-time weather & emergency forecasts |
| **Disaster Intelligence**  | ReliefWeb API                  | Global disaster & emergency updates |
| **Authentication**         | JWT + bcrypt                   | Secure user sessions & data protection |
| **Development Tools**      | Git + GitHub                   | Version control & team collaboration |
| **API Testing**            | Postman                        | API development & testing |
| **External Services**      | Browser Geolocation API         | Native device location detection |

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js badge" /></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white" alt="Express badge" /></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb&logoColor=white" alt="MongoDB badge" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-Framework-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind badge" /></a>
  <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-Security-000000?logo=jsonwebtokens&logoColor=white" alt="JWT badge" /></a>
  <a href="https://git-scm.com/"><img src="https://img.shields.io/badge/Git-VersionControl-F05032?logo=git&logoColor=white" alt="Git badge" /></a>
  <a href="https://www.postman.com/"><img src="https://img.shields.io/badge/Postman-API%20Testing-FF6C37?logo=postman&logoColor=white" alt="Postman badge" /></a>
</p>