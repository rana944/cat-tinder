import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

export default function CustomBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 0.6, backgroundColor: '#fff', borderRadius: 15, height: 50, bottom: 10, alignSelf: 'center', }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
            if (index == 0) {
                return require('../../assets/images/cat.png');
            } else if (index == 1) {
                return require('../../assets/images/chat.png');
            } else {
                return require('../../assets/images/user.png');
            }
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
          >
            <Image source={getIcon()} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}