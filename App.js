import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Card from './components/MateCard';
import mates from './assets/data/mates';
import AnimatedStack from './components/AnimatedStack';


export default function App() {

  const onSwipeLeft = (user) => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = (user) => {
    console.warn('swipe right', user.name);
  };

  return (
    <View style={styles.container}>
      <AnimatedStack 
        data={mates}
        renderItem={(({ item }) => <Card user={item} />)}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
