import { title } from "process";

const skills = [
  {
    title: "C++",
    imgUrl: "assets/cpp.svg",
    bgColor: "bg-blue-200",
    width: "50",
    height: "50",
  },
  {
    title: "Flutter",
    imgUrl: "assets/flutter.png",
    bgColor: "bg-blue-200",
    width: "50",
    height: "50",
  },
  {
    title: "Tailwind",
    imgUrl: "assets/tailwind.svg",
    bgColor: "bg-blue-200",
    width: "50",
    height: "50",
  },
  {
    title: "React",
    imgUrl: "assets/react.png",
    bgColor: "bg-green-200",
    width: "50",
    height: "50",
  },
  {
    title: "Next",
    imgUrl: "assets/next.svg",
    bgColor: "bg-gray-200",
    width: "50",
    height: "50",
  },
  {
    title: "Express",
    imgUrl: "assets/express.svg",
    bgColor: "bg-gray-200",
    width: "50",
    height: "50",
  },
  {
    title: "Node",
    imgUrl: "assets/nodejs.svg",
    bgColor: "",
    width: "50",
    height: "50",
  },
  {
    title: "HTML",
    imgUrl: "assets/html.svg",
    bgColor: "bg-orange-200",
    width: "50",
    height: "50",
  },
  {
    title: "CSS",
    imgUrl: "assets/css.png",
    bgColor: "",
    width: "50",
    height: "50",
  },
  {
    title: "javaScript",
    imgUrl: "assets/javaScript.png",
    bgColor: "",
    width: "50",
    height: "50",
  },
  {
    title: "Firebase",
    imgUrl: "assets/firebase.svg",
    bgColor: "",
    width: "50",
    height: "50",
  },
  {
    title: "SQL",
    imgUrl: "assets/sql.png",
    bgColor: "bg-blue-200",
    width: "50",
    height: "50",
  },
  {
    title: "MongoDB",
    imgUrl: "assets/mongodb.png",
    bgColor: "bg-green-200",
    width: "50",
    height: "50",
  },
  {
    title: "Docker",
    imgUrl: "assets/docker.svg",
    bgColor: "bg-blue-200",
    width: "50",
    height: "50",
  },
];

const educationList = [
  {
    institution: "Poornima College of Engineering, Jaipur",
    degree: "Bachelors of Technology in Computer Science (Hons)",
    duration: "Aug 2019 - July 2023",
    grade: "CGPA - 8.22",
  },
  {
    institution: "Tilak Public School, Jaipur",
    degree: "12TH Boards",
    duration: "May 2018 - May 2019",
    grade: "72.4% in CBSE",
  },
  {
    institution: "Ryan International School, Jaipur",
    degree: "10TH Boards",
    duration: "June 2016 - June 2017",
    grade: "CGPA - 7.2",
  },
];
const experiences = [
  {
    company: "Pina Systems Company",
    role: "Software Developer Intern",
    date: "05/2021 – 10/2021",
    details: [
      "Built frontend and backend, added features like Login, Search, Chart, and Dashboard.",
      "Worked on REST API, Flutter (Dart).",
      "Fixed bugs in the app.",
    ],
  },
  {
    company: "Doctunes",
    role: "Software Developer Intern",
    date: "06/2023 – 08/2023",
    details: [
      "Utilized Flutter (Dart), Firebase, and REST API.",
      "Enabled web scraping in Flutter using HTTP and HTML.",
      "Integrated Google Drive API for document retrieval.",
      "Designed UI for Forgot Password and Google Drive.",
      "Achieved traffic of 85k per month.",
    ],
  },
  {
    company: "Department of Information Technology & Communication",
    role: "Application Developer",
    date: "07/2022 – 12/2022",
    details: [
      "Proficient in Flutter, RestAPI, and Firebase for application development.",
      "Created user-friendly UI for screens and a dashboard under the ISTART project.",
      "Displayed startup selection status for the Government of Rajasthan's incubation center and funding programs.",
    ],
  },
  {
    company: "PhonePanchayat",
    role: "Software Developer Intern",
    date: "09/2023 - present",
    details: [
      "Led development of Phone Panchayat app using Flutter with a microservices-based backend.",
      "Achieved 300,000+ downloads and a 30% user increase post-update.",
      "Won the Rajasthan Social Impact Champion Award.",
      "Used technologies such as Flutter, AWS, Lamda functions, Dynamo db, REST API.",
    ],
  },
];

const projects = [
  {
    name: "Code World (Android App)",
    description: "Android app built with Flutter (Dart) and Firebase.",
    titlename: "CodeWorld: Your Ultimate Coding Tutorial App",
    longDescription:
      "It is a mobile app helps beginners and enthusiasts learn and practice coding with Flutter.CodeWorld offers comprehensive tutorials and exercises.",
    technologies: ["Flutter", "Dart", "Firebase"],
    date: "04/2021 – 06/2021",
    type: "App",
    github:"https://github.com/Arnav2001/Code-World",
    live:"https://play.google.com/store/apps/details?id=com.me.code_world&hl=en&gl=US",
    images: ["/assets/img1.jpg"],
    firstname: "CODE",
    lastname: "WORLD",
    imagesdata: [
      "/assets/img1.jpg",
      "/assets/img2.jpg",
      "/assets/img3.jpg",
      "/assets/img4.jpg",
    ],
    keyfeatures: [
      "Tutorials:Step-by-step guides on data structures and algorithms with detailed explanations, code examples, and interactive elements.",
      "Interactive Exercises: Hands-on coding exercises with instant feedback",
      "Favorites: Save and revisit your favorite tutorials anytime.",
    ],
  },
  {
    name: "React-Complex-Grid-Builder",
    description: "Developed using React, MongoDB, ExpressJs, and Nodejs.",
    titlename: "React Complex Grid Builder",
    longDescription:
      "React Complex Grid Builder is a versatile package for creating sophisticated grid layouts in React applications. Perfect for blogs, galleries, portfolios, and news sites. ",
    technologies: ["React", "MongoDB", "ExpressJs", "Nodejs"],
    date: "06/2024 – 09/2024",
    type: "Website",
    github:"https://github.com/Arnav2001/react-complex-grid-builder",
    live:"https://www.npmjs.com/package/react-complex-grid-builder",
    images: ["/assets/gridImage.png"],
    firstname: "GRID",
    lastname: "BUILDER",
    imagesdata: [
      "/assets/package1.jpg",
      "/assets/package2.jpg",
      "/assets/package3.jpg",
    ],
    keyfeatures: [
      "Easily configure grids with images, text, and metadata to match your design needs.",
      "Ensures consistent user experience across all devices.",
      "Handles large datasets with smooth, efficient rendering.",
      "Supports various content types and layout styles, from simple galleries to complex multi-column designs.",
      "Seamlessly fits into existing React projects and works with popular libraries.",
    ],
  },
  {
    name: "GyanDaan (Android App)",
    description: "Android app built with Flutter (Dart) and Firebase.",
    titlename: "GyanDaan: Automated Teacher Assignment System",
    longDescription:
      "GyanDaan is a Flutter app that automates teacher assignments based on student preferences for day, topic, and time, streamlining the process and enhancing the learning experience. ",
    technologies: ["Flutter", "Dart", "Firebase"],
    type: "App",
    date: "04/2021 – 06/2021",
    github:"https://github.com/Arnav2001/GyanDaan",
    live:"https://www.npmjs.com/package/react-complex-grid-builder",
    images: ["/assets/gyanDaanImg/img1.jpeg"],
    firstname: "GYAN",
    lastname: "DAAN",
    imagesdata: [
      "/assets/gyanDaanImg/img1.jpeg",
      "/assets/gyanDaanImg/img2.jpeg",
      "/assets/gyanDaanImg/img3.jpeg",
      "/assets/gyanDaanImg/img4.jpeg",
      "/assets/gyanDaanImg/img5.jpeg",
      "/assets/gyanDaanImg/img6.jpeg",
      "/assets/gyanDaanImg/img7.jpeg",
      "/assets/gyanDaanImg/img8.jpeg",
      "/assets/gyanDaanImg/img9.jpeg",
      "/assets/gyanDaanImg/img10.jpeg",
      "/assets/gyanDaanImg/img11.jpeg",
      "/assets/gyanDaanImg/img12.jpeg",
      "/assets/gyanDaanImg/img13.jpeg",
      "/assets/gyanDaanImg/img14.jpeg",
      "/assets/gyanDaanImg/img15.jpeg",
      "/assets/gyanDaanImg/img16.jpeg",
      "/assets/gyanDaanImg/img17.jpeg",
      "/assets/gyanDaanImg/img18.jpeg",
      "/assets/gyanDaanImg/img19.jpeg",
    ],
    keyfeatures: [
      "Matches students with teachers using advanced algorithms based on their preferences.",
      "Allows students to specify preferred days, topics, and times.",
      "Manages teacher availability,expertise and schedules for precise matching.",
      "Enables easy management of teachers, student preferences and system settings.",
      "Keeps students updated on assignments and schedule changes.",
    ],
  },
];

const achievementsList = [
  {
    title:
      "Participated in XROS fellowship, Hacktoberfest, and C4GT open-source opportunity.",
  },
  { title: "AIR 5 Xiaomi Hackathon “Ode2Code2.0”." },
  {
    title:
      "Secured 271st rank in Innovate India Coding Championship finale conducted by Coding Ninjas and AICTE in collaboration with Chandigarh University.",
  },
  {
    title:
      "Among the top 25 out of 2600 teams in “Ctrl Alt Debt” hackathon by CredAvenue.",
  },
  {
    title:
      "Mentoring participants at C4GT (Code for Government Tech) on government technology projects and technical challenges.",
  },
];

export { skills, educationList, experiences, projects, achievementsList };
