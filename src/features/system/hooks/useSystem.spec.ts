import { expect, describe, test, vi } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useSystem } from "./useSystem"
import { Prant, PrantClass } from "@/features/prants/types"
import { PRANT_FLOWER, PRANT_SEED, PRANT_SPROUT, PRANT_WOOD } from "@/features/prants/constraints"

describe("useSystem" , () => {
  test("initial prants" , () => {
    const { result } = renderHook( () => useSystem() )

    expect(result.current.prants).toEqual<Prant[]>([
      {
        prantClass: PRANT_SEED,
        power: 1,
        worker: false,
        cost: 0,
        count: 1
      },
      {
        prantClass: PRANT_SPROUT,
        power: 10,
        worker: true,
        cost: 10,
        count: 0
      },
      {
        prantClass: PRANT_FLOWER,
        power: 100,
        worker: true,
        cost: 1000,
        count: 0
      },
      {
        prantClass: PRANT_WOOD,
        power: 1000,
        worker: true,
        cost: 1000000,
        count: 0
      },
    ])
  })

  test("increasable prant ?" , () => {
    const { result } = renderHook( () => useSystem() )

    expect( result.current.increasableByClass(PRANT_SEED)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_SPROUT)).toBeFalsy()
    expect( result.current.increasableByClass(PRANT_FLOWER)).toBeFalsy()
    expect( result.current.increasableByClass(PRANT_WOOD)).toBeFalsy()

    act( () => {
      result.current.setSeeds(10)
    })

    expect( result.current.increasableByClass(PRANT_SEED)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_SPROUT)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_FLOWER)).toBeFalsy()
    expect( result.current.increasableByClass(PRANT_WOOD)).toBeFalsy()

    act( () => {
      result.current.setSeeds(1000)
    })

    expect( result.current.increasableByClass(PRANT_SEED)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_SPROUT)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_FLOWER)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_WOOD)).toBeFalsy()
    
    act( () => {
      result.current.setSeeds(1000000)
    })

    expect( result.current.increasableByClass(PRANT_SEED)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_SPROUT)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_FLOWER)).toBeTruthy()
    expect( result.current.increasableByClass(PRANT_WOOD)).toBeTruthy()
  })

  test("increase prant by prantClass" , () => {
    const { result } = renderHook( () => useSystem() )

    act( () => { 
      for( let i = 0 ; i < 2 ; i++){
        result.current.increaseByClass(PRANT_SPROUT)
      }
      for( let i = 0 ; i < 3 ; i++){
        result.current.increaseByClass(PRANT_FLOWER)
      }
      for( let i = 0 ; i < 4 ; i++){
        result.current.increaseByClass(PRANT_WOOD)
      }
    })

    const findPrantCountByClass = (prantClass: PrantClass) => {
      return result.current.prants.find( p => p.prantClass === prantClass)!.count
    }

    expect( findPrantCountByClass(PRANT_SEED) ).toBe(1)
    expect( findPrantCountByClass(PRANT_SPROUT) ).toBe(2)
    expect( findPrantCountByClass(PRANT_FLOWER) ).toBe(3)
    expect( findPrantCountByClass(PRANT_WOOD) ).toBe(4)
  })

  test("timer" , () => {
    vi.useFakeTimers()
    
    const { result } = renderHook( () => useSystem() )

    act( () => {
      result.current.setSeeds(0)
    })
    expect(result.current.seeds).toBe(0)

    act( () => { 
      for( let i = 0 ; i < 100 ; i++){
        result.current.increaseByClass(PRANT_SEED)
      }
    })

    act( () => {
      vi.advanceTimersByTime(1000);
    })

    expect(result.current.seeds).toBe(100)
  })
})