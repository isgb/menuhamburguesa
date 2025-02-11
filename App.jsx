// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HamburgerMenu from './src/components/HamburgerMenu';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HamburgerMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
