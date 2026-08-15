import blastHero from "../assets/images/blast-ppe-hero.jpg"
import blastNara from "../assets/images/blast-steel-nara.jpg"
import blastStructure from "../assets/images/blast-structure.jpg"
import blastNavy from "../assets/images/blast-navy.jpg"
import blastClose from "../assets/images/blast-close.jpg"
import blastHbeam from "../assets/images/blast-hbeam.jpg"
import blastPipe from "../assets/images/blast-pipe.jpg"
import blastBooth from "../assets/images/blast-booth.jpg"
import blastDefense from "../assets/images/blast-defense.jpg"
import metallizingArc from "../assets/images/metallizing-arc.jpg"
import metallizingHvaf from "../assets/images/metallizing-hvaf.jpg"
import sprayProtective from "../assets/images/spray-protective.jpg"
import rustPlate from "../assets/images/rust-plate.jpg"
import pebMill from "../assets/images/peb-mill.jpg"
import pebFactory from "../assets/images/peb-factory.jpg"
import steelFab from "../assets/images/steel-fab.jpg"
import templeMadurai from "../assets/images/temple-madurai.jpg"
import templeStone from "../assets/images/temple-stone.jpg"

export const images = {
  hero: blastDefense,
  intro: blastHero,
  peb: steelFab,
  steelWarehouse: pebMill,
  blasting: blastClose,
  blastingPpe: blastHero,
  blastingWide: blastNara,
  blastingStructure: blastStructure,
  blastingNavy: blastNavy,
  blastingBooth: blastBooth,
  spray: sprayProtective,
  temple: templeMadurai,
  templeDetail: templeStone,
  metallizing: metallizingHvaf,
  metallizingArc,
  rust: rustPlate,
  cleanSteel: blastHbeam,
  fabrication: steelFab,
  machinery: blastPipe,
  components: blastNavy,
  steelFrame: blastStructure,
  mill: pebFactory,
  rustClose: rustPlate,
  paintBooth: sprayProtective,
  metalTexture: metallizingArc,
  indiaTemple: templeStone,
  cta: blastNara,
} as const
