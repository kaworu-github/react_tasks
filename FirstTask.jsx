//import {тут импортируються компоненты}
import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function FirstTaskSection() {

    //task1
	let [color, setColor] = useState("white");
	// isShown, isDisplayed, isHidden,
	// isModalShown
	// isTextShown / isTextDisplayed / 
	let color_arr = ["red", "blue", "green", "orange", "pink", "purple", "yellow"];
	let random_color = color_arr[Math.floor(Math.random() * color_arr.length)];
	console.log(random_color);
    return(

        <section>
						<div style={{backgroundColor:`${color}`}}>
							<Button onTouch={() => setColor(color=random_color)}>change color</Button>	
						</div>
					</section>
    )
}