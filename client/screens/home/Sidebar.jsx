import { SafeAreaView } from "react-native";
import { styles } from "../../styles/sidebar";
import { Header } from "../../components/home/sidebar";

const Sidebar = () => {
  return (
    <SafeAreaView style={styles.sidebar}>
      <Header />
    </SafeAreaView>
  );
};

export default Sidebar;
