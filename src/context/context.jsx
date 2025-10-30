import { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();


const ContextProvider = (props) => {
    const [inputText, setInputText] =useState('');
    const [recentPrompts, setRecentPrompts] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const OnSent = async(prompt) => {
        setResultData('');
        setIsLoading(true);
        setShowResult(true);
        setRecentPrompts(inputText);
    const response = await  runChat(inputText)
    setResultData(response);
    setIsLoading(false);
    setInputText('')


    }


    const constTextValue ={
        prevPrompts,
        setPrevPrompts,
        inputText,
        setInputText,
        OnSent,
        setInputText,
        recentPrompts,
        isLoading,
        setRecentPrompts,
        resultData,
        showResult
    }

    return (
        <Context.Provider value={constTextValue}>
            {props.children}
        </Context.Provider>
    )


}

export default ContextProvider;