import "bootstrap/dist/css/bootstrap.css";
import MyCard from "./MyCard";

export default function Body() {
  return (
    <div className="container">
      <div className="" style={
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(400px,1fr))',
          gap: '20px 30px'
        }
      }>
        <MyCard name={'Rent'} amount={3000} max={5700}/>
        <MyCard name={'Food'} amount={5000} max={7000}/>
        <MyCard name={'Transpotation'} amount={70} max={500}/>
        <MyCard name={'Entertainment'} amount={2800} max={3000}/>
        <MyCard name={'Job'} amount={5700} max={12000}/>
        <MyCard name={'Vocation'} amount={7500} max={10000}/>
      </div>
    </div>
  );
}
