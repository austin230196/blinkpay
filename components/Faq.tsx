'use client'


import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";


export default function Faq({question, answer}: {question: string; answer: string}){
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="flex flex-col transition-all ease-out duration-500" onClick={() => setShowAnswer(old => !old)}>
            <div className="flex items-center cursor-pointer gap-5 py-2 px-8 bg-gray-900/5">
                <span>
                    {showAnswer ? <FiMinus /> : <FiPlus />}
                </span>
                <p className="uppercase font-bold text-[17px] leading-1">{question}</p>
            </div>
            {
                showAnswer ? (
                    <div className="w-full p-5 text-black/50 leading-1">
                        {answer}
                    </div>
                ) : null
            }
        </div>
    )
}