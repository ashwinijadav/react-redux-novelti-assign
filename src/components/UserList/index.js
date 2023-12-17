

import React, { useState, useEffect } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch} from "react-redux";
import {DeleteUser} from "../../Actions/action";

const UserList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const allUser = useSelector((state)=>state.UserReducer.userList);
    console.log("alluserlist : " + allUser)   

    

    return (
        <>
            <TableContainer component={Paper} className="main">
                <Button variant="contained" isableripple="true" onClick={() => navigate('/')} > Add User </Button>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Fname</TableCell>
                            <TableCell>Lname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile No.</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUser.map((user, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{user.fname}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phoneNumber}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>
                                        <DeleteIcon onClick={() =>dispatch(DeleteUser(user.id))} />
                                        {/* <EditIcon /> */}

                                        <Link to={`/edit-user/${user.id}`}>
                                            <EditIcon />
                                        </Link>

                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserList;     



