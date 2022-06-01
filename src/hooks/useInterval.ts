import { useEffect, useRef } from "react";

export const useInterval = (callback: Function, delay = 1000) => {
  const savedCallback = useRef<Function>();

  useEffect( () => {
    savedCallback.current = callback;
  })

  useEffect( () => {
    const tick = () => {
      if(savedCallback.current){
        savedCallback.current()
      }
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id);
  }, [])
}