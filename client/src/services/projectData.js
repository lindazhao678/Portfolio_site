import projectImg1 from "../assets/project_1.avif";
import projectImg2 from "../assets/project_2.avif";
import projectImg3 from "../assets/project_3.avif";
import projectImg4 from "../assets/project_4.avif";
import projectImg5 from "../assets/project_5.avif";
import projectImg6 from "../assets/project_6.avif";
import projectImg7 from "../assets/project_7.avif";
import projectImg8 from "../assets/project_8.avif";

const data = [
  {
    id: 1,
    name: "Recipe Search App",
    img: projectImg1,
    siteURL: "https://recipe-search-site.vercel.app",
    codeURL: "https://github.com/lindazhao678/Recipe_search_app",
    brief: "Recipe Search App is a react web application for user to search and view the food recipe. User can manage their favorite recipes in their favorite page. This web app provides basic search, pagination, and customization features.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use SASS and Bootstrap for the styling and responsivness.", "Use React Hook Form combined with Joi library to build the contact form and validation system.", "Use React Router DOM to implement dynamic routing.", "Design wireframe and prototype with Figma.", "Hoseted on Vercel."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'reactjs', 'bootstrap']
  },
  {
    id: 2,
    name: "Picture Search App",
    img: projectImg2,
    siteURL: "https://picture-search-app.herokuapp.com/",
    codeURL: "https://github.com/lindazhao678/pixel_bay",
    brief: "Picture Search App is a react web application for picture search. User can search pictures by tags. It's built with dynamic features, such as pagination, zoom in picture, and light/dark mode.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use CSS and Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing.", "Hoseted on Heroku."],
    skills: ['html', 'css', 'javascript', 'reactjs', 'bootstrap']
  },
  {
    id: 3,
    name: "Weather App",
    img: projectImg3,
    siteURL: "https://melbourne-weather-app.herokuapp.com",
    codeURL: "https://github.com/lindazhao678/weather-app",
    brief: "Weather App is a react web appication which hosted on Heroku. This app provides Melbourne weather forecasts with some friendly reminders based on the weather. Reminders include apply sunscream, wear jacket or Bring umbrella. For example, if the UV is higher than certain number, the app will remind the user to apply suncream.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use React Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing.", "Hoseted on Heroku."],
    skills: ['html', 'css', 'javascript', 'reactjs', 'bootstrap']
  },
  {
    id: 4,
    name: "My Portfolio",
    img: projectImg4,
    siteURL: "https://lijunzhao.com/",
    codeURL: "https://github.com/lindazhao678/Portfolio_site",
    brief: "My portfolio website was built with react and hosted on Netlify. It's responsive through the use of bootstrap and media query. User can check the summary of each of my projects on the project page, and can also opt to dive into the code or live site with the external link. Skills are linked with the corresponding projects. Page scrolling was implemented on the home page.",
    tech: ["Build the frontend with React.", "Use SASS for the styling.", "Use carousel library to display animate pictures for the project.", "Use React Router DOM to implement dynamic routing.", "Design moodboard with Milanote.", "Design wireframe and prototype with Figma.", "Hoseted on Netlify."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'milanote', 'reactjs', 'bootstrap', 'photoshop']
  },
  {
    id: 5,
    name: "FAANG Tracker App",
    img: projectImg5,
    siteURL: "https://faang-tracker-app.vercel.app/",
    codeURL: "https://github.com/lindazhao678/FAANG-tracker-app",
    brief: "FAANG Tracker is a news media application which was built with next and hosted on Vercel. It provides the live stock updates, the latest news, investment advice and resources of Facebook, Amazon, Apple, Netflix, and Google. The app design is responsive and mobile friendly. The goal of this web application is to help anyone who are interested or who have already invested at the five FAANG stocks to be timely advised and be able to make the right investment decisions.",
    tech: ["Build the front-end with React.", "Build the server-side with next.", "Use SASS for the styling.", "Use pre-rendering methodology for fetching the data from the external API.", "Integrate Google Analytics into the deployed website.", "Design wireframe and prototype with Figma.","Hoseted on Vercel."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'nextjs', 'reactjs']
  },
  {
    id: 6,
    name: "Recipe Search APIs",
    img: projectImg6,
    siteURL: "https://recipes-api.herokuapp.com/api/recipes",
    codeURL: "https://github.com/lindazhao678/RecipesAPI",
    brief: "Recipe Search APIs are the RESTful APIs for the Recipe search App. They have two collections: users collection which is to manage the user, and recipes collection which is to manage the recipes. The users have two types: regular user and admin user. The admin user can create, update, delete and read any user's data. The regular user can create, update, delete and read its own user data. Recipe APIs include creating, deleting, updating, and reading recipe. And all of the Recipe APIs can only be consumed by its own user.",
    tech: ["Build the APIs with Express.", "Store the data in mongoDB database.", "Use mongoose schema to model the data.", "Use Joi labrary for validation.", "Use Json Web Token for authentication.", "Use bcrypt library for hashing and salting passwords.", "Use winston library to create the error logs."],
    skills: ['nodejs', 'express', 'restfulapi', 'mongodb', 'javascript', 'postman', 'docker']
  },
  {
    id: 7,
    name: "Movies World App",
    img: projectImg7,
    siteURL: "https://movies-world-client.vercel.app/",
    codeURL: "https://github.com/lindazhao678/movies-world-app",
    brief: "An online movies world DVDs shop built using React as the frontend, node and express as the backend, and Google Firestore as the database. Users can visit the movie gallery, which will be  retrieved from the external API. User can look up all our DVDs in store, the details of our DVDs, and search our DVDs in store. Users can also sign up and login. Admin user with login can add DVDs, edit DVDs, and delete DVDs.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Build the APIs with Restful API.", "Store the data in Firebase database.", "Store the image files in firebase storage bucket.", "Use Joi labrary for validation.", "Use Json Web Token for authentication.", "Use bcrypt library for hashing and salting passwords.", "Use Typescript to constrain the data types."],
    skills: ['reactjs', 'typescript', 'restfulapi', 'firebase', 'nodejs', 'express', 'git', 'gcp', 'javascript']
  },
  {
    id: 8,
    name: "CDs Shop App",
    img: projectImg8,
    siteURL: "https://cds-shop-client.vercel.app/",
    codeURL: "https://github.com/lindazhao678/cds-shop",
    brief: "A CDs management system for the online shop admin to add, update, delete, view, and search CDs which are stored in MySQL. Using Svelte as the frontend, node and express as the backend, GraphQL API, and MySQL as the database. GraphQL query and mutation operations are used to perform CRUD operations on the data. Data are validated in both frontend and backend before storing to database.",
    tech: ["Build the frontend with Svelte.", "Build the backend with Express.", "Build the APIs with GraphQL.", "Store the data in MySQL database.", "Use Joi labrary for validation.", "Use sveltestrap and bootstrap for responsiveness.", "Use DBeaver to manage the database."],
    skills: ['svelte', 'graphql', 'mysql', 'nodejs', 'express', 'javascript']
  },
];

export function getAllProjects() {
  return data;
}

export function projectData(id) {
  const project = data.find(item => item.id === id);
  return project;
}