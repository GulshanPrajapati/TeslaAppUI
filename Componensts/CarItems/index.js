import React from "react";
import { ScrollView, View,  Text,  ImageBackground,  Image,  TouchableOpacity,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import Menu from '../Menu/index'

export const Caritems = () => {
  return (
    //-------------------------------------------- Header
    <View style={styles.carcontainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.BackgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="cog" size={25} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>App</Text>

        <TouchableOpacity>
          <FontAwesome5 name={"rocket"} size={25} color="#fff" brand />
        </TouchableOpacity>
      </View>
      {/*----------------------------------------Battery Section  */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/*------------------------------------------Status | NameOfTheCar  */}
      <View style={styles.statusSection}>
        <Text style={styles.statusText}>Model X</Text>
      </View>

      {/* -------------------------------------------Controls --------------*/}
  <ScrollView>   
      <View style={styles.controlSection}>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesome5 name={"fan"} size={25} color="#fff" brand />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesome5 name={"key"} size={25} color="#fff" brand />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesome5 name={"lock"} size={25} color="#fff" brand />
          </View>
        </TouchableOpacity>
      </View>
{/* ---------------------------------Menu bar */}
      <Menu/>
      </ScrollView> 
    </View>
  );
};

export default Caritems;
