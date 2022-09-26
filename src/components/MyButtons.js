import React from 'react'
import Footer from './Footer'
import "./MyButtons.css"

const index = () => {
    const handlerClick = () => {
        console.log("Btn 1 clicked")
    }
    return (
        <>
            <div className='container' style={{ display: "flex" }}>
                <span>
                    <Footer label="END EVENT" /></span>
                <div className="Btn2 flex-end">
                    <Footer label="STREAMING" handleClick={handlerClick} />
                    <Footer label="EDIT EVENT" handleClick={handlerClick} />
                    <Footer label="RESERVE BOX" handleClick={handlerClick} />
                    <Footer label="ADD PARTICIPANTS" handleClick={handlerClick} />
                    <Footer label="VIEW PROMO CODES" handleClick={handlerClick} />
                    <Footer label="VIEW INVITEES" handleClick={handlerClick} />
                    <Footer label="JOIN AS HOST" handleClick={handlerClick} />
                </div>
            </div>
        </>
    );
}
export default index