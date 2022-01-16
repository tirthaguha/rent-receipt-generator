import { Link, Routes, Route } from "react-router-dom";
import { RentContextProvider, WithContext } from "./state/rentContext";

import DataInputComponent from "./containers/data-input";
import RentReceiptWrapper from "./containers/rent-receipt-wrapper";

// const TestComponent = (props) => (
//   <div>
//     <pre>{JSON.stringify(props, null, 2)}</pre>
//   </div>
// );

const Home = () => {
  const DataComponent = WithContext(DataInputComponent);
  const WrappedRentReceiptWrapper = WithContext(RentReceiptWrapper);
  return (
    <>
      <DataComponent />
      <WrappedRentReceiptWrapper />
    </>
  );
};

const Receipts = () => {
  // const WrappedTestComponent = WithContext(TestComponent);
  const WrappedRentReceiptWrapper = WithContext(RentReceiptWrapper);
  return (
    <>
      {/* <WrappedTestComponent /> */}
      <WrappedRentReceiptWrapper />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <RentContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receipt" element={<Receipts />} />
        </Routes>
      </RentContextProvider>
    </div>
  );
}

export default App;
