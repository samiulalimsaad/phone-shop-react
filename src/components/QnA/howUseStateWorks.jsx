import React from "react";

const HowUseStateWorks = () => {
    return (
        <div>
            <h2 className="text-2xl">How useState Works?</h2>
            <p>useState is a React Hook.</p>
            <p>
                useState allow to declare state inside a functional component.
            </p>
            <p>useState function takes a default value and returns and array</p>
            <p>
                from the array we get readonly variable in index 0 and a setter
                function in index 1
            </p>
            <p>readonly variable is immutable</p>
            <p>setter function is mutable</p>
            <p>
                setter function takes value and update the value of the readonly
                variable
            </p>
            <p>
                useState don't allow us to change any state data directly rather
                it allow us to use a setter function because react need to
                complete few stuff under the hood.
            </p>
        </div>
    );
};

export default HowUseStateWorks;
