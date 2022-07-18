import React, { useRef } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { useCastVoteMutation } from '../../business/api/CastVote';
import { useGetCatsListQuery } from '../../business/api/FetchCats';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import styles from './styles';

export default function Cats() {

    let swiperRef = useRef<CardStack>();
    const { data, error, isLoading } = useGetCatsListQuery(undefined);
    const [castVote, { data: voteData, error: voteError,  }] = useCastVoteMutation();

    if (isLoading) {
        return (
            <Text>Is Loading</Text>
        )
    }

    if (error) {
        return (
            <Text>Error</Text>
        )
    }

    if (!data?.length) {
        return (
            <Text>Empty</Text>
        )
    }

    if (data.length) {
        console.table(data.filter(res => res.image == undefined));
    }

    return (
        <SafeAreaContainer>
            <CardStack style={styles.content} ref={swiper => { swiperRef = swiper }}>
                {data.map(res => (
                    <Card onSwipedLeft={() => castVote({ sub_id: res.id, image_id: res.image.id, value: '0', })} onSwipedRight={() => castVote({ sub_id: res.id, image_id: res.image.id, value: '1', })} style={[styles.card]}>
                        <ImageBackground style={{ width: '100%', height: '100%', }} source={{ uri: res.image ? res.image.url : 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg', }} >
                            <View style={styles.bottomCard}>
                                <Text style={styles.name}>{res.name}</Text>
                            </View>
                        </ImageBackground>
                    </Card>
                ))}
            </CardStack>
        </SafeAreaContainer>
    )
}