import React from 'react'
import CameraList from './CameraList';
import '../styles/CameraShop.css';
import { Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const CameraShop = ({ cameras, addToCart, handleSearch }) => {
    return (
        <div className="container">
        <Form className="mb-4">
            <InputGroup>
                <Input onChange={ e => handleSearch( e.target.value ) } placeholder="Search" bsSize="lg"  />
                <InputGroupAddon addonType="append">
                <Button color="dark px-4"><i className="fa fa-search text-warning" aria-hidden="true"></i></Button>
                </InputGroupAddon>
            </InputGroup>
        </Form>
            <div className="row">
                { cameras.map(( camera, idx ) => ( 
                    <div className="col-md-4 col-sm-6"  key={ idx } >
                        < CameraList 
                            addToCart={ addToCart }
                            price={ Math.round( camera.price * 100 / 100 ).toFixed(2) } 
                            onSale={ camera.onSale } 
                            rate={ camera.rating } 
                            name={ camera.name } 
                            img={ camera.picture }
                            id={ camera.id } 
                        />
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default CameraShop