import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import mates from '../../assets/data/mates';

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>
          New Matches
        </Text>
        <View style={styles.mates}>
          {mates.map(mate => (
            <View style={styles.mate} key={mate.id}>
              <Image source={{ uri: mate.image }} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
	root: {
    width: '100%',
    flex: 1,
    padding: 10
	},
  container: {
    padding: 10
  },
  mates: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mate: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 3,
    padding: 3,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  }
});

export default MatchesScreen