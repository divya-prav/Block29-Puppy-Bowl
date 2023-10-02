import { useEffect, useState } from "react";
import { useFetchPlayersQuery } from "../API/puppyBowlApi";



export default function AllPlayers() {

   

  const {data,error,isLoading} = useFetchPlayersQuery();

  

  return (
    <div>
      <h2>All players</h2>
      
    </div>
  );
}
