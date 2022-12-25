import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Popover, Typography} from '@mui/material'

export default function NewBusiness(props) {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [businessDetails, setBusinessDetails] = useState(
        {name: "", 
         address: "",
         hours: "",
         description: ""})

    const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;
        const handleClose = () => {
            setAnchorEl(null);
            };

         let handleSubmit = (e) => {
            e.preventDefault()
            const payload = { ...businessDetails}
            payload.id = props.business.length + 1
            console.log("The Business", payload)
            props.addBusiness(payload)
            setBusinessDetails({
            name: "", 
            address: "",
            hours: "",
            description: ""})
            setAnchorEl(e.currentTarget);
            
        }
    let handleTextChange = (e) => {
            const newState = { ...businessDetails }
            let businessCategory = e.target.id.split(" ")
            newState[businessCategory[1]] = e.target.value
            setBusinessDetails(newState)
        }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1,},
      }}
      className="addBusiness"
      noValidate
      autoComplete="off"
    >
      <TextField className="text" id="standard-basic name" label="Name" value={businessDetails.name} onChange={handleTextChange} variant="standard" />
      <TextField className="text" id="standard-basic address" label="Address" value={businessDetails.address} onChange={handleTextChange} variant="standard" />
      <TextField className="text" id="standard-basic hours" label="Hours (ex 8AM -9PM" value={businessDetails.hours} onChange={handleTextChange} variant="standard" />
      <TextField className="text" id="standard-basic description" label="Description" value={businessDetails.description} onChange={handleTextChange} variant="standard" />
      <Button className="formbutton" sx={{
        "backgroundColor": "darkblue"
      }}variant="contained" type="submit">SAVE</Button><Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography sx={{ p: 2 }}>Business has been added to listings</Typography>
    </Popover>
    </Box>
  );
}