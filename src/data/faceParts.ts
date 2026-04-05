export interface FacePartDefinition {
  id: string
  category: string
  svg: string
}

export interface PlacedPart extends FacePartDefinition {
  x: number
  y: number
  instanceId: number
  scale: number
}

export const CATEGORIES = ['eye', 'nose', 'mouth', 'ear', 'hair', 'glasses', 'beard'] as const

export const FACE_PARTS_CATALOG: FacePartDefinition[] = [
  // Eyes (PNG images from /ojos/)
  { id: 'eye-01', category: 'eye', svg: '<image href="/ojos/1.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-02', category: 'eye', svg: '<image href="/ojos/2.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-03', category: 'eye', svg: '<image href="/ojos/3.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-04', category: 'eye', svg: '<image href="/ojos/4.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-05', category: 'eye', svg: '<image href="/ojos/5.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-06', category: 'eye', svg: '<image href="/ojos/6.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-07', category: 'eye', svg: '<image href="/ojos/7.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-08', category: 'eye', svg: '<image href="/ojos/8.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-09', category: 'eye', svg: '<image href="/ojos/9.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-10', category: 'eye', svg: '<image href="/ojos/10.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-11', category: 'eye', svg: '<image href="/ojos/11.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-12', category: 'eye', svg: '<image href="/ojos/12.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-13', category: 'eye', svg: '<image href="/ojos/13.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-14', category: 'eye', svg: '<image href="/ojos/14.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-15', category: 'eye', svg: '<image href="/ojos/15.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-16', category: 'eye', svg: '<image href="/ojos/16.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-17', category: 'eye', svg: '<image href="/ojos/17.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'eye-18', category: 'eye', svg: '<image href="/ojos/18.png" x="0" y="0" width="60" height="60"/>' },
  // Noses (PNG images from /narices/)
  { id: 'nose-01', category: 'nose', svg: '<image href="/narices/1.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-02', category: 'nose', svg: '<image href="/narices/2.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-03', category: 'nose', svg: '<image href="/narices/3.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-04', category: 'nose', svg: '<image href="/narices/4.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-05', category: 'nose', svg: '<image href="/narices/5.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-06', category: 'nose', svg: '<image href="/narices/6.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-07', category: 'nose', svg: '<image href="/narices/7.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'nose-08', category: 'nose', svg: '<image href="/narices/8.png" x="0" y="0" width="60" height="60"/>' },
  // Mouths (PNG images from /bocas/)
  { id: 'mouth-01', category: 'mouth', svg: '<image href="/bocas/1.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-02', category: 'mouth', svg: '<image href="/bocas/2.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-03', category: 'mouth', svg: '<image href="/bocas/3.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-04', category: 'mouth', svg: '<image href="/bocas/4.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-05', category: 'mouth', svg: '<image href="/bocas/5.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-06', category: 'mouth', svg: '<image href="/bocas/6.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-07', category: 'mouth', svg: '<image href="/bocas/7.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-08', category: 'mouth', svg: '<image href="/bocas/8.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-09', category: 'mouth', svg: '<image href="/bocas/9.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-10', category: 'mouth', svg: '<image href="/bocas/10.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-11', category: 'mouth', svg: '<image href="/bocas/11.png" x="0" y="0" width="60" height="60"/>' },
  { id: 'mouth-12', category: 'mouth', svg: '<image href="/bocas/12.png" x="0" y="0" width="60" height="60"/>' },
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
