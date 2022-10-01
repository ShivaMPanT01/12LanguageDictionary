import React from "react";

import styles from "./Spinner.module.css";

function Spinner({ height = "50", width = "50" }) {
    return (
        <svg
            className={styles.spinner}
            width={width}
            height={height}
            viewBox="0 0 38 45"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#b93838"
        >
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 2)" strokeWidth="3">
                    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </svg>
    );
}

export default Spinner;
