import React, {useContext, useEffect, useState} from "react";

const BudgetContext = React.createContext();

export function useBudget() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {

  //The total budget (haven't implemented yet)
  const [budget, setBudget] = useState(0);
  //Currently selected Category id
  const [selectedCatId, setSelectedCatId] = useState(0);
  //Currently selected Expense array
  const [selectedCatArray, setSelectedCatArray] = useState([]);
  //Hold current categories array
  const [Categories, setCategories] = useState(()=>{
    let data = localStorage.getItem("Cat");
    if(data !== null){
      return JSON.parse(data);
    }else{
      return []
    }
  });

  const [errorMessage, setErrorMessage] = useState("");
 

    function AddCategory(name, amount, allocation){
    if(Categories.find(item => item.name === name)){
      return setErrorMessage("This category already exits!");
    }
    if(amount < 0 || allocation < 0){
      return setErrorMessage("Please set positive number :)");
    }
    let Id = getID();
      setCategories([{ Id, name, amount, allocation }, ...Categories]);

    localStorage.setItem(Id, []);
  }

    function AddExpense(date, time ,description, amount){
    //Getting Id
    let Id = getID();
    if(amount < 0){
      return setErrorMessage("Please enter valid amount");
    }
      setSelectedCatArray([{ id: Id, date, time, description, amount }, ...selectedCatArray]);
  }

    function UpdateCategoryAmount(categoryId, newAmount) {
        setCategories((prevCategories) => {
            return prevCategories.map((category) => {
                if (category.Id === categoryId) {
                    // Add the newAmount to the existing amount
                    return {
                        ...category,
                        amount: Number(category.amount) + Number(newAmount),
                    };
                }
                return category;
            });
        });
    }

    function getID() {
    const randomNumber = Math.floor(Math.random() * 10000000); // Generate a random 7-digit number
     // Ensure it's exactly 7 digits
      return randomNumber.toString().padStart(7, '0');
  }


   //Updating the Categories to localStorage every time it changes
   useEffect( ()=>{
    localStorage.setItem("Cat", (JSON.stringify(Categories)));
  }, [Categories]);

   //Updating the expense array for each category when it changes
   useEffect( () => {
    localStorage.setItem(selectedCatId,JSON.stringify(selectedCatArray));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCatArray]);

  //Updating the array to correct name
  useEffect( () =>{
    let data = localStorage.getItem(selectedCatId);
    console.log(data);
    if(data !== ''){
      setSelectedCatArray(JSON.parse(data));
    }else{
      setSelectedCatArray([]);
    }

  }, [selectedCatId]);

    // Add the "Uncategorized" category as the default when the component mounts
    useEffect(() => {
        AddCategory("Uncategorized", 0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        Categories,
        setCategories,
        UpdateCategoryAmount,
        selectedCatId,
        setSelectedCatId,
        selectedCatArray,
        setSelectedCatArray,
        errorMessage,
        setErrorMessage,
        AddCategory,
        AddExpense
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
