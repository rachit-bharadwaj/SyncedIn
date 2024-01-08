// react
import { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

// colors
import colors from "../../../constants/colors";

// styles
import { styles } from "../../../styles/home";
import { globalStyles } from "../../../styles/globals";

const FeedFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <View style={styles.feedFilterContainer}>
      <View style={styles.feedFilter}>
        <TouchableOpacity
          style={{
            ...styles.feedFilterAll,
            backgroundColor:
              activeFilter === "all" ? colors.secondary[300] : "transparent",
          }}
          onPress={() => setActiveFilter("all")}
        >
          <Text style={globalStyles.text}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.feedFilterCreators,
            backgroundColor:
              activeFilter === "creators"
                ? colors.secondary[300]
                : "transparent",
          }}
          onPress={() => setActiveFilter("creators")}
        >
          <Text style={globalStyles.text}>Creators</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.feedFilterCompany,
            backgroundColor:
              activeFilter === "company"
                ? colors.secondary[300]
                : "transparent",
          }}
          onPress={() => setActiveFilter("company")}
        >
          <Text style={globalStyles.text}>Company</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedFilter;
