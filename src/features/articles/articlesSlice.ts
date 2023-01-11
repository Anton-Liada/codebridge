import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '/src/types/enums';
import { IArticlesState, IArticle } from '/src/types/types';

const initialState: IArticlesState = {
  articles: [],
  status: Status.IDLE,
  error: null,
};

export const fetchArticles = createAsyncThunk('aritcles/fetchArticles', async () => {
  const response = await axios.get(
    'https://api.spaceflightnewsapi.net/v3/articles'
  );

  return response.data;
});

const setStatus = (state: IArticlesState) => {
  state.status = Status.LOADING;
};

const setError = (state: IArticlesState) => {
  state.status = Status.FAILED;
  state.error = 'Something went wrong';
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, setStatus)
      .addCase(
        fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
          state.status = Status.SUCCEEDED;
          state.articles = action.payload;
        }
      )
      .addCase(fetchArticles.rejected, setError);
  },
});

export default articlesSlice.reducer;
