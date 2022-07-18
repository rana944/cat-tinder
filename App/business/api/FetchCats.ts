import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL, FETCH_CATS } from '../constants/ApiConstants';
import { ICat } from '../types/interfaces';

export const catsApi = createApi({
    reducerPath: 'catsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL, headers: {
            'x-api-key': API_KEY,
        }
    }),
    endpoints: (builder) => ({
        getCatsList: builder.query<ICat[], undefined>({
            query: () => FETCH_CATS
        })
    })
});

export const { useGetCatsListQuery } = catsApi;