import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL, CAST_VOTE, FETCH_CATS } from '../constants/ApiConstants';
import { ICat } from '../types/interfaces';

export const voteApi = createApi({
    reducerPath: 'voteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL, headers: {
            'x-api-key': API_KEY,
        }
    }),
    endpoints: (builder) => ({
        castVote: builder.mutation<{ message: string; id: string }, { sub_id: string, image_id: string; value: string; }>({
            query: (params) => ({
                url: `${CAST_VOTE}?sub_id=${params.sub_id}&image_id=${params.image_id}`,
                method: 'POST',
                headers: {
                    'x-api-key': API_KEY,
                },
                body: {
                    sub_id: params.sub_id,
                    image_id: params.image_id,
                    value: params.value,
                }
            })
        })
    })
});

export const { useCastVoteMutation } = voteApi;