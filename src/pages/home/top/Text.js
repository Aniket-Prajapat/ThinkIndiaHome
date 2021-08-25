import React from 'react'
import Typewriter from "typewriter-effect";

const Text = () => {
    return (
        <h1> <Typewriter

            onInit={(typewriter) => {

                typewriter
                    .typeString('Hey Folks ' + "👋")

                    .pauseFor(1000)
                    .deleteAll()

                    .typeString('Welcome To!! ')

                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Think India MNIT Jaipur')

                    .start();
            }}
        /></h1>
    )
}

export default Text
