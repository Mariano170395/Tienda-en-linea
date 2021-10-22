import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import { commerce } from '../../lib/commerce'



const AdressForm = ({checkoutToken}) => {

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
  //   console.log(countries);
  //   setShippingCountries(countries);
  // }

  // useEffect(()=>{
  //   fetchShippingCountries(checkoutToken.id)
  // }, [])


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Direccion de entrega
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
            <Grid container spacing={3}>
                <FormInput required name='Nombre' label="Nombre"/>
                <FormInput required name='Apellidos' label="Apellidos"/>
                <FormInput required name='Direccion' label="Direccion"/>
                <FormInput required name='Email' label="Email"/>
                <FormInput required name='Ciudad' label="Ciudad"/>
                <FormInput required name='Codigo Postal' label="Zip"/>
               <Grid item xs={12} sm={6}>
                {/* //     <InputLabel>Pais</InputLabel>
                //     <Select value={} fullWidth onChange={}>
                //         <MenuItem key={} value={}>
                //           Seleccionar
                //         </MenuItem>
                //     </Select>
                // </Grid>
                // <Grid item xs={12} sm={6}>
                //     <InputLabel>Subdivision</InputLabel>
                //     <Select value={} fullWidth onChange={}>
                //         <MenuItem key={} value={}>
                //           Seleccionar
                //         </MenuItem>
                //     </Select>
                // </Grid>
                // <Grid item xs={12} sm={6}>
                //     <InputLabel>Opciones de Envio</InputLabel>
                //     <Select value={} fullWidth onChange={}>
                //         <MenuItem key={} value={}>
                //           Seleccionar
                //         </MenuItem>
                //     </Select> */}
                </Grid>
            </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AdressForm;
