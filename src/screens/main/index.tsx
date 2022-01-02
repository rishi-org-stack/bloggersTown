import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React  from "react";
import { Container, Text, TouchableContainer } from "../../lib";
import Edit from './blog/edit';
import Home from './home/home';
import Profile from './profile/profile';
import R from "../../res";


const Tab = createBottomTabNavigator();

const Icon = (p: {
  focused: boolean;
  color: string;
  size: number;
  text?:string
  children?:React.ReactNode
})=>{
  return (
    <Container height={'100%'} width={'100%'} center>
      {p.children}
      <Text color={p.focused ? R.colors.darkBlue : R.colors.darkGrrey} style={{fontSize:10}}>
        {p.text}
      </Text>
    </Container>
  )
}

const MainRoute =()=>{
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
              width:'90%',
              height:60,
              bottom:10,
              borderRadius:10,
              alignSelf:'center'
            }
            // header:()=><Text>ok</Text>
          }}>
            <Tab.Screen name="Home" component={Home} options={{
              tabBarLabelStyle:{
              color:R.colors.darkGrrey
    
              },
              tabBarIcon:(p)=><Icon {...p} text='Home'><R.svgs.HomeD/></Icon>,
              
              }}
              
              />
            <Tab.Screen name="Profile" component={Profile}options={{
              tabBarLabelStyle:{
              color:R.colors.darkGrrey
    
              },
              tabBarIcon:(p)=><Icon {...p} text='Profile'><R.svgs.Search/></Icon>,
              
              }}  />
            <Tab.Screen  name='o' component={Edit}options={{
              tabBarLabelStyle:{
              color:R.colors.darkGrrey
    
              },
              tabBarIcon:(p)=>{
                return(
                  <Container
                    alignItems='center'
                    height={'100%'}
                    width={'100%'}
                    backgoundColor='transparent'
                  >
                  <Container
                   height={50} 
                   borderRadius={50} 
                   center
                   width={50}
                   style={{bottom:20}} 
                   backgoundColor={p.focused?R.colors.darkBlue: R.colors.blue}>
                      {
                        p.focused?<R.svgs.Cross/>:<R.svgs.Plus height={20} width={20}/>
                      }
                  </Container>
                  </Container>
                  
                )
              },
              // tabBarShowLabel:false
              
              }}  />
            <Tab.Screen name="Search" component={Edit} options={{
              tabBarLabelStyle:{
                color:R.colors.darkGrrey
    
              },
              tabBarIcon:(p)=><Icon {...p} text='Search'><R.svgs.Search/></Icon>,
              
              }}  />
            <Tab.Screen name="Menu" component={Edit} options={{
              tabBarLabelStyle:{
                color:R.colors.darkGrrey
              },
              tabBarIcon:(p)=><Icon {...p} text='Menu'><R.svgs.Menu/></Icon>,
              
              }} />
          </Tab.Navigator>
    )
}


export default MainRoute;