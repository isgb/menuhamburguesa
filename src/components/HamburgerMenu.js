import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const translateX = useSharedValue(width);

  const toggleMenu = () => {
    if (menuOpen) {
      translateX.value = withTiming(width, { duration: 300 }, () => {
        runOnJS(setMenuOpen)(false);
      });
    } else {
      runOnJS(setMenuOpen)(true);
      translateX.value = withTiming(width * 0.2, { duration: 300 });
    }
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.overlay}>
          <Animated.View style={[styles.menu, animatedStyles]}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
            <Text style={styles.menuItem}>Opción 1</Text>
            <Text style={styles.menuItem}>Opción 2</Text>
            <Text style={styles.menuItem}>Opción 3</Text>
          </Animated.View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 40,
    right: 20, // Cambiado a la derecha
    zIndex: 1,
  },
  hamburgerText: {
    fontSize: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
    zIndex: 2,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 1,
  },
  menuItem: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default HamburgerMenu;
