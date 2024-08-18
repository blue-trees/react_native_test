import { StyleSheet, Text, View } from "react-native";

export default function Page(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年8月18日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年8月18日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年8月18日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>＋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 24,
  },
  // main: {
  //   flex: 1,
  //   justifyContent: "center",
  //   maxWidth: 960,
  //   marginHorizontal: "auto",
  // },
  // title: {
  //   fontSize: 64,
  //   fontWeight: "bold",
  // },
  // subtitle: {
  //   fontSize: 36,
  //   color: "#38434D",
  // },
});
