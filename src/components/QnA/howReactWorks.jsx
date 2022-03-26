import React from "react";

const HowReactWorks = () => {
    return (
        <div>
            <h2 className="text-2xl">How React Works?</h2>
            <p>
                what we write inside the react is nothing but a syntactic sugar.
            </p>
            <p>
                we write html like code in the react and under the hood it
                converts the code into core javascript
            </p>
            <div>
                <img src="/1.1.png" alt="" />
            </div>
            <div>
                <img src="/1.2.png" alt="" />
            </div>

            <p>
                react has it's own dom which is called virtual DOM. which
                provide huge the performance
            </p>

            <p>
                react only render the changes component or part that's why it's
                very interactive
            </p>

            <p>
                At first the changes are applied in virtual DOM the in the
                Browser DOM
            </p>
        </div>
    );
};

export default HowReactWorks;
