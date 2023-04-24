import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "./MessageSucess.css";

const MessageSuccess = ({ purchaseID }) => {
	return (
         <Alert severity="success" className="shop-message">
            <AlertTitle>Compra Finalizada!</AlertTitle>
           Gracias por tu compra! <strong>ID de transacción: {purchaseID}</strong>
         </Alert>
			/* <Alert severity='success'>
				Gracias por su compra! su id de transacción es: {purchaseID}
			</Alert> */           
	);
};

export default MessageSuccess;
