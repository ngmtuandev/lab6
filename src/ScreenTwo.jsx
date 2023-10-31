import { useEffect, useState } from "react"
import { View, Image, Text, Pressable } from "react-native"
import { ScrollView } from "react-native-web"

const ScreenTwo = ({navigation}) => {
    const [data, setDate] = useState([])
    useEffect(() => {
        (async() => {
            const rs = await fetch('https://6540a15e45bedb25bfc235d1.mockapi.io/shop')
            const data = await rs.json()
            console.log(data)
            setDate(data)
        })()
    }, [])
    return (
        <View>
            <ScrollView>
            <View >
                {
                    data && data?.map((item, index) => {
                        return <View key={index}>
                            <Pressable onPress={() => {
                                navigation.navigate('Products')
                            }}><Image style={{width: 600, height: 120,  resizeMode: true}} source={{uri: item?.image}}></Image></Pressable>
                            <View>
                                {
                                    item?.status === true ? <Text style={{fontWeight: "bold", color: 'green'}}>Accept Order</Text> 
                                    : <Text style={{fontWeight: "bold", color: 'red'}}>Denny Order</Text>
                                }
                            </View>
                            <Text style={{fontWeight: 'bold', marginTop: 5, marginBottom: 5, fontSize: 20}}>{item?.name}</Text>
                            <Text style={{marginBottom: 15, fontSize: 17}}>{item?.delivery_date}</Text>
                        </View>
                    })
                }
            </View>
            </ScrollView>
        </View>
    )
}
export default ScreenTwo