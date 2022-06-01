import { PrantEntity, usePrant } from "@/features/prants/hooks";
import { PrantClass } from "@/features/prants/types";
import { useInterval } from "@/hooks";
import { atom, useAtom } from "jotai"
import { Seed } from "../types";

const seedsAtom = atom<Seed>(0)

export const useSystem = () => {
  const [ seeds, setSeeds ] = useAtom(seedsAtom)

  const managedPrants: PrantEntity[] = [
    usePrant("seed", 1 , 0),
    usePrant("sprout", 10, 10),
    usePrant("flower", 100, 1000),
    usePrant("wood", 1000, 1000000),
  ]

  const findPrantByClass = (prantClass: PrantClass) => {
    return managedPrants.find( managedPrant => managedPrant.prant.prantClass === prantClass)
  }

  const increasableByClass = (prantClass: PrantClass) => {
    const selectedManagedPrant = findPrantByClass(prantClass)

    if(!selectedManagedPrant){
      return;
    }

    if(!selectedManagedPrant.prant.worker){
      return true
    }

    return selectedManagedPrant.prant.cost <= seeds
  }

  const increaseByClass = (prantClass: PrantClass) => {
    const selectedManagedPrant = findPrantByClass(prantClass)

    if(!selectedManagedPrant) {
      return;
    }

    const { power, cost } = selectedManagedPrant.prant

    if(!selectedManagedPrant.prant.worker){
      setSeeds( (seeds) => seeds + power )
    } else{
      setSeeds( (seeds) => seeds - cost )
      selectedManagedPrant.increase()
    }
  }

  const prants = managedPrants.map( managedPrant => managedPrant.prant )

  useInterval( () => { 
    const currentPrantsPower = managedPrants
    .filter( managedPrant => managedPrant.prant.worker)
    .map( managedPrant => {
      const { power, count } = managedPrant.prant
      return power * count
    }).reduce( (prev, curr) => prev + curr , 0)

    setSeeds( seeds => {
      return seeds + currentPrantsPower
    })
  }, 1000)

  return {
    prants, 
    seeds,
    setSeeds,
    increasableByClass,
    increaseByClass,
  }
}