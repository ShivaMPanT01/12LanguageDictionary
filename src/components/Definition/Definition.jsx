import React from "react";
import { useDictionary } from "../../store/dictionary-context";
import Spinner from "../../utils/Spinner";

import styles from "./Definition.module.css";
import DefinitionItem from "./DefinitionItem";

function Definition() {
    const { searchWord, data, selectedLang, isLoading } = useDictionary();

    return (
        <div className={styles["definition-container"]}>
            {/* audio---------------------------- */}
            {data[0]?.phonetics && searchWord && selectedLang === "en" && (
                <audio
                    className={styles.audio}
                    src={data[0]?.phonetics[0]?.audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* audio---------------------------- */}
            {!searchWord ? (
                <h2 className={styles.instruction}>Start by typing a word </h2>
            ) : isLoading && !data ? (
                <Spinner />
            ) : data && Array.isArray(data) && data.length > 0 ? (
                <ul className={styles["definition-item__list"]}>
                    {data.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions.map((def, index) => (
                                <DefinitionItem key={index} data={def} />
                            ))
                        )
                    )}
                </ul>
            ) : (
                <p className={styles["no-result"]}>No Result Found</p>
            )}
        </div>
    );
}

export default Definition;
