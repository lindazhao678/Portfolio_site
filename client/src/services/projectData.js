import projectImg1 from "../assets/project_1.png";
import projectImg2 from "../assets/project_2.png";
import projectImg3 from "../assets/project_3.png";
import projectImg4 from "../assets/project_4.png";

const data = [
  {
    id: 1,
    img: projectImg1,
    brief: "Adipisicing id mollit fugiat ea nostrud nulla pariatur pariatur deserunt magna. Commodo commodo sint pariatur aliquip esse amet sunt nisi do. Aute exercitation sint culpa commodo. Velit Lorem quis dolor commodo adipisicing fugiat anim. Do mollit ex magna pariatur excepteur aute deserunt excepteur irure cupidatat in nisi. Laborum officia esse ex Lorem nostrud pariatur incididunt. Reprehenderit enim voluptate aliquip irure ad et qui magna anim nisi ex consectetur.",
    tech: "Do dolor esse ullamco Lorem labore culpa occaecat id ea id et id ex. Occaecat sint sit sint velit mollit sint. Amet aute amet excepteur adipisicing cupidatat labore commodo officia. Consectetur irure aliqua aliquip qui adipisicing.",
    skills:['html', 'css', 'sass', 'javascript', 'figma', 'react', 'bootstrap', 'node']
  },
  {
    id: 2,
    img: projectImg2,
    brief: "Incididunt proident laborum sint aliquip veniam amet velit reprehenderit ipsum ad nostrud incididunt culpa sint. Tempor veniam excepteur reprehenderit deserunt commodo velit amet. Et consequat id laboris ullamco.",
    tech: "Non proident ipsum dolore exercitation dolor magna deserunt nulla culpa ex et. Officia anim qui excepteur est quis et nostrud ad dolor anim minim commodo laborum. Laboris consectetur quis commodo occaecat sint. Proident anim elit duis aute excepteur fugiat. Reprehenderit commodo id velit laboris duis non sunt. Amet laboris nisi commodo Lorem tempor id amet velit aliquip laborum commodo officia duis aliqua. Irure cupidatat et elit excepteur aliquip dolore sunt.",
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap', 'node']
  },
  {
    id: 3,
    img: projectImg3,
    brief: "Voluptate sit excepteur excepteur adipisicing aliquip eu amet reprehenderit id. Nisi nostrud adipisicing dolore laboris labore. Minim ipsum nisi fugiat reprehenderit elit sint laborum pariatur est laboris mollit nulla ex. Adipisicing sint nulla dolor magna mollit. Voluptate laborum culpa eu velit dolore qui fugiat ad in aliqua. Excepteur fugiat officia et aliquip consectetur velit.",
    tech: "Labore ad velit velit consequat veniam ullamco quis culpa in dolore pariatur dolor id Lorem. Ullamco amet ut sint est nulla pariatur. Sit cupidatat reprehenderit sint mollit deserunt est nulla exercitation eu aliqua magna adipisicing in. Ut sit qui laboris incididunt adipisicing dolore voluptate nisi mollit id minim quis veniam nulla.",
    skills: ['html', 'css', 'javascript', 'react', 'bootstrap', 'node']
  },
  {
    id: 4,
    img: projectImg4,
    brief: "Minim Lorem id sunt commodo laborum excepteur irure voluptate eiusmod id elit tempor ea. Nostrud ullamco id culpa nisi excepteur et nisi laborum dolor minim velit deserunt laboris pariatur. Id mollit ut adipisicing ipsum minim proident ad. Non enim velit deserunt consequat eu ea id labore ut proident enim non aliquip qui. Deserunt id et velit aliquip.",
    tech: "Minim velit eiusmod duis dolore ut officia sit enim voluptate in ea. Nostrud voluptate irure veniam magna exercitation mollit et elit. Nisi esse tempor eu laborum anim. Aute mollit exercitation irure do do reprehenderit consectetur. Aliqua tempor minim sunt laborum reprehenderit sunt Lorem magna proident laborum nisi velit sunt. Aliqua reprehenderit cillum incididunt do dolor ad cillum.",
    skills: ['html', 'css', 'sass', 'javascript', 'figma', 'react', 'bootstrap', 'photoshop', 'node']
  }
];

export function getAllProjects(){
  return data;
}

export function projectData(id){
  const project = data.find(item=>item.id===id);
  return project;
}