import React, { useState } from "react";
 import Modal from "../Modal/Modal";
// import Modal from "form_modal_sucess";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { states } from "../../assets/data/states";
import { departements } from "../../assets/data/departements";
import Select from "../Select/Select";
import { useDispatch } from "react-redux";
import { addEmploye } from "../../Employee/createEmploye";
import'./form.css'

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [date, setStart] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [departement, setDepartement] = useState("");
  const [state, setState] = useState("");
  const [errors, setError] = useState(false)
  const [dateToday] = useState(new Date().getTime())

  const data = {
    firstname,
    lastname,
    birth: JSON.stringify(birth),
    date: JSON.stringify(date),
    street,
    city,
    code,
    departement,
    state,
  };
  const dispatch = useDispatch();

  const handleClick = (event) => {
      event.preventDefault();
      if(validate() === true){
            event.stopPropagation()
            dispatch(addEmploye(data));
            setOpenModal(true);
        }
  };

  const stateValue = (e) => {
    setState(e.target.value);
  };

  const departementValue = (e) => {
    setDepartement(e.target.value);
  };

  const userRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ- -]{1,}$/;
  const numbRegex = /^[0-9]{5}/
  const validate = () => {  
    if(userRegex.test(firstname.trim()) && 
    userRegex.test(lastname.trim()) 
    && 
    dateToday > new Date(birth).getTime() &&
    date !== "" &&
    street !== "" && 
    userRegex.test(city.trim()) &&
    state !== "" && 
    numbRegex.test(code.trim()) &&
    departement !== ""
    ){
        return true
    } 
    
    
    else {
        return setError(true)
    }

  }

  return (
    <>
      <h2>Create Employee</h2>
      <div className="container">
        

        
        <form action="#" id="create-employee">
        <label> <span className="lab">First name</span> 
          <input
            className="input_employee"
            type="text"
            id="first-name"
            onChange={(e) => setName(e.target.value)}
           
          />
          {errors && !userRegex.test(firstname.trim()) ? (
            <p className="error_input">Votre nom doit comporter au minimum 2 caractère</p>
          ): (
            ""
          )}
          </label>
          <label><span className="lab">Last name</span> 
          <input
            className="input_employee"
            type="text"
            id="last-name"
            
            onChange={(e) => setLastName(e.target.value)}
          />
          </label>
          {errors && !userRegex.test(lastname.trim())? (
            <p className="error_input">Votre prénom doit comporter au minimum 2 caractère </p>
          ): (
            ""
          )}
          <label className="birth" htmlFor=""><span className="lab">Date of Birth </span> 
          <DatePicker
            className="input_employee"
           
            selected={birth}
            onChange={(date) => {
              setBirth(date);
            }}
          />
          </label>
         {errors && birth === "" || dateToday < new Date(birth).getTime() ?(
            <p className="error_input">Votre date de naissance n'est pas conforme</p>
         ): ""} 
         <label className="birth"><span className="lab">Start Date </span> 
          <DatePicker
            className="input_employee"
            
            selected={date}
            onChange={(date) => setStart(date)}
          />
          </label >
          {errors && date === ""?(
            <p className="error_input">Il semble y avoir une erreur avec votre date de commençement</p>
          ): ""}

          <div className="add"><span className="ad">Address</span> 
           <label><span className="lab_ad">Street</span> 
          <input
            className="input_employee"
            
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            /> </label>
            {errors && street === "" ?(
                <p className="error_input">Veuillez renseigner ce champs</p>
            ):""}
           
             <label> <span className="lab_ad">City</span> 
          <input
            className="input_employee"
           
            id="city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
          </label>
          {errors && !userRegex.test(city.trim()) ? (
            <p className="error_input">Votre ville doit être mieux renseigné </p>
          ): ""}
          <label> <span className="lab_ad">State</span> 
          <Select
            name="state"
            id="state"
            data={states}
            myFct={stateValue}
          /></label>
          {errors && state === "" ? (
            <p className="error_input">Veuillez faire un choix parmis la selection</p>
          ): ""}
          
           <label><span className="lab_ad">Zip code</span> 
          <input
            className="input_employee"
          
            id="zip-code"
            type="number"
            onChange={(e) => setCode(e.target.value)}
          /></label>
          {errors && !numbRegex.test(code.trim()) ? (
            <p className="error_input">Votre code postal doit comporter au minimum 5 caractères</p>
          ): ""}
          </div>
          <label> <span className="lab">Departement</span> 
          <Select
            name="departement"
            id="departement"
            data={departements}
            myFct={departementValue}
         ></Select> </label>
          {errors && departement === "" ? (
            <p className="error_input">Veuillez faire un choix parmis la selection</p>
          ): ""}
          
        </form>
        <button onClick={handleClick}>Save</button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </>
  );
};

export default Form;