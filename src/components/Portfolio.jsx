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
                title: 'Advanced Hybrid Search Engine for Retail (Multi-lingual)',
                shortDesc: 'Developed & deployed a scalable hybrid search (keyword+semantic) for major retail platforms, doubling conversion rates.',
                fullDesc: 'Architected and delivered a sophisticated hybrid search engine specifically designed to overcome the limitations of traditional keyword search in the retail sector. This system, fine-tuned for Traditional Chinese and supporting multiple languages, seamlessly blends keyword matching with deep semantic understanding using advanced embedding and re-ranking models. Integrated Large Language Models to generate descriptive tags, significantly improving query interpretation and relevance. Engineered for high scalability and optimized for low latency, the system ensures fast query responses even under heavy load through efficient caching and optimized model inference. Successfully launched across several high-traffic online platforms within Uni-President Corporation, including 7-Eleven, providing users with more accurate, relevant, and consistent product discovery. This enhanced customer experience directly led to an approximate doubling of search-driven conversion rates.',
                technologies: [
                    'Hybrid Search Architecture',
                    'Semantic Search / Vector Search',
                    'Natural Language Processing (NLP)',
                    'Large Language Models (LLMs)',
                    'Machine Learning / Deep Learning',
                    'Re-ranking Algorithms',
                    'Scalable Systems Design',
                    'Performance Optimization',
                    'Information Retrieval',
                    'E-commerce Search',
                    'Traditional Chinese Language Processing'
                ],
                images: [
                    '/shashika.dharmasena/images/hybrid-search-info.png',
                ],
                link: 'https://711go.7-11.com.tw/'
            },
            {
                id: 'ai2',
                title: 'Pioneering Thai GPT-2 LLM: Development, Deployment & Integration',
                shortDesc: 'Led development of a custom Thai GPT-2 LLM, deployed via Triton (~700+ tokens/sec), integrated with Langchain, influencing NVIDIA research.',
                fullDesc: 'Led the initiative to develop one of Thailand\'s first custom Large Language Models (LLMs), specifically a GPT-2 architecture (88.5M parameters) tailored for the Thai language. Utilized NVIDIA NeMo Megatron framework and SentencePiece tokenization, training on datasets like Oscar Thai and Thai Wiki to address the unique challenges of Thai language representation. Successfully deployed the model via NVIDIA Triton Inference Server, achieving high throughput (~703 tokens/second on A10G). Concurrently, conducted early comparative analysis by adapter-finetuning and deploying Llama 2 shortly after its release. Developed custom Langchain classes to integrate both our Thai GPT-2 and the finetuned Llama 2 model into practical application chains, enabling the successful replacement of traditional NLP systems for chatbots and other applications. Maintained close collaboration with the NVIDIA Singapore team through weekly progress updates, sharing valuable feedback on the technical challenges of sovereign language LLM pre-training. These insights contributed to the broader understanding of multilingual LLM development, reflected in subsequent NVIDIA research and publications, such as their developer blog post on curating non-English datasets.',
                technologies: [
                    'LLM Pre-training',
                    'NVIDIA NeMo Megatron',
                    'NVIDIA Triton Inference Server',
                    'GPT-2 Architecture',
                    'Llama 2',
                    'Adapter Fine-tuning',
                    'Langchain Custom Integration',
                    'Thai Language Processing',
                    'Tokenization (SentencePiece)',
                    'Model Deployment & Optimization',
                    'NLP System Replacement',
                    'Cross-functional Collaboration (NVIDIA)'
                ],
                images: [
                    '/shashika.dharmasena/images/llm3.png', // Slide comparing V1 and V4 training
                    '/shashika.dharmasena/images/llm1.png', // Slide showing training approach
                    '/shashika.dharmasena/images/llm2.png', // Slide comparing Triton performance
                    '/shashika.dharmasena/images/llm3.png' // Slide showing Langchain integration
                    // Add more images if relevant and available
                ],
                // Optional: Add a reference or link section if desired, though the blog is mentioned in desc.
                link: 'https://developer.nvidia.com/blog/curating-non-english-datasets-for-llm-training-with-nvidia-nemo-curator/',
                github: '' // Not applicable for proprietary work
            },
            {
                id: 'ai3',
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
                id: 'ai4',
                title: 'Custom Thai Text-to-Speech (TTS) System',
                shortDesc: 'Trained and deployed a custom Thai TTS model using NVIDIA Triton for GPU inference.',
                fullDesc: 'Led the development lifecycle of a custom Text-to-Speech (TTS) model specifically for the Thai language. This involved training the model for natural-sounding voice output, optimizing it for high-performance GPU inference, and successfully deploying it using NVIDIA Triton Inference Server in a production environment. A practical application of this custom Thai TTS technology within a smart call center context was presented at NVIDIA GTC Fall 2021 (Session A31283), offering a public example of its capabilities.',
                technologies: ['Text-to-Speech (TTS)', 'Python', 'Deep Learning', 'NVIDIA Triton', 'GPU Computing', 'Thai Language Processing', 'Model Optimization'],
                images: ['/shashika.dharmasena/images/tts-gosoft.png'],
                github: ''
            },
            {
                id: 'ai5',
                title: 'Optimized STT/TTS Deployment with Triton',
                shortDesc: 'Engineered high-throughput, low-latency STT/TTS deployment on Triton using advanced optimization.',
                fullDesc: 'Focused on optimizing the deployment pipeline for both Speech-to-Text (STT) and Text-to-Speech (TTS) models using NVIDIA Triton Inference Server. Implemented various optimization techniques (e.g., model quantization, dynamic batching, TensorRT) to achieve significant improvements in throughput and reductions in latency. These optimizations were critical for real-time applications, including enabling the large-scale STT deployment for 7-Eleven Thailand\'s voice search, which was detailed in our NVIDIA GTC 2022 presentation (Session S41603). The performance achieved through this work was further recognized when NVIDIA selected these models for benchmarking on their L4 GPU platform, featuring our company logo among L4 users.',
                technologies: ['NVIDIA Triton', 'Model Optimization', 'TensorRT', 'STT', 'TTS', 'Performance Tuning', 'GPU Computing', 'System Architecture'],
                images: [
                    '/shashika.dharmasena/images/triton-stt-tts.png',
                ],
                github: ''
            },
            {
                id: 'ai6',
                title: 'Applied NLP: FastText Enhancements & Applications',
                shortDesc: 'Enhanced NLP pipeline using FastText; built bad word detection & CRM analysis tools.',
                fullDesc: 'Optimized the existing Natural Language Processing (NLP) pipeline by integrating FastText for improved performance and word representation quality. Subsequently, applied these enhanced capabilities to develop practical solutions, including an effective bad word detection filter and tools for automated CRM analysis to extract customer insights.',
                technologies: ['NLP', 'FastText', 'Python', 'Text Classification', 'Text Analysis', 'CRM Analytics', 'Machine Learning'],
                images: [
                    '/shashika.dharmasena/images/fasttext.png',       // Placeholder: e.g., Word embedding visualization
                ],
                // github: '' // Likely not applicable
            }
        ],
        roboticsProjects: [
            {
                id: 'rob1',
                title: 'DIY 6-Axis Robot Arm (Startup Initiative)',
                shortDesc: 'Co-developed a DIY 6-axis robot arm using ROS 2, targeting startup creation.',
                fullDesc: 'Collaborated with two friends on a passion project to design and build a cost-effective, DIY-friendly 6-axis robotic arm. Utilized readily available components like NEMA 17 and NEMA 23 stepper motors (common in 3D printers) and focused on an innovative design minimizing wiring complexity. While my friends primarily handled the mechanical design and core software, my main technical contribution was researching and implementing the ROS 2 framework for the arm\'s control, simulation (e.g., RViz), and communication interfaces. Our collective goal was to develop this concept towards a sellable product and form our own startup. In addition to the ROS 2 work, I took the initiative in exploring business viability and making initial contacts for potential venture funding, gaining practical startup experience.',
                technologies: [
                    'ROS 2',
                    'Robotics',
                    'Motion Control',
                    'C++ / Python', // Assuming ROS 2 usage
                    'Stepper Motors (NEMA 17/23)',
                    'DIY Hardware',
                    'System Integration',
                    'Startup Development',
                    'Business Development (Venture Contact)'
                ],
                images: [
                    // Add photos of the robot arm, build process, or simulation
                    '/shashika.dharmasena/images/arm1.JPEG', // Placeholder
                    '/shashika.dharmasena/images/arm2.JPEG',  // Placeholder (RViz screenshot)
                    '/shashika.dharmasena/images/arm3.JPEG',  // Placeholder (Optional team photo)
                    '/shashika.dharmasena/images/arm4.JPEG',  // Placeholder (Optional team photo)
                ],
                // github: '' // Likely private if it was a startup attempt
            },
            {
                id: 'rob2',
                title: 'IDEKTEP Humanoid Robot (Teaching Assistant)',
                shortDesc: 'Led development of a ROS 2 humanoid robot using Jetson Nano/Arduino for teaching kids robotics.',
                fullDesc: 'While leading a robotics team at IDEKTEP, an academy focused on teaching robotics to kids, developed a humanoid robot designed as an engaging teaching assistant and activity host. Built on a differential drive base, it was powered by ROS 2 running on an NVIDIA Jetson Nano 4GB, interfacing with an Arduino Due for motor control and sensor readings. Equipped with an RP Lidar and ultrasonic sensors for basic environment awareness and interaction. The body was primarily 3D printed, making it accessible and modifiable within the educational setting.',
                technologies: [
                    'ROS 2',
                    'Team Leadership',
                    'Robotics Education',
                    'NVIDIA Jetson Nano',
                    'Arduino Due',
                    'Microcontrollers',
                    'RP Lidar',
                    'Ultrasonic Sensors',
                    'Differential Drive',
                    '3D Printing',
                    'System Integration'
                ],
                images: [
                    // Add photos/videos of the humanoid robot if available
                    '/shashika.dharmasena/images/ideaktep1.JPG', // Placeholder

                ],
                github: '' // Likely internal/educational
            },
            {
                id: 'rob3',
                title: 'IDEKTEP Autonomous Intelligent Vehicle (AIV)',
                shortDesc: 'Led design & ROS 2 stack development for an autonomous vehicle with QR parking, 100kg payload & advanced navigation.',
                fullDesc: 'Spearheaded the design concept and led the development of the comprehensive ROS 2 software stack for an Autonomous Intelligent Vehicle (AIV) at IDEKTEP. This complex project involved creating a robust platform capable of autonomous navigation in challenging environments. Key features included autonomous parking using QR codes, intelligent self-charging for extended 8-hour service, and a 100 KG payload capacity with a flexible mounting system. Integrated a sophisticated sensor suite: a Realsense-type depth camera (3D obstacle layer), a 30m 2D Lidar (navigation & 2D obstacle mapping), and an IMU for precise localization. The system ran on a Mini PC executing the core ROS 2 navigation stack (including localization, mapping, path planning), communicating via Micro-ROS with an Arduino Due controlling the differential drive base.',
                technologies: [
                    'ROS 2',
                    'Micro-ROS',
                    'Team Leadership',
                    'System Architecture Design',
                    'Autonomous Navigation (SLAM/Localization/Mapping/Path Planning)',
                    'Computer Vision (Depth Sensing, QR Codes)',
                    'Lidar Processing',
                    'Sensor Fusion (IMU)',
                    'Arduino Due / Microcontrollers',
                    'Differential Drive Control',
                    'Robotics Education',
                    'Project Management'
                ],
                images: [
                    // Use the images you provided
                    '/shashika.dharmasena/images/ideaktep3.jpg', // Make sure this path is correct
                    '/shashika.dharmasena/images/ideaktep2.JPG' // Make sure this path is correct
                    // Add more photos/videos if available: robot in action, parking, charging
                ],
                github: '' // Likely internal/educational
            },
            {
                id: 'rob4',
                title: 'Lead R&D Engineer (SLAM) - Cal-Comp Electronics',
                shortDesc: 'Led SLAM team, developed hybrid & pure visual SLAM navigation for healthcare robots.',
                fullDesc: 'Served as the Lead Robotics R&D Engineer for the SLAM team at Cal-Comp Electronics (Thailand). Focused on enhancing the navigation capabilities of mobile indoor robots, specifically for applications within medicine and healthcare systems. Key achievements included successfully developing and implementing both a novel hybrid relocalization system combining Lidar and Visual SLAM, and a robust navigation system based purely on Visual SLAM techniques. This work significantly improved the robot\'s ability to understand and navigate complex indoor environments autonomously.',
                technologies: [
                    'Team Leadership',
                    'SLAM (Simultaneous Localization and Mapping)',
                    'Visual SLAM (VSLAM)',
                    'Lidar SLAM',
                    'Sensor Fusion',
                    'Computer Vision',
                    'Robotics Navigation',
                    'Mobile Robots',
                    'C++ / Python', // Assuming common robotics languages
                    'R&D',
                    'Healthcare Robotics'
                ],
                images: [
                    // Add photos/videos of the robots, navigation demos, or related work if available/permissible
                    '/shashika.dharmasena/images/neweraai.jpg',   // Placeholder
                ],
                link: 'https://drive.google.com/file/d/1ipIqqZ5xFXj4cssALE9qI5H8GT91Ium6/view' // Proprietary work
            },
            {
                id: 'rob5',
                title: 'Master Thesis: Autonomous Vehicle for Western Digital Thailand',
                shortDesc: 'Developed ROS-based AIV for automated pallet transport in WD (Master Thesis), covering design, SLAM, EKF localization & navigation.',
                fullDesc: 'Completed a Master\'s thesis project focused on developing an Autonomous Intelligent Vehicle (AIV) solution for Western Digital (Thailand) to automate the transport of hard drive pallets within their facility. The project encompassed the full development cycle, starting from custom circuitry design through to high-level autonomous capabilities using the Robot Operating System (ROS). Key accomplishments included implementing robust indoor mapping via SLAM using dual Lidar units, precise robot localization through Extended Kalman Filter (EKF) based sensor fusion, sensor calibration, and implementing sophisticated navigation strategies utilizing various ROS-based local and global planners. A comprehensive ROS-based simulation environment was also created to validate algorithms prior to deployment on the physical robot. This practical work was underpinned by relevant Master\'s coursework in areas like advanced control, machine vision, AI, neural networks, fuzzy logic, and robotics.',
                technologies: [
                    'Master\'s Thesis',
                    'Robot Operating System (ROS)',
                    'Autonomous Navigation',
                    'SLAM (Lidar-based)',
                    'Sensor Fusion (EKF)',
                    'Localization',
                    'Path Planning (Local/Global Planners)',
                    'Robot Control Systems',
                    'Perception',
                    'Circuit Design',
                    'Simulation (Gazebo/RViz likely)',
                    'Mobile Robots',
                    'Industrial Automation (Logistics)'
                ],
                images: [
                    // Add photos/videos of the robot, simulation, map, or circuitry if available
                    '/shashika.dharmasena/images/master2.jpg',
                    '/shashika.dharmasena/images/master1.jpg',
                    '/shashika.dharmasena/images/master3.jpg'
                ],
                github: '' // Thesis work, likely not public
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