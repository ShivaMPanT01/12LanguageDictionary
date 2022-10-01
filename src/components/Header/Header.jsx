import React from "react";

import styles from "./Header.module.css";

function Header({ searchWord }) {
    return (
        <header className={styles.header}>
            <h2 className={styles.heading}>
                {searchWord ? searchWord : "Dictionary"}
            </h2>
        </header>
    );
}

export default Header;
