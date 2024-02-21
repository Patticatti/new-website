import { Text, Stack, Box, Grid } from '@chakra-ui/react';


const projects = [
    {
      title: "Storiator",
      tags: ["volunteer", "ux design", "frontend"],
      image: "./public/logo192.png"
    },
    {
      title: "Project 2",
      tags: ["backend", "database", "API"],
      image: "./public/logo192.png"
    },
    // Add more projects as needed
];

function ProjectComponent({ title, tags, image }){
    return(
        <Stack marginBlock="2rem">
            <Box height="300px" bgImage={image} boxShadow="0 20px 20px rgba(0, 0, 0, 0.25)"/>
            <Text>
        {tags.map((tag, index) => (
          <span key={index}>
            {tag}
            {index !== tags.length - 1 && <>&nbsp;&bull;&nbsp;</>}
          </span>
        ))}
      </Text>

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
