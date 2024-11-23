import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    textDesign: {
        backgroundColor: '#11D9EF',
        height: 40,
        width: 350,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        fontSize: 25,
        fontWeight: "bold",
    },
    CircularProgressArea: {
        flex : 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BorderOut: {
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 195,
    },
    BorderIns: {
        position: 'absolute',
        top: 33,
        left: 33,
        right: 33,
        bottom: 33,
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 190,
    },
});

export default styles;