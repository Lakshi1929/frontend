import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context){
    throw Error('useWorkouttContext must be used inside and WorkoutContextProvider')
  }  

  return context
}

export default useWorkoutsContext
