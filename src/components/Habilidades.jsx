import {React, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';

const Habilidades = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const imageStyle = {
        width: '10%', 
        height: 'auto', 
        maxHeight: '350px', 
        objectFit: 'contain' 
      };

    return (
    <Container fluidStyle={{ height: '100vh'}}>  
        <Card border="info" style={{ height: 430, width: 600, position: 'absolute', top: '5%', left: '57%'}}>          
          <Card.Body>
            <Card.Title>Habilidades</Card.Title>
                <Carousel controls={true} indicatores={true} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="data:image/png;base64,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" alt="FirstSlide"/>
                        <Carousel.Caption style={{bottom:'225px', color:'#000000'}}>
                            <h3>Java</h3>
                            <p>Primeira linguagem de programação, aprendi conceitos básicos, de variáveis à POO.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="https://www.criandobits.com.br/wp-content/uploads/2021/11/csharp.png" alt="Second Slide"/>
                        <Carousel.Caption style={{bottom:'225px', color:'#000000'}}>
                            <h3>C#</h3>
                            <p>Linguagem à qual fui apresentado dentro do mercado de trabalho.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="data:image/png;base64,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" alt="Third Slide"/>
                        <Carousel.Caption style={{bottom:'225px', color:'#000000'}}>
                          <h3>Angular</h3>
                          <p>Linguagem que aprendi para uso no front-end voltada para o trabalho.</p>
                        </Carousel.Caption>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="https://ojt.com/wp-content/uploads/2021/08/python-programming-language.png" alt="Third Slide"/>
                        <Carousel.Caption style={{bottom:'230px', color:'#000000'}}>
                          <h3>Python</h3>
                          <p>
                            Pequeno contato durante a faculdade, para matérias específicas.
                          </p>
                        </Carousel.Caption>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="https://velog.velcdn.com/images/bourgeois46/post/35e87db5-115d-464b-89a0-b2e88fd46f2e/image.png" alt="Fourth Slide"/>
                        <Carousel.Caption style={{bottom:'227px', color:'#000000'}}>
                          <h3>Javascript</h3>
                          <p>
                            Contato na faculdade e no trabalho.
                          </p>
                        </Carousel.Caption>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={imageStyle} className="d-block w-100" src="https://cdn-icons-png.flaticon.com/512/10169/10169724.png" alt="Fifth Slide"/>
                        <Carousel.Caption style={{bottom:'220px', color:'#000000'}}>
                          <h3>APIs</h3>
                          <p>
                            Utilização frequente durante o trabalho.
                          </p>
                        </Carousel.Caption>                        
                    </Carousel.Item>
                </Carousel>                  
          </Card.Body>          
        </Card> 
    </Container>  
  )
}

export default Habilidades