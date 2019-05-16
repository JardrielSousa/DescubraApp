import React from 'react';
import { StyleSheet, Text, View, TextInput ,Button ,Alert} from 'react-native';

export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
        numero : 0,
        numeroDigitado : '',
        text : 0,
      }
    }
    GeraNumero=()=>{
      var min = 0 ;
      var max = 20 ;
      var NumeroGerado = Math.floor(Math.random()* max ) + min;
      this.setState({
        numero : NumeroGerado 
      })
    }
    VerificaDados=(numeroDigitado)=>{      
      this.setState({
          numeroDigitado : numeroDigitado
      })
        if(numeroDigitado==this.state.numero){
          alert(`Você acertou!! 
          O número é ${this.state.numero}`);
          this.state.numero = 0;

        }else{
          var maior = 'Errou !!! Digite um valor maior!!';
          var menor = 'Errou !!! '+
          'Digite um valor menor!!';
          if(numeroDigitado < this.state.numero){
              alert(maior);
          }else{
              alert(menor);
          }
        }
    }
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.text}>Digite um número:</Text>       
        <Text style={styles.text}
        >{this.state.numero}</Text>
        <TextInput style={styles.InputText}
            keyboardType='numeric'
            placeholder="Adivinhe o número" 
            onChangeText={this.VerificaDados}
            value={this.state.numeroDigitado}
            
        />
        <Button     
            onPress={this.GeraNumero}
            title="Iniciar"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },text:{
    fontSize:25,
    padding:10,
  },  
  InputText: {
    marginTop:10,
    color:'gray',
    fontSize:25,
    padding:10
  }
});
