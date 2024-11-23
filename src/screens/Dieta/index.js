import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";
import { StepContext } from '../../context/StepContext';
import  styles  from './StyleSheet.js';

const DietaScreen = ({ navigation }) => {
    const { stepCount, pedometerAvailability } = useContext(StepContext);

    var Dist = (stepCount / 1300).toFixed(4);
    var cal = (Dist * 60).toFixed(4);
    var maxValue = 6500; //ilosc kroków do zrobienia
    return (
        <View style={styles.container}>
            {pedometerAvailability === "Not available" && (
                <Text>
                    Is Pedometer available: Not available
                </Text>
            )}

            <View style = {styles.CircularProgressArea}>
                <View style={styles.BorderOut}>
                    <CircularProgress
                        value={stepCount}
                        maxValue={maxValue} // około 5km
                        radius={190}
                        textColor={'#000'}
                        activeStrokeColor={'#D726B9'}
                        inActiveStrokeColor={'#979292'}
                        inActiveStrokeOpacity={0.5}
                        inActiveStrokeWidth={40}
                        activeStrokeWidth={40}
                        title={`/${maxValue}`}
                        titleColor={'#000'}
                        titleStyle={{ fontWeight: 'bold', fontSize: 45 }}
                    />
                    <View style={styles.BorderIns}/>
                </View>
            </View>

                        <View style = {{flex : 1}}>
                    <View style = {{flex : 1}}>
                        <Text style = {[styles.textDesign, {paddingLeft : 12}]}>Dystans Przebyty : {Dist} km</Text>
                    </View>

                    <View style = {{flex : 1}}>
                        <Text style = {[styles.textDesign, {paddingLeft : 22}]}>Spalone Kalorie : {cal}</Text>
                    </View>

                    <View style = {{flex : 1}}>
                        <Text style = {[styles.textDesign, {paddingLeft : 22}]}>Spożyte Kalorie : 0.0000</Text>
                    </View>
            </View>
        </View>
    );
}

export default DietaScreen;