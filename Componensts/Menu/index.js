import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

const Menu = () => {
  return (
    <View style={styles.menuList}>
        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"music"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"clock"} size={30} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Software Update</Text>
            <Text style={styles.softwarersubtitle}>version 1.0.0</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"fingerprint"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>security</Text>
            <Text style={styles.softwarersubtitle}>Security Enable</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"clipboard"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Nots</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"car-alt"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Controls</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"charging-station"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Charging</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"location-arrow"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Location</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"upload"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Update</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"key"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Phone Key</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name={"microphone"} size={25} color="#fff" brand />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Microphone</Text>
          </View>
          <FontAwesome5 style={styles.arraystyle} name={"chevron-right"} size={25} color="#fff"/>
        </View>
        </TouchableOpacity>
         
    </View>
  );
};

export default Menu;
