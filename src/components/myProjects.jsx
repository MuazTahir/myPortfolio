
import React from 'react';
// import './ProjectsGrid.css';

const projects = [
    {
        title: "E-Commerce App",
        description: "Full-featured e-commerce app with cart, checkout and authentication in NEXT.js.",
        image: "/ecommerce.jpeg",
        github: "https://github.com/MuazTahir/e-shopping",
        live: "https://eshop--delta.vercel.app"
    },
    {
        title: "Jungle-Scout Replica",
        description: "Home Page Replica of Jungle Scout with Tailwind CSS in Next.js.",
        image: "/JS1_opt.jpg",
        github: "https://github.com/MuazTahir/Jungle-Scout-Replica",
        live: "https://jungle-scout-replica.vercel.app"
    },
    {
        title: "SpaceX API with GraphQl",
        description: "API integration with the help of GraphQL for Better used of RESTApi.",
        image: "/graphQL.png",
        github: "https://github.com/yourusername/ecommerce-app",
        live: "https://ecommerce-app.com"
    },
    {
        title: "Quizz App",
        description: "This is a fully functional quiz app developed using React on the frontend and a custom REST API on the backend.",
        image: "/quizz app.png",
        github: "https://github.com/yourusername/ecommerce-app",
        live: "https://ecommerce-app.com"
    },
    // Add more projects as needed
];

const ProjectsGrid = () => {
    return (
        <div>
            <h1 className='projects'>Some of My Projects are</h1>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid;
