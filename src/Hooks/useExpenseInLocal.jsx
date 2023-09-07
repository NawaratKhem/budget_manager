import { useState, useEffect } from 'react';

function useExpenseInLocal(category,key) {
  // Initialize the state with the data from local storage or an empty array
  const [expense, setExpense] = useState(() => {
    const storedItems = localStorage.getItem(category);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Save the updated items to local storage whenever the items change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(expense));
  }, [expense, key]);
}

export default useExpenseInLocal;
