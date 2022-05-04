import projectImg1 from "../assets/project_1.jpg";
import projectImg2 from "../assets/project_2.jpg";
import projectImg3 from "../assets/project_3.jpg";
import projectImg4 from "../assets/project_4.jpg";

const data = [
  {
    id: 1,
    img: projectImg1,
    brief: "Recipe Search App is a react web application for user to search and view the food recipe. User can manage their favorite recipes in their favorite page. This web app provides basic search, pagination, and customization features.",
    tech: ["Build the frontend with React.", "Use SASS for the styling.", "Use React Hook Form combined with Joi library to build the contact form and validation system.", "Use React Router DOM to implement dynamic routing.", "Design wireframe and prototype with Figma."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'react', 'bootstrap', 'nodejs']
  },
  {
    id: 2,
    img: projectImg2,
    brief: "Pixel App is a react web appication for picture search. User can search pictures by tags. It's built with dynamic features, such as pagination, zoom in picture, and white/dark mode.",
    tech: ["Build the frontend with React.", "Use CSS and Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing."],
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap', 'nodejs']
  },
  {
    id: 3,
    img: projectImg3,
    brief: "Weather App is a react web appication for Melbourne weather forecast with friendly reminders based on the weather. Reminders include apply sunscream, wear jacket or Bring umbrella. For example, if the UV is higher than certain number, the app will remind the user to wear suncream.",
    tech: ["Build the frontend with React.", "Use Bootstrap for the styling.", "Use Axios library to fatch data.", "Use React Router DOM to implement dynamic routing."],
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap', 'nodejs']
  },
  {
    id: 4,
    img: projectImg4,
    brief: "My portfolio website was built with react and hosted on Netlify. It's responsive through the use of bootstrap and media query. User can check the summary of each of my projects on the project page, and can also opt to dive into the code or live site with the external link. Skills are linked with the corresponding projects. Page scrolling was implemented on the home page.",
    tech: ["Build the frontend with React.", "Use SASS for the styling.", "Use React Hook Form combine with Joi library to build the contact form and validation system", "Use carousel library to display animate pictures for the project", "Use React Router DOM to implement dynamic routing", "Design moodboard with Milanote.", "Design wireframe and prototype with Figma."],
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'milanote', 'react', 'bootstrap', 'photoshop', 'nodejs']
  }
];

export function getAllProjects() {
  return data;
}

export function projectData(id) {
  const project = data.find(item => item.id === id);
  return project;
}