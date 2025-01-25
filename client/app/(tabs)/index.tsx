import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  // Action when button is clicked
  const handleGetStarted = () => {
    alert("Get Started Button Clicked!");
  };

  return (
    <View style={styles.container}>
      {/* Title and Welcome Message */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Your React Native Journey Begins Here
        </Text>
      </View>

      {/* Introductory Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is your first React Native app using Expo. Edit this file to get
          started.
          {`\n\n`}You can press{" "}
          <Text style={styles.boldText}>
            {Platform.select({ ios: "Cmd+D", android: "Cmd+M", web: "F12" })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
