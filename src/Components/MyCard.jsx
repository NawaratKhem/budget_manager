import { CurrencyFormatter } from "../utils";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";

export default function MyCard({ name, amount, max }) {
  return (
    <Card className="text-white" style={{backgroundColor: 'transparent', borderBottom: '1px solid white', borderRadius: '0%'}}>
      <Card.Body className="">
        <Card.Title className="d-flex justify-content-between">
          <div className="">{name}</div>
          <div className="ms-2">{CurrencyFormatter.format(amount)} / <span className="fs-6">{CurrencyFormatter.format(max)}</span></div>
        </Card.Title>

        <ProgressBar className="rounded-pill mt-4"
        variant={getProgressBarVariant(amount, max)}
        min={0}
        max={max}
        now={amount}/>

        <Stack direction="horizontal" gap="2" className="mt-3">
          <Button className="ms-auto" variant="outline-secondary">AddNew</Button>
          <Button variant="outline-success">View</Button>
        </Stack>

      </Card.Body>
    </Card>
  );
}


function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  if (ratio < 0.5) return "success"
  if (ratio < 0.75) return "warning"
  return "danger"
}