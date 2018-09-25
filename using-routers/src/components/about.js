import React from 'react'
import Rainbow from '../hoc/rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo repudiandae aperiam, tenetur explicabo aspernatur architecto id consequatur! Dicta, minima earum!</p>
        </div>
    )
}

export default Rainbow(About);