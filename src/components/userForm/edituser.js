// EditUser.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Paper, Grid, Box, FormLabel, InputLabel, TextField, MenuItem } from '@mui/material';
import TextInput from '../../common/textInput';
import { validateForm } from '../../utils/config';
import { UpdateUser, getUserDetails } from '../../Actions/action';
import { useDispatch, useSelector } from 'react-redux';

const EditUser = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserReducer.user);

    const [formData, setFormData] = useState({
        email: '',
        fname: '',
        lastName: '',
        address: '',
        countryCode: '+91',
        phoneNumber: '',

    });

    useEffect(() => {
        dispatch(getUserDetails(id));
      }, [dispatch, id]);
      

      useEffect(() => {
        if (user) {
          setFormData(user);
        }
      }, [user]);

    const handleFormSubmit = () => {
        dispatch(UpdateUser(formData));
        navigate('/userlist');

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));  

    };

    return (
        <>
            <Paper elevation={0} variant="outlined" className="main">
                <Grid
                    className="login"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className="login__section">
                        <Box className="login__section__header">
                            <FormLabel className="login__section__header">
                                Edit User 
                            </FormLabel>
                        </Box>
                        <TextInput
                            label={'First Name'}
                            name="fname"
                            value={formData.fname}
                            type={'text'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Last Name'}
                            name="lastName"
                            value={formData.lastName}
                            type={'text'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />

                        <TextInput
                            label={'Email'}
                            name="email"
                            value={formData.email}
                            type={'email'}
                            eventHandler={handleChange}
                        />
                        <Box sx={{ mb: '20px' }} />
                        <TextInput
                            label={'Email'}
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            type={'number'}
                            eventHandler={handleChange}
                        />
                      
                        <Box sx={{ mb: '20px' }} />
                        <TextInput
                            label={'Address 1 '}
                            name="address"
                            type={'text'}
                            value={formData.address}
                            eventHandler={handleChange}

                            multiline
                            rows={2}
                        />
                        <Box sx={{ mb: '40px' }} />
                        <Box textAlign="center">
                            <Button
                                className="setpass-btn"
                                sx={{ width: '30%', height: '40px', textAlign: "center" }}
                                onClick={handleFormSubmit}
                            >

                                Update User
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Paper>
        </>
    );
};

export default EditUser;
