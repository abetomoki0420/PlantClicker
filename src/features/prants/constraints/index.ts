import { PrantClass } from "../types";
import seedImg from "@/assets/images/seed.png"
import flowerImg from "@/assets/images/flower.png"
import sproutImg from "@/assets/images/sprout.png"
import woodImg from "@/assets/images/wood.png"

export const PRANT_SEED: PrantClass = "seed"
export const PRANT_SPROUT: PrantClass = "sprout"
export const PRANT_FLOWER: PrantClass = "flower"
export const PRANT_WOOD: PrantClass = "wood"

export const PRANT_IMG: Record<PrantClass, any> = {
  [PRANT_SEED]: seedImg,
  [PRANT_SPROUT]: sproutImg,
  [PRANT_FLOWER]: flowerImg,
  [PRANT_WOOD]: woodImg,
}