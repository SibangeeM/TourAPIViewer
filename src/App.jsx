import { useState, useEffect } from "react";


import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);
  const removeTour = (id) => {
    const newTour = tour.filter((t) => t.id !== id);
    setTour(newTour);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const t = await response.json();
      setTour(t);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tour={tour} removeTour={removeTour} ></Tours>
    </main>
  );
};
export default App;
