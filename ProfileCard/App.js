import ProfilePicture from "./assets/Vilas Gaikwad.jpg";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4 sm:p-6 shadow-lg w-full max-w-md md:max-w-2xl">
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-48 lg:h-48 rounded-md flex justify-center items-center mb-4 md:mb-0">
          <img
            src={ProfilePicture}
            alt="Dr. Vilas Shivaji Gaikwad"
            className="sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-48 lg:h-48 rounded-xl"
          />
        </div>

        {/* Profile Details */}
        <div className="text-left flex flex-col items-start mt-2 md:ml-6">
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Name: </span>Dr. Vilas Shivaji Gaikwad
          </div>
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Designation: </span>Associate Professor & HoD
          </div>
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Qualification: </span>PhD.(CSE), M.Tech(CSE), BE(CSE)
          </div>
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Experience: </span>Teaching: 13 Years
          </div>
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Area of Interest: </span>Machine Learning, IoT, Image Processing
          </div>
          <div className="py-1 text-sm sm:text-base">
            <span className="font-bold text-blue-600">Email Id: </span>hodit.tcoer@kjei.edu.in, vilasgaikwad.tcoer@kjei.edu.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
