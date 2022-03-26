import React from "react";

const PropsVsState = () => {
    return (
        <div>
            <h2 className="text-2xl">Props Vs State?</h2>

            <h3 className="my-4 text-xl">Props:</h3>
            <ol className="list-decimal">
                <li>Props is read only.</li>
                <li>Props pass from the parent element.</li>
                <li>
                    Props are used to communicate from one Component to other.
                </li>
                <li>Props are immutable.</li>
                <li>stateless Component may have Props.</li>
                <li>we can pass data from one Component to other via Props.</li>
                <li>only accessible from child Component.</li>
            </ol>
            <h3 className="my-4 text-xl">State:</h3>
            <ol className="list-decimal">
                <li>State is readable and writable.</li>
                <li>State pass from the parent element to child as Props.</li>
                <li>Props are used to store data in a Component.</li>
                <li>Props are mutable via a setter function.</li>
                <li>stateless Component don't have state.</li>
                <li>on state change react re render the Component.</li>
                <li>only accessible inside the Component.</li>
            </ol>
        </div>
    );
};

export default PropsVsState;
