import React, { useContext, useState } from "react";

const BudgetContext = React.createContext();

export function useBudget(){
    return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) =>{

    const [expense, setExpense] = useState([]);
    const [category, setCategory] = useState([]);

    function AddExpense(description,category,amount){
        let Id = getID();
        setExpense([...expense, { Id ,description, category, amount }])
    }

    function AddCategory(Name,allocation){
        setCategory([...category, {Name, allocation}])
    }

    function RemoveExpense(Id){
        const UpdatedSet = expense.filter( item => item.Id !== Id);
        setExpense(UpdatedSet);
    }

    function RemoveCategory(Name){
        const UpdatedSet = category.filter( item => item.Name !== Name);
        setCategory(UpdatedSet);
    }


    function getID() {
        const date = new Date();
        const milliseconds = date.getMilliseconds().toString().padStart(5, '0');
        return milliseconds;
      }

    return <BudgetProvider 
    value={{expense, category, AddCategory, RemoveCategory, AddExpense, RemoveExpense}}>
        {children}
    </BudgetProvider> 
}