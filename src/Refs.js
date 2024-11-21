import { useRef } from 'react';
const Refs = ()=>{
    debugger
     let demoRef = useRef(null);
     let inputRef = useRef(null);
    function change(){
        demoRef.current.style.backgroundColor = inputRef.current.value
    }

    function handleInput() {

    }
    return (
        <div>
          <h1 ref={demoRef}> Change Color 1</h1>
          <input type="text" ref={inputRef} onChange={handleInput} />
          <button onClick={change}>Change</button>
        </div>
      );
};

export default Refs;