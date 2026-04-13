export const portfolioData = {
  personal: {
    name: "Abhay Tiwari",
    role: "Aspiring Software Developer",
    objective: "Passionate developer focusing on scalable Backend Systems with Java/Spring Boot and creating intuitive Full Stack experiences. Proficient in Data Structures and Algorithms with a strong problem-solving mindset demonstrated on LeetCode. Deeply curious about AI and interested in Prompt Engineering to bridge the gap between human intent and machine execution."
  },
  skills: {
    programming: ["Java", "JavaScript", "TypeScript"],
    coreCS: ["Data Structures & Algorithms", "Object-Oriented Programming (OOPs)", "System Design Basics"],
    frontend: ["HTML", "CSS", "React", "Tailwind CSS"],
    backend: ["Spring Boot", "Node.js"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    databases: ["MySQL", "PostgreSQL"],
    // ai: ["Prompt Engineering", "LLM Integration", "Chain-of-Thought Patterns"]
  },
  achievements: [
    "Consistent LeetCode problem solver demonstrating strong analytical skills.",
    "Built multiple full-stack applications with React & Java.",
    "Certified in java from infosys springboard."
  ],
  passionHobbies: [
    "Exploring new technologies and AI/ML capabilities.",
    "Watching tech videos and deep-diving into system design.",
    "Problem-solving and continuous learning.",
    "Improving communication and public speaking."
  ],
  contact: {
    email: "2k23.cs2314007@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhay-tiwari-2a3b74307/",
    github: "https://github.com/AbhayTiwari26",
    leetcode: "https://leetcode.com/coderAbhay07"
  },
  prompts: [
    {
      id: "p1",
      title: "Interactive Web App Generation",
      problem: "LLMs often generate flat, non-interactive code without understanding the user's need for a modern, animated standard.",
      prompt: "Act as a senior frontend architect. Generate an interactive 3D portfolio layout. Use React Three Fiber for 3D elements and Framer Motion for UI overlays. Ensure code is modular with generic components for lights, scene, and objects.",
      output: "Abstracted codebase with Custom Hooks, Scene management, and Context API integration with seamless framer motion layout transitions.",
      whyItWorks: "Assigns a clear persona (Frontend Architect), specifies the exact technology stack, and demands modular architecture, forcing the LLM to output production-ready structured abstractions rather than loose snippets."
    },
    {
      id: "p2",
      title: "Complex Backend Logic Setup",
      problem: "Generating business logic in Java often results in tightly coupled, untested code blocks.",
      prompt: "Write a Spring Boot service for user checkout. Implement Chain of Responsibility pattern for validation. Include edge cases for concurrency control. Use constructor injection.",
      output: "A well-structured Service class leveraging Spring validation, `@Transactional` annotations, and isolating business logic into handlers.",
      whyItWorks: "Restricts the output pattern (Chain of Responsibility), demands specific considerations (concurrency), and forces modern dependency injection standards."
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "E-Commerce Backend System",
      stack: "Java, Spring Boot, MySQL",
      features: "User authentication, cart management, and secure checkout using stateless JWT.",
      learned: "Deepened knowledge in relational database design, ACID properties, and scalable backend architecture."
    },
    {
      id: "proj2",
      title: "AI-Powered Coding Assistant UI",
      stack: "React, Tailwind, Framer Motion",
      features: "Real-time prompt testing interface with side-by-side output comparison and chat history.",
      learned: "Mastered state management, smooth UI transitions, and component reusability."
    }
  ]
};
