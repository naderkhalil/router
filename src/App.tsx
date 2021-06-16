import React, { useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const handleReRoute = () => {
    let domain = window.location.href;

    console.log(domain);

    if (domain.includes("brevhub")) {
      domain = domain.replace("brevhub", "github");
      console.log(domain);
    }

    // else if (domain.includes("brevbucket")) {
    //   domain.replace("brevbucket", "bitbucket");
    // } else if (domain.includes("brevlab")) {
    //   domain.replace("brevlab", "gitlab");
    // }

    console.log(domain);
    // apparently replace makes it so you can't back-button back into here
    window.location.replace(domain);
  };

  useEffect(() => {
    handleReRoute();
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default App;
