import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const App = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    let calculatedResult;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operation) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;
      case 'divide':
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 'Invalid operation';
    }
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculator App</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.labelText}>First Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={firstNumber}
            onChangeText={setFirstNumber}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.labelText}>Second Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={secondNumber}
            onChangeText={setSecondNumber}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculate('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculate('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculate('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculate('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result:</Text>
        <Text style={styles.resultValue}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
  
    marginBottom: 20,
  },
  headerText: {
     color: '#00000',
    fontSize: 24,

    fontWeight: 'bold', 
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CCFFE5',
    padding: 10,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  resultContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginRight: 10,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;