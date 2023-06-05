import { useQuery } from "@tanstack/react-query";

const useManu = () => {
  const {data: manu = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['manu'],
    queryFn: async()=>{
      const res = await fetch("http://localhost:5000/menu")
      return res.json()
    }
  })

  return [manu, loading, refetch]
};
export default useManu;
