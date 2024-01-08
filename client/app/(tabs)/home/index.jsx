import { SafeAreaView } from "react-native";

// components
import { Header, TabSwitcher } from "../../../components/home";

// styles
import { globalStyles } from "../../../styles/globals";

const index = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header />

      <TabSwitcher />
    </SafeAreaView>
  );
};

export default index;
