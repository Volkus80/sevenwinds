import { useEffect } from "react";
import s from "./App.module.scss";
import Header from "./features/header/Header";
import DataSheet from "./features/dataSheet/DataSheet";
import Loader from "./features/loader/Loader";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  fetchOverloads,
  setEditable,
  setPath,
  addRowLocally,
} from "./app/rowsSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.rows.rows);

  useEffect(() => {
    dispatch(fetchOverloads());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Header />
      <DataSheet />
      <Loader />
    </div>
  );
}
