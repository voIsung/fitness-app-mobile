import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { StepProvider } from './src/context/StepContext';


function App() {
    return (
    <StepProvider>
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
     </StepProvider>
    );
}

export default App;
