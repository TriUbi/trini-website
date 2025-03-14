import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";

const GitHubStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 2rem auto;
  max-width: 900px;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const CalendarContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 1rem;

  .react-activity-calendar {
    width: 100%;
    min-width: 730px;
  }
`;

const StatsCards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const StatsCard = styled.img`
  border-radius: 6px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GitHubStats = () => {
  return (
    <GitHubStatsContainer>
      <Title>Min GitHub Aktivitet</Title>
      <CalendarContainer>
        <GitHubCalendar
          username="TriUbi"
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          style={{ width: "100%" }}
        />
      </CalendarContainer>
      <StatsCards>
        <StatsCard
          src="https://github-readme-stats.vercel.app/api?username=TriUbi&show_icons=true&theme=dark&hide_border=true&count_private=true"
          alt="GitHub Stats"
        />
        <StatsCard
          src="https://github-readme-streak-stats.herokuapp.com/?user=TriUbi&theme=dark&hide_border=true"
          alt="GitHub Streak Stats"
        />
      </StatsCards>
    </GitHubStatsContainer>
  );
};

export default GitHubStats;
