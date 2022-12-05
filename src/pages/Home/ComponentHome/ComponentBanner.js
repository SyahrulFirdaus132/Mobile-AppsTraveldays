import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_KUNING, WARNA_PUTIH, WARNA_TEXT } from '../../../utils/warna'

const ComponentBanner = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>YOUR TRAVEL PARTNER</Text>
      <Text style={styles.TextLabel}>WITH TRAVELDAYS</Text>
    </View>
  )
}

export default ComponentBanner

const styles = StyleSheet.create({
    Container: {
        backgroundColor: WARNA_KUNING,
        marginTop:20
    },
    label :{
        textAlign: 'center',
        paddingVertical: 4,
        color: '#000000',
        fontWeight: 'bold'
    },
    TextLabel: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '700',
        color: WARNA_TEXT,
        marginTop: -1,
        marginBottom: 5
    }
})