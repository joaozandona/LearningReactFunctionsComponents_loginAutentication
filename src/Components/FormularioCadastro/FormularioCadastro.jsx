import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){

    return(
        <form>
            <TextField
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal"
                fullWidth 
            />
            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth 
            />
            <TextField 
                id="CPF" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" defaultChecked={true} color="primary"/>}
            />
            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" defaultChecked={true} color="primary" />}
            />

            <Button variant="contained" color="primary" type="sumbit">Cadastrar</Button>
        </form>
    );

}

export default FormularioCadastro;