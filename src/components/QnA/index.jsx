import React from "react";
import HowReactWorks from "./howReactWorks";
import HowUseStateWorks from "./howUseStateWorks";
import PropsVsState from "./propsVsState";

const QnA = () => {
    return (
        <div className="space-y-4 font-mono">
            <HowReactWorks />
            <PropsVsState />
            <HowUseStateWorks />
        </div>
    );
};

export default QnA;
