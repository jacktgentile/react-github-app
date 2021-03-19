import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

function FollowersScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>followers</Text>
      <Text>second line</Text>
      <Button title="Click me please" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default FollowersScreen;