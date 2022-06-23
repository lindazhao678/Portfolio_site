import projectImg1 from "../assets/project_1.avif";
import projectImg2 from "../assets/project_2.avif";
import projectImg3 from "../assets/project_3.avif";
import projectImg4 from "../assets/project_4.avif";
import projectImg5 from "../assets/project_5.avif";
import projectImg6 from "../assets/project_6.avif";

const data = [
  {
    id: 1,
    name: "Recipe Search App",
    img: projectImg1,
    siteURL: "https://recipe-search-site.vercel.app",
    codeURL: "https://github.com/lindazhao678/Recipe_search_app",
    brief: "Recipe Search App is a react web application for user to search and view the food recipe. User can manage their favorite recipes in their favorite page. This web app provides basic search, pagination, and customization features.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use SASS and Bootstrap for the styling and responsivness.", "Use React Hook Form combined with Joi library to build the contact form and validation system.", "Use React Router DOM to implement dynamic routing.", "Design wireframe and prototype with Figma.", "Hoseted on Vercel."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'react', 'bootstrap']
  },
  {
    id: 2,
    name: "Picture Search App",
    img: projectImg2,
    siteURL: "https://picture-search-app.herokuapp.com/",
    codeURL: "https://github.com/lindazhao678/pixel_bay",
    brief: "Picture Search App is a react web appication for picture search. User can search pictures by tags. It's built with dynamic features, such as pagination, zoom in picture, and light/dark mode.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use CSS and Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing.", "Hoseted on Heroku."],
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap']
  },
  {
    id: 3,
    name: "Weather App",
    img: projectImg3,
    siteURL: "https://melbourne-weather-app.herokuapp.com",
    codeURL: "https://github.com/lindazhao678/weather-app",
    brief: "Weather App is a react web appication which hosted on Heroku. This app provides Melbourne weather forecasts with some friendly reminders based on the weather. Reminders include apply sunscream, wear jacket or Bring umbrella. For example, if the UV is higher than certain number, the app will remind the user to apply suncream.",
    tech: ["Build the frontend with React.", "Build the backend with Express.", "Use React Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing.", "Hoseted on Heroku."],
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap']
  },
  {
    id: 4,
    name: "My Portfolio",
    img: projectImg4,
    siteURL: "https://lijunzhao.com/",
    codeURL: "https://github.com/lindazhao678/Portfolio_site",
    brief: "My portfolio website was built with react and hosted on Netlify. It's responsive through the use of bootstrap and media query. User can check the summary of each of my projects on the project page, and can also opt to dive into the code or live site with the external link. Skills are linked with the corresponding projects. Page scrolling was implemented on the home page.",
    tech: ["Build the frontend with React.", "Use SASS for the styling.", "Use carousel library to display animate pictures for the project.", "Use React Router DOM to implement dynamic routing.", "Design moodboard with Milanote.", "Design wireframe and prototype with Figma.", "Hoseted on Netlify."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'milanote', 'react', 'bootstrap', 'photoshop']
  },
  {
    id: 5,
    name: "FAANG Tracker App",
    img: projectImg5,
    siteURL: "https://faang-tracker-app.vercel.app/",
    codeURL: "https://github.com/lindazhao678/FAANG-tracker-app",
    brief: "FAANG Tracker is a news media application which was built with next and hosted on Vercel. It provides the live stock updates, the latest news, investment advice and resources of Facebook, Amazon, Apple, Netflix, and Google. The app design is responsive and mobile friendly. The goal of this web application is to help anyone who are interested or who have already invested at the five FAANG stocks to be timely advised and be able to make the right investment decisions.",
    tech: ["Build the front-end with React.", "Build the server-side with next.", "Use SASS for the styling.", "Use pre-rendering methodology for fetching the data from the external API.", "Integrate Google Analytics into the deployed website.", "Design wireframe and prototype with Figma.","Hoseted on Vercel."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'nextjs', 'react']
  },
  {
    id: 6,
    name: "Recipe Search APIs",
    img: projectImg6,
    siteURL: "https://recipe-search-site.vercel.app",
    codeURL: "https://github.com/lindazhao678/RecipesAPI",
    brief: "Recipe Search APIs are the RESTful APIs for the Recipe search App. They have two collections: users collection which is to manage the user, and recipes collection which is to manage the recipes. The users have two types: regular user and admin user. The admin user can create, update, delete and read any user's data. The regular user can create, update, delete and read its own user data. Recipe APIs include creating, deleting, updating, and reading recipe. And all of the Recipe APIs can only be consumed by its own user.",
    tech: ["Build the APIs with Express.", "Store the data in mongoDB database.", "Use mongoose schema to model the data.", "Use Joi labrary for validation.", "Use Json Web Token for authentication.", "Use bcrypt library for hashing and salting passwords.", "Use winston library to create the error logs."],
    skills: ['nodejs', 'express', 'mongodb', 'javascript']
  }
];

export function getAllProjects() {
  return data;
}

export function projectData(id) {
  const project = data.find(item => item.id === id);
  return project;
}