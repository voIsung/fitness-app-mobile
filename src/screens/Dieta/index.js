import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";
import { StepContext } from '../../context/StepContext';
import { useTheme } from '../../context/ThemeContext';
import  styles  from './StyleSheet.js';

const DietaScreen = ({ navigation }) => {
    const { isDarkMode } = useTheme();
    const currentStyle = isDarkMode ? styles.DarkMode : styles.WhiteMode;
    const { stepCount, pedometerAvailability } = useContext(StepContext);

    var Dist = (stepCount / 1300).toFixed(4);
    var cal = (Dist * 60).toFixed(4);

    return (
        <View style={[ styles.container, { backgroundColor: currentStyle.backgroundColor }]}>
             {pedometerAvailability === "Not available" && (
                   <Text style={{ color: currentStyle.color}}>
                       Is Pedometer available: Not available
                   </Text>
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
                title = {'Ilość Kroków'}
                titleColor = {'#F39C12'}
                titleStyle = {{fontWeight: 'bold', fontSize: 35}}
                />
             </View>

             <View style = {{flex : 1}}>
                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 20, color: currentStyle.color}]}>Cel : 6500 kroków (5km)</Text>
                 </View>

                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 12, color: currentStyle.color}]}>Dystans Przebyty : {Dist} km</Text>
                 </View>

                 <View style = {{flex : 1}}>
                    <Text style = {[styles.textDesign, {paddingLeft : 22, color: currentStyle.color}]}>Spalone Kalorie : {cal}</Text>
                 </View>
             </View>
        </View>
    );
}

export default DietaScreen;
