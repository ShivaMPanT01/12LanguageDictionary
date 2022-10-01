import React from "react";
import { useDictionary } from "../../store/dictionary-context";

import styles from "./Header.module.css";

function Header() {
    const { searchWord } = useDictionary();
    return (
        <header className={styles.header}>
            <h2 className={styles.heading}>
                {searchWord ? searchWord : "Dictionary"}
            </h2>
        </header>
    );
}

export default Header;
