/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../store/actions';
import { ScrollView, Pressable, Text, VStack, Input, Icon, HStack, Stack, Box, AspectRatio, Image, Center, Heading } from "native-base";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DashBoard = ({ navigation }) => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUsersList());
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            <VStack>
                <Input
                    borderRadius={30}
                    w='100%'
                    fontSize={16}
                    InputLeftElement={<Icon as={<Feather name="search" />} size={5} ml="4" color="muted.400" />}
                    placeholder="Search"
                />

                {/* first sectoin */}
                <VStack>
                    <VStack mt={5}>
                        <HStack justifyContent='space-between'>
                            <Text style={styles.sectionTitle}>Categories</Text>
                            <Text style={styles.sectionViewAll}>See all</Text>
                        </HStack>
                        <ScrollView horizontal style={styles.firstCardSectionContainer}>
                            {users?.map((item, index) =>
                                <Pressable onPress={() => navigation.navigate('CategoryDetail')}>
                                    <Box alignItems="center" mr={2}>
                                        <Box w={170} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                            <Box>
                                                <AspectRatio w="100%" ratio={16 / 9}>
                                                    <Image source={{
                                                        uri: item.avatar_url
                                                    }} alt="image" />
                                                </AspectRatio>
                                            </Box>
                                            <Stack p="2">
                                                <Stack>
                                                    <Center>
                                                        <Text style={styles.categoriesTitle}>{item.login}</Text>
                                                    </Center>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Pressable>
                            )}
                        </ScrollView>
                    </VStack>

                    {/* second sectoin */}
                    <VStack mt={5}>
                        <HStack justifyContent='space-between'>
                            <Text style={styles.sectionTitle}>Featured</Text>
                            <Text style={styles.sectionViewAll}>See all</Text>
                        </HStack>
                        <ScrollView horizontal style={styles.firstCardSectionContainer}>
                            {users?.map((item, index) =>
                                <Box w={140} mr={2} rounded="xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        <AspectRatio h={160}>
                                            <Image w='140' resizeMode='stretch' source={{
                                                uri: item.avatar_url
                                            }} alt="image" />
                                        </AspectRatio>
                                    </Box>
                                    <Stack px='3' py='2'>
                                        <HStack justifyContent='space-between'>
                                            <Text color="coolGray.400">
                                                $27.00
                                            </Text>
                                            <AntDesign name='heart' size={18} color='#f44' />
                                        </HStack>
                                        <Text color="coolGray.400" fontWeight="400">
                                            Woman T-Shirt
                                        </Text>
                                    </Stack>
                                </Box>
                            )}
                        </ScrollView>
                    </VStack>

                    {/* third sectoin */}
                    <VStack mt={5}>
                        <HStack justifyContent='space-between'>
                            <Text style={styles.sectionTitle}>Best Selling</Text>
                            <Text style={styles.sectionViewAll}>See all</Text>
                        </HStack>
                        <ScrollView horizontal style={styles.firstCardSectionContainer}>
                            {users?.map((item, index) =>
                                <Box w={140} mr={2} rounded="xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        <AspectRatio h={160}>
                                            <Image w='140' resizeMode='stretch' source={{
                                                uri: item.avatar_url
                                            }} alt="image" />
                                        </AspectRatio>
                                    </Box>
                                    <Stack px='3' py='2'>
                                        <HStack justifyContent='space-between'>
                                            <Text color="coolGray.400">
                                                $27.00
                                            </Text>
                                            <AntDesign name='heart' size={18} color='#f44' />
                                        </HStack>
                                        <Text color="coolGray.400" fontWeight="400">
                                            Woman T-Shirt
                                        </Text>
                                    </Stack>
                                </Box>
                            )}
                        </ScrollView>
                    </VStack>
                </VStack>
            </VStack>
        </ScrollView>
    );
};

export default DashBoard;
