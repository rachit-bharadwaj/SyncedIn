import { View, Image } from "react-native";
import { LoginForm } from "../components/login";
import logo from "../public/images/logo.png"
import { styles } from "../styles/login";


const login = () => {
  return (
    <View >
    <Image source={logo} style={styles.logo} resizeMode="contain" />
      <LoginForm />
    </View>
  );
};

export default login;
