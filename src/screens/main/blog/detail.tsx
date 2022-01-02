import React from 'react'
import { Dimensions, Pressable, ScrollView } from 'react-native'
import { Container, Text, TouchableContainer } from '../../../lib'
import R from '../../../res'
import { Header } from '../components'

interface Props {
    
}

const Detail = (props: Props) => {
    return (
        <Container flex={1} alignItems='center'  backgoundColor={R.colors.background}>
            <Container height={"100%"} width={"90%"}>
                <Header name={<Pressable onPress={()=>console.log('back')}><R.svgs.Left/></Pressable>} type='dots'/>
            {/* </Container>
            <Container height={"100%"} width={'90%'}> */}
                
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text weight='bold' large marginT={10}>
                Four Things Every Woman {"\n"} Needs To Know
                </Text>

                <Container width={'100%'} row  marginT={10}>
                    <R.svgs.P5/>
                    <Container marginL={20}>
                        <Text color={R.colors.darkBlueText}>
                            Rishi Jha
                        </Text>
                        <Text weight='500' small color={R.colors.darkGrrey}>
                            2m ago
                        </Text>
                    </Container>
                    <Container flex={1} row alignItems='center' style={{justifyContent:'flex-end'}} >
                    <TouchableContainer marginL={20} centerMain height={'100%'} width={20}>
                            <R.svgs.Share/>
                        </TouchableContainer>
                        <TouchableContainer marginL={20} centerMain height={'100%'} width={20}>
                            <R.svgs.BookmarkL/>
                        </TouchableContainer>
                    </Container>
                </Container>
                <Container marginT={20} width={'100%'}>
                     <R.pngs.BlogPaceholder/>
                    <Text large weight='bold' marginT={10}>
                    A man’s sexuality is never your {'\n'}
                    mind responsibility.
                    </Text>
                    <Container>

                    </Container>
                    <Container width={"95%"} marginT={10}>
                        <Text small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at numquam, maiores molestiae repudiandae laborum a inventore reprehenderit in omnis, quidem odio aspernatur quod pariatur vero voluptatum consectetur tempora eius.

                        </Text>
                    </Container>
                    
                </Container>
                </ScrollView>
                <TouchableContainer
                 backgoundColor={R.colors.blue}
                 width={100} 
                 height={50} 
                 centerMain 
                 borderRadius={10}
                 Onpress={()=>console.log("ok")}
                 rightComponent={
                     <Container
                      height={'100%'} 
                      marginR={10} 
                    //   center 
                        style={{justifyContent:'center'}}
                      width={40} 
                       >
                        <Text weight='bold' color={R.colors.background}>
                            2.1K
                        </Text>
                     </Container>
                 }
                 style={{elevation:50,position:'absolute',bottom:50, left:Dimensions.get('screen').width-150 }} >
                    <Container row>
                        <R.svgs.LikeL/>
                    </Container>
                </TouchableContainer>
            </Container>
            
            {/* </Container> */}
        </Container>
    )
}

export default Detail
