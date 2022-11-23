import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const PlayerCover = ({cover}) => {
  return (
    <View style={{width:'100%', bacgroundColor:'rgba(0,0,0,0.5)', height:200, display:'flex',padding:15}}>
      {cover?<Image source={{uri:cover}} style={{width:'100%', height:'100%', borderRadius:15, }}/>:''}
    </View>
  )
}

export default PlayerCover

const styles = StyleSheet.create({})