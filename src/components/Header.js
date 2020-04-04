import React from 'react';
import { Header, Icon } from 'react-native-elements';

export default function AppHeader({ showHideMenu = ()=>{}, backgroundColor }) {
    return (
        <Header 
            backgroundColor={backgroundColor}
            statusBarProps={{
                backgroundColor,
            }}
            containerStyle={{
                height: 56,
                borderBottomWidth: 0,
            }}
            leftComponent={<MenuIcon showHideMenu={showHideMenu}/>}
        />
    );
}

function MenuIcon({ showHideMenu, name = 'menu', color="#fff" }) {
    return <Icon name={name} color={color}  onPress={showHideMenu}/>
}
