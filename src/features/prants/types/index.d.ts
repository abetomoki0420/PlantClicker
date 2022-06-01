type PrantClass = 
  | "seed" 
  | "sprout" 
  | "flower" 
  | "wood"

export type Prant = {
  prantClass: PrantClass
  count: number,
  worker: boolean,
  cost: number
  power: number
}