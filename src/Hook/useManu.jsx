import { useEffect, useState } from "react";

const useManu = () => {
  const [manu, setManu] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("manu.json")
      .then((res) => res.json())
      .then((data) => {
        setManu(data);
        setLoading(false)
      });
  }, []);

  return [manu, loading]
};
export default useManu;
