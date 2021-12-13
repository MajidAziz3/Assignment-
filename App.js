import React, { useEffect, useState } from 'react';
import {
  Platform
} from 'react-native';
import 'react-native-gesture-handler';
import NavigationContainer from './app/navigation/Router'
import { Provider } from 'react-redux';
import configureStore from './app/redux/store/ConfigureStore'
const App = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
    <NavigationContainer />
    </Provider>
  );
};
export default App;
