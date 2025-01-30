import dedent from "dedent";

export interface Painting {
    id: number;
    title: string;
    src: string;
    description: string;
    span?: boolean;
    type: 'physical' | 'digital';
    sold?: boolean;
}

export const paintings: Painting[] = [
{ 
    title: `Schiaparelli`, 
    src: `/works/schiaparelli-ss-2024.jpg`,
    description: dedent`Digital media
    Limited edition print
    `,
    span: true,
    type: 'digital' as const,
},
{ 
    title: `Sporty Chic`, 
    src: `/works/miumiu-celeb-ss-2024.jpg`,
    description: dedent`Fashion-portrait inspired MIU MIU
    Material: watercolor/Ink
    `,
    type: 'physical' as const,
    sold: true
},
{ 
    title: `Pop Culture`, 
    src: `/works/enjoy.jpg`,
    description: dedent` Fashion portrait
    Material: markers on paper
    `,
    type: 'physical' as const
},
{ 
    title: `Spring Bloom`, 
    src: `/works/spring-bloom.jpg`,
    description: dedent` Watercolor portrait
    Material: watercolor
    `,
    type: 'physical' as const
},
{ 
    title: `Lockdown`, 
    src: `/works/lockdown.jpg`,
    description: dedent` Fashion portrait
    Material: markers on paper
    `,
    type: 'physical' as const
},
{ 
    title: `Golden Feathers`, 
    src: `/works/schiaparelli.jpg`,
    description: dedent` Fashion portrait inspired Schiaparelli
    Material: Watercolor/Ink 
    `,
    type: 'physical' as const
},
{ 
    title: `Dior`, 
    src: `/works/dior-ss24-collection.jpg`,
    description: dedent`SS2024 collection
    Material: Watercolor/Ink
    `,
    type: 'physical' as const
},    
{ 
    title: `Schiaparelli`, 
    src: `/works/mother_russia.jpg`,
    description: dedent`Fashion portrait inspired Schiaparelli couture collection 2024
    Material: Ink on paper
    `,
    span: true,
    type: 'physical' as const
},
{ 
    title: `Balmain`, 
    src: `/works/balmain-ss24.jpg`,
    description: dedent` Fashion illustration inspired SS2024 collection
    Material: Watercolor/Ink
    `,
    type: 'physical' as const
},
{ 
    title: `Dior`, 
    src: `/works/dior-aw-2024-collection.jpg`,
    description: dedent`Fashion portrait 
    AW2024 Collection
    `,
    type: 'digital' as const
},
{ 
    title: `Dior`, 
    src: `/works/dior-backstage-ss-2024.jpg`,
    description: dedent` Backstage SS2024 Collection
    `,
    type: 'digital' as const
},
{ 
    title: `Dior`, 
    src: `/works/dior-ss2024.jpg`,
    description: dedent`Fashion illustration inspired Dior SS 2024 Collection`,
    type: 'digital' as const
},
{ 
    title: `Giambattistavalli`, 
    src: `/works/giambattistavalli-aw24.jpg`,
    description: dedent`AW2024 Collection
    Material: Watercolor/Ink
    `,
    type: 'physical' as const
},
// New entries
{ 
    title: `Lemon`, 
    src: `/works/lemon.jpg`,
    description: dedent`Watercolor portrait
    Material: watercolor on paper`,
    type: 'physical' as const
},
{ 
    title: `Loewe`, 
    src: `/works/loewe-backstage-ss24.jpg`,
    description: dedent`Backstage SS2024`,
    type: 'digital' as const
},
{ 
    title: `Loewe`, 
    src: `/works/loewe-ss24.jpg`,
    description: dedent`Fashion illustration inspired LOEWE SS2024 Collection`,
    type: 'digital' as const
},
{ 
    title: `Louis Vuitton`, 
    src: `/works/louis-vuitton-ss24.jpg`,
    description: dedent`Backstage SS2024 Collection
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `Miu Miu`, 
    src: `/works/miumiu-celeb-ss24-collection.jpg`,
    description: dedent`Celeb SS24 Collection
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `Russian Style`, 
    src: `/works/russian-style.jpg`,
    description: dedent`Fashion portrait
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `Schiaparelli`, 
    src: `/works/schiaparelli-haute-couture-2024.jpg`,
    description: dedent`Haute Couture 2024`,
    type: 'digital' as const
},
{ 
    title: `Schiaparelli`, 
    src: `/works/schiaparelli-haute-couture-collection24.jpg`,
    description: dedent`Haute Couture Collection 24
    Material: Watercolor/Ink on paper`,
    type: 'physical' as const
},
{ 
    title: `Streetstyle PFW 2024`, 
    src: `/works/streetstyle-pfw2024.jpg`,
    description: dedent`Fashion illustration
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `Valentino`, 
    src: `/works/Valentino-aw 2024.jpg`,
    description: dedent`Fashion portrait inspired AW 2024 collection
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `Valentino`, 
    src: `/works/valentino-aw- 2024.jpg`,
    description: dedent`AW 2024 Collection`,
    type: 'digital' as const
},
{ 
    title: `Valentino`, 
    src: `/works/valentino-aw-2024.jpg`,
    description: dedent`Fashion portrait inspired  AW 2024 collection
    Material: watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `YSL`, 
    src: `/works/ysl-aw-2024-collection.jpg`,
    description: dedent`AW 2024 Collection`,
    type: 'digital' as const
},
{ 
    title: `YSL`, 
    src: `/works/ysl-ss24-part1.jpg`,
    description: dedent`Diptych SS24 collection
    Part 1 
    Material: Watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `YSL`, 
    src: `/works/ysl-ss24-part2.jpg`,
    description: dedent`Diptych SS24 collection
    Part 2
    Material: watercolor/Ink`,
    type: 'physical' as const
},
{ 
    title: `YSL`, 
    src: `/works/ysl-ss204.jpg`,
    description: dedent`Fashion illustration inspired SS2024 collection`,
    type: 'digital' as const
},
{ 
    title: `Zendaya`, 
    src: `/works/zendaya-metgala2024.jpg`,
    description: dedent`Fashion portrait to Zendaya 
    Met GALA 2024
    Material: Watercolor/Ink`,
    type: 'physical' as const
}
].map((item, index) => {return { id: index, ...item }});