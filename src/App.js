import { useCallback, useEffect } from "react";

import "./App.css";
import { Container, Switch } from "@mui/material";
import { getMeaning } from "./api-handlers/get-meaning";
import Header from "./components/Header/Header";
import DictionaryForm from "./components/DictionaryForm/DictionaryForm";
import Definition from "./components/Definition/Definition";
import { useDictionary } from "./store/dictionary-context";
import { DARK_MODE, IS_LOADING, SET_DATA } from "./store/ActionTypes";

function App() {
    const { dispatch, selectedLang, searchWord, darkMode } = useDictionary();

    const searchMeaningHandler = useCallback(async () => {
        dispatch({ type: IS_LOADING });
        try {
            const data = await getMeaning(selectedLang, searchWord);

            dispatch({ type: SET_DATA, payload: data });
        } catch (error) {
            console.log(error);
        }
    }, [searchWord, selectedLang, dispatch]);

    useEffect(() => {
        if (searchWord) {
            searchMeaningHandler();
        }
    }, [searchWord, selectedLang, dispatch, searchMeaningHandler]);

    return (
        <div
            className="App"
            style={{
                backgroundColor: darkMode ? "#282c34" : "#fff",
                color: darkMode ? "white" : "black",
                transition: "all 0.5s linear",
            }}
        >
            <Container maxWidth="md">
                <div style={{ textAlign: "right", paddingBlock: "0.5rem" }}>
                    <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
                    <Switch
                        checked={darkMode}
                        onClick={() => dispatch({ type: DARK_MODE })}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                </div>
                <Header />
                <DictionaryForm />
                <Definition />
            </Container>
        </div>
    );
}

export default App;
