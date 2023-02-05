import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rowsReducer from './rowsSlice';
import editableReducer from './editableSlice';

export const store = configureStore({
  reducer: {
    rows: rowsReducer,
    // editable: editableReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
