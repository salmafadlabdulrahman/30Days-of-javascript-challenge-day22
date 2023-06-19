const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

let divWrapper = document.querySelector(".wrapper");
let titleOfProject = document.createElement("h1");
let spanYear = document.createElement("span");
let link = document.createElement("a");
let historyButton = document.createElement("button");
let unOrderdList = document.querySelector("ul");

titleOfProject.innerHTML = `${asabenehChallenges2020.challengeTitle} in`;
spanYear.innerHTML = `<span>${asabenehChallenges2020.challengeYear}</span>`;
link.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;

titleOfProject.appendChild(spanYear);
divWrapper.appendChild(titleOfProject);
divWrapper.appendChild(link);
divWrapper.appendChild(historyButton);
divWrapper.appendChild(unOrderdList);

titleOfProject.classList.add("title");

//The changing color of the year
const randomColor = () => {
  let format;
  for (let i = 0; i < 1; i++) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    format = `rgb(${red}, ${green}, ${blue})`;
  }
  return format;
};

setInterval(() => {
  spanYear.style.color = randomColor();
}, 1000);

//The date inside the button
const date = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const day = now.getDate();

  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
};

setInterval(() => {
  historyButton.innerHTML = date();
  historyButton.style.backgroundColor = randomColor();
}, 1000);

//Printing the list/dropdown of Challenges
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
  let challengesContent = document.createElement("li");
  let challengeName = document.createElement("a");
  let challengesStatus = document.createElement("span");
  let challengeDetails = document.createElement("details");
  let challengeSummary = document.createElement("summary");
  let arrayList = document.createElement("ul");

  challengeName.textContent = `${asabenehChallenges2020.challenges[i].name}`;
  challengeSummary.textContent = `${asabenehChallenges2020.challenges[i].topics[0]}`;
  challengesStatus.textContent = `${asabenehChallenges2020.challenges[i].status}`;

  let skills = asabenehChallenges2020.challenges[i].topics;
  skills.forEach((skill) => {
    let arrayElements = document.createElement("li");
    arrayElements.textContent = skill;
    arrayElements.classList.add('arrayElements')
    arrayList.appendChild(arrayElements);
  });

  unOrderdList.appendChild(challengesContent);
  challengesContent.appendChild(challengeName);
  challengesContent.appendChild(challengeDetails);
  challengeDetails.appendChild(challengeSummary);
  challengeDetails.appendChild(arrayList);

  challengesContent.appendChild(challengesStatus);

  const completedTask = "Done";
  const onGoingTask = "Ongoing";
  

  if (asabenehChallenges2020.challenges[i].status === completedTask) {
    challengesContent.style.backgroundColor = "#026873";
    challengesStatus.style.textDecoration = "none";
  } else if (asabenehChallenges2020.challenges[i].status === onGoingTask) {
    challengesContent.style.backgroundColor = "#013440";
    challengesStatus.style.textDecoration = "none";
  } else {
    challengesContent.style.backgroundColor = "#593954";
    challengesStatus.style.textDecoration = "none";
  }
}

let authorName = document.createElement("h2");
let communication = document.createElement("ul");
communication.classList.add("social-link");

let authosrFirstName = asabenehChallenges2020.author.firstName;
let authosrLastName = asabenehChallenges2020.author.lastName;

divWrapper.appendChild(authorName);
divWrapper.appendChild(communication);

authorName.textContent = authosrFirstName + " " + authosrLastName;

//render the social icons
let links = asabenehChallenges2020.author.socialLinks;
links.forEach((link) => {
  const individualIcons = document.createElement("a");
  individualIcons.href = link.url;
  individualIcons.target = "_blank";

  const iconElement = document.createElement("i");
  iconElement.classList.add("fa-lg");
  iconElement.innerHTML = link.fontawesomeIcon;

  individualIcons.appendChild(iconElement);
  communication.appendChild(individualIcons);
});

let personality = document.createElement("p");
personality.classList.add("personality");
personality.textContent = asabenehChallenges2020.author.bio;
divWrapper.appendChild(personality);

let secondDiv = document.createElement("div");
secondDiv.classList.add("secondDiv");
divWrapper.appendChild(secondDiv);

//The Titles
let titlesList = document.createElement("ul");
titlesList.classList.add("titlesList");

let titleKey = document.createElement("p");
titleKey.classList.add("titlesKey");

let titleFirstLetter = Object.keys(asabenehChallenges2020.author);
let firstKey = titleFirstLetter[2];

titleKey.textContent = firstKey.charAt(0).toUpperCase() + firstKey.slice(1);

secondDiv.appendChild(titlesList);
titlesList.appendChild(titleKey);

let titles = asabenehChallenges2020.author.titles;
for (let i = 0; i < titles.length; i++) {
  let title = document.createElement("li");
  title.classList.add("titleElements");
  let result1 = titles[i][0];
  let result2 = titles[i][1];
  title.textContent = `${result1} ${result2}`;
  titlesList.appendChild(title);
}

//The Skills
let skillsList = document.createElement("ul");
skillsList.classList.add("skillsList");

let skillKey = document.createElement("p");
skillKey.classList.add("skillsKey");

let skillFirstLetter = Object.keys(asabenehChallenges2020.author);
//console.log(skillFirstLetter[5]);
let firstKeySkill = skillFirstLetter[5];

skillKey.textContent =
  firstKeySkill.charAt(0).toUpperCase() + firstKeySkill.slice(1);

secondDiv.appendChild(skillsList);
skillsList.appendChild(skillKey);

let skills = asabenehChallenges2020.author.skills;
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.classList.add("skillElements");
  skill.textContent = `✔️ ${skills[i]}`;
  skillsList.appendChild(skill);
}

//The Qualification
let qualificationsList = document.createElement("ul");
qualificationsList.classList.add("qualificationsList");

let qualificationKey = document.createElement("p");
qualificationKey.classList.add("qualificationKey");

let qualificationFirstLetter = Object.keys(asabenehChallenges2020.author);

let firstKeyQualification = qualificationFirstLetter[3];

qualificationKey.textContent =
  firstKeyQualification.charAt(0).toUpperCase() +
  firstKeyQualification.slice(1);

secondDiv.appendChild(qualificationsList);
qualificationsList.appendChild(qualificationKey);

let qualifications = asabenehChallenges2020.author.qualifications;
for (let i = 0; i < qualifications.length; i++) {
  let qualification = document.createElement("li");
  qualification.classList.add("qualificationElements");
  if (qualifications[i].includes("Ongoing")) {
    qualification.textContent = `📖 ${qualifications[i]}`;
  } else {
    qualification.textContent = `👨‍🎓 ${qualifications[i]}`;
  }
  qualificationsList.appendChild(qualification);
}

//KeyWords
let keywordsDiv = document.createElement("div");
let keywordKey = document.createElement("p");
let keywordList = document.createElement("ul");

keywordsDiv.classList.add("keywordsDiv");
keywordKey.classList.add("keywordKey");
keywordList.classList.add("keywordList");

document.body.appendChild(keywordsDiv);
keywordsDiv.appendChild(keywordKey);
keywordsDiv.appendChild(keywordList);

let keywordFirstLetter = Object.keys(asabenehChallenges2020);


let firstKeyKeyword = keywordFirstLetter[4];

keywordKey.textContent =
  firstKeyKeyword.charAt(0).toUpperCase() + firstKeyKeyword.slice(1);

let keywords = asabenehChallenges2020.keywords;
for (let i = 0; i < keywords.length; i++) {
  let keywordsEl = document.createElement("li");
  keywordsEl.classList.add("keywordsEl");
  keywordsEl.textContent = `#${keywords[i]}`;
  keywordsEl.style.background = randomColor();
  keywordsEl.style.borderRadius = '50px';
  keywordsEl.style.padding = '0.5em 1em';
  keywordsEl.style.fontWeight = '700';
  keywordList.appendChild(keywordsEl);
}

