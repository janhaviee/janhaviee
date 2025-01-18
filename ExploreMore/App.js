import MyImage from "./assets/IT.png";

function App() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-row w-48 md:w-1/2 bg-[#FFF4D3] text-black p-4 m-8 items-center rounded-lg shadow-md text-center" style={{ width: '450px', height: '180px', margin: '12px'}}>
        <div className="w-48 h-32 bg-white rounded-md flex justify-center items-center">
          <img src={MyImage} alt="Engineering" />
        </div>
        <div className="flex flex-col items-start ml-4 md:ml-10 text-left">
          <h1 className="text-xl font-bold mb-4">Computer Engineering</h1>
          <button className="bg-red-400 text-white font-semibold py-2 px-4 rounded shadow">
            Know More
          </button>
        </div>
      </div>
      <div className="flex flex-row w-48 md:w-1/2 bg-[#FFF4D3] text-black p-4 m-8 items-center rounded-lg shadow-md text-center" style={{ width: '450px', height: '180px', margin: '12px' }}>
        <div className="w-48 h-32 bg-white rounded-md flex justify-center items-center">
          <img src={MyImage} alt="Engineering" />
        </div>
        <div className="flex flex-col items-start ml-4 md:ml-10 text-left">
          <h1 className="text-xl font-bold mb-4">Information Technology</h1>
          <button className="bg-red-400 text-white font-semibold py-2 px-4 rounded shadow">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
