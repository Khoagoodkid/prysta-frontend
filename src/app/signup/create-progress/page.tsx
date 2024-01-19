"use client"
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { VerificationStep } from "@/components/create-progress/VerificationStep";

import { ProfileProps } from "../page";
import { useSearchParams } from "next/navigation";
import { Page } from "@/Page";

const SteppedProgress = ({ searchParams }: {
    searchParams: {
        profile: string
    }
}) => {
    const userData = JSON.parse(searchParams.profile)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [stepsComplete, setStepsComplete] = useState(0);
    const numSteps = 4;

    const handleSetStep = (num: -1 | 1) => {
        if (
            (stepsComplete === 0 && num === -1) ||
            (stepsComplete === numSteps && num === 1)
        ) {
            return;
        }

        setStepsComplete((pv) => pv + num);
    };
    const steps = [<VerificationStep key={0} userData={userData}  setNextBtnDisabled ={setNextBtnDisabled}/>,
     <h1 key={1}>ddd</h1>, 
     <h1 key={2}>ddd</h1>, 
     <h1 key={3}>ddd</h1>,]
    return (
        <Page includeFooter={false} includeHeader={false}>
            <div className="h-full w-screen flex items-center justify-center">
                <div className="p-8 bg-white shadow-lg rounded-md w-full max-w-2xl mx-auto">
                    <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
                    <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg overflow-auto">
                        {steps[stepsComplete]}

                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <button
                            disabled={stepsComplete <= 1}
                            className="px-4 py-1 rounded hover:bg-gray-100 text-black"
                            onClick={() => handleSetStep(-1)}
                        >
                            Back
                        </button>
                        <button

                            disabled={nextBtnDisabled}
                            className={`px-4 py-1 rounded text-white ${nextBtnDisabled ? 'bg-base-v2-6' : 'bg-black'}`}
                            onClick={() => handleSetStep(1)}
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>

        </Page>

    );
};

const Steps = ({
    numSteps,
    stepsComplete,
}: {
    numSteps: number;
    stepsComplete: number;
}) => {
    const stepArray = Array.from(Array(numSteps).keys());

    return (
        <div className="flex items-center justify-between gap-3">
            {stepArray.map((num) => {
                const stepNum = num + 1;
                const isActive = stepNum <= stepsComplete;
                return (
                    <React.Fragment key={stepNum}>
                        <Step num={stepNum} isActive={isActive} />
                        {stepNum !== stepArray.length && (
                            <div className="w-full h-1 rounded-full bg-gray-200 relative">
                                <motion.div
                                    className="absolute top-0 bottom-0 left-0 bg-indigo-600 rounded-full"
                                    animate={{ width: isActive ? "100%" : 0 }}
                                    transition={{ ease: "easeIn", duration: 0.3 }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
    return (
        <div className="relative">
            <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${isActive
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-gray-300 text-gray-300"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isActive ? (
                        <motion.svg
                            key="icon-marker-check"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1.6em"
                            width="1.6em"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.125 }}
                        >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                        </motion.svg>
                    ) : (
                        <motion.span
                            key="icon-marker-num"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.125 }}
                        >
                            {num}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {isActive && (
                <div className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse" />
            )}
        </div>
    );
};
SteppedProgress.getInitialProps = async ({ query }: { query: any }) => {
    const { profile } = query

    return { profile }
}
export default SteppedProgress;