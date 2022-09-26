import React from 'react'

const Footer = (props) => {
    return (
        <>
            <button style={{ color: "black", backgroundColor: "green", border: "2px solid white" }} onClick={props.handleClick}>{props.label}</button>
        </>
    )
}

export default Footer