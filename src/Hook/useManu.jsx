import { useQuery } from "@tanstack/react-query";

const useManu = () => {
 
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setManu(data);
  //       setLoading(false)  
  //     });
  // }, []);

  const {data: manu = [], isLoading: loading} = useQuery({
    queryKey: ['manu'],
    queryFn: async()=>{
      const res = await fetch("http://localhost:5000/menu")
      return res.json()
    }
  })

  return [manu, loading]
};
export default useManu;
