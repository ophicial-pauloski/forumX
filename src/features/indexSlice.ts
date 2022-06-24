import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store'

interface indexProps {
    modalIsOpen: boolean,
    createPostModal: boolean,
    loginModal: boolean,
    registerModal: boolean,
}


const initialState: indexProps = {
  modalIsOpen: false,
  createPostModal: false,
  loginModal: false,
  registerModal: false,
};

export const globalSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        openModal: (state: indexProps, ) => {
            state.modalIsOpen = true;
        },
        closeModal: (state: indexProps) => {
            state.modalIsOpen = false;
        },
        openCreatePostModal: (state: indexProps) => {
            state.createPostModal = true;
        },
        closeCreatePostModal: (state: indexProps) => {
            state.createPostModal = false;
        },
        openLoginModal: (state: indexProps) => {
            state.loginModal = true;
        },
        closeLoginModal: (state: indexProps) => {
            state.loginModal = false;
        },
        openRegisterModal: (state: indexProps) => {
            state.registerModal = true;
        },
        closeRegisterModal: (state: indexProps) => {
            state.registerModal = false;
        }
    },
    extraReducers: {
        
    },
});

export const {
  openModal,
  closeModal,
  openCreatePostModal,
  closeCreatePostModal,
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
} = globalSlice.actions;
export const selectAuth = (state: RootState) => state.indexSlice
export default globalSlice.reducer;