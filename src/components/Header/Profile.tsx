import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Henrique Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            henrique.monteiro@nebulatecnology.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Henrique Monteiro" src="https://avatars.githubusercontent.com/u/3732784?v=4" />
    </Flex>
  )
}