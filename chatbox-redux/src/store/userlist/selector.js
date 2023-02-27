import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = ( state ) => state.chat;

export const chatSelector = createSelector( selectUsers, ( state ) => state );