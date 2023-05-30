import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const useCards = () => {
  const {user}= useContext(AuthContext)
  // console.log(user?.email);
  const { refetch, data: card = []} = useQuery({
    queryKey: ['cards', user?.email],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/cards?email=${user?.email}`)
      return res.json()
    },
  })
  console.log(card)
  return [refetch, card]
  
};

export default useCards;
