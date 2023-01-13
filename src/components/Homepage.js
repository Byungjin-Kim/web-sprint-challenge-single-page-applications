import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%
    align-items: center;
    margin: 0.5em 2em;
    padding: 1em 0.5em;
    
    h3 {
        color: green;
        font-size: 1.5em;
        text-align: center;
    }

    p {
        color: teal;
    } 
`
const StyledWrapper = styled.div`
    display: flex;
    flex-directionL column;
    align-items: center;
    padding: 4em;
    border: double 8px pink;
    background: papayawhip;

    div h1{
        color: tomato;
        font-size: 2.2em;
        text-align: center;
    }
`;

const Button = styled.button`
    background: white;
    border-radius: 3px;
    border: 2px solid tomato;
    font-size: 1.5em;
    color: palevioletred;
    margin: 0.5em 1em
    padding: 0.25em 1em
`;

const StyledFooter = styled.div`
    display: flex;
    flex-directionL column;
    align-items: center;
    padding: 2em 2em;

    div h3{
        color: lightseagreen;
        font-size: 1.5em;
        text-align: center;
    }
`

export default function Homepage(props) { // Route and #order-pizza
    return (
        <>

            <div className="homepage-header">
                <StyledHeader>
                    <h3>Bloomtech</h3>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <p>Help</p>
                    </div>
                </StyledHeader>


            </div>
            <StyledWrapper>
                <div className="intro">
                    <h1>Your Favorite Food, Delievered while Coding</h1>
                    <Link to="/pizza">
                        <Button id="order-pizza">Pizza?</Button>
                    </Link>
                </div>
            </StyledWrapper>

            <StyledFooter>
                <div className="deliveryOptions">
                    <h3>Food Delivery in Gotham City</h3>
                </div>
            </StyledFooter>
        </>
    );
}