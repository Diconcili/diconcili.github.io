import { useState } from 'react';
import React from 'react';
import Perfil from './Perfil';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Apresentacao from './Apresentacao';
import Habilidades from './Habilidades';

function App() {
  const conteudo = {
    tecnologias:{
      titulo: "Tecnologias de Programação",
      texto:"Durante a faculdade, fui apresentado ao Java para Introdução à Programação, posteriormente, ao iniciar o estágio onde trabalhei, fui introduzido ao C# e ao Angular, com um pouco de Javascript. \n\nPara o desenvolvimento de atividades em matérias da faculdade como Inteligência Artificial e Estatística e Probabilidade, tive um contato pequeno com Python, que pretendo aprofundar futuramente. \n\n Em conta do desenvolvimento do meu TCC, pretendo adquirir conhecimentos voltados para o desenvolvimento de jogos utilizando a engine Unity, além de outras ferramentas que possam vir a ser necessárias durante o processo. \n\n Viso em um futuro próximo entrar no mercado de trabalho voltado para desenvolvimento de jogos.",
    },

    musica:{
      titulo: " Música",
      texto:"Em determinada época do ensino médio, durante meu segundo ano, descobri um gosto escondido pela música, comecei a fazer aulas de violão no instituto SESC (Serviço Social do Comércio).\n\n Atualmente, estudo um pouco sobre composição musical, além de possuir planejamentos para a compra de uma guitarra e um contrabaixo para fins de prática.", 
    },

    games:{
      titulo: " Games",
      texto:"Meu contato com jogos eletrônicos se inicia em uma época muito nova da minha infância, com 7 anos de idade recebi meu primeiro computador, em 2009, quando comecei a ter contato também com a internet. \n\n Minha experiência com games na internet foi muito vasta, de jogos de plataforma até jogos 3D e RPGs, o que naturalmente me guiou a buscar por jogos fora dos browsers, conhecendo assim o mundo dos simuladores de guerra, aviação e ficção. \n\n Atualmente, tenho contato com jogos voltados para jogos de tiro táticos (CSGO 2 e Valorant), MOBAs (League of Legends e Dota2) e RPGs (Baldur's Gate 3 e Persona 3). \n\nO contato com a variedade e possibilidades do mundo dos games foi o que me fez definir que desejo estar neste mercado o quanto antes.",
    }, 

    mercado:{
      titulo: "Mercado de Trabalho",
      texto:"Ingressei no mercado de trabalho em 2021, iniciando meu estágio na NDD Tech através do programa Academia do Programador, curso voltado para o aprendizado de tecnologias tanto para front-end quanto back-end que alegava ter a proposta de contratar aqueles que concluíssem o curso com desempenho satisfatório. Aprendi sobre C#, Javascript e Angular neste curso.  \n\nIngressei oficialmente na empresa com carteira assinada ao fim do curso, em dezembro de 2021. Ao longo do tempo que estive no quadro de funcionários, trabalhei como Analista Desenvolvedor na vertical de Documentos Eletrônicos, onde adquiri algum conhecimento em C, através da tecnologia que utilizávamos para transformação de documentos, Map4Connect, além de desenvolver conhecimentos sobre o uso de APIs e diversos tipos de documentos fiscais. Posteriormente, em fevereiro de 2024, fui alocado para o setor de Logística, onde continuei praticando algumas destas coisas, mas aprofundei meus conhecimentos em Angular e o uso de APIs. \n\n Atualmente não estou mais com a empresa, fui desligado em julho de 2024, e desenvolvo um TCC sobre o desenvolvimento de um jogo educativo para o aprendizado da música, juntando meus maiores interesses atualmente. Além do desenvolvimento do trabalho de conclusão de curso, também inicio cursos voltados para esta área, a fim de somar ao currículo e meus conhecimentos para ingressar no mercado de trabalho.",
    }
  }

  const [itemSelecionado, setItemSelecionado] = useState('tecnologias');  

  return (
    <>    
      <Apresentacao/>   

      <Perfil/>

      <Habilidades></Habilidades>

      <Navbar expand="lg" className="bg-body-tertiary" style={{ width: 1065, position: 'absolute', top: '39%', left: '30%'}}>
        <Container>
          <Navbar.Brand href="#home">Áreas de Interesse e outras informações</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#tecnologias" onClick={() => setItemSelecionado('tecnologias')}>Tecnologias de Programação</Nav.Link>
              <Nav.Link href="#musica" onClick={() => setItemSelecionado('musica')}>Música</Nav.Link>
              <Nav.Link href="#games" onClick={() => setItemSelecionado('games')}>Games</Nav.Link>
              <Nav.Link href="#mercado" onClick={() => setItemSelecionado('mercado')}>Mercado de Trabalho</Nav.Link>
           </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>  

      <Card style={{ height:405, width: 1065, position: 'absolute', top: '44%', left: '30%'}}>
        <Card.Title><h2>{conteudo[itemSelecionado].titulo}</h2></Card.Title>
        <Card.Body><p> {conteudo[itemSelecionado].texto.split('\n').map((linha, index) => (
                    <span key={index}>
                    {linha}
                    <br />                    
                    </span>))}
          
        </p></Card.Body>
      </Card>
    </>
  )
}

export default App