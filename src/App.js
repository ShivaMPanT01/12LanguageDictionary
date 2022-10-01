import { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Container, Switch } from "@mui/material";
import { getMeaning } from "./api-handlers/get-meaning";
import Header from "./components/Header/Header";
import DictionaryForm from "./components/DictionaryForm/DictionaryForm";
import Definition from "./components/Definition/Definition";

function App() {
    const [meanings, setMeanings] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [selectedLang, setSelectedLang] = useState("en");
    const [darkMode, setDarkMode] = useState(true);

    const searchMeaningHandler = useCallback(async () => {
        try {
            const data = await getMeaning(selectedLang, searchWord);

            setMeanings(data);
        } catch (error) {
            console.log(error);
        }
    }, [searchWord, selectedLang]);

    useEffect(() => {
        searchMeaningHandler();
    }, [searchMeaningHandler]);

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
                        onChange={() => setDarkMode(!darkMode)}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                </div>
                <Header searchWord={searchWord} />
                <DictionaryForm
                    darkMode={darkMode}
                    searchWord={searchWord}
                    selectedLang={selectedLang}
                    setSearchWord={setSearchWord}
                    setSelectedLang={setSelectedLang}
                />
                <Definition
                    darkMode={darkMode}
                    meanings={meanings}
                    searchWord={searchWord}
                    selectedLang={selectedLang}
                />
            </Container>
        </div>
    );
}

export default App;
