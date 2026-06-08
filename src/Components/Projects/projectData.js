import cloudDevsecopsArchitecture from "../../assets/cloud-devsecops-architecture.png";
import cloudDevsecopsNetworkSecurity from "../../assets/cloud-devsecops-network-security.png";
import sastBackendIngest from "../../assets/sast-backend-ingest.png";
import sastPolicyEnforcement from "../../assets/sast-policy-enforcement.png";
import sastS3Upload from "../../assets/sast-s3-upload.png";
import sastWorkflowTrigger from "../../assets/sast-workflow-trigger.png";
import sfuBeedieAdCareer from "../../assets/sfu-beedie-ad-career.png";
import sfuBeedieAdCulture from "../../assets/sfu-beedie-ad-culture.png";
import sfuBeedieGaLandingReport from "../../assets/sfu-beedie-ga-landing-report.png";
import sfuBeedieGaPagesScreens from "../../assets/sfu-beedie-ga-pages-screens.png";
import sfuBeedieKpiSummary from "../../assets/sfu-beedie-kpi-summary.png";
import sfuBeedieLandingCareer from "../../assets/sfu-beedie-landing-career.png";
import sfuBeedieLandingCulture from "../../assets/sfu-beedie-landing-culture.png";
import sfuBeedieMetaCampaignTable from "../../assets/sfu-beedie-meta-campaign-table.png";
import starleapCrystal from "../../assets/starleap-crystal.png";
import starleapLoginBackground from "../../assets/starleap-login-background.png";
import starleapReturnButton from "../../assets/starleap-return-button.png";
import starleapShopBox from "../../assets/starleap-shop-box.png";

export const PROJECT_TAGS = [
  "All",
  "Frontend",
  "Backend",
  "UX/UI",
  "DevOps",
  "Marketing",
];

export const projects = [
  {
    slug: "cloud-devsecops-security-advisor",
    title: "Cloud DevSecOps Security Advisor",
    area: "Software Engineering / DevOps",
    tags: ["Frontend", "Backend", "DevOps"],
    summary:
      "An AWS-based DevSecOps platform that automates security testing and centralizes findings in a web dashboard.",
    repository: "https://github.com/JasmineH-H/Cloud-DevSecOps-Advisor",
    architectureImage: cloudDevsecopsArchitecture,
    architectureAlt:
      "System architecture diagram for the Cloud DevSecOps Security Advisor platform",
    networkArchitectureImage: cloudDevsecopsNetworkSecurity,
    networkArchitectureAlt:
      "Network architecture and security design diagram for the Cloud DevSecOps Security Advisor platform",
    techStack: [
      {
        category: "Frontend",
        tools: ["React 19", "Vite", "Axios"],
      },
      {
        category: "Backend",
        tools: ["Node.js 20+", "Express 5", "REST API"],
      },
      {
        category: "DevOps & Cloud",
        tools: [
          "AWS",
          "ECS Fargate",
          "S3",
          "DynamoDB",
          "Lambda",
          "GitHub Actions",
          "Docker",
          "Terraform",
        ],
      },
    ],
    introduction:
      "Cloud DevSecOps Security Advisor helps teams shift security earlier in the delivery lifecycle by automating code and API security checks, collecting findings, and presenting current and historical risk posture in one dashboard.",
    functions: [
      {
        title: "SAST Ingestion Pipeline",
        description:
          "The SAST pipeline runs automatically during code delivery and connects scan execution, result ingestion, artifact storage, and merge policy enforcement.",
        steps: [
          {
            title: "Workflow trigger",
            text: "When code changes are pushed or a pull request is opened, GitHub Actions triggers the reusable SAST workflow.",
            image: sastWorkflowTrigger,
            imageAlt: "GitHub Actions SAST workflow configuration",
          },
          {
            title: "Backend ingestion",
            text: "The scanner sends the SAST result payload to the backend API, which confirms a successful ingest response.",
            image: sastBackendIngest,
            imageAlt: "GitHub Actions log showing SAST results sent to the backend API",
          },
          {
            title: "Report storage",
            text: "The generated SAST report is compressed and uploaded to the S3 report bucket while scan metadata is prepared for storage.",
            image: sastS3Upload,
            imageAlt: "GitHub Actions log showing SAST report upload to S3",
          },
          {
            title: "Merge protection",
            text: "If high or medium vulnerabilities are found, the SAST policy step fails and blocks the merge.",
            image: sastPolicyEnforcement,
            imageAlt: "GitHub Actions log showing SAST policy enforcement failure",
          },
        ],
      },
      {
        title: "Scheduled API Penetration Testing",
        description:
          "A Lambda integration triggers containerized pentest workers on a schedule. The workers run API security checks, collect results, and send findings back through the same ingestion flow used by repository scans.",
      },
      {
        title: "Backend Findings API",
        description:
          "The Node.js and Express API provides endpoints for ingesting scan results and querying historical findings. It coordinates scan metadata, report artifacts, risk scoring, and dashboard data retrieval.",
      },
      {
        title: "Risk Scoring and Aggregation",
        description:
          "Security findings are grouped by scan, severity, and control area so the dashboard can show both individual vulnerabilities and broader risk trends over time.",
      },
      {
        title: "Security Dashboard",
        description:
          "The React dashboard displays scan history, vulnerabilities, controls, and risk posture. Axios is used to request backend data, and the UI organizes findings so teams can quickly identify what needs attention.",
      },
      {
        title: "Cloud Infrastructure Deployment",
        description:
          "Terraform provisions the AWS infrastructure, including ECS Fargate services, the Application Load Balancer, S3 buckets, DynamoDB tables, Lambda integration, VPC networking, and IAM permissions.",
      },
    ],
  },
  {
    slug: "starleap-elearning-platform",
    title: "StarLeap E-Learning Platform",
    area: "Full Stack Engineering / UX/UI Design",
    tags: ["Frontend", "Backend", "UX/UI"],
    summary:
      "A gamified e-learning platform where I worked on both full-stack development and UX/UI design for student, instructor, and admin experiences.",
    repository: "https://github.com/JasmineH-H/StarLeap_E-learning-Platform",
    techStack: [
      {
        category: "Frontend",
        tools: ["React 19", "TypeScript", "Vite", "React Router", "Tailwind CSS"],
      },
      {
        category: "UX/UI Design",
        tools: ["Learning flow design", "Role-based interfaces", "Gamified UX", "Responsive layouts"],
      },
      {
        category: "Backend",
        tools: [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "JWT Auth",
          "AWS S3",
          "SendGrid",
        ],
      },
    ],
    introduction:
      "StarLeap is a gamified learning platform designed for students, instructors, and admins. I was responsible for both full-stack development and UX/UI design, shaping the learning experience, role-based interfaces, module progression, quizzes, progress tracking, and crystal-based reward shop.",
    functions: [
      {
        title: "Pixel Art UX/UI Design",
        description:
          "I used a pixel-art visual direction to make the learning platform feel more playful and attractive for students. The design supports the gamified theme while keeping course navigation, quiz flows, and role-based pages clear and easy to use.",
        media: [
          {
            image: starleapLoginBackground,
            caption: "Space-themed login background that establishes StarLeap's playful pixel-art identity.",
            size: "wide",
          },
          {
            image: starleapCrystal,
            caption: "Crystal reward asset used to support the gamified learning loop.",
          },
          {
            image: starleapReturnButton,
            caption: "Pixel-style return button for consistent navigation feedback.",
          },
          {
            image: starleapShopBox,
            caption: "Shop box asset used in the crystal reward shop experience.",
          },
        ],
      },
      {
        title: "Spaceship and Crystal Quiz Animation",
        description:
          "I built a React animation where a spaceship finds crystals during the quiz experience. This turns quiz progress and rewards into a more interactive moment, making the test flow feel more engaging than a standard question-and-answer screen. To encourage students, crystals are earned based on completation not correctness",
        gif: {
          src: "/videos/starleap-quiz.gif",
          title: "Spaceship and crystal quiz animation demo",
        },
      },
      {
        title: "MongoDB Data Storage",
        description:
          "I used MongoDB as the main data layer for storing users, courses, modules, quiz data, progress records, crystal rewards, and role-based management information. The backend uses Mongoose models and Express API routes to read and update this data across the platform.",
      },
    ],
  },
  {
    slug: "popcorn-movie-review-website",
    title: "Popcorn Movie Review Website",
    area: "Web Development / Database Design",
    tags: ["Frontend", "Backend", "UX/UI"],
    summary:
      "A movie review website that lets users browse movies, search and filter results, view movie details, comment, manage watchlists, and receive genre-based recommendations.",
    techStack: [
      {
        category: "Frontend",
        tools: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX"],
      },
      {
        category: "Backend",
        tools: ["PHP", "MySQL", "PDO", "Sessions"],
      },
      {
        category: "UX/UI",
        tools: ["Movie browsing flow", "Search and filter interface", "Member profile flow"],
      },
    ],
    introduction:
      "Popcorn is a movie review website built around a local movie database based on IMDb-style movie data. The project focused on database-driven web functionality, including movie browsing, detailed movie pages, member accounts, comments, watchlists, and personalized recommendations.",
    functions: [
      {
        title: "Movie Browsing and Discovery",
        description:
          "The landing page displays newly released and highly rated movies from the database. The discovery page lets users browse more movies, search by keyword, filter by genre or certificate, and sort by rating, MetaScore, or release year.",
      },
      {
        title: "Movie Details and Comments",
        description:
          "Each movie poster links to a detail page using a movie ID in the URL. PHP queries retrieve the selected movie's full information, and logged-in members can post comments without reloading the entire page through jQuery and AJAX.",
      },
      {
        title: "Member Accounts and Personalization",
        description:
          "Users can sign up, sign in, and sign out through PHP session-based authentication. Logged-in members can access profile pages, view comment history, choose favorite genres, and receive movie recommendations based on their preferences.",
      },
      {
        title: "Watchlist Management",
        description:
          "Members can add movies to a personal watchlist from browsing, search, discovery, or detail pages. Before inserting a movie, the backend checks for duplicates in the watchlist table, then stores or removes movie records based on user actions.",
      },
      {
        title: "Relational Database Design",
        description:
          "The project uses a normalized MySQL database with tables for movies, members, comments, genres, preferences, watchlists, casts, and movie-cast relationships. SQL joins connect movie data with genres, casts, comments, and user-specific features.",
      },
    ],
  },
  {
    slug: "sfu-beedie-web-analytics-project",
    title: "SFU Beedie Web Analytics Project",
    area: "Web Analytics / Experimentation",
    tags: ["Marketing", "UX/UI"],
    summary:
      "A web analytics project using Instagram ads, landing page A/B testing, and GA4 to compare student event messaging.",
    techStack: [
      {
        category: "Web Analytics",
        tools: ["GA4", "Google Tag Manager", "Google Optimize"],
      },
      {
        category: "Experimentation",
        tools: ["A/B testing", "Landing page variants", "Z-test", "Confidence intervals"],
      },
      {
        category: "Paid Media",
        tools: ["Meta Ads Manager", "Instagram Ads", "CTR analysis", "CPC analysis"],
      },
      {
        category: "Research",
        tools: ["Audience segmentation", "Student interviews", "Campaign strategy"],
      },
    ],
    introduction:
      "This project tested how international business students responded to two campaign messages for SEDO's Social Business Creation Competition: career growth and prize value vs. culture, friendship, and belonging.",
    analysis: {
      title: "Experiment Evidence & Analysis",
      summary:
        "Main question: which message better motivates students to click and apply?",
      showcase: {
        title: "1. Career vs. Cultural Ads and Landing Page Design",
        figures: [
          {
            image: sfuBeedieAdCareer,
            caption: "Career and prize ad",
          },
          {
            image: sfuBeedieAdCulture,
            caption: "Culture and friendship ad",
          },
          {
            image: sfuBeedieLandingCareer,
            caption: "Career landing page",
          },
          {
            image: sfuBeedieLandingCulture,
            caption: "Culture landing page",
          },
        ],
      },
      resultsTitle: "2. Campaign Results and Statistical Analysis",
      metrics: [
        {
          label: "Ad CTR",
          value: "0.066%",
          note: "25 link clicks from 37,662 impressions.",
        },
        {
          label: "Session Conversion",
          value: "20.75%",
          note: "11 apply-button conversions from 53 sessions.",
        },
        {
          label: "Campaign Spend",
          value: "$150",
          note: "$3.73 cost per click.",
        },
      ],
      table: {
        columns: ["Test", "Result", "Main Takeaway"],
        rows: [
          [
            "Ad CTR",
            "No significant difference, z = 0.29",
            "Both ad messages attracted similar click interest.",
          ],
          [
            "Landing page conversion",
            "No significant difference, z = -1.82",
            "Both page versions performed well, but the sample was small.",
          ],
          [
            "Apply intent",
            "Significant difference, z = 1.98",
            "The career and prize message drove stronger application intent.",
          ],
        ],
      },
      figuresTitle: "3. Supporting Analytics Evidence",
      figuresSummary:
        "Summary: CTR did not prove one ad message was stronger, but Apply Now behavior showed the career and prize message had stronger application intent. GA4 data also needed cross-checking because the Landing Page report did not match the intended 50/50 experiment split.",
      figures: [
        {
          image: sfuBeedieKpiSummary,
          caption: "KPI summary: Instagram ads reached 37,662 impressions and 25 link clicks, with a 0.066% CTR versus the 0.58% benchmark. Landing pages converted 11 of 53 sessions, or 20.75%, above the 2.6% benchmark but based on a small sample.",
          size: "wide",
        },
        {
          image: sfuBeedieMetaCampaignTable,
          caption: "Meta Ads results: the two ad variants performed similarly on click-through. One received 14 clicks from 20,033 impressions, and the other received 11 clicks from 17,629 impressions, so the z-test result of 0.29 showed no significant CTR difference.",
          size: "wide",
        },
        {
          image: sfuBeedieGaLandingReport,
          caption: "GA4 landing page report: this view showed 47 sessions for the career page and only 5 for the culture page, which did not match the intended 50/50 Google Optimize split. Because of that mismatch, this table was used for diagnosis, not final KPI calculation.",
          size: "wide",
        },
        {
          image: sfuBeedieGaPagesScreens,
          caption: "GA4 Pages and Screens report: this cleaner view showed 34 users on the career page and 15 on the culture page. The final KPI used 53 total sessions and 11 Apply Now clicks from this report.",
          size: "wide",
        },
      ],
    },
    functions: [],
  },
];
