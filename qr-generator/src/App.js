import Header from "./components/Header";
import Form from "./components/Form";
import QRcode from "./components/qr-code";

function App() {
  return (
    <div className="container">
      <Header/>
      <Form />
      <QRcode />
    </div>
  );
}

export default App;
