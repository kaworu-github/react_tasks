import React, { useState } from 'react';
import Button from '../components/Button/Button';
import "../App.css";

export default function ThemeChanger() {
    let [isDarkTheme, setIsDarkTheme] = useState(false);

    return(
        <div className={isDarkTheme?"dark_theme":"light:theme"}>
			<Button onTouch={() => setIsDarkTheme(!isDarkTheme)}>
			{isDarkTheme?"Светлая тема":"Темная тема"}
			</Button>
		</div>
    )
}