import React,{useState} from 'react'
import data from '../data.js'


const Dashboard = () => {

   const [tours, setTours] = useState(data);
  const [expanded, setExpanded] = useState({}); // track expanded state per card

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle the specific card
    }));
  };

  
   const deleteCard = (id) => {
    setTours((prev) => prev.filter((data) => data.id !== id));
  };

  const refreshCards = () => {
    setTours(data); 
  };


  return (
    <>
    <div>
      {/* Header */}

      <header className=" d-flex justify-content-center mt-4">
        <h1 className=" rounded-pill border border-danger font-bold text-center text-dark w-50 ">
            Plan For Tour </h1>
        
      </header>

      {/* Cards Section */}
      

      
        <div className="container mt-5">
        <div className="row">
          
          {tours.length > 0 ? (
              tours.map((data) => (
            <div key={data.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-100">
                {/* Image */}
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-48 object-cover" style={{height:"200px"}}
                />

                {/* Content */}
                <div className="p-4 d-flex flex-column h-100">
                  <h3 className="text-lg font-bold text-gray-900">
                    {data.title}
                  </h3>
                  <p className="text-dark text-sm mt-2 flex-grow">
                      {expanded[data.id]
                        ? data.info
                        : `${data.info.substring(0, 80)}...`}
                    </p>
                    <button
                      className="btn btn-link p-0 text-primary"
                      onClick={() => toggleExpand(data.id)}
                    >
                      {expanded[data.id] ? 'Show Less' : 'Show More'}
                    </button>
                  <p className="text-blue-600 font-semibold mt-2">
                    Price: ${data.price}
                  </p>

                  {/* Buttons */}
                  <div className="mt-3 d-flex justify-content-between">
                    
                    <button
                      className="btn btn-danger text-white rounded-lg hover:bg-red-700"
                      onClick={() => deleteCard(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          ) : (
              <div className="text-center w-100" style={{marginTop:"250px"}}>
                <h3 className="text-dark">No Tours Left😢🏝️</h3>
                <button
                  className="btn btn-primary mt-3"
                 onClick={refreshCards}
                >
                  Refresh
                </button>
              </div>
            )}

        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard
