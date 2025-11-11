# Portfolio Website — Built with Express.js, EJS, and Bootstrap 
This project is a fully responsive personal portfolio powered by Node.js and Express.js, using EJS templating to generate clean, modular UI components.  
It features a custom message-handling system, a dynamic navigation highlight system, multiple device-specific stylesheets, and organized MVC-style routing.

Built from scratch, this site demonstrates practical web development skills across frontend and backend while keeping the architecture clean, fast, and maintainable.


---


## Live Demo 
Coming Soon (Deployment planned on Render)

---

## Live Links & Social Profiles  
all links on the website are using <a href> for redirects:
- Instagram: https://www.instagram.com/alexndrwilson/
- LinkedIn: https://www.linkedin.com/in/alexander-wilson-lovedataforever
- GitHub: https://github.com/AlexTWilson95
- Email: (display only): Contact@AlexTwilson.com

---

## About This Project 
This portfolio site is built with Express.js and designed to be clean, responsive, and easy to navigate.  
It includes a projects gallery, an interactive contact page with backend message storage, and a private admin view for reviewing submissions.  
The structure is built entirely from scratch using a modular, industry-standard Express.js layout.


---


## Tech Stack 
### Frontend 
- EJS templating
- Bootstrap 5
- Font Awesome
- Custom CSS (mobile.css, tablet.css, laptop.css, style.css)
### Backend  
- Node.js
- Express.js
- File-based storage (messages.json)
- MVC-style folder structure


---


## Project Folder Structure 
    Assignment_2/
    ├─ bin/
    │  └─ www
    ├─ public/
    │  ├─ css/
    │  │  ├─ style.css
    │  │  ├─ mobile.css
    │  │  ├─ tablet.css
    │  │  └─ laptop.css
    │  ├─ js/
    │  │  └─ main.js
    │  └─ images/
    │     └─ (site images)
    ├─ routes/
    │  └─ index.js
    ├─ views/
    │  ├─ partials/
    │  │  ├─ header.ejs
    │  │  └─ footer.ejs
    │  ├─ layout.ejs
    │  ├─ index.ejs        (Home)
    │  ├─ about.ejs        (About Me)
    │  ├─ projects.ejs     (Projects)
    │  ├─ contact.ejs      (Contact)
    │  ├─ contact_success.ejs
    │  └─ messages.ejs     (Admin messages viewer)
    ├─ messages.json        (saved contact form messages)
    ├─ app.js
    ├─ package.json
    └─ README.md
There are other file in the folder that come from the ExpressJS generator 


---


## Features 

### Responsive Layout 
The site adapts across:
- Mobile
- Tablet
- Laptop/Desktop
Each with its own CSS file.

### Dynamic Navigation Highlight 
The page you're on stays highlighted using the variable:
    activePage
The home page does not receive the highlighted diplay 

### Custom Contact System 
Visitors can submit:
- Name:
- Email:
- Message:
Messages are stored in messages.json like:
```json
    {
    "name": "Alex",
    "email": "example@mail.com",
    "message": "Hello!",
    "date": "2025-01-05T20:14:55.123Z"
    } 
```
There is also a private (unprotected) admin viewer:
    /admin/messages


---


## Installation & Setup 

### Run locally  
(Have gitbash installed)
make sure you have run the install in the bash terminal before.
```bash   
    npm install
```
in the bash terminal (cd) into the project directory than run (node ./bin/www) then go to the link shown
```bash   
    cd /path/to/your/project
    node ./bin/www
```    
Link for running the website locally: http://localhost:3000
(ctrl + c) in the bash terminal to stop runtime

---

## Message Storage Notes 
This project uses a local JSON file (messages.json) for storing contact form submissions.
- (Function) Works perfectly in local development
- (Function) Works on most hosted Node environments
- (Warning) On free-tier Render, message data resets when the server restarts
- (Warning) Not encrypted — intended for simple portfolio/demo use

---

## Author 
Alex T. Wilson
Student — interested in IT / Data, and everything technology .
Building simple, fast, functional projects for learning and personal use.

## License 
This project is for personal and academic use by Alex T. Wilson.
