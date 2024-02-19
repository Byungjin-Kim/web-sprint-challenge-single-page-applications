import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'

import axios from "axios";
import * as yup from 'yup'
import schema from './formSchema'

import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
import Confirmation from "./components/Confirmation"

const initialFormValues = {
  username: "", //name
  size: "", // size
  sauce: "", // sauce

  //toppings
  pepperoni: false,
  tomatos: false,
  sausage: false,
  olives: false,

  // const toppings = ['pepperoni', 'sausage','tomatos', 'olives']

  gluten: false, // add gluten 

  special: "" // speical instructions
}

const initialFormErrors = {
  username: "",
  size: "",
  sauce: ""
}

const initialOrders = [];

const initialDisabled = true;

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState(initialOrders);

  function reset() {
    setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  useEffect(() => {
    //Adjust the Status of 'disabled' Every Time 'formValues' Changes
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])



  // wrting function for change in pizzaform props



  const inputChange = (inputName, inputValue) => {
    // console.log(inputName, inputValue);
    validate(inputName, inputValue)
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }



  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(({ data }) => {
        // console.log(data)
        setOrders([data, ...orders])
      })
      .catch(err => {
        console.log(err)
        debugger
      })
      .finally(setFormValues(initialFormValues))
  }


  const formSubmit = () => {
    const newOrder = {
      username: formValues.username.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: {
        pepperoni: formValues.pepperoni,
        sausage: formValues.sausage,
        tomatos: formValues.tomatos,
        olives: formValues.olives,
      },
      gluten: formValues.gluten,
      special: formValues.special.trim(),
    }
    setFormValues(initialFormValues)
    postNewOrder(newOrder)
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route path="/pizza">
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          reset={reset}
          orders={orders}
          errors={formErrors}
        />
      </Route>

      <Route path="/pizza/confirm">
        <Confirmation orders={orders} />
      </Route>
    </Switch>
  );
};
export default App;
