import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-500 flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/collection-virtual-foreign-currency-symbol-background-with-empty-frame_1017-52490.jpg?t=st=1732029613~exp=1732033213~hmac=f609af92e83023ef9247337927fad02a82272b31e10a523123946690fd7b7b60&w=740")',
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repetition
      }}
    >
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
