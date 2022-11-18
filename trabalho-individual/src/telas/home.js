import React from "react";
import { StyleSheet, Image, Text, View, Button } from 'react-native'

import logo from '../../assets/logo.png'
import sino from '../../assets/sino.png'
import usuario from '../../assets/usuario.png'
import carteira from '../../assets/carteira.png'
import chave from '../../assets/chave.png'
import medico from '../../assets/medico.png'
import restituicao from '../../assets/restituicao.png'
import localizar from '../../assets/localizar.png'
import calendario from '../../assets/calendario.png'
import autorizacao from '../../assets/autorizacao.png'
import documento from '../../assets/documento.png'
import inicio from '../../assets/inicio.png'
import atendimento from '../../assets/atendimento.png'
import quadrados from '../../assets/quadrados.png'
import ajustar from '../../assets/ajustar.png'


export default function home() {
    return <>

    <View style={estilos.background}>
        <View style={estilos.blocoLogoEnome}>
            <Image source={logo} style={estilos.logo}></Image>
            <View style={estilos.blocoNomeLogo}>
                <Text style={estilos.bradesco}>bradesco</Text>
                <Text style={estilos.saude}>saúde</Text>
            </View>
            <Image source={sino} style={estilos.sino}></Image>
        </View>

        <Text style={estilos.nomeUsuario}>Olá, Raphaela</Text>

        <View style={estilos.card}>
            <Image source={usuario} style={estilos.usuarioImagem}></Image>
            <View>
                <Text style={estilos.nome}>Raphaela Fagundes</Text>
                <View style={estilos.plano}>
                    <Text style={estilos.textoPlano}>Tipo de plano:</Text>
                    <Text style={estilos.nomePlano}>SAUDE TOP</Text>
                </View>
                <View style={estilos.carteirinha}>
                    <Text style={estilos.textoCarteira}>Carteirinha Nº:</Text>
                    <Text style={estilos.numeroCarteira}>999 999 999999 999</Text>
                </View>
                <View style={estilos.validade}>
                    <Text style={estilos.textoValidade}>Validade:</Text>
                    <Text style={estilos.dataValidade}>09/26</Text>
                </View>

            </View>
        </View>

         <View style={estilos.cardBaixo}>
             <View style={estilos.digital}>
                 <Image source={carteira} style={estilos.carteiraImagem}></Image>
                 <Text>Carteirinha Digital</Text>
             </View>
            <View style={estilos.token}>
                 <Image source={chave} style={estilos.chaveImagem}></Image>
                 <Text>Gerar Token</Text>
             </View>
         </View>


    </View>

        <View style={estilos.fraseCard}>
            <Text style={estilos.frase}>O que você precisa hoje?</Text>
        </View>

        <View style={estilos.segundoCard}>
            <View style={estilos.cardMedicina}>
                <Image source={medico} style={estilos.medico}></Image>
                <Text>Saude digital</Text>
                <Text>telemedicina</Text>
            </View>

            <View style={estilos.cardReembolso}>
                <Image source={restituicao} style={estilos.reembolso}></Image>
                <View style={estilos.textoReembolso}>
                    <Text>Solicitar</Text>
                    <Text>reembolso</Text>
                </View>
            </View>

            <View style={estilos.cardLocalizar}>
                <Image source={localizar} style={estilos.localizar}></Image>
                <View style={estilos.textoLocalizar}>
                    <Text>Localizar</Text>
                    <Text>referenciados</Text>
                </View>
            </View>
        </View>

        <View style={estilos.segundoCard}>
            <View style={estilos.cardMedicina}>
                <Image source={calendario} style={estilos.calendario}></Image>
                <Text>Agendamento</Text>
                <Text>novamed</Text>
            </View>

            <View style={estilos.cardReembolso}>
                <Image source={autorizacao} style={estilos.autorizacao}></Image>
                <View>
                    <Text>Autorização de</Text>
                    <Text>procedimentos</Text>
                </View>
            </View>

            <View style={estilos.cardLocalizar}>
                <Image source={documento} style={estilos.documento}></Image>
                <View>
                    <Text>Extrato de</Text>
                    <Text>utilização</Text>
                </View>
            </View>
        </View>

        <View style={estilos.home}>
            <View style={estilos.cardMedicina}>
                <Image source={inicio} style={estilos.inicio}></Image>
            </View>

            <View style={estilos.cardReembolso}>
                <Image source={atendimento} style={estilos.atendimento}></Image>
            </View>

            <View style={estilos.cardLocalizar}>
                <Image source={quadrados} style={estilos.quadrados}></Image>
            </View>

            <View style={estilos.cardLocalizar}>
                <Image source={ajustar} style={estilos.ajustar}></Image>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({

background: {
    backgroundColor: "#f5f5f5",
},

//Header com logo

blocoLogoEnome: {
    flexDirection: "row", 
    marginTop: 30,
    marginLeft: 30,
},

logo: {
    width: 35,
    height: 35,
}, 

blocoNomeLogo: {
    flexDirection: "row", 
    paddingHorizontal: 2,
    marginTop: 10,
},

sino: {
    marginTop: 5,
    marginLeft: 60,
    width: 35,
    height: 35,
},

bradesco: {
    fontSize: 22,
    fontWeight: "bold"
    
},

saude: {
    paddingHorizontal: 5,
    fontSize: 22,
},

nomeUsuario: {
    marginLeft: 35,
    marginTop: 20,
    fontSize: 25,
},

//Infos card cinza

card: {
    marginTop: 40,
    flexDirection: "row", 
    padding: 15,
    backgroundColor: "#dce0e6",
},

usuarioImagem: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 10,
    width: 60,
    height: 60, 
},

plano: {
    flexDirection: "row", 
},

carteirinha: {
    flexDirection: "row", 
},

validade: {
    flexDirection: "row", 
},

//Estilização card

nome: {
    fontWeight: "bold", 
},


nomePlano: {
    fontWeight: "bold",
    marginLeft: 5,  
},


numeroCarteira: {
    fontWeight: "bold",
    marginLeft: 5, 
},


dataValidade: {
    fontWeight: "bold",
    marginLeft: 5, 
},

//Parte de baixo do card

cardBaixo: {
    flexDirection: "row",
    backgroundColor: "#CC092F",
    paddingVertical: 10,
},

digital: {
    marginLeft: 50,
    flexDirection: "row",
},

carteiraImagem: {
    marginRight: 10,
    width: 20,
    height: 20, 
},

token: {
    marginLeft: 10,
    flexDirection: "row"
},

chaveImagem: {
    marginRight: 10,
    width: 20,
    height: 20, 
},

//Opções

fraseCard: {
    backgroundColor: "#f5f5f5",
    marginTop: 20,
},

frase: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
},

segundoCard: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    paddingVertical: 20,
},

cardMedicina: {
    marginLeft: 40,
},

medico: {
    marginLeft: 20,
    width: 35,
    height: 35,
},

cardReembolso: {
    marginLeft: 20,
},

reembolso: {
    marginLeft: 20,
    width: 35,
    height: 35,
},

textoReembolso: {
    textAlign: "center",
    marginLeft: 10,
},

localizar: {
    marginLeft: 30,
    width: 35,
    height: 35,
},

cardLocalizar: {
    marginLeft: 20,
},

calendario: {
    marginLeft: 20,
    width: 35,
    height: 35,
},

autorizacao: {
    marginLeft: 30,
    width: 35,
    height: 35,
},

documento: {
    marginLeft: 10,
    width: 35,
    height: 35,
},

//Home

home: {
    backgroundColor: "#dce0e6",
    flexDirection: "row",
    paddingVertical: 20,
},

inicio: {
    width: 30,
    height: 30,
},

atendimento: {
    marginLeft: 30,
    width: 30,
    height: 30,
},

quadrados: {
    marginLeft: 30,
    width: 30,
    height: 30,
},

ajustar: {
    marginLeft: 30,
    width: 30,
    height: 30,
},
})