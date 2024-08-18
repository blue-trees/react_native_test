// ./src/app配下でスマートフォンのレイアウトを一番上まで使えるようにする
import { Slot } from "expo-router";

const Layout = (): JSX.Element => {
  return <Slot />;
};

export default Layout;
