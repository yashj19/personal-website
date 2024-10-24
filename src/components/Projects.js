import React from 'react';
import ProjectCard from './ProjectCard';
import { PRIMARY } from '../constants';

const Project = () => {
  // Array of dummy project data
  const projects = [
    {
      id: 1,
      title: 'CadenceDB',
      subtitle: 'Caching database (key-value store) that supports replication with a master-slave architecture. Working on turning this into a full, real-time, NoSQL database.',
      imageSrc: '/assets/CadenceDB.png',
      githubLink: 'https://github.com/RubiksCoder/Cadence',
      skills: ["Go"]
    },
    {
      id: 2,
      title: 'Self Driving Car',
      subtitle: 'A small lane-following car made by training a CNN in TensorFlow.',
      imageSrc: '/assets/SelfDrivingCar.png',
      githubLink: 'https://github.com/RubiksCoder/Self-Driving-Car',
      skills: ["Tensorflow", "TFLite", "OpenCV", "RaspberryPi", "Python"]
    },
    {
      id: 3,
      title: 'LANGlass',
      subtitle: 'Hack The North 2023: Mapped user gaze to a video stream to identify viewed objects in a different languages.',
      imageSrc: '/assets/LANGlass.png',
      githubLink: 'https://devpost.com/software/langlass',
      skills: ["PyTorch", "YoloV5", "OpenCV", "Python"]
    },
    {
      id: 4,
      title: 'ShakespeareGPT',
      subtitle: 'A character-level text generating transformer to generate unlimited Shakespeare!',
      imageSrc: '/assets/ShakespeareGPT.png',
      githubLink: 'https://github.com/RubiksCoder/ShakespeareGPT',
      skills: ["PyTorch", "Python"]
    },
    {
      id: 5,
      title: 'Snip',
      subtitle: 'Hack the North 2024: A screenshot manager tool to extract various features from screenshots and organize them into a table.',
      imageSrc: '/assets/Snip.png',
      githubLink: 'https://devpost.com/software/snip-395suc',
      skills: ["Rust", "Tauri", "React", "Tailwind"]
    },
    {
      id: 6,
      title: 'TalkieAI',
      subtitle: 'Hack With AI 2024: A personal AI calling assistant to make and have calls for you, given who to call and an intent.',
      imageSrc: '/assets/TalkieAI.png',
      githubLink: 'https://devpost.com/software/talkie-ai',
      skills: ["Flask", "Python", "Vue", "Gradio", "Gemini API"]
    },
    {
      id: 7,
      title: 'LectureGPT',
      subtitle: 'A RAG-based chatbot to answer questions about audio recordings (intended for use in university lectures).',
      imageSrc: '/assets/LectureGPT.png',
      githubLink: 'https://github.com/RubiksCoder/LectureGPT',
      skills: ["LangChain", "Cohere API", "Gradio", "Python"]
    },
    {
      id: 8,
      title: 'Rocket Escape',
      subtitle: 'A short 3d game in which the player has to maneuver a rocket around obstacles.',
      imageSrc: '/assets/RocketBlast.png',
      githubLink: 'https://github.com/RubiksCoder/rocket-game-3d',
      skills: ["Unity", "C#"]
    },
  ];

  return (
    <div id="projects" className="flex flex-col justify-center items-center py-16 bg-gray-100">
      <h2 className={"text-4xl font-bold text-center mb-12 underline underline-offset-[10px] decoration-8 decoration-[#3bb399]"}>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            subtitle={project.subtitle}
            githubLink={project.githubLink}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
