import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Header = ({ label }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
    
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 70,
    backgroundColor: '#BBE2EC',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomEndRadius:"40px",
    borderBottomStartRadius:"40px"
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Header;