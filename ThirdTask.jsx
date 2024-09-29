import React, { useState } from 'react';
import Button from '../components/Button/Button';


export default function ThirdTask() {
    let [show, setShow] = useState("block");

    return(
            <div>
			    <p style={{display:`${show}`}}>МЕНЯ МОЖНО СКРЫТЬ</p>
			    <Button onTouch={() => setShow(isShow=> isShow='none')}>скрыть</Button>
			    <Button onTouch={() => setShow(isShow=>isShow="block")}>показать</Button>
		    </div>
    )
}