import { renderHook, act } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import { PRANT_SEED } from "../constraints"
import { usePrant } from "./usePrant"

describe("usePrant" , ()=> {
  test("increases prant count" , () => {
    const { result } = renderHook( () => usePrant(PRANT_SEED, 1, 0) )

    expect( result.current.prant.count).toBe(1)

    act( () => {
      result.current.increase()
    })

    expect( result.current.prant.count).toBe(2)
  })
})