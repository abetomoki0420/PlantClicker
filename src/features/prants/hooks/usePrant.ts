import { Atom, atom, useAtom } from "jotai"
import { useMemo } from "react";
import { PRANT_SEED } from "../constraints";
import type { Prant, PrantClass } from "../types"

export type PrantEntity = {
  prantAtom: Atom<Prant>,
  prant: Prant,
  increase: () => void;
}

export const usePrant = (prantClass: PrantClass, power: number, cost: number): PrantEntity => {
  const isSeed = prantClass === PRANT_SEED

  const prantAtom = useMemo( 
    () => atom<Prant>({
      prantClass,
      count: isSeed ? 1 : 0,
      worker: !isSeed,
      cost,
      power
    }) , [prantClass] )

  const [prant, setPrant] = useAtom(prantAtom)

  const increase = () => {
    setPrant( p => {
      return {
        ...p,
        count: p.count + 1,
        cost: Math.round( p.cost * 5.8 )
      }
    })
  }

  return {
    prantAtom,
    prant,
    increase
  }
}

