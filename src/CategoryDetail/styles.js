/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 18,
        color: '#000',
    },
    firstCardSectionContainer: {
        marginTop: 8,
    },
    musicImageBG: {
        height: 200,
        width: width,
        padding: 30,
        paddingTop: 80,
    },
});

export default styles;
