import { createContext } from "react";
const BudgetContext = createContext()


//creo il provider
function BudgetProvider ({children}){
    const [budgetMode, setBudgetMode]= useState(false);
    


    return <BudgetContext.Provider value ={{budgetMode, setBudgetMode}}>
        {children}</BudgetContext.Provider>
}

export {BudgetContext, BudgetProvider};

