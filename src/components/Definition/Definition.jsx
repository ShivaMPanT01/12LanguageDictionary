import React from "react";

import styles from "./Definition.module.css";
import DefinitionItem from "./DefinitionItem";

function Definition({ searchWord, meanings, selectedLang, darkMode }) {
    return (
        <div className={styles["definition-container"]}>
            {/* audio---------------------------- */}
            {meanings[0]?.phonetics && searchWord && selectedLang === "en" && (
                <audio
                    className={styles.audio}
                    src={meanings[0]?.phonetics[0]?.audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* audio---------------------------- */}
            {!searchWord ? (
                <h2 className={styles.instruction}>Start by typing a word </h2>
            ) : (
                <ul className={styles["definition-item__list"]}>
                    {meanings.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions.map((def, index) => (
                                <DefinitionItem
                                    key={index}
                                    data={def}
                                    darkMode={darkMode}
                                />
                            ))
                        )
                    )}
                </ul>
            )}
        </div>
    );
}

export default Definition;
