// src/components/Portfolio.jsx
import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel'; // Import the carousel
import './Portfolio.css';

const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // --- MODIFIED portfolioData ---
    const portfolioData = {
        conferences: [
            {
                id: 'conf1',
                title: 'NVIDIA AI Summit & COMPUTEX Keynote 2024, Taipei',
                shortDesc: 'Engaged in key NVIDIA collaborations, attended Jensen Huang\'s keynote, and participated in developer meetups.',
                ullDesc: 'Actively participated in the NVIDIA AI Summit and related events in Taipei (June 2024). Attended the inspiring COMPUTEX 2024 Keynote by CEO Jensen Huang, witnessing groundbreaking announcements driving the AI industrial revolution, including the Blackwell GPU, advancements in cuDF, Earth-2 climate prediction, multimodal LLMs for robotics, ACE, NIMS, and more. Held a significant meeting with NVIDIA Tech Director Ettikan K Karuppiah and Dev Manager Wei Jing (William) Wong to discuss our progress leveraging NVIDIA platforms (Jetson/Metropolis, Nemo LLM, Triton, Rapids, Omniverse) for key retail AI initiatives. Additionally, attended an exclusive NVIDIA AI Summit Developer Meetup, where I shared insights on the Taipei AI industry and experienced a surprise talk by Jensen Huang.',
                date: 'June 2024',
                // Use 'images' array - even for one image
                images: [
                    '/shashika.dharmasena/images/nvidia-taipei1.jpg', // Example path 1
                    '/shashika.dharmasena/images/nvidia-taipei2.jpg', // Example path 1
                    '/shashika.dharmasena/images/nvidia-taipei3.jpeg', // Example path 2
                    '/shashika.dharmasena/images/nvidia-taipei4.jpg',  // Example path 3
                    '/shashika.dharmasena/images/nvidia-taiepi5.JPG'   // Example path 4
                ],
                link: 'https://register.nvidia.com/events/widget/nvidia/aisummittaiwan/catalogtw?_gl=1*1ssdrij*_gcl_au*MzUxMzI2NjYxLjE3MTA4NDA5MjI'
            },
            {
                id: 'conf2',
                title: 'Google Cloud Summit 2024, Taipei',
                shortDesc: 'Co-presented a semantic search demo in the AWS Bedrock & OpenSearch session.',
                fullDesc: 'Participated in the AWS Smart Retail Forum 2024 in Taipei (March 28). Contributed to the technical session titled "Boosting AI with RAG Bedrock and OpenSearch: Key to Customer Satisfaction and Growth" alongside Areoll (VP, President Information Corp.) and Ray Wang (Sr. Solutions Architect, AWS). During this session, I assisted in demonstrating our AI-powered semantic search solution for e-commerce, showcasing its capability to understand both text and image queries using technologies relevant to the session like RAG and OpenSearch to enhance product discovery and customer satisfaction. The forum focused on leveraging AWS cloud and AI for the new era of retail, providing excellent opportunities for networking with industry professionals.',
                date: 'June 2024',
                images: ['/shashika.dharmasena/images/google_cloud_summit1.jpg',
                    '/shashika.dharmasena/images/google_cloud_summit2.jpg',
                    '/shashika.dharmasena/images/google_cloud_summit3.jpg',
                    '/shashika.dharmasena/images/google_cloud_summit4.jpg',
                ],
                link: 'https://cloudonair.withgoogle.com/events/summit-taipei-2024'
            },
            {
                id: 'conf3',
                title: 'Presentation at Google Taipei: Scalable Retail Hybrid Search',
                shortDesc: 'Presented our scalable hybrid search solution built on GKE, Triton & custom models.',
                fullDesc: 'Delivered a presentation at the Google Taipei office detailing our annual progress on developing and deploying a scalable hybrid search solution tailored for the retail sector. Explained the architecture, highlighting the use of Google Kubernetes Engine (GKE) clusters for search client management and a dedicated GPU-enabled GKE cluster leveraging Autopilot for efficient scaling. Detailed how this GPU cluster runs NVIDIA Triton Inference Server to serve our custom embedding and re-ranker models, which were specifically fine-tuned for Traditional Chinese to optimize search relevance in our target market.',
                date: 'May 2024',
                images: ['/shashika.dharmasena/images/google_presentation1.JPG',
                    '/shashika.dharmasena/images/google_presentation2.JPG',
                ],
                link: ''
            },
            {
                id: 'conf4',
                title: 'Google Next \'24, Las Vegas',
                shortDesc: 'Immersive conference focused on Generative AI advancements and industry connections.',
                fullDesc: 'Attended Google Next \'24 in Las Vegas (April 2024), an electrifying conference diving deep into the future of generative AI. Gained valuable insights from keynotes on Google Cloud\'s vision and explored sessions on Generative AI agents, Hugging Face advancements, LangChain integration with Vertex AI (presented by CEO Harrison Chase), and Anthropic\'s perspective (from CEO Dario Amodei). Engaged in a significant discussion with Bob van Luijt (CEO, Weaviate) about implementing hybrid search approaches in Taiwan\'s retail sector. The conference served as a prime platform for networking, knowledge sharing, and initiating potential R&D partnerships with several companies met during the event.',
                date: 'April 2024',
                // Use 'images' array
                images: [
                    '/shashika.dharmasena/images/google_cloud_next1.JPG', // Example path 1
                    '/shashika.dharmasena/images/ai-summit.jpg', // Example path 1
                    '/shashika.dharmasena/images/google_cloud_next2.JPG', // Example path 2
                    '/shashika.dharmasena/images/google_cloud_next3.JPG'  // Example path 3
                ],
                link: 'https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next24'
            },
            {
                id: 'conf5',
                title: 'AWS Smart Retail Forum 2024, Taipei',
                shortDesc: 'Co-presented a semantic search demo in the AWS Bedrock & OpenSearch session.',
                fullDesc: 'Participated in the AWS Smart Retail Forum 2024 in Taipei (March 28). Contributed to the technical session titled "Boosting AI with RAG Bedrock and OpenSearch: Key to Customer Satisfaction and Growth" alongside Areoll (VP, President Information Corp.) and Ray Wang (Sr. Solutions Architect, AWS). During this session, I assisted in demonstrating our AI-powered semantic search solution for e-commerce, showcasing its capability to understand both text and image queries using technologies relevant to the session like RAG and OpenSearch to enhance product discovery and customer satisfaction. The forum focused on leveraging AWS cloud and AI for the new era of retail, providing excellent opportunities for networking with industry professionals.',
                date: 'March 2024',
                images: ['/shashika.dharmasena/images/aws_event1.JPG',
                    '/shashika.dharmasena/images/aws_event2.JPG',
                    '/shashika.dharmasena/images/aws_event3.JPG',
                    '/shashika.dharmasena/images/aws_event4.JPG',
                ],
                link: 'https://aws.amazon.com/tw/events/retail/'
            },
            {
                id: 'conf6',
                title: 'NVIDIA GTC Watch Party: Fast-path to LLM AI Applications',
                shortDesc: 'Attended GTC session on accelerating development of LLM-based AI applications.',
                fullDesc: 'Participated in the NVIDIA GTC Watch Party titled "Enabling Fast-path to Large-Language-Model Based AI applications" [WP41199b]. The session focused on strategies and techniques for efficiently developing AI applications using customized Large Language Models (LLMs). Key topics included leveraging state-of-the-art techniques and NVIDIA\'s ecosystem, specifically highlighting the NVIDIA NeMo LLM Service, to make advanced LLM application development more accessible. This event also provided a platform to engage with peers and share practical insights from my own experience implementing and working with LLMs.',
                date: 'September 2022',
                images: ['/shashika.dharmasena/images/gtc_v3.jpg',
                ],
                link: 'https://lnkd.in/edqy5qxe'
            },
            {
                id: 'conf7',
                title: 'NVIDIA GTC 2022 (Co-presenter): Retail Search Engine [S41603]',
                shortDesc: 'Co-presented on building a retail search engine with Triton, featuring Thai voice search via NVIDIA Conversational AI.',
                fullDesc: 'Co-presented at NVIDIA GTC Spring 2022 in the session titled "Search Engine for Retail Online Shopping using NVIDIA Triton for High Volume of User Connections" [S41603]. Detailed the development of an AI-powered search engine tailored for the Thai online retail market. Showcased the implementation of a voice search function leveraging Thai Automatic Speech Recognition (ASR), significantly optimized using the NVIDIA Conversational AI Platform to achieve ~95% transcription accuracy, allowing users efficient voice input. Also discussed the utilization of NVIDIA Triton Inference Server to effectively manage high volumes of user connections for the search service.',
                date: 'Spring 2022',
                images: ['/shashika.dharmasena/images/nvidia-gtc-v2.jpeg',
                ],
                link: 'https://www.nvidia.com/en-us/on-demand/session/gtcspring22-s41603/'
            },
            {
                id: 'conf8',
                title: 'NVIDIA GTC 2021 (Co-presenter): Conversational AI for Smart Call Center [A31283]',
                shortDesc: 'Presented on a Thai retail smart call center voice chatbot using NVIDIA Conversational AI, reducing agent load by 60%.',
                fullDesc: 'Presented/Co-presented (please confirm your role) at NVIDIA GTC Fall 2021 in the session focusing on Conversational AI in a smart call center for the Thai retail market [A31283]. Detailed the implementation of an end-to-end voice chatbot designed to support human agents. Explained how combining Interactive Voice Response (IVR), SIP calls, and the NVIDIA Conversational AI platform enabled the chatbot to handle frequent user Q&A, resulting in a significant 60% reduction in human agent loading. Shared insights on realizing the call center service application using NVIDIA\'s platform and strategies employed to address and solve latency challenges.',
                date: 'Fall 2021',
                images: ['/shashika.dharmasena/images/nvidia-gtc-v1.jpeg',
                ],
                link: 'https://www.nvidia.com/en-us/on-demand/session/gtcfall21-a31283/'
            },
            {
                id: 'conf9',
                title: 'IEEE ROS 2.0 International Industrial Summit 2019, Taipei',
                shortDesc: 'Attended ROS 2.0 summit, showcased robotics dev (New Era AI), met Open Robotics CEO.',
                fullDesc: 'Attended the 2019 IEEE International Industrial Summit on Robot Operation System 2.0 in Taipei, representing New Era AI Robotics. Gained in-depth knowledge about the advancements and direction of ROS 2.0, a crucial platform for robotics development. Showcased our company\'s progress in robotics applications during the event. The summit provided invaluable networking opportunities, including a significant interaction with Brian Gerkey (CEO, Open Robotics) and discussions with other influential figures, such as key individuals involved in the development of platforms like Intel\'s OpenVINO.',
                date: 'May 2019',
                images: ['/shashika.dharmasena/images/ros-summit1.jpeg',
                    '/shashika.dharmasena/images/ros-summit2.jpeg',
                ],
                link: 'http://go.adlinktech.com/rs/731-NFP-575/shashika.dharmasena/images/20190506_ROS2_TW_ROS2_Summit_English.html'
            }


        ],
        aiProjects: [
            {
                id: 'ai1',
                title: 'Digital Twin: Audio-to-Face Synthesis',
                shortDesc: 'Developed audio-to-face animation for digital twins using NVIDIA Omniverse.',
                fullDesc: 'Contributed to a Digital Twin project focusing on implementing realistic audio-to-face synthesis. Leveraged NVIDIA Omniverse capabilities to create dynamic facial animations driven directly by audio input, enhancing the expressiveness and realism of digital human representations.',
                technologies: ['NVIDIA Omniverse', 'Python', 'AI/Deep Learning', '3D Animation', 'Audio Processing'],
                images: [
                    '/shashika.dharmasena/images/audio-2-face.png',

                ],
                github: ''
            },
            {
                id: 'ai2',
                title: 'Custom Thai Text-to-Speech (TTS) System',
                shortDesc: 'Trained and deployed a custom Thai TTS model using NVIDIA Triton for GPU inference.',
                fullDesc: 'Led the development lifecycle of a custom Text-to-Speech (TTS) model specifically for the Thai language. This involved training the model for natural-sounding voice output, optimizing it for high-performance GPU inference, and successfully deploying it using NVIDIA Triton Inference Server in a production environment.',
                technologies: ['Text-to-Speech (TTS)', 'Python', 'Deep Learning', 'NVIDIA Triton', 'GPU Computing', 'Thai Language Processing', 'Model Optimization'],
                images: ['/shashika.dharmasena/images/text-to-speech.png'],
                github: ''
            },
            {
                id: 'ai3',
                title: 'Predictive Maintenance AI',
                shortDesc: 'Machine learning for equipment failure prediction',
                fullDesc: 'Built a predictive maintenance system using machine learning to forecast equipment failures in manufacturing plants. Reduced unplanned downtime by 35% and maintenance costs by 25%.',
                technologies: ['Scikit-learn', 'Pandas', 'Time Series Analysis', 'Azure ML'],
                images: [
                    '/shashika.dharmasena/images/predictive-maintenance-1.jpg',
                    '/shashika.dharmasena/images/predictive-maintenance-2.jpg',
                    '/shashika.dharmasena/images/predictive-maintenance-3.jpg'
                ],
                github: 'https://github.com/yourusername/predictive-maintenance'
            }
        ],
        roboticsProjects: [
            {
                id: 'rob1',
                title: 'Autonomous Drone Navigation',
                shortDesc: 'SLAM-based navigation system for drones',
                fullDesc: 'Designed and implemented a SLAM (Simultaneous Localization and Mapping) system for autonomous drone navigation in GPS-denied environments. The system enables drones to create maps of unknown environments and navigate through them safely.',
                technologies: ['ROS', 'C++', 'SLAM', 'Computer Vision', 'Sensor Fusion'],
                images: ['/shashika.dharmasena/images/drone-navigation.jpg'],
                github: 'https://github.com/yourusername/drone-navigation'
            },
            {
                id: 'rob2',
                title: 'Robotic Arm for Precision Assembly',
                shortDesc: 'Industrial robotic arm with advanced control',
                fullDesc: 'Developed a control system for a 6-DOF robotic arm used in precision assembly tasks. Implemented inverse kinematics algorithms and force feedback control to achieve sub-millimeter accuracy.',
                technologies: ['Python', 'ROS', 'Control Theory', 'CAD', 'Arduino'],
                images: [
                    '/shashika.dharmasena/images/robotic-arm-1.jpg',
                    '/shashika.dharmasena/images/robotic-arm-2.jpg'
                ],
                github: 'https://github.com/yourusername/robotic-arm'
            },
            {
                id: 'rob3',
                title: 'Swarm Robotics Platform',
                shortDesc: 'Multi-robot coordination system',
                fullDesc: 'Created a swarm robotics platform that enables coordination among multiple small robots. Implemented distributed algorithms for collective behavior, path planning, and task allocation.',
                technologies: ['Python', 'Multi-agent Systems', 'Wireless Communication', 'Embedded Systems'],
                images: ['/shashika.dharmasena/images/swarm-robotics.jpg'],
                github: 'https://github.com/yourusername/swarm-robotics'
            }
        ]
    };
    // --- END OF MODIFIED portfolioData ---


    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    // --- MODIFIED renderPortfolioCards ---
    // Show the *first* image on the card
    const renderPortfolioCards = (items, category) => {
        return (
            <div className="portfolio-cards">
                {items.map(item => (
                    <div
                        className="portfolio-card"
                        key={item.id}
                        onClick={() => openModal(item)}
                    >
                        {/* Check if images array exists and has elements */}
                        {item.images && item.images.length > 0 && (
                            <div className="card-image">
                                {/* Display the first image */}
                                <img src={item.images[0]} alt={item.title} />
                            </div>
                        )}
                        <div className="card-content">
                            <h3>{item.title}</h3>
                            <p>{item.shortDesc}</p>
                            <span className="card-category">{category}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    // --- END OF MODIFIED renderPortfolioCards ---

    // --- MODIFIED renderModal ---
    // Use the ImageCarousel component
    const renderModal = () => {
        if (!selectedItem) return null;

        return (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>×</button>

                    {/* Use ImageCarousel if images exist */}
                    {selectedItem.images && selectedItem.images.length > 0 && (
                        <div className="modal-image"> {/* Keep this wrapper for layout */}
                            <ImageCarousel
                                images={selectedItem.images}
                                title={selectedItem.title}
                            />
                        </div>
                    )}

                    <div className="modal-details">
                        <h2>{selectedItem.title}</h2>
                        <p className="modal-description">{selectedItem.fullDesc}</p>

                        {selectedItem.date && (
                            <p className="modal-date"><strong>Date:</strong> {selectedItem.date}</p>
                        )}

                        {selectedItem.technologies && (
                            <div className="modal-technologies">
                                <strong>Technologies:</strong>
                                <div className="tech-tags">
                                    {selectedItem.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="modal-links">
                            {selectedItem.github && (
                                <a href={selectedItem.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    GitHub Repository
                                </a>
                            )}
                            {selectedItem.link && (
                                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    Visit Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    // --- END OF MODIFIED renderModal ---


    return (
        <div className="portfolio-container" id="portfolio">
            <h2 className="section-title">My Portfolio</h2>

            <section className="portfolio-section">
                <h3 className="category-title">Conferences & Events</h3>
                {renderPortfolioCards(portfolioData.conferences, 'Conference')}
            </section>

            <section className="portfolio-section">
                <h3 className="category-title">AI Projects</h3>
                {renderPortfolioCards(portfolioData.aiProjects, 'AI')}
            </section>

            <section className="portfolio-section">
                <h3 className="category-title">Robotics Projects</h3>
                {renderPortfolioCards(portfolioData.roboticsProjects, 'Robotics')}
            </section>

            {renderModal()}
        </div>
    );
};

export default Portfolio;