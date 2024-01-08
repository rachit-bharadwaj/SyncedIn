import { ScrollView, View } from "react-native";

// components
import { Feed, FeedFilter, Stories } from "../../components/home/following";

// styles
import { globalStyles } from "../../styles/globals";

const Following = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <FeedFilter />

      <Stories />

      <Feed />
    </ScrollView>
  );
};

export default Following;
