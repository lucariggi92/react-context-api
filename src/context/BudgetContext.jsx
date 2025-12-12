////creo il contesto con questa pagina

import { createContext, useContext, useState } from "react"

//definisco il contesto e assegno un numoe al contesto che dipende dalla funzionalità specifica che voglio implementare

//createcontext crea il contenitore
const BudgetContext = createContext();

//definisco la funzione del provider?
function BudgetProvider({ children }) {

    //inserisco la variabile di stato che mi gestisce la funzionalità tasto attivo o meno- la imposto a false perchè non attivata di default

    const [isBudget, setIsBudget] = useState(false)

    function toggleBudget() {
        setIsBudget((current) => !current);
    }

    const contextValue = {
        isBudget,
        toggleBudget,
    }
    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    )
}

//creo un hook che mi eviti di scrivere in ogni componente useContext(BudegetContext)
//usecontext è un hook e serve a leggere il valore dentro il contenitore
function useBudget() {
    const contextValue = useContext(BudgetContext);
    return contextValue;
}

export { BudgetProvider, useBudget}

