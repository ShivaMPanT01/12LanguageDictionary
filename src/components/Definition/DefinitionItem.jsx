import React from "react";
import { useDictionary } from "../../store/dictionary-context";

import styles from "./DefinitionItem.module.css";

function DefinitionItem({ data }) {
    const { darkMode } = useDictionary();

    return (
        <li
            className={styles["definition-item"]}
            style={{
                backgroundColor: !darkMode ? "#3b5360" : "white",
                color: darkMode ? "black" : "white",
            }}
        >
            <b>{data.definition}</b>
            <hr className={styles["hor-line"]} />
            {data.example && (
                <span>
                    <b>Example :</b> {data.example}
                </span>
            )}
            {data.synonyms && (
                <span>
                    <b>Synonyms :</b> {data.synonyms.map((s) => `${s}, `)}
                </span>
            )}
        </li>
    );
}

export default DefinitionItem;
