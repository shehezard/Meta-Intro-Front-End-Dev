import { Heading, Stack, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardUI = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card background='white' borderRadius='lg'>
      <CardBody>
        <Image
          src={imageSrc}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3' color='#333' pl='5' pr='5' pb='5'>
          <Heading size='md'>{title}</Heading>
          <Text color='#888'>{description}</Text>
          <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardUI;
