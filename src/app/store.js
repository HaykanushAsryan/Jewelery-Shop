import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../Components/Menu/homeSlice';
import charmReducer from '../Components/Menu/charmSlice';
import colorReducer from '../Components/Menu/colorSlice';
import wishlistReducer from '../Components/Menu/wishlistSlice';
import bagReducer from '../Components/Menu/homeSlice';
import bagBeltReducer from '../Components/Menu/homeSlice';
import accaountReducer from '../Components/Menu/myAccaountSlice';
import beltReducere from '../Components/Menu/myAccaountSlice';
import necklaceReducer from '../Components/Menu/myAccaountSlice';
import pendantsReducer from '../Components/Menu/myAccaountSlice';
import charmsReducer from '../Components/Menu/myAccaountSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    charms: charmReducer,
    colors: colorReducer,
    wishlisht: wishlistReducer,
    bag: bagReducer,
    bagBelt: bagBeltReducer,
    accaount: accaountReducer,
    belts: beltReducere,
    necklace: necklaceReducer,
    pendants: pendantsReducer,
    charm: charmsReducer

  },
});
