import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import styles from './StyleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';

const workoutData = {
    'Klatka Piersiowa Początkujący': {
        image: require('../../../assets/TrZdj/tr1.png'),
        exercises: [
            { 
                name: 'Pompki zwykłe', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr1_ex1.png'),
            },
            { 
                name: 'Pompki diamentowe', 
                repetitions: 8, 
                image: require('../../../assets/TrZdj/tr1_ex2.png'),
            },
            { 
                name: 'Plank shoulder taps', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr1_ex3.png'),
            },
            { 
                name: 'Wyciskanie hantlami', 
                repetitions: 12, 
                image: require('../../../assets/TrZdj/tr1_ex4.png'),
            },
            { 
                name: 'Pompki na jednej ręce', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr1_ex5.png'),
            },
            { 
                name: 'Pompki z klaśnięciem', 
                repetitions: 8, 
                image: require('../../../assets/TrZdj/tr1_ex6.png'),
            },
        ],
        details: {
            circles: 4,
            totalExercises: 6,
        },
    },
    'Plecy Początkujący': {
        image: require('../../../assets/TrZdj/tr2.png'),
        exercises: [
            { 
                name: 'Podciąganie nachwytem', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr2_ex1.png'),
            },
            { 
                name: 'Przyciąganie linki wyciągu górnego', 
                repetitions: 12, 
                image: require('../../../assets/TrZdj/tr2_ex2.png'),
            },
            { 
                name: 'Przyciąganie linki wyciągu dolnego', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr2_ex3.png'),
            },
        ],
        details: {
            circles: 3,
            totalExercises: 3,
        },
    },
    'Nogi Zaawansowany': {
        image: require('../../../assets/TrZdj/tr3.png'),
        exercises: [
            { 
                name: 'Przysiady ze sztangą', 
                repetitions: 15, 
                image: require('../../../assets/TrZdj/tr3_ex1.png'),
            },
            { 
                name: 'Wykroki ze sztangą', 
                repetitions: 10, 
                image: require('../../../assets/TrZdj/tr3_ex2.png'),
            },
            { 
                name: 'Wypychanie nogami na suwnicy', 
                repetitions: 12, 
                image: require('../../../assets/TrZdj/tr3_ex3.png'),
            },
        ],
        details: {
            circles: 4,
            totalExercises: 3,
        },
    },
    'Brzuch Zaawansowany': {
        image: require('../../../assets/TrZdj/tr4.png'),
        exercises: [
            { 
                name: 'Brzuszki', 
                repetitions: 20, 
                image: require('../../../assets/TrZdj/tr4_ex1.png'),
            },
            { 
                name: 'Deska', 
                repetitions: 30, 
                image: require('../../../assets/TrZdj/tr4_ex2.png'),
            },
            { 
                name: 'Deska bokiem', 
                repetitions: 20, 
                image: require('../../../assets/TrZdj/tr4_ex3.png'),
            },
        ],
        details: {
            circles: 4,
            totalExercises: 3,
        },
    },
};

const OpisTreninguScreen = ({ route }) => {
    const { workout, time } = route.params;
    const workoutDetails = workoutData[workout];

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={workoutDetails.image} style={styles.headerImage} />
                <Text style={styles.title}>{workout.toUpperCase()}</Text>
            </View>
            <View style={styles.timeContainer}>
                    <Icon name="time-outline" size={30} color="white"/>
                    <Text style={styles.timeText}>{time}</Text> 
                </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Ilość obwodów: {workoutDetails.details.circles}
                </Text>
                <Text style={styles.infoText}>
                    Ilość ćwiczeń: {workoutDetails.details.totalExercises}
                </Text>
            </View>
            <FlatList
                data={workoutDetails.exercises}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.exerciseItem}>
                        <Image source={item.image} style={styles.exerciseImage} resizeMode="contain"/>
                        <View style={styles.exerciseTextContainer}>
                            <Text style={styles.exerciseName}>{item.name}</Text>
                            <Text style={styles.exerciseReps}>
                                Liczba powtórzeń: {item.repetitions}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default OpisTreninguScreen;

