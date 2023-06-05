import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useCards = () => {
  const {user, loading}= useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: card = []} = useQuery({
    queryKey: ['cards', user?.email],
    // queryFn: async()=>{
    //   const res = await fetch(`http://localhost:5000/cards?email=${user?.email}`,{
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('access-token')}`
    //     }
    //   })
    //   return res.json()
    // },
    enabled: !loading,
    queryFn: async()=>{
      const res = await axiosSecure(`/cards?email=${user?.email}`)
      return res.data
    },
  })
  return [refetch, card]
  
};

export default useCards;
