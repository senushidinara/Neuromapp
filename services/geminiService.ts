// This file is repurposed to provide static data for the dashboard prototype.
import { IMAGES } from '../assets';

export const DATA = {
  riskScore: 73,
  confidence: 'Medium (±12%)',
  temporalData: [20, 30, 25, 45, 60, 75, 73], // Last 7 days
  featureImportance: [
    { label: 'Theta/Beta Ratio', value: 90 },
    { label: 'Frontal Asymmetry', value: 75 },
    { label: 'Alpha Power', value: 40 },
  ],
  recommendations: [
    "Elevated frontal lobe activity suggests high cognitive load.",
    "Monitor temporal risk trends for consistent increases.",
    "Consult a specialist if risk remains high.",
  ],
  community: {
    sessions: 47,
    peers: 12
  },
  roadmap: [
    { phase: 0, title: "Planning & Strategy", status: "complete", details: "Define scope, stakeholders, and timeline." },
    { phase: 1, title: "Prototype Development", status: "complete", details: "Build a working simulation of the cognitive risk workflow." },
    { phase: 2, title: "Community Engagement", status: "active", details: "Collect early-stage proof of social impact and community need." },
    { phase: 3, title: "Prototype Summary & Ethics", status: "next", details: "Package technical and ethical commitments into public-facing documents." },
    { phase: 4, title: "Letters & Endorsements", status: "next", details: "Acquire credible endorsements to strengthen research standing." },
    { phase: 5, title: "Documentation & Submission", status: "next", details: "Package all artifacts into a cohesive, ready-to-submit folder." },
    { phase: 6, title: "Research Validation", status: "future", details: "Leverage project artifacts to initiate formal academic/clinical research." },
  ],
  ethics: [
    { title: "Honesty & Transparency", description: "Clearly mark prototype stage (not clinically validated)." },
    { title: "Documentation-First", description: "All outputs (letters, reports, code) are reusable artifacts." },
    { title: "Open-Source & Ethical", description: "Emphasize accessibility and low-resource viability." },
    { title: "Stepwise Scaling", description: "Hackathon → Research Validation → Full Deployment." },
  ]
};

export const NARRATION = {
  urban_intro: "This is Elena, a 72-year-old living in the city. She's visiting a local clinic for a routine cognitive health check-up using the NeuroMapping system.",
  urban_results: "The analysis is complete. Elena's results indicate a medium cognitive risk score, with high activity in the frontal regions. The system provides personalized recommendations for her to discuss with her doctor.",
  rural_intro: "Here is Anya, a community health worker in a rural village. She is using a portable NeuroMapping kit to conduct cognitive health awareness sessions with local elders.",
  rural_results: "The screening is complete. The results are simplified for immediate feedback, helping Anya identify individuals who may need further consultation and providing valuable data for community health planning.",
  caregiver_intro: "Meet David, a caregiver for his father, Robert, who is showing early signs of memory loss. David is using NeuroMapping at home to better understand his father's condition and provide proactive support.",
  caregiver_results: "The results provide David with clear insights into his father's cognitive patterns, helping him tailor daily activities and communication. It's a tool for empathy and better care.",
  corporate_intro: "This is Sarah, a project manager at a fast-paced tech company. Her employer offers NeuroMapping as part of a wellness program to help manage stress and prevent burnout.",
  corporate_results: "Sarah's scan reveals a high cognitive load. The system suggests mindfulness exercises and better break scheduling. This helps her, and her employer, prioritize mental well-being and maintain peak performance sustainably.",
  education_intro: "Leo is a bright 10-year-old student who has been struggling with focus in the classroom. A school counselor is using NeuroMapping to understand his attention patterns in a non-invasive way.",
  education_results: "The assessment identifies patterns consistent with attention difficulties. This data empowers the school to provide Leo with a personalized learning plan and the specific support he needs to thrive.",
};

export const SCENARIOS = [
  { 
    id: 'urban',
    title: 'Urban Clinic', 
    description: 'A proactive 72-year-old gets a routine cognitive check-up.',
    image: IMAGES.urban_clinic,
    imageGallery: IMAGES.device_gallery || [],
    component: 'UrbanScenarioTab'
  },
  { 
    id: 'rural',
    title: 'Rural Village', 
    description: 'A health worker runs a community screening in a low-resource area.',
    image: IMAGES.rural_village,
    imageGallery: IMAGES.rural_gallery || [],
    component: 'RuralScenarioTab'
  },
  {
    id: 'caregiver',
    title: "A Caregiver's Story",
    description: 'A son supports his aging father by monitoring his cognitive health at home.',
    image: IMAGES.caregiver_story,
    imageGallery: IMAGES.device_gallery || [],
    component: 'CaregiverScenarioTab'
  },
  {
    id: 'corporate',
    title: 'Workplace Wellness',
    description: 'An employee uses the system to manage cognitive load and prevent burnout.',
    image: IMAGES.corporate_wellness,
    imageGallery: IMAGES.dashboard_gallery || [],
    component: 'CorporateScenarioTab'
  },
  {
    id: 'education',
    title: 'Educational Support',
    description: 'A school counselor helps a student by identifying and addressing attention issues.',
    image: IMAGES.education_support,
    imageGallery: IMAGES.education_gallery || [],
    component: 'EducationScenarioTab'
  }
];
