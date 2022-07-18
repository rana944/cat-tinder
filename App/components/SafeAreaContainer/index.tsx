import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface IOwnProps {
    children: React.ReactNode
}

export default function SafeAreaContainer({ children }: IOwnProps) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            {children}
        </SafeAreaView>
    )
}