import { Text, Grid } from '@chakra-ui/react';

function ProjectGrid() {
  return (
    <Grid templateColumns="1fr 1fr" gap={4}>
      {/* First column */}
      <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
        patti tani
      </Text>

      {/* Second column */}
      <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
        work
      </Text>
      <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
        play
      </Text>
      <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
        about
      </Text>
      <Text fontFamily="Outfit" fontSize="1rem" padding="1rem" color="primary">
        resume
      </Text>
    </Grid>
  );
}

export default ProjectGrid;
