import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#05051E'} />
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <View style={styles.image}>
            <Image />
          </View>
          <View style={{backgroundColor: 'green', flex: 1}} />
          <View style={{backgroundColor: 'blue', flex: 1}} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#05051E',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  image: {
    borderRadius: 100,
    backgroundColor: '#15162F',
    height: 70,
    width: 70,
  },
});

export default Home;
