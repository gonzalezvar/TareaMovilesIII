import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const { setName, setCapital, setInterest, setMonths } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
      <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
      <TextInput
          placeholder="Nombre"
          keyboardType="default"
          style={styles.input}
          onChange={(e) => setName(e.nativeEvent.text)}
        />

      </View>
      <View style={styles.dropdown}>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setMonths(value)}
          placeholder={{
            label: 'Seleccióna los plazos...',
            value: null,
          }}
          items={[
            { label: '3 meses', value: 3 },
            { label: '6 meses', value: 6 },
            { label: '12 meses', value: 12 },
            { label: '24 meses', value: 24 },
          ]}
        />

        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setInterest(value)}
          placeholder={{
            label: 'Interes al...',
            value: null,
          }}
          items={[
            { label: '0,5%', value: 0.5 },
            { label: '1%', value: 1 },
            { label: '1,5%', value: 1.5 },
            { label: '2%', value: 2 },
            { label: '2,5%', value: 2.5 },
            { label: '3%', value: 3 },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '50%',
    marginRight:10,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
  dropdown:{
    display: 'flex',
    flexDirection:'row',
  }
});

const picketSelectStyles = StyleSheet.create({

  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    color: 'grey',
    paddingRight: 10,
    height: 50,
    width: 95,
    margin: 5,
    backgroundColor: '#fff',
  },
});
