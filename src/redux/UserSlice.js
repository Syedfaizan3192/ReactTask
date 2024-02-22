import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    users: [],
    selectedUser: null,
    searchResults: [],
    error: ''
}
const GITHUB_ACCESS_TOKEN = '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'

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://api.github.com/users', {
            headers: {
                'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`
            }
        })
        .then(response => response.data)
})
export const fetchUserById = createAsyncThunk('user/fetchUserById', async (userId) => {
    const response = await axios.get(`https://api.github.com/users/${userId}`, {
        headers: {
            'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`
        }
    });
    ;
    return response.data;
});
export const searchUsers = createAsyncThunk('user/searchUsers', async (params) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${params}`, {
        headers: {
            'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`
        }
    });
    return response.data;
});
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(fetchUserById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedUser = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.loading = false;
            state.selectedUser = null;
            state.error = action.error.message;
        });
        builder.addCase(searchUsers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(searchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.searchResults = action.payload;
            state.error = '';
        })
        builder.addCase(searchUsers.rejected, (state, action) => {
            state.loading = false;
            state.searchResults = [];
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer