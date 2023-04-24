import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import "./Shop.css";

//Mensaje de Compra con ID
import MessageSuccess from "../MessageSucess/MessageSucess";

//Firestore
import { getFirestore, collection, addDoc } from "firebase/firestore";

const estadoInicial = {
    name: "",
    lastName: "",
    city: "",
};

const Shop = () => {
    const [values, setValues] = useState(estadoInicial);
    const [purchaseID, setPurchaseID] = useState("");
    const querydb = getFirestore();

    const onChange = (e) => {
      const { value, name } = e.target;
      setValues({...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(querydb, "purchases"), {
          values,
        });
        setPurchaseID(docRef.id);
        setValues(estadoInicial);
      };

  return (
    <div>
    <h1 className="form-title">Formulario</h1>
    <form className="form-container" onSubmit={onSubmit}>
      <TextField className="form-input" style={{ margin: 10 }} placeholder="Nombre" name="name" value={values.name} onChange={onChange} />
      <TextField className="form-input" style={{ margin: 10 }} placeholder="Apellido" name="lastName" value={values.lastName} onChange={onChange} />
      <TextField className="form-input" style={{ margin: 10 }} placeholder="Ciudad" name="city" value={values.city} onChange={onChange} />
      <button className="btn-submit" type="submit">
        Enviar
      </button>
    </form>
    {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
  </div>
  )
}

export default Shop;