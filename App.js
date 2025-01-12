import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { StepProvider } from './src/context/StepContext';
import { NotificationsProvider } from './src/context/NotificationContext';
import { ProductProvider } from './src/context/ProductContext';


function App() {
    return (
    <ProductProvider>
    <StepProvider>
        <NotificationsProvider>
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
        </NotificationsProvider>
     </StepProvider>
     </ProductProvider>

    );
}

export default App;
