import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FollowingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>following</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default FollowingScreen;