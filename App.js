import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { StepProvider } from './src/context/StepContext';
import { ThemeProvider } from './src/context/ThemeContext';

function App() {
    return (
    <StepProvider>
         <ThemeProvider>
             <NavigationContainer>
                 <StackNav/>
             </NavigationContainer>
         </ThemeProvider>
     </StepProvider>
    );
}

export default App;
