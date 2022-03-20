import React, {Component} from 'react';
import {View,
    Text,
    StatusBar, 
    ImageBackground, 
    StyleSheet, 
    TextInput, 
    Button, 
    RefreshControl, 
    FlatList, 
    TouchableOpacity, 
    ToastAndroid,
    Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <View style={{flex:1}}>
          <ImageBackground source={require('../images/bg.png')} resizeMode='cover' style={{width:360, height:750}}>
          <StatusBar barStyle='light-content' backgroundColor="#a1e6e2"/>

          <Text style={styles.header}>Hiling.id</Text>
          <View style={styles.viewForm}>
            <Text style={styles.variabelForm}>Lokasi Keberangkatan</Text>
            <TextInput placeholder='Lokasi Keberangkatan' style={styles.TextInput} onChangeText={getText('keberangkatan')} value={text.keberangkatan}/>

            <Text style={styles.variabelForm}>Lokasi Tujuan</Text>
            <TextInput placeholder='Lokasi Tujuan' style={styles.TextInput} onChangeText={getText('kedatangan')} value={text.kedatangan}/>

            <Text style={styles.variabelForm}>Tanggal Keberangkatan</Text>
            <TextInput placeholder='Tanggal Keberangkatan' style={styles.TextInput} onChangeText={getText('tanggal')} value={text.tanggal}/>

            <Button
                title="klik"
                color='#db03fc'
                onPress={() => navigation.navigate('Details', {text})}
            />
            <Separator />
        </View>

        <Text style={styles.footer}>Heksa Dananjaya (119140057)</Text>

          </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 50,
        color: '#fc7f03',
        fontWeight: 'bold',
        fontStyle : 'italic',
        fontFamily:'Courier New'
    },

    footer: {
        textAlign:'center',
        marginTop:130,
        color: 'grey'
    },

    viewForm: {
        marginTop: 50,
        marginHorizontal: 40,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 20,
    },

    variabelForm: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize:14
    },

    TextInput: {
        borderBottomWidth: 1,
        borderWidth:1,
        marginHorizontal:0,
        paddingHorizontal:10,
        borderColor:'#adadad',
        borderRadius:4,
        marginTop:10,
        color:'#666666',
        fontSize: 12,
        paddingVertical:5,
        marginBottom:35,
    },

    separator: {
        marginVertical: 8,
        
    },

    flatList: {
        marginBottom:10, 
        backgroundColor:'#2196f3', 
        marginHorizontal:20, 
        borderRadius:30, 
        justifyContent:'center', 
        alignItems:'center'
    },
});

export default Home;