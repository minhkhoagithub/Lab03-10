import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity,StyleSheet } from "react-native";
import ItemChat from "./components/ItemCard";

const DATA = [
  {
    id: "1",
    shopName: "Shop Devang",
    productName:"Ca Nấu lẩu, nấu mì mini...",
    image: require("./assets/ca_nau_lau.png"),
  },
  {
    id: "2",
    shopName: "LTD Food",
    productName:"1KG khô gà bơ tỏi...",
    image: require("./assets/ga_bo_toi.png"),
  },
  {
    id: "3",
    shopName: "Thế giới đồ chơi",
    productName:"Xe cần cẩu đa năng...",
    image: require("./assets/xa_can_cau.png"),
  },
  {
    id: "4",
    shopName: "Thế giới đồ chơi",
    productName:"Đồ chơi dạng mô hình...",
    image: require("./assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "5",
    shopName: "Minh Long BOOK",
    productName:"Lãnh đạo đơn giản ...",
    image: require("./assets/lanh_dao_gian_don.png"),
  },
  {
    id: "6",
    shopName: "Minh Long BOOK",
    productName:"Hiểu lòng con trẻ ...",
    image: require("./assets/hieu_long_con_tre.png"),
  },
  // {
  //   id: "7",
  //   shopName: "Minh Long BOOK",
  //   productName:"Donah Trump Thiên tài lãnh đạo ...",
  //   image: require("./assets/trump 1.png"),
  // }
];

export default function App() {
  const renderItem = ({ item }) => (
    <ItemChat image={item.image} shopName={item.shopName} productName={item.productName} />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#03A9F4",
          padding: 15,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 18 }}>←</Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Chat
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 18 }}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding:20}}>
        Các bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop nhé!
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 10,
          backgroundColor: "#03A9F4",
        }}
      >
        <Text style={{ color: "#fff" }}>🏠</Text>
        <Text style={{ color: "#fff" }}>📂</Text>
        <Text style={{ color: "#fff" }}>👤</Text>
      </View>
    </SafeAreaView>
  );
}

