import { configureStore } from '@reduxjs/toolkit'

import todoSlience from './slice/todo'
import tokenSlience from './slice/token'


const store = configureStore({
    reducer: {
      todos: todoSlience,
      token: tokenSlience,
    }
})

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;