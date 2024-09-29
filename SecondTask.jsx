import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function SecondTask() {
    // task 2
    let [changer, setChanger] = useState(50);
    return(
        <section>
                <div>
					<p style={{fontSize:`${changer}px`}}>React</p>
						<Button onTouch={() => setChanger(change=>change+=1)}>+</Button>
						<Button onTouch={() => setChanger(change=>change-=1)}>-</Button>
				</div> 
		</section>
    );
};