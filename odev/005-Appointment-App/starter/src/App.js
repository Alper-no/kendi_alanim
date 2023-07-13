import AddModel from "./components/AddModal";

import Doctor from "./components/Doctor";

function App() {
  return (
    <div className="container text-center">
      <h1 className="text-danger display-3 ">CLARUSWAY HOSPITAL</h1>
      <h2 className="text-primary">Our Doctor</h2>
      <Doctor/>
      <AddModel/>
      
    </div>
  );
}

export default App;
