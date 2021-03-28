import { memo, useCallback, useState } from "react";

const ChildCallback = memo(({onClick, id}) => {

    console.log('Rendering Child Component '+ id);

    return (
        <div>
            <h6>Child component</h6>
            <button onClick={onClick}>Click It</button>
            
        </div>
    )
});


const CallbackParent = (props) => {

    const [ counter, setCounter ] = useState(0);

    console.log('rendering Parent')

    const incrementCounter = useCallback(() => {
        setCounter(prevState => prevState + 1);
    }, []);

    const doClick = () => {
        console.log('click')
    };

    const doCallbackClick = useCallback(()=>{
        console.log('click callback')
    },[]);

    return (
        <div style={{maxWidth : 1100, margin : '0 auto', padding: '1rem' }}>
            <h4>Callback Demo</h4>
            <p>This is demo for what happens when you use callback vs when you dont use callback<br/>Open console to see what is going on</p>
            <p>When you click Increment Counter the counter in this component is updated. which forces the re-render of the component.</p>
            <button type="button" onClick={incrementCounter}>Increment Counter</button> <br />
            <div>Counter Val : {counter}</div>
            <div className="row" >
                <div className="col-xs-6">
                    <ChildCallback onClick={doClick} id={1}></ChildCallback>
                </div>
                <div className="col-xs-6">
                    <ChildCallback onClick={doCallbackClick} id={2}></ChildCallback>
                </div>
            </div>
        </div>
    )
}



export default CallbackParent;