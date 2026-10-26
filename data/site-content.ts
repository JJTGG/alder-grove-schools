export type LearningStage = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  imageUrl: string;
  imageAlt: string;
  focusAreas: string[];
  learningApproach: string[];
  closingNote: string;
};

export const learningStages: LearningStage[] = [
  {
    slug: "early-years",
    title: "Early Years",
    shortTitle: "Early Years",
    summary:
      "A welcoming start built around curiosity, communication, play and discovery.",
    introduction:
      "The early years set the tone for how children experience learning. This concept programme places guided play, careful observation, language and positive relationships at the centre of each day.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012156/alder-grove-schools/early-learning-paired-reading.jpg",
    imageAlt: "Young learners studying together in a classroom.",
    focusAreas: [
      "Language and early communication",
      "Play, movement and coordination",
      "Social confidence and cooperation",
      "Creative exploration",
      "Early number and pattern recognition",
      "Growing independence through daily routines"
    ],
    learningApproach: [
      "Give children room to ask questions and explore safely.",
      "Use stories, practical activities and conversation to introduce ideas.",
      "Recognise individual progress rather than expecting every child to develop at the same pace."
    ],
    closingNote:
      "The aim is to help children feel secure, curious and ready to take their next steps."
  },
  {
    slug: "primary",
    title: "Primary Learning",
    shortTitle: "Primary",
    summary:
      "Strong foundations in literacy, numeracy, problem-solving and independent thought.",
    introduction:
      "Primary learning builds on curiosity and turns it into confidence. This sample programme combines core academic foundations with discussion, practical projects and opportunities to work with others.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012165/alder-grove-schools/library-group-reading.jpg",
    imageAlt: "Students reading and learning together in a library.",
    focusAreas: [
      "Reading, writing and communication",
      "Numeracy and mathematical reasoning",
      "Scientific thinking and observation",
      "Creative arts and expression",
      "Digital awareness and responsible use",
      "Teamwork, organisation and problem-solving"
    ],
    learningApproach: [
      "Connect classroom concepts with practical, familiar situations.",
      "Encourage learners to explain how they reached an answer.",
      "Use feedback to make progress visible and help learners identify their next step."
    ],
    closingNote:
      "The goal is steady progress, an enquiring mind and the confidence to tackle unfamiliar challenges."
  },
  {
    slug: "secondary",
    title: "Secondary Learning",
    shortTitle: "Secondary",
    summary:
      "Deeper subject knowledge, thoughtful challenge and preparation for future choices.",
    introduction:
      "Secondary learning asks students to analyse, evaluate and take increasing responsibility for their work. This concept programme combines academic depth with communication, collaboration and reflection.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012346/alder-grove-schools/science-hands-on-experiment.jpg",
    imageAlt: "Students carrying out a supervised classroom science experiment.",
    focusAreas: [
      "Subject knowledge and analytical reasoning",
      "Research and evidence-based discussion",
      "Independent study habits",
      "Project planning and collaboration",
      "Creative and technical problem-solving",
      "Reflection on interests and future pathways"
    ],
    learningApproach: [
      "Set meaningful challenges with room for different approaches.",
      "Help students distinguish evidence from assumption.",
      "Build independence through structured tasks, feedback and reflection."
    ],
    closingNote:
      "The aim is to help learners become capable thinkers who can make informed decisions about what comes next."
  }
];

export type SchoolArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  paragraphs: string[];
};

export const schoolArticles: SchoolArticle[] = [
  {
    slug: "learning-beyond-the-classroom",
    category: "Learning",
    title: "Learning beyond the classroom",
    excerpt:
      "How practical experiences can help learners connect ideas, ask better questions and remember what they discover.",
    readTime: "4 min read",
    paragraphs: [
      "Learning does not stop when a lesson ends. Conversations, observation, making things and exploring everyday questions can help learners connect abstract ideas with the world around them.",
      "A practical activity can begin with a simple question. Learners make predictions, test an idea, discuss what happened and consider what they would change next time. The process matters as much as the finished result.",
      "Families can encourage this habit without turning every moment into a formal lesson. Cooking, reading together, noticing patterns outdoors or planning a small task can all create opportunities to think aloud.",
      "This article is illustrative sample content for the Alder Grove Schools website concept, not a report about a real school's programme."
    ]
  },
  {
    slug: "working-with-families",
    category: "Community",
    title: "Working in partnership with families",
    excerpt:
      "Consistent communication and shared expectations help children feel supported across home and school.",
    readTime: "3 min read",
    paragraphs: [
      "Children benefit when the adults supporting them communicate clearly and treat one another as partners. That partnership begins with listening, realistic expectations and respect for each family's circumstances.",
      "Useful communication is more than sending updates. It creates space for questions, shares progress in understandable language and identifies concerns before they become harder to address.",
      "Families also bring valuable knowledge about a child's interests, routines, strengths and needs. Making room for that knowledge helps adults plan support more thoughtfully.",
      "This article is fictional demonstration content. It does not describe an established Alder Grove Schools family-engagement policy."
    ]
  },
  {
    slug: "helping-learners-discover-strengths",
    category: "Student development",
    title: "Helping learners discover their strengths",
    excerpt:
      "Progress includes recognising individual strengths while building the skills that still need practice.",
    readTime: "4 min read",
    paragraphs: [
      "Learners do not all show understanding in the same way or at the same time. Some express an idea confidently, while others need time to reflect, draw, build, practise or talk it through.",
      "Recognising strengths does not mean avoiding difficult work. It means using what a learner can already do as a starting point for the next challenge, while providing support where it is needed.",
      "Specific feedback is often more useful than a broad label. Explaining what worked, why it worked and what to try next gives learners practical information they can use.",
      "This is a sample editorial article created for a fictional school website demo."
    ]
  }
];

export const schoolPrinciples = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "Make room for questions, exploration and the confidence to investigate."
  },
  {
    number: "02",
    title: "Care",
    description:
      "Build an environment where respect, fairness and belonging matter."
  },
  {
    number: "03",
    title: "Growth",
    description:
      "Treat progress as a process of practice, reflection and meaningful challenge."
  }
];

export const schoolLifeTopics = [
  {
    number: "01",
    title: "Creative expression",
    description:
      "Art, making, performance and imaginative projects give learners different ways to communicate ideas.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012349/alder-grove-schools/creative-arts-class.jpg",
    imageAlt: "Children painting as part of a creative arts activity."
  },
  {
    number: "02",
    title: "Movement and wellbeing",
    description:
      "Age-appropriate movement, healthy routines and shared activities can support focus and confidence.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012354/alder-grove-schools/outdoor-soccer-lagos.jpg",
    imageAlt: "Children playing football outdoors on a school sport field."
  },
  {
    number: "03",
    title: "Community and teamwork",
    description:
      "Collaborative tasks help learners practise listening, contributing and solving problems together.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012451/alder-grove-schools/classroom-collaborative-learning.jpg",
    imageAlt: "Students learning together in a classroom."
  },
  {
    number: "04",
    title: "Reflection and responsibility",
    description:
      "Everyday routines can help learners build organisation, self-awareness and responsibility.",
    imageUrl:
      "https://res.cloudinary.com/kcxmd95c/image/upload/f_auto,q_auto,w_900,ar_16:10,c_fill,g_auto/v1793012165/alder-grove-schools/library-group-reading.jpg",
    imageAlt: "Students reading and working quietly together in a library."
  }
];