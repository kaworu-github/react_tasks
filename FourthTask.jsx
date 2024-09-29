import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function FouthTask() {
    //task 4
	let [move, setMove] = useState(0);
    return(
        <div>
			<div style={{backgroundColor:"lightblue"}} className="component_container">
				<p style={{marginLeft:`${move}px`}} >толкни меня</p>
			</div>
			<br />
			    <Button onTouch={() => setMove(moving=>moving+=50)}></Button>
		</div>
    )
}