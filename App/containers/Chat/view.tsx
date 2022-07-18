import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import fonts from '../../theme/fonts';

export default function Chat() {
    return (
        <SafeAreaContainer>
            <Text style={{ fontFamily: fonts.bold, color: 'gray', fontSize: 24, alignSelf: 'center', }}>02</Text>
        </SafeAreaContainer>
    )
}