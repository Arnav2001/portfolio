const skills = [
    { title: 'C++', imgUrl: 'assets/cpp.svg', bgColor: 'bg-blue-200', width: '50', height: '50' },
    { title: 'Flutter', imgUrl: 'assets/flutter.png', bgColor: 'bg-blue-200', width: '50', height: '50' },
    { title: 'Tailwind', imgUrl: 'assets/tailwind.svg', bgColor: 'bg-blue-200', width: '50', height: '50' },
    { title: 'React', imgUrl: 'assets/react.png', bgColor: 'bg-green-200', width: '50', height: '50' },
    { title: 'Next', imgUrl: 'assets/next.svg', bgColor: 'bg-gray-200', width: '50', height: '50' },
    { title: 'Express', imgUrl: 'assets/express.svg', bgColor: 'bg-gray-200', width: '50', height: '50' },
    { title: 'Node', imgUrl: 'assets/nodejs.svg', bgColor: '', width: '50', height: '50' },
    { title: 'HTML', imgUrl: 'assets/html.svg', bgColor: 'bg-orange-200', width: '50', height: '50' },
    { title: 'CSS', imgUrl: 'assets/css.png', bgColor: '', width: '50', height: '50' },
    { title: 'javaScript', imgUrl: 'assets/javaScript.png', bgColor: '', width: '50', height: '50' },
    { title: 'Firebase', imgUrl: 'assets/firebase.svg', bgColor: '', width: '50', height: '50' },
    { title: 'SQL', imgUrl: 'assets/sql.png', bgColor: 'bg-blue-200', width: '50', height: '50' },
    { title: 'MongoDB', imgUrl: 'assets/mongodb.png', bgColor: 'bg-green-200', width: '50', height: '50' },
  ];
  
  const educationList = [
    {
      institution: 'Poornima College of Engineering, Jaipur',
      degree: 'Bachelors of Technology in Computer Science (Hons)',
      duration: 'Aug 2019 - July 2023',
      grade: 'CGPA - 8.23',
    },
    {
      institution: 'Tilak Public School, Jaipur',
      degree: '12TH Boards',
      duration: 'Mar 2017 - Mar 2019',
      grade: '72.4% in CBSE',
    },
  ];
  const experiences = [
    {
      company: 'Pina Systems Company',
      role: 'Software Developer Intern',
      date: '05/2021 – 10/2021',
      details: [
        'Built frontend and backend, added features like Login, Search, Chart, and Dashboard.',
        'Worked on REST API, Flutter (Dart).',
        'Fixed bugs in the app.',
      ],
    },
    {
      company: 'Doctunes',
      role: 'Software Developer Intern',
      date: '06/2023 – 08/2023',
      details: [
        'Utilized Flutter (Dart), Firebase, and REST API.',
        'Enabled web scraping in Flutter using HTTP and HTML.',
        'Integrated Google Drive API for document retrieval.',
        'Designed UI for Forgot Password and Google Drive.',
        'Achieved traffic of 85k per month.',
      ],
    },
    {
      company: 'Department of Information Technology & Communication',
      role: 'Application Developer',
      date: '07/2022 – 12/2022',
      details: [
        'Proficient in Flutter, RestAPI, and Firebase for application development.',
        'Created user-friendly UI for screens and a dashboard under the ISTART project.',
        'Displayed startup selection status for the Government of Rajasthan\'s incubation center and funding programs.',
      ],
    },
    {
      company: 'PhonePanchayat',
      role: 'Software Developer Intern',
      date: '09/2023 - present',
      details: [
        'Led development of Phone Panchayat app using Flutter with a microservices-based backend.',
        'Achieved 300,000+ downloads and a 30% user increase post-update.',
        'Won the Rajasthan Social Impact Champion Award.',
        'Used technologies such as Flutter, AWS, Lamda functions, Dynamo db, REST API.',
      ],
    },
  ];

  const projects = [
    {name:'project 1', imgUrl:'assets/background.webp'},
    {name:'project 2', imgUrl:'assets/javaScript.png'},
    {name:'project 3', imgUrl:'assets/nodejs.svg'},
    {name:'project 4', imgUrl:'assets/tailwind.svg'},
  ]
  export { skills, educationList, experiences, projects };
  