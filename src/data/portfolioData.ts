import { Project, SkillItem, SoftwareTool, EducationItem, HobbyItem } from '../types';

import sayeeshaImg from '../assets/images/sayeesha_hex_card_1788685800323.jpg';
import leeRoyalImg from '../assets/images/lee_royal_banner_1788685865496.jpg';
import brochureImg from '../assets/images/interior_brochure_1788685884524.jpg';
import hotelPosterImg from '../assets/images/luxury_hotel_poster_1788685899753.jpg';
import weddingAlbumImg from '../assets/images/royal_wedding_album_1788685917034.jpg';
import hennaArtImg from '../assets/images/henna_art_design_1788685816404.jpg';
import digitalArtImg from '../assets/images/digital_art_vector_1788685831993.jpg';
import portraitImg from '../assets/images/sujatha_portrait_1788685846760.jpg';

export { portraitImg };

export const CANDIDATE_INFO = {
  name: 'Sujatha',
  title: 'Graphic Designer & Visual Artist',
  subtitle: 'Entry-Level / Junior Visual Designer & Digital Illustrator',
  degree: 'Pursuing B.Sc. in Animation at Chennai Animation College (2024 - 2027)',
  location: 'Chengalpattu / Chennai, Tamil Nadu, India',
  fullAddress: 'No.2/120 Narasimma varman Street, Singaperumal Koil, Chengalpattu District - 603204',
  email: 'sujathaperumall7@gmail.com',
  phone: '+91 9042461507',
  whatsappUrl: 'https://wa.me/919042461507?text=Hi%20Sujatha,%20I%20saw%20your%20graphic%20design%20portfolio!',
  bio: 'Highly creative and multitalented Graphic Designer and Visual Artist with a strong foundation in print design, digital branding, social media collaterals, and multimedia arts. Currently pursuing B.Sc. in Animation at Chennai Animation College with hands-on proficiency in Adobe Creative Suite and 3D animation fundamentals. Eager to take on creative challenges, collaborate on impactful campaigns, and craft memorable visual identities.',
  availability: 'Available for Immediate Hire & Freelance Projects',
  stats: [
    { label: 'Core Design Tools', value: '6+' },
    { label: 'Creative Disciplines', value: '8+' },
    { label: 'Featured Projects', value: '7+' },
    { label: 'Design Precision', value: '100%' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sayeesha-photography',
    title: 'SAYEESHA Photography Studio',
    subtitle: 'Modern Hex-Grid Business Card Layout & Visual Identity',
    category: 'branding',
    categoryLabel: 'Branding & Collaterals',
    client: 'Sayeesha Photography Studio',
    year: '2025',
    image: sayeeshaImg,
    aspectRatio: '4:3',
    featured: true,
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Print Pre-press'],
    objective: 'Create a distinctive, premium brand collateral system for a high-end photography studio, blending modern geometric hex-grid motifs with gold foil accents to appeal to luxury wedding and portrait clientele.',
    role: 'Lead Visual Designer — Conceptualized brand emblem, typography lockup, double-sided business card layout, and print-ready spot UV mockup specifications.',
    overview: 'Developed a bold visual identity centered on precision optics and geometric elegance. The design features a modern hexagonal camera aperture motif, deep matte obsidian background, and warm metallic gold foil accents that establish instant prestige upon tactile delivery.',
    keyFeatures: [
      'Modular hexagonal grid layout system balancing visual whitespace with contact hierarchy',
      'Dual-tone luxury palette (Obsidian Slate #0F172A & Radiant Gold #F59E0B)',
      'Custom camera aperture icon designed in vector paths for unlimited scalability',
      'High-contrast typography pairing ensuring crisp legibility in physical print finishes'
    ],
    colorPalette: [
      { name: 'Obsidian Black', hex: '#0B0F19' },
      { name: 'Imperial Gold', hex: '#F59E0B' },
      { name: 'Warm Champagne', hex: '#FDE68A' },
      { name: 'Slate Gray', hex: '#334155' }
    ],
    typography: ['Outfit SemiBold (Brand Mark)', 'Plus Jakarta Sans (Contact Details)']
  },
  {
    id: 'lee-royal-womens-stay',
    title: "Lee Royal Women's Stay",
    subtitle: 'High-Contrast Promotional Header & Amenities Banner',
    category: 'branding',
    categoryLabel: 'Branding & Collaterals',
    client: "Lee Royal Women's Stay (Nanmangalam, Chennai)",
    year: '2025',
    image: leeRoyalImg,
    aspectRatio: '16:9',
    featured: true,
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Digital Advertising'],
    objective: "Design an eye-catching, trustworthy promotional digital banner communicating safety, premium accommodation, and essential amenities for a premier women's hostel in Chennai.",
    role: 'Graphic Designer — Developed the high-contrast purple color gradient, custom circular amenity vector icons, clear contact hierarchy, and banner layout.',
    overview: "Crafted a vibrant, welcoming banner utilizing deep regal purple gradients and crisp white circular icon badges. Highlights key resident amenities including 24/7 water, authentic home-style food, automated laundry, CCTV surveillance, daily housekeeping, high-speed WiFi, and instant water heaters with prominent contact visibility.",
    keyFeatures: [
      '7 custom circular amenity vector icons for instant visual comprehension',
      'Regal purple gradient background providing high visual contrast and calm hospitality feel',
      'Prominent dual phone contact bar and physical address lockup for rapid lead conversion',
      'Responsive aspect ratio optimized for both outdoor hoardings and social digital banners'
    ],
    colorPalette: [
      { name: 'Regal Violet', hex: '#4C1D95' },
      { name: 'Electric Purple', hex: '#8B5CF6' },
      { name: 'Lavender Mist', hex: '#EDE9FE' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    typography: ['Georgia / Playfair Display (Headline)', 'Helvetica / Inter (Amenity Badges)']
  },
  {
    id: 'interior-architecture-brochure',
    title: '2025 Interior & Architecture Company Brochure',
    subtitle: 'Clean Editorial Style with Minimal Green Accents & Grid Layout',
    category: 'print',
    categoryLabel: 'Print & Publication',
    client: 'Modern Living Architecture Firm',
    year: '2025',
    image: brochureImg,
    aspectRatio: '3:4',
    featured: true,
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Editorial Grid System'],
    objective: 'Produce a refined, architectural publication cover that balances brutalist vertical typography with tranquil minimalist interior photography and earthy olive-green framing.',
    role: 'Editorial Designer — Engineered the vertical "BROCHURE" typography mask, grid composition, dual-tone block framing, and editorial body text layout.',
    overview: 'An avant-garde editorial brochure cover celebrating contemporary Scandinavian and Japanese interior design. Incorporates dramatic oversized vertical serif typography running alongside high-contrast black-and-white bedroom photography, anchored by a bold olive green frame block.',
    keyFeatures: [
      'Dramatic vertical serif typography ("BROCHURE") creating an unmistakable architectural silhouette',
      'Earthy olive green accent blocks framing the high-contrast interior photograph',
      'Clean asymmetrical column grids following international swiss typographic standards',
      'Sophisticated juxtaposition of monochrome lifestyle photography with bold color blocking'
    ],
    colorPalette: [
      { name: 'Architectural Olive', hex: '#4D7C0F' },
      { name: 'Charcoal Shadow', hex: '#1F2937' },
      { name: 'Studio White', hex: '#F9FAFB' },
      { name: 'Muted Taupe', hex: '#6B7280' }
    ],
    typography: ['Didot / Bodoni Serif (Vertical Display)', 'Futura / Plus Jakarta Sans (Editorial Columns)']
  },
  {
    id: 'luxurry-hotel-poster',
    title: 'LUXURRY Hotel & Holiday Poster',
    subtitle: 'Promotional Display Poster Combining High-End Imagery & Typography',
    category: 'print',
    categoryLabel: 'Print & Publication',
    client: 'Luxurry Hospitality Group',
    year: '2025',
    image: hotelPosterImg,
    aspectRatio: '3:4',
    featured: true,
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Color Grading'],
    objective: 'Design an alluring hospitality advertisement poster showcasing multiple facets of the guest experience: architecture, skyline lounge, luxury suites, and Instagram-worthy dining spaces.',
    role: 'Visual & Poster Designer — Composed the multi-panel photo collage, created the golden monogram cutout "H", color-graded interior photos, and balanced typography.',
    overview: 'A high-impact promotional poster that leads the viewer through a luxurious vacation narrative. The design integrates an arched architectural view of the hotel building at twilight, a golden monogram suite frame, and a neon angel-wing moss wall dining space with sophisticated sage and cream panels.',
    keyFeatures: [
      'Multi-window visual narrative featuring architectural facade, sky lounge, and dining suites',
      'Gold foil monogram "H" frame cutout revealing luxury interior bedding photography',
      'Modern muted sage slate (#5E7370) color panel highlighting "LUXURRY THE BEST HOLIDAY"',
      'Harmonious typographic balance with clear promotional CTA and website link'
    ],
    colorPalette: [
      { name: 'Muted Slate Teal', hex: '#5E7370' },
      { name: 'Imperial Gold', hex: '#EAB308' },
      { name: 'Champagne Cream', hex: '#FAF5EF' },
      { name: 'Twilight Blue', hex: '#1E293B' }
    ],
    typography: ['Times New Roman / Editorial Serif (Header)', 'Futura Bold (Display)']
  },
  {
    id: 'royal-wedding-album',
    title: 'Royal Wedding Album Layout & Cover',
    subtitle: 'Premium Dark Navy & Warm Terracotta Ceremonial Layout',
    category: 'event',
    categoryLabel: 'Event & Photo Layouts',
    client: 'Fine Art Wedding Studio',
    year: '2025',
    image: weddingAlbumImg,
    aspectRatio: '16:9',
    featured: true,
    tools: ['Adobe Photoshop', 'Photo Retouching', 'Color Grading'],
    objective: 'Create a timeless, romantic Indian wedding photo album spread celebrating the couple with warm terracotta framing, dried floral roses, and geometric arches.',
    role: 'Album Layout Artist & Photo Retoucher — Photo color grading, skin retouching, floral border placement, and harmonious multi-photo album spread design.',
    overview: 'An exquisite open-spread wedding photo book layout entitled "Forever Lovely Couple". Blends warm terracotta tones, textured handmade paper backdrops, crimson rose botanical illustrations, and delicate overlapping wooden frames to highlight intimate bridal moments with cinematic warmth.',
    keyFeatures: [
      'Balanced multi-image composition featuring central walking portrait and candid ritual frames',
      'Rich botanical accents of deep crimson roses, dried eucalyptus, and cotton blossom sprigs',
      'Warm terracotta and golden ochre borders complementing traditional silk wedding attire',
      'Subtle vertical letter-spaced "F-o-r-e-v-e-r" typography paired with elegant script calligraphy'
    ],
    colorPalette: [
      { name: 'Warm Terracotta', hex: '#9A3412' },
      { name: 'Deep Rose Crimson', hex: '#881337' },
      { name: 'Antique Parchment', hex: '#F5EBE1' },
      { name: 'Gold Ochre', hex: '#D97706' }
    ],
    typography: ['Edwardian / Great Vibes Script ("Lovely Couple")', 'Montserrat Light (Spaced Vertical Text)']
  },
  {
    id: 'henna-art-gallery',
    title: 'Intricate Bridal Henna & Mandala Art',
    subtitle: 'Traditional & Contemporary Indian Mehndi Artistry',
    category: 'digital',
    categoryLabel: 'Digital & Henna Art',
    client: 'Personal Creative Portfolio',
    year: '2024 - 2026',
    image: hennaArtImg,
    aspectRatio: '4:3',
    featured: false,
    tools: ['Handcrafted Mehndi', 'Adobe Photoshop', 'Pattern Illustration'],
    objective: 'Showcase fine hand-drawn craftsmanship, symmetry, and geometric discipline through intricate bridal henna designs and radial floral mandalas.',
    role: 'Henna Artist & Visual Illustrator — Freehand composition, symmetrical floral line drawing, photography styling, and digital high-contrast finishing.',
    overview: 'Bridging ancient Indian decorative arts with contemporary visual aesthetics. Demonstrates meticulous line weight control, complex mandala geometry, peacock and paisley motifs, and flawless symmetry executed directly by hand, reflecting deep patience and visual dexterity.',
    keyFeatures: [
      'High-density symmetrical linework and delicate finger tip lacework motifs',
      'Radial floral mandala centers designed with balanced negative space',
      'Translates seamlessly into vector digital patterns and ornamental branding borders',
      'Natural organic staining color gradient highlighting craftsmanship depth'
    ],
    colorPalette: [
      { name: 'Deep Henna Brown', hex: '#451A03' },
      { name: 'Warm Ochre', hex: '#B45309' },
      { name: 'Natural Sand', hex: '#F5DEB3' },
      { name: 'Soft Cream', hex: '#FEF3C7' }
    ],
    typography: ['Playfair Display', 'Plus Jakarta Sans']
  },
  {
    id: 'digital-art-vectors',
    title: 'Vibrant Vector Character & Art Concepts',
    subtitle: 'Expressive Digital Illustration & Geometric Character Design',
    category: 'digital',
    categoryLabel: 'Digital & Henna Art',
    client: 'Animation College Creative Projects',
    year: '2025',
    image: digitalArtImg,
    aspectRatio: '4:3',
    featured: false,
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Animate CC'],
    objective: 'Explore digital character stylization, vibrant dynamic color palettes, and geometric motion accents for modern visual storytelling.',
    role: 'Digital Illustrator — Concept sketching, vector path pen work, dynamic shading, and color palette orchestration.',
    overview: 'An energetic digital illustration exploring character design with flowing stylized elements, colorful abstract geometric accents, and bold lighting. Reflects animation coursework at Chennai Animation College, experimenting with silhouettes, gesture lines, and cinematic color mood.',
    keyFeatures: [
      'Clean anchor point vector paths with fluid curvature and weighted outlines',
      'Vivid high-saturation lighting inspired by animated visual developments',
      'Integration of abstract geometric swirls and atmospheric lighting particles',
      'Scalable artwork optimized for digital screen wallpapers, stickers, and animations'
    ],
    colorPalette: [
      { name: 'Cosmic Violet', hex: '#7C3AED' },
      { name: 'Vibrant Amber', hex: '#F59E0B' },
      { name: 'Electric Cyan', hex: '#06B6D4' },
      { name: 'Deep Midnight', hex: '#0F172A' }
    ],
    typography: ['Outfit Bold', 'Space Grotesk']
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Graphic Design', level: 95, description: 'Visual balance, typography hierarchy, marketing banners, and print assets', category: 'core' },
  { name: 'Print & Publication Design', level: 90, description: 'Brochures, posters, business cards, bleed margins, and pre-press prep', category: 'core' },
  { name: 'Branding & Visual Identity', level: 88, description: 'Logos, color systems, collateral suites, and identity guidelines', category: 'core' },
  { name: 'Photo Retouching & Album Design', level: 92, description: 'Color grading, skin cleanup, floral border collages, and ceremonial albums', category: 'core' },
  { name: 'Digital Art & Illustration', level: 88, description: 'Vector characters, custom motifs, hand-drawn digital sketches', category: 'creative' },
  { name: 'Traditional Henna & Drawing', level: 94, description: 'Meticulous symmetry, mandala linework, freehand pencil sketching', category: 'creative' },
  { name: '2D Animation & Storyboarding', level: 80, description: 'Character walk cycles, timeline keyframing, visual animatics in Animate CC', category: 'software' },
  { name: 'Video Editing & Motion Effects', level: 78, description: 'Timeline cutting, audio sync, lower thirds, and video color grading', category: 'software' }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'Adobe Photoshop', iconName: 'Image', percentage: 94, experienceLevel: 'Advanced', category: 'Raster/Vector' },
  { name: 'Adobe Illustrator', iconName: 'PenTool', percentage: 92, experienceLevel: 'Advanced', category: 'Raster/Vector' },
  { name: 'Adobe Animate CC', iconName: 'Film', percentage: 84, experienceLevel: 'Proficient', category: 'Motion/Video' },
  { name: 'Premiere Pro', iconName: 'Video', percentage: 80, experienceLevel: 'Proficient', category: 'Motion/Video' },
  { name: 'After Effects', iconName: 'Sparkles', percentage: 76, experienceLevel: 'Intermediate', category: 'Motion/Video' },
  { name: 'Autodesk Maya', iconName: 'Box', percentage: 70, experienceLevel: 'Foundational', category: '3D/Animation' }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: '2024 - 2027',
    degree: 'B.Sc. in Animation (Pursuing)',
    institution: 'Chennai Animation College',
    location: 'Chennai, Tamil Nadu, India',
    status: 'Current',
    highlights: [
      'Focusing on 2D Animation, 3D Modeling (Maya), Visual Storytelling, and Graphic Design',
      'Mastering Adobe Creative Suite for digital artwork, video editing, and brand assets',
      'Engaged in collaborative studio projects producing posters, character designs, and motion clips'
    ]
  },
  {
    period: '2021 - 2023',
    degree: 'Higher Secondary School (HSC)',
    institution: 'Government Higher Secondary School',
    location: 'Chengalpattu District, Tamil Nadu',
    status: 'Completed',
    highlights: [
      'Completed secondary education with strong visual arts and creative expression foundation',
      'Led school creative display committees, cultural festival banners, and drawing competitions'
    ]
  },
  {
    period: '2019 - 2021',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Government High School',
    location: 'Chengalpattu District, Tamil Nadu',
    status: 'Completed',
    highlights: [
      'Graduated with distinction in visual arts, sketching, and handwriting craftsmanship',
      'Developed early passion for traditional Indian henna artistry and drawing'
    ]
  }
];

export const HOBBIES_DATA: HobbyItem[] = [
  {
    title: 'Henna Designs (Mehndi)',
    description: 'Expertise in intricate bridal and festive henna art, translating complex symmetrical mandalas into organic, freehand skin adornments.',
    icon: 'Feather',
    tag: 'Craft & Precision'
  },
  {
    title: 'Drawing & Sketching',
    description: 'Pencil shading, graphite portraits, and rapid concept sketching that serve as the foundation for digital vector illustrations.',
    icon: 'Palette',
    tag: 'Visual Thinking'
  },
  {
    title: 'Creative Writing',
    description: 'Expressing ideas through narrative storytelling, poetry, and engaging copy concepts that complement visual design campaigns.',
    icon: 'BookOpen',
    tag: 'Story & Voice'
  },
  {
    title: 'Traveling & Cultural Exploration',
    description: 'Drawing inspiration from South Indian temple architecture, natural landscapes, and diverse regional textile patterns.',
    icon: 'Compass',
    tag: 'Inspiration'
  }
];
