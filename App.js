import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { StepProvider } from './src/context/StepContext';
import { NotificationsProvider } from './src/context/NotificationContext';


function App() {
    return (
    <StepProvider>
        <NotificationsProvider>
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
        </NotificationsProvider>
     </StepProvider>

    );
}

export default App;
