import React, { useState } from 'react';
import { StyleSheet, View, Pressable, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [activeScreen, setActiveScreen] = useState('HOME');

  const color = '#000';
  const activeColor = '#68B9F9';
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto name="paw" size={30} color={activeScreen === 'HOME' ? activeColor : color} />
          </Pressable>
          <MaterialCommunityIcons name="star-four-points" size={30} color={'#000'} />
          <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicons name="ios-chatbubbles" size={30} color={activeScreen === 'CHAT' ? activeColor : color} />
          </Pressable>
          <FontAwesome name="user" size={30} color={'#000'} />
        </View>
        {activeScreen === 'HOME' && <HomeScreen />}
        {activeScreen === 'CHAT' && <MatchesScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding : 10,
  }
});
