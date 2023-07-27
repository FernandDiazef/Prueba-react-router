import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const API = "https://api.escuelajs.co/api/v1/";

  const [datos, setDatos] = useState([]);
  const [filtrito, setFiltrito] = useState(false)

  useEffect(() => {
    const getData = async (baseUrl) => {
      const { data } = await axios.get(baseUrl + "products")
      setDatos(data)
    }
    getData(API);
  }, [filtrito])

  const filtrar = () => {
    const copyData = datos.filter((item) => item.price > 1000)
    setDatos(copyData);
  }

  const cargarTodos = () => {
    setFiltrito(!filtrito)
  }

  return (
    <>
      <Button onClick={() => filtrar()} className={`me-3`}>Filtrar mayores a 1000</Button>
      <Button onClick={() => cargarTodos()}>Todos</Button>
      <Row>
        {datos.map((item) => (
          <Col key={item.id} className={`mt-4`} md={4}>
            <Card style={{ width: '18rem', minHeight: "30rem" }}>
              <Card.Img variant="top" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Link to={`/Product/${item.id}`} className='text-decoration-none'>
                  Ver Mas
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

    </>
  );
}

export { Home };
