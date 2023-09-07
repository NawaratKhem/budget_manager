import { CurrencyFormatter } from "../utils";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import ExpenseModal from "./ExpenseModal";
import { useState } from "react";
import { useBudget } from "../Context/BudgetContext";
import { Link } from "react-router-dom";


export default function MyCard({ Id, name, amount, allocation }) {

  const [showModal, setShowModal] = useState(false);
  const { selectedCatId ,setSelectedCatId } = useBudget();

    const handleShowModal = () => {
        setShowModal(true);
        setSelectedCatId(Id);
        console.log("MyCard-SelectedCat: "+selectedCatId)
    };

    const handleCloseModal = () =>{
        setShowModal(false);
    };


  function OnClickedd(){
    setSelectedCatId(Id);
  }
  return (
    <>
    <Card className="text-white" onFocus={OnClickedd} style={{backgroundColor: 'transparent', borderBottom: '1px solid white', borderRadius: '0%'}}>
      <Card.Body className="">
        <Card.Title className="d-flex justify-content-between">
          <div className="">{name}</div>
          <div className="ms-2"> <span>{CurrencyFormatter.format(amount)}</span> {allocation > 0 ? <span className="fs-6">/ {CurrencyFormatter.format(allocation)}</span> : ''}</div>
        </Card.Title>

        {allocation > 0 ? <ProgressBar className="rounded-pill mt-4"
                                       variant={getProgressBarVariant(amount, allocation)}
                                       min={0}
                                       max={allocation}
                                       now={amount}/> : ''}

        <Stack direction="horizontal" gap="2" className="mt-3">
          <Button  type="submit" onClick={handleShowModal} className="ms-auto" variant="outline-secondary">Add Expense</Button>
          <Link onClick={OnClickedd} to={"/expense/"+selectedCatId} className="btn btn-outline-success">View</Link>
        </Stack>

      </Card.Body>
    </Card>
    <ExpenseModal show={showModal} onClose={handleCloseModal} categoryName={name}/>
    </>
  );
}


function getProgressBarVariant(amount, allocation) {
  const ratio = amount / allocation
  if (ratio < 0.5) return "success"
  if (ratio < 0.75) return "warning"
  return "danger"
}