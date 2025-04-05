// src/components/Resume.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faCloud, faCodeBranch, faRobot, faDatabase, faBrain, faProjectDiagram, faTools } from '@fortawesome/free-solid-svg-icons';
import { faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import './Resume.css';

const skillsData = [
    {
        category: "Operating System Familiarity",
        icon: faLinux,
        skills: [
            "Linux based system (Ubuntu, REHL)"
        ]
    },
    {
        category: "AI Familiarity",
        icon: faBrain,
        skills: [
            "Deep Learning Libraries",
            "PyTorch, PyTorch Lightning, TensorFlow 2",
            "Deep Learning Model Inference",
            "NVIDIA Triton, TensorRT, CUDA",
            "Vector Databases",
            "Pinecone, Milvus, Weaviate",
            "LLM Pre-training",
            "GPT2, Llama2",
            "LLM Finetune",
            "SFT, Adapter, LoRa",
            "LLM Inference",
            "NVIDIA TensorRTLLM, VLLM",
            "Generative AI Skills",
            "RAG, knowledge graph, Agents (Langraph), Guardsrails (Nvidia remo guardrails)",
        ]
    },
    {
        category: "Robotics Familiarity",
        icon: faRobot,
        skills: [
            "Robotics middleware",
            "ROS 1, ROS 2",
            "Robotics simulators",
            "Gazebo, Ignition, Webots",
            "Robotics Design",
            "Solidworks, Siemens NX9",
            "Vision library",
            "OpenCV",
            "Web dev (react - beginner)",
            "Programming IDE (Pycharm, Clion, Visual Studio code)"
        ]
    },
    {
        category: "Programming Proficiency",
        icon: faPython,
        skills: [
            "Python",
            "C++"
        ]
    },
    {
        category: "Hardware Knowledge",
        icon: faCubes,
        skills: [
            "Embedded Systems/Edge Computing",
            "Raspberry Pi",
            "Nvidia Jetson TX2 and Jetson Nano",
            "Arduino",

            "Deep Learning Training",
            "NVIDIA DGX 1",
            "IBM Power AI",
            "NVIDIA A100",
            "NVIDIA H100",

            "Deep Learning Inference",
            "NVIDIA L40s",
            "NVIDIA T4",
            "NVIDIA A2",
            "NVIDIA A30",
            "NVIDIA A4000"
        ]
    },
    {
        category: "Cloud Knowledge",
        icon: faCloud,
        skills: [
            "AWS",
            "GCP",
            "Alibaba Cloud"
        ]
    },
    {
        category: "Source Control",
        icon: faCodeBranch,
        skills: [
            "Git"
        ]
    }
];

const Resume = () => {
    return (
        <div className="resume">
            <h2>My Resume</h2>

            {/* Generative AI Experience Section */}
            <div className="section">
                <h3>Generative AI Experience</h3>
                <ul>
                    <li>
                        <strong className="job-title-company">Senior Engineer (AI and Robotics), President Information Corporation, (Taiwan)  Jul 2023 - Now</strong>

                        <ul className="responsibilities">
                            <li><em>Responsibilities:</em> Search Engine (Hybrid Search), Recommendation Engine and Reranker, Digital Twin (Nvidia Omniverse), LLM pre-training and fine-tuning LLM, RAG (Vector, Graph).</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="job-title-company">Technology Manager (AI and Robotics), Gosoft Call Center, CP ALL (Thailand)   Apr 2021 - Jul 2023</strong>

                        <ul className="responsibilities">
                            <li><em>Responsibilities:</em> Conversational AI Development (Robot’s voice - STT, TTS and NLP), Triton Inference Implementation and optimization (STT and TTS), Scaling (Kubernetes), Audio2Face implementation for Thai voice.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>NVIDIA GTC 2022 (Guest speaker)</strong>: Enabling Fast-path to Large-Language-Model Based AI applications
                    </li>
                    <li>
                        <strong>NVIDIA GTC 2022 (Co presenter)</strong>: Search Engine for Retail Online Shopping using NVIDIA Triton for High Volume of User Connections
                    </li>
                    <li>
                        <strong>NVIDIA GTC 2021 (Co presenter)</strong>: Thai Smart Call Center
                    </li>
                </ul>
            </div>

            {/* Robotics Experience Section */}
            <div className="section">
                <h3>Robotics Experience</h3>
                <ul>
                    <li>
                        <strong className="job-title-company">Senior Robotics Engineer, Cal-Comp Electronics (Thailand) Public Co., Ltd.  Aug 2018 - Feb 2021</strong>

                        <ul className="responsibilities">
                            <li><em>Responsibilities:</em> Autonomous indoor robots&#39; development (Lidar & vision-based Localization, 3D and 2D slam navigation and control), Robot&#39;s voice [ Text to speech ].</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="job-title-company">Masters Mechatronics Engineering Intern, AME, Western Digital (Thailand)  Jul 2017 - June 2018</strong>

                        <ul className="responsibilities">
                            <li><em>Responsibilities:</em> Designed and worked on a fully autonomous intelligent Vehicle as part of my master thesis. Developed the navigation, localization, and control of the robot in programs such as ROS.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Education Section */}
            <div className="section">
                <h3>Education</h3>
                <ul>
                    <li className="education-item">
                        <strong>Masters of Engineering in Mechatronics Engineering, Asian Institute of Technology, Thailand (2016 - 2018)</strong>
                    </li>
                    <li className="education-item">
                        <strong>Bachelor&#39;s Degree in Mechatronics Engineering, Asian Institute of Technology, Thailand (2012 - 2016)</strong>
                    </li>
                </ul>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
                {skillsData.map((skillCategory, index) => (
                    <div className="skill-card" key={index}>
                        <h4><FontAwesomeIcon icon={skillCategory.icon} style={{ marginRight: '8px' }} />{skillCategory.category}</h4>
                        <ul>
                            {skillCategory.skills.map((skill, subIndex) => {
                                // Check if the skill is a category header OR a sub-heading
                                if (
                                    ["Embedded Systems/Edge Computing", "Deep Learning Training", "Deep Learning Inference"].includes(skill) ||
                                    ["Deep Learning Libraries", "Deep Learning Model Inference", "Vector Databases", "LLM Pre-training", "LLM Finetune", "LLM Inference",  "Generative AI Skills", "Robotics middleware", "Robotics simulators", "Robotics Design", "Vision library"].includes(skill)
                                ) {
                                    return (
                                        <li key={subIndex}>
                                            <strong>{skill}</strong>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={subIndex}><span>{skill}</span></li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;