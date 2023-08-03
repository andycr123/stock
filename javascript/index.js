import Navbar from "../javascript/components/Navbar";
import Table from "../javascript/components/Table"
import { TableProvider } from "../javascript/context/TableContext";


const Home = () => {
  return (
    <div className="h-screen min-h-screen bg-gray-200 flex flex-col">
      <TableProvider>
        <Navbar />
        <Table />
      </TableProvider>
    </div>
  );
}

export default Home;