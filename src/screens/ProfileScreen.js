import React, { useState, useEffect } from "react";
import { Box, Button, Center, VStack, Alert, Progress, Skeleton, Spinner, useToast, Toast, Text } from 'native-base'

const ProfileScreen = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    const toast = useToast();

    useEffect(() => {
        const loadUserData = async () => {
            setLoading(true);
            setProgress(20);

            setTimeout(() => setProgress(60), 1000);
            setTimeout(() => setProgress(100), 2000);

            setTimeout(() => {
                setUserData({
                    name: 'Yael Tovar',
                    email: 'Yael@example.com',
                    bio: "Desarrollador de software apasionada por react native y el desarollo de aplicaciones"
                });
                setLoading(false);

                toast.show({
                    title: "Datos cargados",
                    description: "Los datos del perfil han sido cargados correctamente",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }, 5000);
        };

        loadUserData();
    }, []);

    return (
        <Center flex={1} p={4}>
            <VStack space={4} w="100%">

                {/* Alerta de error */}
                {showAlert && (
                    <Alert w="100%" status="error" colorScheme="error"
                        onClose={() => setShowAlert(false)}>
                        <Alert.Icon />
                        <Text color="error.700">Hubo un error al cargar los datos</Text>
                    </Alert>
                )}
                {loading ? (
                    <>
                        <Text>Cargando Perfil del Usuario...</Text>
                        <Progress value={progress} colorScheme="blue" />
                        <Skeleton.Text lines={3} mt={4} />
                        <Skeleton mt={2} h="20" />
                        <Skeleton mt={2} h="10" />
                        <Spinner size="lg" color="blue.500" mt={4} />
                    </>
                ) : (
                    <>
                        <Box p={4} bg="white" rounded="lg" shadow={1}>
                            <Text fontSize="xl" fontWeight="bold">
                                {userData.name}
                            </Text>
                            <Text color="gray.500">{userData.email}</Text>
                            <Text mt={2}>{userData.bio}</Text>"
                        </Box>

                        <Button colorScheme="danger" onPress={() => setShowAlert(true)}>
                            Simular error
                            </Button>
                    </>
                )}

            </VStack>
        </Center>
    );
};

export default ProfileScreen;