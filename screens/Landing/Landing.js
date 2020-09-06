import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Avatar, Button } from "@ui-kitten/components";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";

const Landing = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.topContainer}>
        <Card style={mainStyles.cardContainer}>
          <Avatar
            style={styles.logoContainer}
            shape="square"
            source={require("../../assets/img/symbiosis.png")}
          />
        </Card>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Symbiosis</Text>
          <Text style={styles.subtitle}>Center for distance learning</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button style={mainStyles.buttonContainer} size="large">
          <Text style={mainStyles.buttonText}>Enter to explore</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },
  topContainer: { alignItems: "center", flex: 2, justifyContent: "center" },
  logoContainer: {
    width: 150,
    height: 150,
  },
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 44,
    textTransform: "uppercase",
    fontWeight: "700",
    color: Colors.primary,
    fontFamily: "monRegular",
  },
  subtitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "monRegular",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    height: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Landing;
