import { View, Text, Pressable } from "react-native"

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>Welcome you to coffee bat on</Text>
            <Pressable onPress={() => navigation.navigate("list")}>Go to coffee</Pressable>
        </View>
    )
}

export default ScreenOne