export default function getGuidance({ skills = "", interest = "", goal = "" }) {

  const goalLower = goal?.toLowerCase() || "";
  const interestLower = interest?.toLowerCase() || "";

  // WEB / FRONTEND
  if (goalLower.includes("web") || goalLower.includes("frontend")) {
    return {
      advice: `Since you know ${skills}, learn React and Tailwind.`,
      steps: ["Build projects", "Learn Git", "Deploy apps"],
      link: "https://roadmap.sh/frontend"
    };
  }

  // BACKEND
  if (goalLower.includes("backend")) {
    return {
      advice: `Focus on Node.js, Express, and databases.`,
      steps: ["Learn APIs", "Work with MongoDB", "Build backend apps"],
      link: "https://roadmap.sh/backend"
    };
  }

  // DATA
  if (goalLower.includes("data") || interestLower.includes("data")) {
    return {
      advice: `Learn Python, SQL, and data visualization.`,
      steps: ["Pandas", "PowerBI", "Projects"],
      link: "https://roadmap.sh/data-analyst"
    };
  }

  // AI / ML
  if (goalLower.includes("ai") || goalLower.includes("machine learning")) {
    return {
      advice: `Start with Python, ML basics, and projects.`,
      steps: ["Learn ML", "Use TensorFlow", "Build models"],
      link: "https://roadmap.sh/ai"
    };
  }

  // DEFAULT 
  return {
    advice: `Based on your interest in ${interest}, start with fundamentals and build projects.`,
    steps: ["Learn basics", "Practice daily", "Build portfolio"],
    link: "https://roadmap.sh"
  };
}