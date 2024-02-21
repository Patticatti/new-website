import { Text, Stack, Image, Grid, Box,Heading } from '@chakra-ui/react';

const projects = [
    {
      title: "storiator",
      tags: ["volunteer", "ux design", "frontend"],
      image: "./images/storiator.png",
    },
    {
      title: "studyscout",
      tags: ["hackathon project", "ux design", "frontend"],
      image: "./logo192.png"
    },
    // Add more projects as needed
];

function ProjectComponent({ title, tags, image }) {
    return (
      <Stack marginBlock="2rem">
        <Box
          height="300px"
          bgImage={`url(${image})`} // Use template literals to set the background image
          bgSize="cover" // Ensure the background image covers the entire box
          boxShadow="0 12px 12px rgba(0, 0, 0, 0.25)"
        >
          {/* Remove the nested Image component */}
        </Box>
      </Stack>
    );
}
  

function ProjectGrid() {
  return (
    <Grid templateColumns="1fr 1fr" padding="1rem" gap={4}>
      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}
    </Grid>
  );
}

export default ProjectGrid;
