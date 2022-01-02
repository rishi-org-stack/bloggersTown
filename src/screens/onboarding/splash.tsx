import { Container, Text } from '../../lib/index'
import React from 'react'
import R from "../../res"

const Splash = () => {
    return (
        <Container 
            alignItems='center' 
            center 
            flex={1} 
            backgoundColor={R.colors.background}
            >
            <R.svgs.Logo/>
        </Container>
    )
}

export default Splash;
