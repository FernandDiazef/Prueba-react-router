import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProfileProduct = () => {

    const API = "https://api.escuelajs.co/api/v1/Products";

    const { idProduct } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getData = async (baseUrl) => {
            const { data } = await axios.get(baseUrl)

            setProduct(data)
        }
        getData(`${API}/${idProduct}`)
    }, [idProduct])


    return (
        <Row>
            <Col>
                <Card className='container'>
                    <Card.Body>
                        <Card.Img variant="top" src={product.images ? product.images[0] : ""} className='mb-3' style={{height: "25em"}} />
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <h2 className='text-center'>{product.price}</h2>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export { ProfileProduct };