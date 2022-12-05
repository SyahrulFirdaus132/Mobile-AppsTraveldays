import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_PUTIH} from '../../../utils/warna'

const ComponentPrimer = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Label(label)}>{label}</Text>
    </View>
  )
}

export default ComponentPrimer

const styles = StyleSheet.create({

    container: {
        backgroundColor: WARNA_PUTIH,
        marginVertical: 10,
        borderRadius: 5,

    },
    Label : (label) => ({
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 10

    }),
})