import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

const { toggleTheme } = themeSlice.actions;


function Page() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <main className={`page ${mode}`}>
      <h1>exercicio</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Mudar tema
      </button>
    </main>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;