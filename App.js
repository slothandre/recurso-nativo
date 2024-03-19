import { useBatteryLevel } from "expo-battery";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const nivelDeBateria = useBatteryLevel();
  console.log(nivelDeBateria);

  return (
    <View style={styles.container}>
      <Text>Nivel de bateria: {nivelDeBateria * 100}</Text>
      <View
        style={{ width: `${nivelDeBateria * 100}%`, backgroundColor: "#0F0" }}
      >
        <View style={styles.bateriaFundo}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bateriaFundo: {
    width: "100%",
    height: 25,
    backgroundColor: "#F00",
  },
});
