import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props;
  console.log(bang);
  return (
    <View>
      <Text style={[styles.text,style]}>{children} {bang ? "!" : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
