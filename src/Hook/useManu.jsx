import { useEffect, useState } from "react";

const useManu = () => {
  const [manu, setManu] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setManu(data);
        setLoading(false)
      });
  }, []);

  return [manu, loading]
};
export default useManu;
