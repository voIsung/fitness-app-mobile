import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";
import { StepContext } from './StepContext.js';

const DietaScreen = ({ navigation }) => {
    const { stepCount, pedometerAvailability } = useContext(StepContext); // Uzyskaj dostęp do kontekstu

    var Dist = (stepCount / 1300).toFixed(4);
    var cal = (Dist * 60).toFixed(4);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>DietaScreen</Text>
             {pedometerAvailability === "Not available" && (
                   <Text>Is Pedometer available: Not available</Text>
             )}

             <View style = {{flex : 1.5}}>
                <CircularProgress
                value = {stepCount}
                maxValue = {6500} //okolo 5km
                radius = {190}
                textColor = {'#F39C12'}
                activeStrokeColor = {'#F39C12'}
                inActiveStrokeColor = {'#9B59B6'}
                inActiveStrokeOpacity = {0.5}
                inActiveStrokeWidth = {40}
                activeStrokeWidth = {40}
                title = {'Step Count'}
                titleColor = {'#F39C12'}
                titleStyle = {{fontWeight: 'bold'}}
                />
             </View>

             <View style = {{flex : 1}}>
                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 20}]}>Cel : 6500 kroków (5km)</Text>
                 </View>

                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 12}]}>Dystans Przebyty : {Dist} km</Text>
                 </View>

                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 22}]}>Spalone Kalorie : {cal}</Text>
                 </View>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textDesign : {
        backgroundColor : "rgba(155,89,182, 0.5)",
        height : 40,
        width : 350,
        borderColor : "black",
        borderWidth : 1,
        borderRadius : 20,
        overflow : "hidden",
        fontSize : 25,
        fontWeight: "bold",

    }
});

export default DietaScreen;
