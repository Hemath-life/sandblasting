import heroIndustrial from "../assets/images/hero-industrial.jpg"
import hero3d from "../assets/images/hero-3d-sandblasting.jpg"
import beforeRustedSteel from "../assets/images/before-rusted-steel.jpg"
import afterCleanSteel from "../assets/images/after-clean-steel.jpg"
import sprayPainting from "../assets/images/in-spray-painting.jpg"
import metallizingImage from "../assets/images/in-metallizing.jpg"
import templeBlasting from "../assets/images/in-temple-blasting.jpg"
import pebSteel from "../assets/images/in-peb-steel.jpg"
import sandblastingAction from "../assets/images/in-sandblasting-action.jpg"
import vizagSteel from "../assets/images/in-vizag-steel.jpg"
import bokaro from "../assets/images/in-bokaro.jpg"
import jamshedpur from "../assets/images/in-jamshedpur.jpg"
import steelFrame from "../assets/images/in-steel-frame.jpg"
import crane from "../assets/images/in-crane.jpg"
import steelSheet from "../assets/images/in-steel-sheet.jpg"
import velloreFort from "../assets/images/in-vellore-fort.jpg"
import thanjavur from "../assets/images/in-thanjavur.jpg"
import meenakshi from "../assets/images/in-meenakshi.jpg"
import hardhat from "../assets/images/in-hardhat.jpg"

export const images = {
  hero: hero3d,
  heroClassic: heroIndustrial,
  hero3d: hero3d,
  intro: pebSteel,
  peb: pebSteel,
  steelWarehouse: vizagSteel,
  blasting: heroIndustrial,
  blastingPpe: heroIndustrial,
  blastingWide: sandblastingAction,
  blastingStructure: steelFrame,
  blastingNavy: hardhat,
  blastingBooth: sandblastingAction,
  spray: sprayPainting,
  temple: templeBlasting,
  templeDetail: thanjavur,
  metallizing: metallizingImage,
  metallizingArc: metallizingImage,
  rust: beforeRustedSteel,
  cleanSteel: afterCleanSteel,
  fabrication: jamshedpur,
  machinery: crane,
  components: steelSheet,
  steelFrame,
  mill: bokaro,
  rustClose: beforeRustedSteel,
  paintBooth: sprayPainting,
  metalTexture: metallizingImage,
  indiaTemple: templeBlasting,
  cta: pebSteel,
  velloreFort,
  meenakshi,
} as const

