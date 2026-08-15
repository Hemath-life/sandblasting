export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=72`
}

export const images = {
  hero: unsplash("photo-1504328345606-18bbc8c9d7d1", 2000),
  intro: unsplash("photo-1581094794329-c8112a89af12", 1400),
  peb: unsplash("photo-1590496793929-36417d3117de", 2000),
  steelWarehouse: unsplash("photo-1558618666-fcd25c85cd64", 1800),
  blasting: unsplash("photo-1504917595217-d4dc5ebe6122", 1400),
  spray: unsplash("photo-1562259949-e8e7689d7828", 1400),
  temple: unsplash("photo-1582510003544-4d00b8f6fce1", 1400),
  metallizing: unsplash("photo-1565793298595-6a879b1d9492", 1400),
  rust: unsplash("photo-1535813548835-931f2cf3d5f4", 1400),
  cleanSteel: unsplash("photo-1518709268805-4e9042af9f23", 1400),
  fabrication: unsplash("photo-1503387762-592deb58ef4e", 1400),
  machinery: unsplash("photo-1581092160562-40aa08e78837", 1400),
  components: unsplash("photo-1581092918056-0c4c3acd3789", 1400),
  steelFrame: unsplash("photo-1503387837-b154d5074bd2", 1400),
  mill: unsplash("photo-1489515217757-5fd1be406fef", 1400),
  rustClose: unsplash("photo-1578662996442-48f60103fc96", 1400),
  paintBooth: unsplash("photo-1621905251189-08b45d6a269e", 1400),
  metalTexture: unsplash("photo-1611273426858-450d8e3c9fce", 1400),
  indiaTemple: unsplash("photo-1524492412937-b28074a5d7f5", 1400),
  cta: unsplash("photo-1581091226825-a6a2a5aee158", 1800),
} as const
