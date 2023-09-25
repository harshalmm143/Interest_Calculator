import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Input, Button } from "react-native-elements";

export default function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      const interest = (p * r * t).toFixed(2);
      setResult(`Interest: ${interest}`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#2089dc" />
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Interest Calculator</Text>
      <Input
        label="Principal Amount"
        keyboardType="numeric"
        value={principal}
        onChangeText={setPrincipal}
      />
      <Input
        label="Interest Rate (%)"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <Input
        label="Time (Years)"
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Calculate Interest" onPress={calculateInterest} />
      <Text style={styles.resultText}>{result}</Text>
      <Text>Hello My Name Harshal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
