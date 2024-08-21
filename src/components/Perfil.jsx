import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const resumo = "Breve apresentação sobre minhas experiências no ensino e mercado de trabalho.";

const Perfil = () => {
    
    return (
    <>
        <Container fluidStyle={{ height: '100vh'}}>    
            <Card border="info" style={{ zIndex: 1050 ,width: 450, position: 'absolute', top: '5%', left: '30%'}}>
                <Card.Img variant="top" src="https://w7.pngwing.com/pngs/383/668/png-transparent-timeline-infographic-business-line-angle-presentation-business.png"/>
                <Card.Body>
                    <Card.Title>Histórico</Card.Title>
                    <Card.Text>   
                             {resumo}        
                    </Card.Text>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ensino Fundamental</Accordion.Header>
                                <Accordion.Body>
                                Nascido em Florianópolis, Santa Catarina, frequentei durante a 
                                infância a pré-escola Triângulo Catarinense, onde posteriormente 
                                ingressei na escola Adventista para o ensino fundamental I. <br />
                                Ao me mudar para Lages, Santa Catarina, encerrei o fundamental I 
                                na escola Univest e iniciei o fundamental II no colégio Energia, 
                                que posteriormente se tornou Objetivo, onde concluí meu ensino 
                                fundamental II.
                            </Accordion.Body>   
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ensino Médio</Accordion.Header>
                            <Accordion.Body>
                                Ainda no colégio Objetivo, tive aulas básicas de Espanhol e Inglês. <br />
                                Concluí o terceiro ano do Ensino Médio em 2019, ano que fiz a prova 
                                do ENEM que permitiu minha entrada no Instituto Federal de Santa Catarina.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Ensino Superior</Accordion.Header>
                            <Accordion.Body>
                                Em 2020 ingressei no IFSC (Instituto Federal de Santa Catarina), onde
                                curso Ciências da Computação até o presente momento, com previsão de
                                encerramento para o ano de 2024. <br /> Ao longo do curso fui apresentado 
                                o programa de estágio Academia do Programador, oferecido pela empresa
                                NDD Tech, onde posteriormente fui efetivado na empresa para meu primeiro 
                                trabalho com carteira de trabalho assinada.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>            
                </Card.Body>          
            </Card>              
        </Container>         
    </>
  )
}

export default Perfil