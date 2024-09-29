import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function TaskNine() {
    let [color, setColor] = useState("white");
	let color_arr = ["red", "blue", "green", "orange", "pink", "purple"];
	let random_color = color_arr[Math.floor(Math.random() * color_arr.length)];
	console.log(random_color);

    return(
        <div className="component_list">
            <ul>
				<li style={{color:`${color}`}}><Button onTouch={() => setColor(color=random_color)}>изменить цвет</Button> FIRST</li>
				<li style={{color:`${color}`}}><Button onTouch={() => setColor(color=random_color)}>изменить цвет</Button> SECOND</li>
				<li style={{color:`${color}`}}><Button onTouch={() => setColor(color=random_color)}>изменить цвет</Button> THIRD</li>
                <li style={{color:`${color}`}}><Button onTouch={() => setColor(color=random_color)}>изменить цвет</Button> FOURTH</li>
                <li style={{color:`${color}`}}><Button onTouch={() => setColor(color=random_color)}>изменить цвет</Button> FIFTH</li>
			</ul>
		</div>
    )
}