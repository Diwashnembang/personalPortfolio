import React, { useEffect, useState } from "react";
import { test } from "./features/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.main.message);
  console.log(store);
  useEffect(() => {
    dispatch(test("test"));
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
