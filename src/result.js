import React from "react";
import './App.css'

function Result({term,secretNum}){
    let result;
        if(term){
        if(term > secretNum){
            result="Higher";
        }
        else if(term<secretNum){
            result='Lower';
        }
        else if(term==secretNum){
            result='Right!! "Great"'
        }
        else {
            result="Invalid input";
        }
    }

        
    return(

        <h3>You Guessed:{result}</h3>)    
}

export default Result;