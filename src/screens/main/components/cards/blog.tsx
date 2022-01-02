import React from 'react'
import { Pressable } from 'react-native';
import { Container, Text, TouchableContainer } from '../../../../lib'
import R from '../../../../res'

interface Props {
    img?:any;
    topic?:string;
    question?:string
}

const Blog = (props: Props) => {
    const [likeClicked, setlikeClicked] = React.useState(false)
    return (
        <Container height={160} width={'100%'} row >
            <Container flex={1} center >
                {props.img}
            </Container>
            <Container flex={2}>
                <Container flex={1} center>
                    <Text bold style={{alignSelf:'flex-start', marginLeft:20}} color={R.colors.blue}>
                        {props.topic}
                    </Text>
                </Container>

                <Container flex={2} >
                    <Text bold large style={{alignSelf:'flex-start', marginLeft:20}}>
                        {props.question}
                    </Text>
                </Container>
                <Container flex={1} row >
                    <Container flex={1} >
                            <TouchableContainer
                                height={'100%'}
                                centerMain
                                width={'70%'}
                                rightComponent={<Text small>2.1k</Text>}
                                Onpress={()=>{
                                    setlikeClicked(!likeClicked)
                                }}
                                >
                                    {
                                        likeClicked?
                                        <R.svgs.LikeCliked/>
                                        :
                                        <R.svgs.Like/>
                                    }
                                {/* <R.svgs.Like/> */}
                            </TouchableContainer>
                    </Container>
                    <Container flex={1}>
                            <TouchableContainer
                                height={'100%'}
                                centerMain
                                width={'30%'}
                                // rightComponent={<Text small>2.1k</Text>}
                                // Onpress={()=>{
                                //     setlikeClicked(!likeClicked)
                                // }}
                                >
                                    <R.svgs.Bookmark/>
                                    {/* {
                                        likeClicked?
                                        <R.svgs.LikeCliked/>
                                        :
                                        <R.svgs.Like/>
                                    } */}
                                {/* <R.svgs.Like/> */}
                            </TouchableContainer>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Blog
