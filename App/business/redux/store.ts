import { configureStore, createSlice, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit';
import { voteApi } from '../api/CastVote';
import { catsApi } from '../api/FetchCats';
import { ICat } from '../types/interfaces';

const initialState: Partial<ICat>[] = []

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setCats: (state, action: PayloadAction<ICat[]>) => {
            state = action.payload;
        }
    },
});

export const { setCats } = catsSlice.actions;

const middlewares = [
    catsApi.middleware,
    voteApi.middleware
]

const store = configureStore({
    reducer: {
        cats: catsSlice.reducer,
        [catsApi.reducerPath]: catsApi.reducer,
        [voteApi.reducerPath]: voteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

export default store;