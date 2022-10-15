import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/MateCard';
import mates from '../../assets/data/mates';
import AnimatedStack from '../components/AnimatedStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HomeScreen() {

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
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={30} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={30} color="#4FCC94" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding : 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50
  }
});