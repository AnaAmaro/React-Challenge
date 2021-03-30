import React, { useState } from "react";
import WellcomeTest from ".";
import Challenge from "../challenge";

export default function HandleTest() {
  const [data, setData] = useState(undefined);

  const registerData = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const hooks = e.target["hooks"].value;
    const use = e.target["use"].value;
    const hoc = e.target["hoc"].value;

    setData({
      hooks,
      use,
      hoc,
    });

    /* const hooksfunctions = "hooks".value,
      usestate = "use".value,
      hocfunction = "hoc".value;
    if (
      "funciones" === hooksfunctions &&
      "usestate" === usestate &&
      "funcion" === hocfunction
    )
      document.getElementById("send").style.display = "flex";
    else document.getElementById("send").style.display = "none";
*/
    return false;
  };

  const deleteData = () => {
    setData(undefined);
  };

  return (
    <>
      {!data ? (
        <WellcomeTest onSubmit={registerData}></WellcomeTest>
      ) : (
        <>
          <Challenge values={data}></Challenge>
          <button onClick={deleteData}>Volver</button>
        </>
      )}
    </>
  );
}
