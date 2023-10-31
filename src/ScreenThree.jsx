

import { View, Text, Image, Pressable } from "react-native"
import { useState, useEffect } from "react"

const ScreenThree = ({navigation}) => {
    const [data, setDate] = useState([])
    const [qua, setQua] = useState(0)
    useEffect(() => {
        (async() => {
            const rs = await fetch('https://6540a15e45bedb25bfc235d1.mockapi.io/product')
            const data = await rs.json()
            console.log(data)
            setDate(data)
        })()
    }, [])
    return (
        <View style={{paddingVertical: 20, paddingHorizontal: 30}}>
            {
                data && data?.map((item, index) => {
                    return <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
                        <Pressable onPress={() => {
                            navigation.navigate("Item", {data: data[1]})
                        }}>
                            <Image style={{width: 60, height: 60,  resizeMode: true}} source={{uri: item?.img}}></Image>
                        </Pressable>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>{item?.name}</Text>
                            <Text>{qua}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Pressable style={{marginRight: 30}} onPress={() => setQua(qua - 1)}>-</Pressable>
                            <Pressable onPress={() => setQua(qua + 1)}>+</Pressable>
                        </View>
                    </View>
                })
            }
        </View>
    )
}

export default ScreenThree