import React from 'react'
import'holderjs'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./App.css"
import "./index.css"



function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#Agence de voyage">Hotels</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Agence de voyage"></Nav.Link>

              <Nav.Link href="#Restaurants">#Restaurants</Nav.Link>

            
            </Nav>
          </Container>
        </Navbar>
        <h1>Tunisie</h1>
        <Row xs={1} md={1} className="g-1">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="http://www.tunisie360.info/images/hammamet1.jpg"/>

                <Card.Body className="bg-secondary shadow-1-strong">
                  <Card.Title>Hammamet</Card.Title>
                  <Card.Text>
                  Station trépidante en été, réputée pour ses plages et son sens de la fête, Hammamet est aussi une petite ville au cachet authentique. Une mer de turquoise, des senteurs de jasmin, des maisons blanches et des remparts dorés par les siècles … Une poésie particulière se dégage de sa médina bordée de sable fin. A proximité, la nouvelle station de Yasmine Hammamet offre un décor plus contemporain, tandis que les forêts et les champs de citronniers ont de quoi réjouir les amoureux de la nature.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src="https://voyage-tunisie.info/wp-content/uploads/2019/04/Nabeul-La-capitale-de-lartisanat-tunisien3.jpg"/>
                <Card.Body className="bg-secondary shadow-1-strong">
                  <Card.Title>Nabeul et le Cap Bon</Card.Title>
                  <Card.Text>
                  Promontoire pointé vers la Sicile, la région du Cap Bon est un vaste jardin où les orangers et les citronniers brandissent leurs fruits au cœur de l’hiver. Ses plages de sable fin comptent parmi les plus belles de Tunisie. Ville principale du Cap Bon, Nabeul est réputée pour sa poterie, ses nattes de jonc et ses essences de fleurs. Le port de pêche de Kélibia, les sources chaudes de Korbous, les fauconniers d’El Haouaria sont quelques-unes des curiosités de cette région.
                  </Card.Text>
                </Card.Body>
              </Card>
              
              <Card>
              <Card.Img variant="top" src="https://www.themediterraneantraveller.com/wp-content/uploads/2017/07/tunisia-sidi-bou-said-famous-view.jpg"/>
                <Card.Body className="bg-secondary shadow-1-strong">
                  <Card.Title>Carthage et Sidi Bou Said</Card.Title>
                  <Card.Text>
                  Tout près de la capitale, un site prestigieux et des panoramas saisissants : telles se présentent les Côtes de Carthage, du nom d’une des plus glorieuses cités antiques de la Méditerranée. Fondée par les Phéniciens, détruite puis reconstruite par les Romains, Carthage est aujourd’hui une ville à la mode. A côté, Sidi Bou Saïd est un village raffiné dont les maisons blanches et bleues se bousculent à flanc de colline face à la mer. Près de ces lieux inspirés s’étendent les plages de Gammarth et la Marsa.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
              <Card.Img variant="top" src="http://www.tresorsdumonde.fr/wp-content/uploads/2016/10/Bizerte1.jpg"/>
                <Card.Body className="bg-secondary shadow-1-strong">
                  <Card.Title>Bizerte et Dougga</Card.Title>
                  <Card.Text>
                  Amoureux de nature et d’authenticité, les plages et les vallées du nord de la Tunisie vous combleront. Criques sauvages, forêts, vignes et vastes champs de blé… Cette région verdoyante abrite de surcroît deux sites inscrits au patrimoine mondial de l’Unesco. L’un est un site culturel, la cité romaine de Dougga, et l’autre est le parc naturel d’Ichkeul dont le lac attire des milliers d’oiseaux migrateurs. En bord de mer, Bizerte, sentinelle sur la Méditerranée, est une ville d’histoire au charme préservé.
                  </Card.Text>
                </Card.Body>
              </Card>
              

            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  )
}



export default App;