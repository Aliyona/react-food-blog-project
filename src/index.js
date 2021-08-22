import React from 'react'
import ReactDOM from 'react-dom'

// const el = React.createElement("h1", null, "hello");
const el1 = (
    <div>
        <h1>Hello world 1</h1>
        <h1>Hello world 2</h1>
    </div>
)

ReactDOM.render(el1, document.getElementById('root'))

console.log(el1)
