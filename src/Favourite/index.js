/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';
import { Box } from "native-base";

const Favourite = () => {
    return (
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            <Text>favourite</Text>
        </ScrollView>
    );
};

export default Favourite;
