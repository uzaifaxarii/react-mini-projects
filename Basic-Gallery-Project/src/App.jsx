import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  };

  let printUserData = <h3 className="text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div
      id="container"
      className="h-screen bg-black text-white p-4 overflow-auto"
    >
      <div className="flex justify-evenly flex-wrap gap-5 h-[125%]">{printUserData}</div>
      <Buttons index={index} userData={userData} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  );
};

export default App;
