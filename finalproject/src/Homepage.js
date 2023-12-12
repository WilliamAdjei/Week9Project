import { useState } from 'react'
import './Homepage.css'

function Welcomepage(){

    const [listofStuff, setListofStuff] = useState(["stuff", "stuff", "stuff"])

    

    return(
        //top part of the page Section
        <div className='topPage-section'>
            <div className='storename-btn'>
                Will's Gaming Console Accessories
                <div className='cart-btn'>
                    <div className='menubar-btn'>

                        
                        <div className='main-container'></div>
                        {/* <h1>Products We Recommend</h1> */}

                         
                        <div className='products-section'>
                            <div className='bottom-section'>

                            </div>


                        </div>

                    </div>
                    

                </div>

            </div>

        </div>
    )
}

export default Welcomepage