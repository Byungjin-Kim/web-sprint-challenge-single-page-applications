import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
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
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    align-items: center;
    width: 70%

    div h3{
      color: tomato;
      font-size: 2em;
    }

    div h4{
      color: teal;
      font-size: 1.5em;
    }

    div p{
      color: firebrick;
      font-size: 1em;
    }
    
    .name-input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const toppings = ['pepperoni', 'sausage', 'tomatos', 'olives']

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

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

            <StyledForm className="pizza-Form" id="pizza-form" onSubmit={onSubmit}>

                <div className="pizza-order">
                    <h3>Build Your Own Pizza</h3>
                </div>

                <div className="name-input">
                    <label>Type Your Name Here for Your Order
                        <input
                            id="name-input"
                            value={values.username}
                            onChange={onChange}
                            name="username"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </label>
                </div>

                <div className="size-question">
                    <label>
                        <h4>Choice of Size</h4>
                    </label>
                    <p>Required</p>
                </div>

                <div className="size-selected">
                    <select
                        onChange={onChange}
                        name="size"
                        value={values.size}
                        id="size-dropdown"
                    >
                        <option value="">-Select an option</option>
                        <option value="small">Small</option>
                        <option value="medieum">Medieum</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="sauce-question">
                    <label>
                        <h4>Choice of Sauce</h4>
                    </label>
                    <p>Required</p>
                </div>

                <div className="sauce-choice">
                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="Original Red"
                            onChange={onChange}
                        />
                        Original Red</label>

                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="Galric Ranch"
                            onChange={onChange}
                        />
                        Galric Ranch</label>

                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="BBQ Sauce"
                            onChange={onChange}
                        />
                        BBQ Sauce</label>

                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="Spinach alfredo"
                            onChange={onChange}
                        />
                        Spinach Alfredo</label>
                </div>

                <div className="topping-question">
                    <label>
                        <h4>Add Toppings</h4>
                    </label>
                    <p>choose up to 2</p>
                </div>
                <div className="topping-select">
                    {toppings.map(topping => {
                        return (
                            <label>{topping}
                                <input
                                    type="checkbox"
                                    name={topping}
                                    checked={values.topping}
                                    onChange={onChange}
                                />
                            </label>
                        )
                    })}
                </div>

                <div className="sub-question">
                    <h4>Choice of Substitute</h4>
                    <p>Choose up to 1</p>
                </div>
                <div className="sub-select">
                    <label>
                        <input
                            type="checkbox"
                            name="gluten"
                            checked={values.gluten}
                            onChange={onChange}
                        />
                        Gluten Free Crust (+ $1.00)</label>
                </div>

                <div className="special-question">
                    <h4>Special Instructions</h4>
                </div>
                <div className="special-select">
                    <label>
                        <input
                            type="text"
                            name="special"
                            id="special-text"
                            checked={values.special}
                            onChange={onChange}
                            placeholder="Anything else you'd like to add"
                        />
                    </label>
                </div>

                <div className="error">
                    <div>{errors.size}</div>
                    <div>{errors.username}</div>
                    <div>{errors.sauce}</div>
                </div>

                <button className="submit" id="order-button" disabled={disabled}>Add to Order</button>

            </StyledForm>
        </>
    )
}