import styled from "styled-components";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>Mina Projekt</h1>
      {/* Projekt innehåll kommer att läggas till senare */}
    </ProjectsContainer>
  );
};

export default Projects;
