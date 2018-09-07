import React from "react";
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  closeBanner: {
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 1,
    height:50,
    width:150,
    marginTop: 10,
    padding:10,
    paddingBottom:5,
    textAlign: 'center'
  },
  openShiftBanner: {
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 1,
    height:50,
    width:150,
    marginTop:10,
    padding:10,
    paddingBottom:5,
    textAlign: 'center'
  },
  modal: {
    zIndex: 10,
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    margin: 25,
    backgroundColor: 'white',
    position: 'absolute',
    left: 20,
    top: 225

  },
  button: {
      backgroundColor: 'green',
      width: '40%',
      height: 40
  },
  oscatering: {
    width: '90%',
    height: 100,
    backgroundColor: 'steelblue',
    margin:15,
    padding: 10,
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  oscleaning: {
    width: '90%',
    height: 100,
    backgroundColor: 'green',
    margin:15,
    padding:10,
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  }
});
