import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ItemChat = ({ image, shopName,productName }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
      }}
    >
      <Image
        source={image}
        style={{ width: 60, height: 60, borderRadius: 5 }}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{productName}</Text>
        <Text style={{ color: "red" }}>
          Shop {shopName}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemChat;
