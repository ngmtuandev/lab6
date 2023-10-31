
import { View, Image } from "react-native"
const ScreenFour = ({route}) => {
    const {data} = route.params
    console.log(data)
    return (
        <View>
            <View style={{}}>
                <Text>Order your</Text>
            </View>
            <View>
                <Text>Order your</Text>
            </View>
            <View>
                <Image style={{width: 150, height: 150}} source={{uri: data?.img}}></Image>
            </View>
        </View>
    )
}

export default ScreenFour