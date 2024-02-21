import { Text, Stack, Grid, Box,Heading } from '@chakra-ui/react';

const projects = [
    {
      title: "storiator",
      tags: ["volunteer", "ux design", "frontend"],
      image: "./images/storiator.png",
      desc: "awarded 3x place out of 700 participants. designed user experience and programmed frontend to deploy functional website for nwhacks 2024."
    },
    {
      title: "studyscout",
      tags: ["hackathon project", "ux design", "frontend"],
      image: "./logo192.png",
      desc: "designed user experience and programmed frontend to deploy functional website for nwhacks 2024."
    },
    {
        title: "storiator",
        tags: ["volunteer", "ux design", "frontend"],
        image: "./images/storiator.png",
        desc: "awarded 3x place out of 700 participants. designed user experience and programmed frontend to deploy functional website for nwhacks 2024."
      },
      {
        title: "studyscout",
        tags: ["hackathon project", "ux design", "frontend"],
        image: "./logo192.png",
        desc: "designed user experience and programmed frontend to deploy functional website for nwhacks 2024."
      },
];

function ProjectComponent({ title, tags, image, desc }) {
    return (
      <Stack marginBlock="2rem">
        <Box
          height="300px"
          bgImage={`url(${image})`} // Use template literals to set the background image
          bgSize="cover" // Ensure the background image covers the entire box
          boxShadow="0 12px 12px rgba(0, 0, 0, 0.25)"
        >
        </Box>
        <Text marginTop="1.4rem" style={{
            backgroundImage: 'linear-gradient(to right, #FF00A8, #FF9921)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}>
            {tags.map((tag, index) => (
            <span key={index}>
                {index !== 0 && <>&nbsp;&bull;&nbsp;</>}
                {tag}
            </span>
            ))}
        </Text>
        <Stack direction="row" alignItems="center">
            <Heading>{title}</Heading>
            <Box bgImage={`./images/Arrow 2.svg`} width="1rem" height="1rem" bgSize="cover"/>
        </Stack>
        <Text lineHeight="1.4em" marginTop="0.5rem">
            {desc}
        </Text> 
      </Stack>
    );
}
  

function ProjectGrid() {
  return (
    <Grid templateColumns={["1fr","1fr","1fr 1fr"]} paddingInline="1rem" gap={4}>
      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}
    </Grid>
  );
}

export default ProjectGrid;
