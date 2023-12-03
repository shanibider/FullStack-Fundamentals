
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {

      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { title: 'Clothes', amount: 799.49, date: new Date(2021, 2, 21) },
    { title: 'Food', amount: 294.89, date: new Date(2021, 2, 28) },
    { title: 'New sofa', amount: 4500, date: new Date(2021, 5, 12) },
  ];

  return <div>
    <h2>My store!</h2>
    <NewExpense />
    <Expenses items={expenses} />
  </div>


}

// function App() {

//   const expense = [
//     { title: 'mazda', amount: 3000, date: new Date(2022, 3, 22) },
//     { title: 'honda', amount: 1000, date: new Date(2021, 4, 22) },
//     { title: 'opel', amount: 5000, date: new Date(2020, 5, 22) },
//     { title: 'kia', amount: 800, date: new Date(2023, 6, 22) },
//   ];

//   return (
//     <div>
//       <h2>this is my first website</h2>
//       <p> this is my cars:</p>
//      
//     </div>

//   );
// }
export default App;
