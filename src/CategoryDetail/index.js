/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../store/actions';
import { ScrollView, Input, Text, Icon, VStack, HStack, Stack, Box, AspectRatio, Image, Center } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';
import { ImageBackground, StatusBar } from 'react-native';
import musicImage from '../assets/musicimage.jpg';
import Feather from 'react-native-vector-icons/Feather';

const CategoryDetail = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUsersList());
    }, []);

    return (
        <VStack>
            <StatusBar
                backgroundColor='#0000'
                translucent
            />
            <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.musicImageBG} source={musicImage}>
                <Input
                    borderRadius={30}
                    w='100%'
                    bgColor='#fff'
                    pl={5}
                    fontSize={16}
                    InputRightElement={<Icon as={<Feather name="search" />} size={5} mr="4" color="muted.400" />}
                    placeholder="Store search"
                />
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.sectionContainer}>
                <VStack mt={5} w='100%'>
                    <Text style={styles.sectionTitle}>Featured</Text>
                    <VStack style={styles.firstCardSectionContainer}>
                        {_.chunk(users, 2)?.map((items) =>
                            <HStack flex={1}>
                                {items?.map((item, index) => (
                                    <Box flex={0.5} mb={3} alignItems={index % 2 !== 0 ? 'flex-end' : 'flex-start'}>
                                        <Box w={185} rounded="xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                            <Box>
                                                <AspectRatio h={250}>
                                                    <Image w='185' resizeMode='stretch' source={{
                                                        uri: item.avatar_url
                                                    }} alt="image" />
                                                </AspectRatio>
                                            </Box>
                                            <Stack p='4'>
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
                                    </Box>
                                ))}
                            </HStack>
                        )}
                    </VStack>
                </VStack>
            </ScrollView>
        </VStack>
    );
};

export default CategoryDetail;
