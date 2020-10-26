/*

{
    "USER_INDEX": "1",
    "ID": "fluke9241",
    "PW": "1234",
    "NAME": "name",
    "DIVCODE": "1001",
    "GRADE": "3",
    "PHONE": "010-2233-4455",
    "ADRESS": "주소",
    "JOIN_CO": "2018-02-10",
    "PROFILE": "src"
}

*/

/* EX) Count

import React, { useState } from "react";

    function Count() {
        const [number, setNumber] = useState(0);
    
        const onIncrease = () => {
            setNumber(prevNumber => prevNumber + 1);
        };
    
        const onDecrease = () => {
            setNumber(prevNumber => prevNumber - 1);
        };
    
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        );
    }
    export default Count;
    */

/*  EX) Ref
import React, { useState, useRef } from "react";

function Current() {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} ref={nameInput} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default Current;

    */

/* EX) InputSample
   import React, { useState } from "react";

   function Inputsample() {
       const [input, setinput] = useState({
           name: "",
           nickname: "",
       });
       const { name, nickname } = input;
       console.log(input);
       const onchange = e => {
           const { value, name } = e.target;
           setinput({
               ...input,
               [name]: value,
           });
       };
       const onreset = () => {};
       return (
           <div>
               <input placeholder="이름" name="name" onChange={onchange} value={name} />
               <input placeholder="닉네임" name="nickname" onChange={onchange} value={nickname} />
               <button onClick={onreset}>초기화</button>
               <div>
                   <b>값: </b>
                   {name} ({nickname})
               </div>
           </div>
       );
   }
   export default Inputsample;
   */
