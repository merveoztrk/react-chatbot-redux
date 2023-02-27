import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USERS } from "./types";


export const getUsers = createAsyncThunk( GET_USERS, async () =>
{
    const response = await axios.get( "https://jsonplaceholder.typicode.com/users" );
    return response.data;
} );




