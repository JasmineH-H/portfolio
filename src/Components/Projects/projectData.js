import cloudDevsecopsArchitecture from "../../assets/cloud-devsecops-architecture.png";
import cloudDevsecopsNetworkSecurity from "../../assets/cloud-devsecops-network-security.png";
import devsecopsDashboardOverview from "../../assets/devsecops-dashboard-overview.png";
import devsecopsDashboardRiskScore from "../../assets/devsecops-dashboard-risk-score.png";
import devsecopsDashboardScanDetailsReport from "../../assets/devsecops-dashboard-scan-details-report.png";
import devsecopsDashboardScanDetailsSummary from "../../assets/devsecops-dashboard-scan-details-summary.png";
import devsecopsPentestControls from "../../assets/devsecops-pentest-controls.png";
import devsecopsPentestHistory from "../../assets/devsecops-pentest-history.png";
import devsecopsPentestLambdaTrigger from "../../assets/devsecops-pentest-lambda-trigger.png";
import devsecopsRiskPentestFindingsTable from "../../assets/devsecops-risk-pentest-findings-table.png";
import devsecopsRiskPentestScore from "../../assets/devsecops-risk-pentest-score.png";
import devsecopsRiskSastFindingsTable from "../../assets/devsecops-risk-sast-findings-table.png";
import devsecopsRiskSastScore from "../../assets/devsecops-risk-sast-score.png";
import devsecopsScriptDeployCommands from "../../assets/devsecops-script-deploy-commands.png";
import devsecopsScriptDeployOutputUrls from "../../assets/devsecops-script-deploy-output-urls.png";
import devsecopsScriptDeploySummary from "../../assets/devsecops-script-deploy-summary.png";
import devsecopsScriptSetupSecrets from "../../assets/devsecops-script-setup-secrets.png";
import devsecopsScriptTargetRepo from "../../assets/devsecops-script-target-repo.png";
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
import vadBaselineCleanConfusionMatrix from "../../assets/vad-baseline-clean-confusion-matrix.png";
import vadBaselineCleanThreshold from "../../assets/vad-baseline-clean-threshold.png";
import vadBaselineNoisyConfusionMatrix from "../../assets/vad-baseline-noisy-confusion-matrix.png";
import vadBaselineNoisyRoc from "../../assets/vad-baseline-noisy-roc.png";
import vadCleanLibriSpeechLabels from "../../assets/vad-clean-librispeech-labels.png";
import vadFeatureEnergyLabels from "../../assets/vad-feature-energy-labels.png";
import vadLazyCrnnConfusionMatrix from "../../assets/vad-lazy-crnn-confusion-matrix.png";
import vadLazyCrnnThreshold from "../../assets/vad-lazy-crnn-threshold.png";
import vadLazyNoisyMlpConfusionMatrix from "../../assets/vad-lazy-noisy-mlp-confusion-matrix.png";
import vadLazyMlpCrnnPipeline from "../../assets/vad-lazy-mlp-crnn-pipeline.png";
import vadLazyNoisyMlpThreshold from "../../assets/vad-lazy-noisy-mlp-threshold.png";
import vadLogMelSpectrogram from "../../assets/vad-log-mel-spectrogram.png";
import vadMlpTrainingPipeline from "../../assets/vad-mlp-training-pipeline.png";
import vadNoiseLabelPreservation from "../../assets/vad-noise-label-preservation.png";
import vadNoisyMlpConfusionMatrix from "../../assets/vad-noisy-mlp-confusion-matrix.png";
import vadNoisyMlpThreshold from "../../assets/vad-noisy-mlp-threshold.png";
import vadSnrBucketCounts from "../../assets/vad-snr-bucket-counts.png";
import vadTestNoisyF1ByNoiseType from "../../assets/vad-test-noisy-f1-by-noise-type.png";
import vadTestNoisyF1BySnr from "../../assets/vad-test-noisy-f1-by-snr.png";
import vadTestNoisyFarByNoiseType from "../../assets/vad-test-noisy-far-by-noise-type.png";
import vadTestNoisyFarBySnr from "../../assets/vad-test-noisy-far-by-snr.png";
import vadTestNoisyMrByNoiseType from "../../assets/vad-test-noisy-mr-by-noise-type.png";
import vadTestNoisyMrBySnr from "../../assets/vad-test-noisy-mr-by-snr.png";
import vadTestNoisyModelLeaderboard from "../../assets/vad-test-noisy-model-leaderboard.png";

export const PROJECT_TAGS = [
  "All",
  "Frontend",
  "Backend",
  "UX/UI",
  "DevOps",
  "Machine Learning",
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
            layout: "stacked",
          },
          {
            title: "Report storage",
            text: "The generated SAST report is compressed and uploaded to the S3 report bucket while scan metadata is prepared for storage.",
            image: sastS3Upload,
            imageAlt: "GitHub Actions log showing SAST report upload to S3",
            layout: "stacked",
          },
          {
            title: "Merge protection",
            text: "If high or medium vulnerabilities are found, the SAST policy step fails and blocks the merge.",
            image: sastPolicyEnforcement,
            imageAlt: "GitHub Actions log showing SAST policy enforcement failure",
            layout: "stacked",
          },
        ],
      },
      {
        title: "Scheduled API Penetration Testing",
        description:
          "A Lambda integration triggers containerized pentest workers on a schedule. The workers run API security checks, collect results, and send findings back through the same ingestion flow used by repository scans.",
        steps: [
          {
            title: "Configure pentest schedule",
            text: "The dashboard lets a user set the target API URL, associate the run with a repository label, run an immediate pentest, or save a recurring schedule such as every 5 minutes, hourly, daily, or weekdays.",
            image: devsecopsPentestControls,
            imageAlt:
              "Pentest controls showing target URL, repository label, run-now action, and recurring schedule options",
          },
          {
            title: "Trigger scheduled Lambda",
            text: "The saved schedule is represented in AWS as EventBridge rules connected to the devsecops-advisor-pentest-trigger Lambda function. This keeps recurring API pentests serverless and event-driven.",
            image: devsecopsPentestLambdaTrigger,
            imageAlt:
              "AWS Lambda function overview showing EventBridge CloudWatch Events triggers for the pentest trigger function",
          },
          {
            title: "Review scheduled pentest results",
            text: "Completed pentest runs appear in scan history with timestamps, status, risk score, and a view action. The repeated five-minute entries show the recurring schedule producing persisted pentest results.",
            image: devsecopsPentestHistory,
            imageAlt:
              "Scan history filtered to pentest results showing repeated completed scheduled pentest runs with risk scores",
          },
        ],
      },
      {
        title: "Security Dashboard",
        description:
          "The React dashboard turns backend scan data into an operational security workspace. Axios requests scan history, findings, controls, and risk posture from the Express API, then the UI organizes the results so teams can move from overview to action quickly.",
        steps: [
          {
            title: "Overall project dashboard",
            text: "The main dashboard starts by loading a selected owner, repository, and target URL, then shows the active project context for the security workspace. The sidebar summarizes the major areas: total risk score, SAST result, pentest controls, and scan history, giving teams one place to orient before drilling into findings.",
            image: devsecopsDashboardOverview,
            imageAlt:
              "Cloud DevSecOps Security Advisor dashboard showing project selection, current project details, and navigation for risk score, SAST result, and pentest controls",
          },
          {
            title: "Compare overall, SAST, and pentest risk",
            text: "The risk score view separates the combined project risk from the latest SAST and pentest scores. In this run, the dashboard shows an overall score of 90, a SAST score of 100, and a pentest score of 83, making it clear which security signal is driving the project risk higher.",
            image: devsecopsDashboardRiskScore,
            imageAlt:
              "Security dashboard total risk score cards showing overall risk score, latest SAST score, and latest pentest score",
            layout: "stacked",
          },
          {
            title: "Track scan history and risk posture",
            text: "The scan history view combines SAST and pentest runs in one table with timestamp, scan type, status, risk score, and a drill-down action. Filtering the history helps teams separate repository scans from scheduled API pentests and spot repeated high-risk runs.",
            image: devsecopsPentestHistory,
            imageAlt:
              "Security dashboard scan history showing completed pentest runs with timestamps, status, risk score, and view actions",
            imageSize: "compact",
          },
          {
            title: "Review findings from one place",
            text: "Clicking the View button opens a scan details modal with the run ID, repository, scan type, status, branch, timestamp, and commit SHA. The same modal continues into the risk assessment and report section, where users can see the normalized risk score, raw score, total findings, scanner tool, report format, and S3 report path for the compressed detailed report.",
            layout: "stacked",
            imagesLayout: "stacked",
            images: [
              {
                image: devsecopsDashboardScanDetailsSummary,
                imageAlt:
                  "Security dashboard scan details modal showing SAST run information including repository, status, branch, timestamp, and commit SHA",
              },
              {
                image: devsecopsDashboardScanDetailsReport,
                imageAlt:
                  "Security dashboard scan details modal showing risk score, total findings, scanner tool, report format, and raw S3 report path",
              },
            ],
          },
        ],
      },
      {
        title: "Risk Scoring and Aggregation",
        description:
          "Security findings are grouped by scan, severity, and control area so the dashboard can show both individual vulnerabilities and broader risk trends over time.",
        steps: [
          {
            title: "Display scan IDs, finding counts, and calculated scores",
            text: "The dashboard calculates risk separately for SAST and pentest results. The SAST view shows the latest scan ID, timestamp, branch, 2,046 total vulnerabilities, severity counts, and a risk score of 100. The pentest view shows the latest pentest scan ID, timestamp, 6 total tests, fail/error, warning, and passed counts, and a risk score of 83.",
            layout: "stacked",
            imagesLayout: "vertical",
            images: [
              {
                image: devsecopsRiskSastScore,
                imageAlt:
                  "Latest SAST scan dashboard showing scan ID, timestamp, branch, total vulnerabilities by severity, and risk score",
              },
              {
                image: devsecopsRiskPentestScore,
                imageAlt:
                  "Latest pentest result dashboard showing scan ID, timestamp, total tests by outcome, and risk score",
              },
            ],
          },
          {
            title: "Filter scanned risks and download reports",
            text: "The findings tables expose the detailed risks behind each score. Pentest findings can be filtered by title, status, and severity, while SAST findings can be filtered by title and severity. Each row keeps the status or severity, test name or source, affected location, and recommendation visible, and the Download button lets users export the report for deeper review or remediation tracking.",
            layout: "stacked",
            imagesLayout: "stacked",
            images: [
              {
                image: devsecopsRiskPentestFindingsTable,
                imageAlt:
                  "Pentest findings table with title, status, and severity filters plus a download button",
              },
              {
                image: devsecopsRiskSastFindingsTable,
                imageAlt:
                  "SAST findings table with title and severity filters, source, location, recommendation, and a download button",
              },
            ],
          },
        ],
      },
      {
        title: "Automated Setup and Deployment Scripts",
        description:
          "The project includes README-guided shell scripts that help users configure AWS, Terraform, GitHub Actions, Docker images, target repositories, and deployment outputs without manually wiring every service.",
        steps: [
          {
            title: "Prepare AWS secrets before Terraform",
            text: "The setup-secrets.sh script securely prompts for SAST and pentest ingest tokens, stores them in AWS Secrets Manager as devsecops/sast and devsecops/pentest, and prints the next GitHub setup checklist. This gives Terraform and the pentest trigger a predictable secret source before infrastructure is applied.",
            image: devsecopsScriptSetupSecrets,
            imageAlt:
              "README setup-secrets script instructions showing devsecops/sast and devsecops/pentest AWS Secrets Manager secret names",
          },
          {
            title: "Configure target repositories",
            text: "The setup-target-repo.sh script configures GitHub Actions secrets and variables for a target repository, including AWS credentials, ingest tokens, backend API URL, and report bucket name. With the protect-branch option, it also enables branch protection so failed SAST checks can block unsafe merges. The setup-target-workflow.sh script then creates or updates the target repository's .github/workflows/sast.yml file so a new repository can connect to the reusable SAST workflow without manual YAML setup.",
            image: devsecopsScriptTargetRepo,
            imageAlt:
              "README target repository setup instructions showing setup-target-repo and setup-target-workflow commands, GitHub Actions secrets, variables, and branch protection",
          },
          {
            title: "Deploy the full product from one command",
            text: "The deploy_all.sh script runs Terraform, reads Terraform outputs, logs in to ECR, builds and pushes backend and pentest containers, redeploys ECS, syncs the frontend to S3, and prints the frontend URL plus demo target URL. Flags such as --auto-approve, --infra-only, --skip-backend, and --skip-frontend let users choose the right deployment path.",
            layout: "stacked",
            images: [
              {
                image: devsecopsScriptDeployCommands,
                imageAlt:
                  "README deploy application instructions showing deploy_all script command variants",
              },
              {
                image: devsecopsScriptDeploySummary,
                imageAlt:
                  "README deploy_all script summary listing Terraform apply, Terraform outputs, ECR image pushes, ECS redeploy, pentest image build, and frontend S3 sync",
                size: "compact",
              },
            ],
          },
          {
            title: "Print deployed dashboard and demo target URLs",
            text: "After deployment completes, the script prints the CloudFront frontend URL for the security dashboard and the demo target URL used for API pentest scans. This gives users the two links they need to open the product and immediately validate it against the deployed Juice Shop target.",
            image: devsecopsScriptDeployOutputUrls,
            layout: "stacked",
            imageAlt:
              "Terminal output showing deploy complete with frontend dashboard URL and demo target URL",
          },
        ],
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
    slug: "noise-robust-voice-activity-detection",
    title: "Noise-Robust Voice Activity Detection",
    area: "Machine Learning / Audio Processing",
    tags: ["Machine Learning", "Backend"],
    summary:
      "A voice activity detection pipeline that trains and compares clean, noisy, and lazy-feature neural models for robust speech detection.",
    repository:
      "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL",
    techStack: [
      {
        category: "Python & ML",
        tools: ["Python", "PyTorch", "torchaudio", "NumPy", "SciPy"],
      },
      {
        category: "Audio Processing",
        tools: ["librosa", "soundfile", "audioread", "WebRTC VAD"],
      },
      {
        category: "Datasets & Files",
        tools: ["LibriSpeech", "MUSAN", "JSONL", "WAV"],
      },
      {
        category: "Environment & Analysis",
        tools: ["Docker", "Jupyter Notebook", "Bash", "Matplotlib", "tqdm"],
      },
    ],
    introduction:
      "This project builds a noise-robust voice activity detection system for identifying speech frames under clean and noisy audio conditions. The pipeline prepares LibriSpeech and MUSAN data, generates noisy mixtures, extracts acoustic features, and trains multiple neural architectures to compare robustness strategies.",
    functions: [
      {
        title: "Dataset Preparation and Indexing",
        description:
          "The dataset pipeline prepares clean LibriSpeech speech clips, samples MUSAN background audio at different SNR levels, and keeps the original frame-level VAD labels aligned after noise mixing.",
        steps: [
          {
            title: "Prepare clean LibriSpeech audio and labels",
            text: "Clean LibriSpeech utterances are segmented into frame-level speech and non-speech regions, then indexed so each waveform has matching VAD labels before any augmentation is applied.",
            image: vadCleanLibriSpeechLabels,
            imageAlt:
              "Clean LibriSpeech waveform with highlighted speech frames used as voice activity labels",
            notebook: {
              name: "02_Generation_Sanity_Check.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/02_Generation_Sanity_Check.ipynb",
            },
          },
          {
            title: "Add MUSAN noise at different SNR levels",
            text: "MUSAN noise clips are sampled and mixed into clean speech at target SNR buckets, giving the training set examples that range from very noisy to cleaner audio conditions.",
            image: vadSnrBucketCounts,
            imageAlt:
              "Notebook chart showing target SNR bucket counts used for noisy audio generation",
            notebook: {
              name: "03_Add_Noise_Sanity_Check.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/03_Add_Noise_Sanity_Check.ipynb",
            },
          },
          {
            title: "Preserve labels after noise mixing",
            text: "After background noise is added, the speech and non-speech intervals are kept from the clean source waveform, so the noisy example uses the same aligned VAD targets.",
            image: vadNoiseLabelPreservation,
            imageAlt:
              "Waveform comparison before and after adding noise showing speech and non-speech labels preserved across the clean and noisy audio",
            notebook: {
              name: "03_Add_Noise_Sanity_Check.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/03_Add_Noise_Sanity_Check.ipynb",
            },
          },
        ],
      },
      {
        title: "Feature Extraction",
        description:
          "The feature pipeline converts each waveform into frame-level acoustic representations that the neural models can learn from. Log-mel spectrograms capture the speech signal across time and frequency, while energy-based checks help confirm that feature activity still matches the VAD labels.",
        steps: [
          {
            title: "Convert waveforms into log-mel spectrograms",
            text: "Each audio clip is transformed from a raw waveform into a log-mel spectrogram, which compresses frequency information into perceptually meaningful bands over time. This gives the model a structured view of speech patterns instead of raw amplitude samples.",
            image: vadLogMelSpectrogram,
            imageAlt:
              "Log-mel spectrogram generated from a LibriSpeech training waveform",
            notebook: {
              name: "02_Generation_Sanity_Check.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/02_Generation_Sanity_Check.ipynb",
            },
          },
          {
            title: "Validate feature energy against VAD labels",
            text: "After feature extraction, the notebook compares frame-level feature energy with the scaled speech labels. This sanity check helps confirm that high-energy regions generally line up with speech intervals and that the labels remain usable after preprocessing.",
            image: vadFeatureEnergyLabels,
            imageAlt:
              "Notebook plot showing feature energy aligned with scaled voice activity labels across three training audio samples",
            notebook: {
              name: "04_Feature_Sanity_Check.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/04_Feature_Sanity_Check.ipynb",
            },
          },
        ],
      },
      {
        title: "Baseline and Noisy MLP Training",
        description:
          "A baseline MLP is trained on clean speech features, then an offline noisy MLP is trained on noisy examples using the same frame-level binary classification target for a fair robustness comparison.",
        timelineLayout: "stacked",
        steps: [
          {
            title: "MLP training and evaluation pipeline",
            text: "This pipeline diagram shows how the baseline and noisy MLP experiments move from audio input to frame-level VAD decisions. Clean or noisy audio is preprocessed, converted into log-mel, delta, delta-delta, and log-energy features, then context-stacked into a 1331-dimensional input vector. The MLP outputs one speech probability per frame, applies an F1-tuned threshold, converts probabilities into speech or non-speech labels, and evaluates the results with F1, false alarm rate, miss rate, and SNR-bucket metrics.",
            image: vadMlpTrainingPipeline,
            imageAlt:
              "Pipeline diagram for baseline and noisy MLP voice activity detection training and evaluation",
            layout: "stacked",
          },
          {
            title: "Validate the clean baseline MLP",
            text: "The clean baseline achieved strong performance, with the confusion matrix showing very few classification errors. Only 742 false positives and 3,947 false negatives were observed, compared with hundreds of thousands of correctly classified frames. The F1-score analysis indicates that a decision threshold of approximately 0.30 provides the best balance between precision and recall for the clean baseline model.",
            images: [
              {
                image: vadBaselineCleanConfusionMatrix,
                imageAlt:
                  "Notebook 05 confusion matrix for the clean baseline MLP",
                caption: "Confusion matrix",
              },
              {
                image: vadBaselineCleanThreshold,
                imageAlt:
                  "Notebook 05 F1 threshold tuning curve for the clean baseline MLP",
                caption: "F1 versus threshold",
              },
            ],
            notebook: {
              name: "05_Baseline_MLP_Validation_clean.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/05_Baseline_MLP_Validation_clean.ipynb",
            },
          },
          {
            title: "Test the clean baseline under noisy conditions",
            text: "Evaluation on noisy development data revealed a significant performance degradation for the clean-trained baseline. Although speech detection remained relatively strong, the model produced 258,936 false positives, suggesting poor robustness to background noise. This was further reflected in the ROC AUC of 0.6590, indicating reduced separability between speech and non-speech frames under noisy conditions.",
            images: [
              {
                image: vadBaselineNoisyConfusionMatrix,
                imageAlt:
                  "Notebook 05 confusion matrix for the clean baseline MLP evaluated on noisy dev data",
                caption: "Noisy-dev confusion matrix",
              },
              {
                image: vadBaselineNoisyRoc,
                imageAlt:
                  "Notebook 05 ROC curve for the clean baseline MLP evaluated on noisy dev data with AUC 0.6590",
                caption: "Noisy-dev ROC curve",
              },
            ],
            notebook: {
              name: "05_Baseline_MLP_Validation_noisy.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/05_Baseline_MLP_Validation_noisy.ipynb",
            },
          },
          {
            title: "Train and validate the noisy MLP",
            text: "An offline MLP was trained directly on noisy speech features and tuned using noisy development data. The confusion matrix shows a substantial reduction in false positives compared with the clean baseline, decreasing from 258,936 to 117,807. This indicates that noise-aware training improves the model's ability to distinguish noisy non-speech frames from speech. Analysis of F1 scores across decision thresholds shows that performance peaks at approximately 0.45, providing the best balance between precision and recall for the noisy MLP.",
            images: [
              {
                image: vadNoisyMlpConfusionMatrix,
                imageAlt:
                  "Notebook 06 confusion matrix for the noisy offline MLP evaluated on noisy dev data",
                caption: "Noisy MLP confusion matrix",
              },
              {
                image: vadNoisyMlpThreshold,
                imageAlt:
                  "Notebook 06 threshold tuning curve for the noisy offline MLP with best threshold 0.45",
                caption: "Noisy MLP threshold tuning",
              },
            ],
            notebook: {
              name: "06_Noisy_MLP_Validation.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/06_Noisy_MLP_Validation.ipynb",
            },
          },
        ],
      },
      {
        title: "Lazy Feature MLP and CRNN Training",
        description:
          "The lazy-feature stage tests and validates two noisy-feature models without relying only on precomputed frame files. The lazy MLP uses context-stacked frame samples from lazy noisy data, while the CRNN validates full lazy noisy sequences with convolutional and recurrent layers.",
        timelineLayout: "stacked",
        steps: [
          {
            title: "Lazy MLP and CRNN feature pipeline",
            text: "This pipeline diagram shows how augmented noisy audio is converted into on-the-fly frame features for both lazy models. The MLP path context-stacks frames before classification, while the CRNN path keeps full feature sequences for temporal convolution and recurrent modeling. Both paths then produce frame-level speech probabilities, apply post-processing thresholds, and evaluate final VAD decisions across noisy SNR conditions.",
            image: vadLazyMlpCrnnPipeline,
            imageAlt:
              "Pipeline diagram showing lazy noisy feature extraction feeding separate MLP and CRNN voice activity detection paths",
          },
          {
            title: "Test and validate the lazy noisy MLP",
            text: "Twelve lazy noisy MLP checkpoints were evaluated on 500 noisy development clips, covering 1,088,453 frame-level samples. The best-performing model, lazy_mlp_lr0.001_wd1e-5_dr0.0_seed42, achieved an F1 score of 0.8694, with 0.8288 precision and 0.9141 recall. Threshold tuning identified 0.45 as the optimal operating point, providing the best balance between precision and recall. The confusion matrix further illustrates the remaining trade-off between missed speech frames and false alarms caused by background noise.",
            images: [
              {
                image: vadLazyNoisyMlpConfusionMatrix,
                imageAlt:
                  "Notebook 07 confusion matrix for the best lazy noisy MLP checkpoint on dev-noisy features",
                caption: "Confusion matrix",
              },
              {
                image: vadLazyNoisyMlpThreshold,
                imageAlt:
                  "Notebook 07 threshold tuning curve for the lazy noisy MLP with best threshold 0.45",
                caption: "Threshold tuning",
              },
            ],
            notebook: {
              name: "07_Lazy_Noisy_MLP_Validation.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/07_Lazy_Noisy_MLP_Validation.ipynb",
            },
          },
          {
            title: "Test and validate the lazy noisy CRNN",
            text: "Eight lazy CRNN checkpoints were evaluated on 500 noisy development clips. The best-performing model, lazy_crnn_lr0.001_wd1e-5_dr0.1_seed42, achieved an F1 score of 0.9113, with 0.8943 precision and 0.9290 recall. Threshold tuning identified 0.65 as the optimal operating point, providing the best balance between precision and recall. The confusion matrix indicates that the CRNN produces fewer false alarms on noisy non-speech frames than the lazy MLP while maintaining strong speech detection performance.",
            images: [
              {
                image: vadLazyCrnnConfusionMatrix,
                imageAlt:
                  "Notebook 08 confusion matrix for the best lazy CRNN checkpoint on dev-noisy feature sequences",
                caption: "Confusion matrix",
              },
              {
                image: vadLazyCrnnThreshold,
                imageAlt:
                  "Notebook 08 threshold tuning curve for the lazy CRNN with best threshold 0.65",
                caption: "Threshold tuning",
              },
            ],
            notebook: {
              name: "08_CRNN_Validation.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/08_CRNN_Validation.ipynb",
            },
          },
        ],
      },
      {
        title: "Final Test Results",
        description:
          "The final notebook compares all tuned models on the held-out noisy test set, including SNR and noise-type breakdowns, to identify the strongest production candidate.",
        timelineLayout: "stacked",
        steps: [
          {
            title: "Compare tuned models on noisy test audio",
            text: "Notebook 09 evaluates five tuned VAD models on 500 noisy test clips with 1,086,683 frame-level samples. The lazy CRNN is the best overall model, reaching F1 0.9173, accuracy 0.8829, precision 0.8962, and recall 0.9395. Compared with the strongest noisy MLP baseline at F1 0.8815, the CRNN improves final test robustness while reducing false alarms to 0.2439.",
            image: vadTestNoisyModelLeaderboard,
            imageAlt:
              "Notebook 09 final noisy test leaderboard comparing F1, precision, recall, false alarm rate, and miss rate across tuned VAD models",
            notebook: {
              name: "09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
            },
          },
          {
            title: "F1, FAR, and MR per SNR bucket for each model",
            text: "The SNR breakdown shows how the tuned models behave from -5 dB to 20 dB. The lazy CRNN keeps the highest F1 at every SNR bucket, rising from 0.8859 at -5 dB to 0.9445 at 20 dB. It also has the lowest false alarm rate across SNR buckets, while miss rate stays low enough to preserve strong speech recall under heavy noise.",
            images: [
              {
                image: vadTestNoisyF1BySnr,
                imageAlt:
                  "Notebook 09 F1 by SNR bucket chart comparing tuned models from -5 to 20 dB",
                caption: "F1 by SNR bucket",
              },
              {
                image: vadTestNoisyFarBySnr,
                imageAlt:
                  "Notebook 09 false alarm rate by SNR bucket chart comparing tuned models from -5 to 20 dB",
                caption: "FAR by SNR bucket",
              },
              {
                image: vadTestNoisyMrBySnr,
                imageAlt:
                  "Notebook 09 miss rate by SNR bucket chart comparing tuned models from -5 to 20 dB",
                caption: "MR by SNR bucket",
              },
            ],
            notebook: {
              name: "09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
            },
          },
          {
            title: "F1, FAR, and MR per noise type for each model",
            text: "The noise-type breakdown compares babble, music, and generic noise. The lazy CRNN is strongest overall on music and generic noise, with F1 0.9004 on music and 0.9259 on noise, and it keeps false alarms far below the clean-trained baselines. Babble remains highly competitive across models, but the CRNN provides the most balanced final-test behavior across all noise types.",
            images: [
              {
                image: vadTestNoisyF1ByNoiseType,
                imageAlt:
                  "Notebook 09 F1 by noise type chart comparing tuned models on babble, music, and noise",
                caption: "F1 by noise type",
              },
              {
                image: vadTestNoisyFarByNoiseType,
                imageAlt:
                  "Notebook 09 false alarm rate by noise type chart comparing tuned models on babble, music, and noise",
                caption: "FAR by noise type",
              },
              {
                image: vadTestNoisyMrByNoiseType,
                imageAlt:
                  "Notebook 09 miss rate by noise type chart comparing tuned models on babble, music, and noise",
                caption: "MR by noise type",
              },
            ],
            notebook: {
              name: "09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
            },
          },
          {
            title: "Final conclusion",
            text: "The final noisy-test comparison shows that the lazy CRNN is the strongest model for robust voice activity detection. It delivers the best overall F1 score, keeps false alarms lower than the MLP-based approaches, and remains consistently strong across SNR buckets and noise types. The results support using sequence-aware lazy feature modeling as the final model because it preserves speech recall while handling realistic background noise more reliably.",
            notebook: {
              name: "09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
              url: "https://github.com/SharonHuang77/Noise-Robust-Voice-Activity-Detection-FINAL/blob/main/notebooks/09_Test_Noisy_Model_Comparison_By_SNR_NoiseType.ipynb",
            },
          },
        ],
      },
      {
        title: "Reproducible Experiment Workflow",
        description:
          "Docker, shell scripts, configurable environment variables, checkpoints, and sweep options make it possible to rerun data generation, feature extraction, model training, and hyperparameter experiments consistently.",
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
