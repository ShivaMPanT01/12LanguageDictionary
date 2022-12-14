import React from "react";

import categories from "../../data/categories";
import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";

import styles from "./Dictionary.module.css";
import { debounce } from "../../helper/debounce";
import { useDictionary } from "../../store/dictionary-context";
import { SET_SEARCH_WORD, SET_SELECTED_LANG } from "../../store/ActionTypes";

function DictionaryForm() {
    const { darkMode, dispatch, selectedLang } = useDictionary();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: darkMode ? "#000" : "#ffffff",
            },
            mode: darkMode ? "dark" : "light",
        },
    });

    const handlerChange = debounce(
        (text) => dispatch({ type: SET_SEARCH_WORD, payload: text }),
        800
    );

    return (
        <div className={styles["form-container"]}>
            <ThemeProvider theme={darkTheme}>
                <TextField
                    className={styles["input-search"]}
                    id="standard-basic"
                    label="Search a word"
                    variant="standard"
                    onChange={(e) => handlerChange(e.target.value)}
                />
                <TextField
                    select
                    label="Language"
                    value={selectedLang}
                    id="outlined-select-currency"
                    className={styles["select-dropdown"]}
                    onChange={(e) =>
                        dispatch({
                            type: SET_SELECTED_LANG,
                            payload: e.target.value,
                        })
                    }
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat.label} value={cat.label}>
                            {cat.value}
                        </MenuItem>
                    ))}
                </TextField>
            </ThemeProvider>
        </div>
    );
}

export default DictionaryForm;
