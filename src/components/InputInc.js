import { useState } from "react"

function InputInc(props) {
    const [value, setValue] = useState(0)

    const decClick = () => {
        if (value === 0) return;
        setValue(+ value - 1)
        props.setValue(+ value - 1)
    }

    const incClick = () => {
        setValue(+ value + 1)
        props.setValue(+ value + 1)

    }
    const onChange = (e) => {
        if (e.target.value < 0) return;
        setValue(+ e.target.value)
        props.setValue(+ e.target.value)
    }

    return (
        <span>
            <button onClick={decClick}>-</button>
            <input min={0} type="number" value={value} onChange={onChange} />
            <button onClick={incClick}>+</button>
        </span>
    )
}

export { InputInc }