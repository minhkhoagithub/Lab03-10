import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      {/* Sản phẩm */}
      <View className="flex-row border p-2 rounded-lg">
        <Image
          source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/4f/38/7d/8e02c2c09c95f7d8f8d80c9c6a62d5a3.jpg" }}
          className="w-20 h-28"
          resizeMode="contain"
        />
        <View className="flex-1 ml-3">
          <Text className="font-semibold">Nguyên hàm, tích phân và ứng dụng</Text>
          <Text className="text-gray-500">Cung cấp bởi Tiki Trading</Text>
          <Text className="text-red-600 font-bold mt-1">141.800 đ</Text>
          <View className="flex-row items-center mt-2">
            <TouchableOpacity className="px-2 py-1 border">
              <Text>-</Text>
            </TouchableOpacity>
            <Text className="px-3">1</Text>
            <TouchableOpacity className="px-2 py-1 border">
              <Text>+</Text>
            </TouchableOpacity>
            <Text className="ml-4 text-blue-500">Mua sau</Text>
          </View>
        </View>
      </View>

      {/* Mã giảm giá */}
      <View className="flex-row items-center mt-4">
        <TextInput
          placeholder="Mã giảm giá"
          className="flex-1 border p-2 rounded mr-2"
        />
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded">
          <Text className="text-white">Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Tạm tính */}
      <View className="mt-6 border-t pt-4">
        <View className="flex-row justify-between">
          <Text className="text-lg">Tạm tính</Text>
          <Text className="text-lg text-red-600">141.800 đ</Text>
        </View>
      </View>

      {/* Thành tiền */}
      <View className="mt-6">
        <View className="flex-row justify-between mb-3">
          <Text className="text-xl font-semibold">Thành tiền</Text>
          <Text className="text-xl text-red-600 font-bold">141.800 đ</Text>
        </View>
        <TouchableOpacity className="bg-red-600 py-3 rounded">
          <Text className="text-center text-white font-bold text-lg">
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

