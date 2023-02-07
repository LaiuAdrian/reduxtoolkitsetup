import { configureStore } from '@reduxjs/toolkit';
import editNumbers from './editNumbers';

export default configureStore({
    reducer:{
        edit_numbers:editNumbers
    }
})