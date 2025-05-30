import React from 'react';
import {ScrollView} from 'react-native';
import Titulo from './components/Titulo';
import FotoPerfil from './components/FotoPerfil';
import Saudacao from './components/Saldacao';
import CartaoUsuario from './components/CartaoUsuario';

export default function App(){
  return(
    <ScrollView>
    
    <Titulo />
    <Saudacao nome='Lari' />

    <FotoPerfil/>

    <CartaoUsuario nome='Kauany' descricao='Moiada' img='perfil00' />
  

    <CartaoUsuario nome='Leonardo' descricao='tartaruga' img='perfil02' />


    <CartaoUsuario nome='Jurema' descricao='haram' img='perfil03' />

       </ScrollView>
  
  );
}