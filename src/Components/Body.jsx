import "bootstrap/dist/css/bootstrap.css";
import MyCard from "./MyCard";
import { useBudget } from "../Context/BudgetContext";

export default function Body() {

  const { Categories } = useBudget();

  return (
    <div className="container">
      <div className="" style={
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(400px,1fr))',
          gap: '20px 30px'
        }
      }>
        {Categories.map( (item) => (
          <MyCard key={item.Id} Id={item.Id} name={item.name} allocation={item.allocation} amount={item.amount}/>
        ))}
      </div>
    </div>
  );
}
