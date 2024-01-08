import { useState } from "react";

import { Modal, TextInput, TouchableOpacity, View } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// colors
import colors from "../../constants/colors";

// styles
import { styles } from "../../styles/home";
import Sidebar from "../../screens/home/Sidebar";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSidebar}>
        <AntDesign name="user" size={30} color={colors.primary[100]} />
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <AntDesign name="search1" size={24} color={colors.primary[300]} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.primary[300]}
        />
      </View>

      <Ionicons name="people" size={30} color={colors.primary[100]} />

      <Ionicons
        name="ios-chatbox-ellipses-outline"
        size={30}
        color={colors.primary[100]}
      />

      {/* Sidebar Modal */}
      <Modal
        animationType="fade"        
        transparent={true}
        visible={isSidebarVisible}
        onRequestClose={toggleSidebar}
      >
        <Sidebar />
      </Modal>
    </View>
  );
};

export default Header;
