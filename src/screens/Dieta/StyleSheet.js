import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    textDesign: {
        backgroundColor: "rgba(155,89,182, 0.5)",
        height: 40,
        width: 350,
        borderColor: "#F39C12",
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        fontSize: 25,
        fontWeight: "bold",
    },
    DarkMode: {
      backgroundColor: '#222',
      color: '#fff',
    },
    WhiteMode: {
      backgroundColor: '#fff',
      color: '#000',
    },
});

export default styles;