export interface FacePartDefinition {
  id: string
  category: string
  svg: string
}

export interface PlacedPart extends FacePartDefinition {
  x: number
  y: number
  instanceId: number
}

export const CATEGORIES = ['eye', 'nose', 'mouth', 'ear', 'hair', 'glasses', 'beard'] as const

export const FACE_PARTS_CATALOG: FacePartDefinition[] = [
  // Eyes
  {
    id: 'eye-01',
    category: 'eye',
    svg: '<ellipse cx="30" cy="30" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><circle cx="30" cy="30" r="7" fill="#444"/><circle cx="30" cy="30" r="3" fill="black"/>',
  },
  {
    id: 'eye-02',
    category: 'eye',
    svg: '<ellipse cx="30" cy="30" rx="15" ry="10" fill="white" stroke="#333" stroke-width="2"/><circle cx="33" cy="30" r="6" fill="#2a6" /><circle cx="33" cy="30" r="2.5" fill="black"/>',
  },
  {
    id: 'eye-03',
    category: 'eye',
    svg: '<path d="M12 30 Q30 18 48 30 Q30 42 12 30Z" fill="white" stroke="#333" stroke-width="2"/><circle cx="30" cy="30" r="8" fill="#48f"/><circle cx="30" cy="30" r="3" fill="black"/>',
  },
  // Noses
  {
    id: 'nose-01',
    category: 'nose',
    svg: '<path d="M30 15 Q38 35 33 45 Q30 47 27 45 Q22 35 30 15Z" fill="#cba" stroke="#999" stroke-width="1"/>',
  },
  {
    id: 'nose-02',
    category: 'nose',
    svg: '<circle cx="30" cy="35" r="8" fill="#cba" stroke="#999" stroke-width="1"/><circle cx="26" cy="37" r="2.5" fill="#a98"/><circle cx="34" cy="37" r="2.5" fill="#a98"/>',
  },
  {
    id: 'nose-03',
    category: 'nose',
    svg: '<path d="M30 12 L35 40 Q30 44 25 40Z" fill="#cba" stroke="#999" stroke-width="1"/>',
  },
  // Mouths
  {
    id: 'mouth-01',
    category: 'mouth',
    svg: '<path d="M15 30 Q30 50 45 30" stroke="#c44" stroke-width="3" fill="none"/><path d="M18 30 Q30 45 42 30" fill="#c44" opacity="0.3"/>',
  },
  {
    id: 'mouth-02',
    category: 'mouth',
    svg: '<ellipse cx="30" cy="35" rx="14" ry="8" fill="#c44"/><ellipse cx="30" cy="32" rx="10" ry="4" fill="white"/>',
  },
  {
    id: 'mouth-03',
    category: 'mouth',
    svg: '<path d="M18 32 Q30 28 42 32" stroke="#a33" stroke-width="2.5" fill="none"/>',
  },
  // Ears
  {
    id: 'ear-01',
    category: 'ear',
    svg: '<ellipse cx="30" cy="30" rx="10" ry="16" fill="#dca" stroke="#a87" stroke-width="1.5"/><ellipse cx="30" cy="30" rx="5" ry="9" fill="#cba" opacity="0.5"/>',
  },
  {
    id: 'ear-02',
    category: 'ear',
    svg: '<path d="M25 15 Q15 30 25 48 Q32 45 30 30 Q32 18 25 15Z" fill="#dca" stroke="#a87" stroke-width="1.5"/>',
  },
  // Hair
  {
    id: 'hair-01',
    category: 'hair',
    svg: '<path d="M10 35 Q10 5 30 5 Q50 5 50 35 Q45 20 30 18 Q15 20 10 35Z" fill="#432" stroke="#321" stroke-width="1"/>',
  },
  {
    id: 'hair-02',
    category: 'hair',
    svg: '<path d="M8 40 Q5 10 30 5 Q55 10 52 40 M12 25 Q20 15 30 18 Q40 15 48 25" fill="#fb0" stroke="#da0" stroke-width="1"/>',
  },
  // Glasses
  {
    id: 'glasses-01',
    category: 'glasses',
    svg: '<circle cx="20" cy="30" r="10" fill="none" stroke="#333" stroke-width="2"/><circle cx="40" cy="30" r="10" fill="none" stroke="#333" stroke-width="2"/><line x1="30" y1="30" x2="30" y2="30" stroke="#333" stroke-width="2"/><path d="M30 30 L30 30" stroke="#333" stroke-width="2"/>',
  },
  {
    id: 'glasses-02',
    category: 'glasses',
    svg: '<rect x="8" y="24" width="18" height="14" rx="2" fill="none" stroke="#333" stroke-width="2"/><rect x="34" y="24" width="18" height="14" rx="2" fill="none" stroke="#333" stroke-width="2"/><line x1="26" y1="30" x2="34" y2="30" stroke="#333" stroke-width="2"/>',
  },
  // Beards
  {
    id: 'beard-01',
    category: 'beard',
    svg: '<path d="M12 25 Q12 55 30 55 Q48 55 48 25 Q40 35 30 38 Q20 35 12 25Z" fill="#543" stroke="#432" stroke-width="1"/>',
  },
  {
    id: 'beard-02',
    category: 'beard',
    svg: '<path d="M15 28 Q15 48 30 50 Q45 48 45 28" fill="none" stroke="#654" stroke-width="3" stroke-dasharray="3 2"/>',
  },
]
