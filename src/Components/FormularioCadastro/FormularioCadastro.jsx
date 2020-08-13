import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    
    return(
    <form
        onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);}}>

        <TextField
                value={nome}
                
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if(tmpNome.length >= 3){
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                    
                }}
            id="nome" 
            label="Nome" 
            variant="outlined" 
            margin="normal"
            fullWidth 
        />
        <TextField
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
            }} 
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