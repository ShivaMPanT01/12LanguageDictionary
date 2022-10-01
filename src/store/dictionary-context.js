import { createContext, useContext, useReducer } from "react";
import {
    DARK_MODE,
    IS_LOADING,
    SET_DATA,
    SET_SEARCH_WORD,
    SET_SELECTED_LANG,
} from "./ActionTypes";

export const DictionayContext = createContext({
    isLoading: false,
    searchWord: "",
    selectedLang: "",
    data: [],
    darkMode: true,
});

const initialState = {
    isLoading: false,
    data: [],
    searchWord: "",
    selectedLang: "en",
    darkMode: true,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_SEARCH_WORD:
            return {
                ...state,
                searchWord: payload,
            };
        case SET_SELECTED_LANG:
            return {
                ...state,
                selectedLang: payload,
            };
        case SET_DATA:
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        case DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return { ...state };
    }
};

function DictionayContextProvider(props) {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DictionayContext.Provider
            value={{
                selectedLang: state.selectedLang,
                searchWord: state.searchWord,
                isLoading: state.isLoading,
                data: state.data,
                darkMode: state.darkMode,
                dispatch: dispatch,
            }}
        >
            {children}
        </DictionayContext.Provider>
    );
}

export const useDictionary = () => useContext(DictionayContext);

export default DictionayContextProvider;
