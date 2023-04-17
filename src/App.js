import { useState } from "react";

function App() {
  let [advice,setAdvice] = useState("")
  let [adviceNum,setAdviceNum] = useState("")
  let newADvice =()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {
      return res.json()
    })
    .then((data)=>{
        console.log(data)
        setAdvice(data.slip.advice)
        setAdviceNum(data.slip.id)
    })
    .catch((err) => {
      console.log(err)
    });
  }
  if(advice===''){
    return (
      <div className="bg-[#202632] h-[100dvh]  flex lg:justify-center xl:justify-center  items-center w-screen pl-2 pr-2 ">
          <div className="bg-[#313A49]  flex  items-center flex-col p-7 rounded-md pb-0 w-screen lg:w-fit xl:w-fit">
            <p className="text-[#52FEAA]">ADVICE #117</p>
            <h3 className="text-[1.75rem] lg:w-96 xl:w-96 text-[#CFE3EA] text-center ">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</h3>
            <img src="assets/pattern-divider-desktop.svg" alt="" className="mt-8" />
            <div className="bg-[#52FEAA] p-4 rounded-full brightness-75 translate-y-8 cursor-pointer hover:filter-none" onClick={newADvice}>
              <img src="assets/icon-dice.svg" alt="" />
            </div>
          </div>
      </div>
    );
  }
  return (
    <div className="bg-[#202632] h-[100dvh] flex lg:justify-center xl:justify-center items-center w-screen pl-2 pr-2 lg:p-0 xl:p-0 ">
        <div className="bg-[#313A49]  flex  items-center flex-col p-7 rounded-md pb-0 w-screen lg:w-fit xl:w-fit">
          <p className="text-[#52FEAA]">ADVICE {'#'+adviceNum}</p>
          <h3 className="text-[1.75rem] lg:w-96 xl:w-96 text-[#CFE3EA] text-center ">{'"'+advice+'"'}</h3>
          <img src="assets/pattern-divider-desktop.svg" alt="" className="mt-8" />
          <div className="bg-[#52FEAA] p-4 rounded-full brightness-75 translate-y-8 cursor-pointer hover:filter-none" onClick={newADvice}>
            <img src="assets/icon-dice.svg" alt="" />
          </div>
        </div>
    </div>
  );
}

export default App;
