export type PaintingType = 'physical' | 'digital'

export interface Painting {
  id: number
  title: string
  src: string
  description: string
  span?: boolean
  type: PaintingType
  sold?: boolean
}

export const paintings: Painting[] = [
  { 
    title: `Schiaparelli`, 
    src: `/works/schiaparelli-ss-2024.jpg`,
    description: `A minimalist fashion illustration capturing the essence of luxury through a white double-breasted coat. The dramatic white brushstrokes against the brown background create a striking contrast that emphasizes the garment's elegant silhouette.`,
    span: true,
    type: `physical`
  },
  { 
    title: `Sporty Chic`, 
    src: `/works/miumiu-celeb-ss-2024.jpg`,
    description: `A contemporary portrait showcasing urban sportswear, featuring bold red tones and dynamic composition that bridges fashion and street style.`,
    type: `digital`,
    sold: true
  },
  { 
    title: `Pop Culture`, 
    src: `/works/enjoy.jpg`,
    description: `A playful take on pop culture iconography, featuring vibrant reds and expressive portraiture that challenges brand recognition and identity.`,
    type: `digital`
  },
  { 
    title: `Spring Bloom`, 
    src: `/works/spring-bloom.jpg`,
    description: `A delicate watercolor portrait where nature meets beauty, featuring subtle floral elements and striking blue eyes that draw the viewer into a moment of contemplation.`,
    type: `physical`
  },
  { 
    title: `Lockdown`, 
    src: `/works/lockdown.jpg`,
    description: `A bold commentary on luxury fashion, featuring a designer-inspired mask rendered in rich golds and deep blacks, exploring themes of identity and branding.`,
    type: `digital`
  },
  { 
    title: `Golden Feathers`, 
    src: `/works/schiaparelli.jpg`,
    description: `An opulent portrait adorned with intricate golden feathers, combining fashion and natural elements in a harmonious celebration of beauty and texture.`,      
    type: `physical`
  },
  { 
    title: `Dior SS24 Collection`, 
    src: `/works/dior-ss24-collection.jpg`,
    description: `A showcase of Dior's Spring/Summer 2024 collection, featuring elegant designs and luxurious fabrics that highlight the brand's commitment to craftsmanship and innovation.`,
    type: `physical`
    },    
    { 
        title: `Mother Russia`, 
        src: `/works/mother_russia.jpg`,
        description: `An evocative portrait that blends traditional Russian elements with contemporary fashion, capturing the essence of cultural heritage and modern style.`,
        span: true,
        type: `physical`
    },
    { 
        title: `Balmain SS24`, 
        src: `/works/balmain-ss24.jpg`,
        description: `A striking piece from Balmain's Spring/Summer 2024 collection, showcasing bold designs and intricate details that reflect the brand's avant-garde approach to fashion.`,
        type: `physical`
    },
    { 
        title: `Dior AW24`, 
        src: `/works/dior-aw-2024-collection.jpg`,
        description: `A highlight of Dior's Autumn/Winter 2024 collection, featuring sophisticated silhouettes and rich textures that embody the brand's timeless elegance.`,
        type: `physical`
    },
    { 
        title: `Dior Backstage SS24`, 
        src: `/works/dior-backstage-ss-2024.jpg`,
        description: `A behind-the-scenes glimpse of Dior's Spring/Summer 2024 collection, capturing the energy and creativity of the fashion show preparation.`,
        type: `physical`
    },
    { 
        title: `Dior SS2024`, 
        src: `/works/dior-ss2024.jpg`,
        description: `A piece from Dior's Spring/Summer 2024 collection, featuring delicate floral motifs and refined craftsmanship that highlight the brand's dedication to beauty and elegance.`,
        type: `physical`
    },
    { 
        title: `Giambattistavalli AW2024`, 
        src: `/works/giambattistavalli-aw24.jpg`,
        description: `A showcase of Giambattistavalli's Autumn/Winter 2024 collection, featuring luxurious fabrics and intricate designs that reflect the brand's opulent style.`,
        type: `physical`
    },
  // New entries
  { 
      title: `Lemon`, 
      src: `/works/lemon.jpg`,
      description: `A vibrant depiction of a lemon, showcasing the bright yellow color and textured surface.`,
      type: `physical`
  },
  { 
      title: `Loewe Backstage SS24`, 
      src: `/works/loewe-backstage-ss24.jpg`,
      description: `A behind-the-scenes look at the Loewe SS24 collection, capturing the energy and excitement of the fashion show.`,
      type: `physical`
  },
  { 
      title: `Loewe SS24`, 
      src: `/works/loewe-ss24.jpg`,
      description: `A showcase of the Loewe SS24 collection, featuring bold designs and innovative fashion.`,
      type: `physical`
  },
  { 
      title: `Louis Vuitton SS24`, 
      src: `/works/louis-vuitton-ss24.jpg`,
      description: `A highlight of the Louis Vuitton SS24 collection, emphasizing luxury and craftsmanship.`,
      type: `physical`
  },
  { 
      title: `Miu Miu Celeb SS24 Collection`, 
      src: `/works/miumiu-celeb-ss24-collection.jpg`,
      description: `A celebrity-inspired collection from Miu Miu, blending high fashion with star power.`,
      type: `physical`
  },
  { 
      title: `Russian Style`, 
      src: `/works/russian-style.jpg`,
      description: `An exploration of traditional Russian fashion, featuring intricate patterns and rich colors.`,
      type: `physical`
  },
  { 
      title: `Schiaparelli Haute Couture 2024`, 
      src: `/works/schiaparelli-haute-couture-2024.jpg`,
      description: `A haute couture piece from Schiaparelli's 2024 collection, showcasing exquisite craftsmanship and design.`,
      type: `physical`
  },
  { 
      title: `Schiaparelli Haute Couture Collection 24`, 
      src: `/works/schiaparelli-haute-couture-collection24.jpg`,
      description: `A collection of haute couture pieces from Schiaparelli's 2024 line, emphasizing luxury and elegance.`,
      type: `physical`
  },
  { 
      title: `Streetstyle PFW 2024`, 
      src: `/works/streetstyle-pfw2024.jpg`,
      description: `A snapshot of street style during Paris Fashion Week 2024, capturing the latest trends and styles.`,
      type: `physical`
  },
  { 
      title: `Valentino AW 2024`, 
      src: `/works/Valentino-aw 2024.jpg`,
      description: `A piece from Valentino's Autumn/Winter 2024 collection, featuring sophisticated designs and rich fabrics.`,
      type: `physical`
  },
  { 
      title: `Valentino AW 2024`, 
      src: `/works/valentino-aw- 2024.jpg`,
      description: `A piece from Valentino's Autumn/Winter 2024 collection, featuring sophisticated designs and rich fabrics.`,
      type: `physical`
  },
  { 
      title: `Valentino AW 2024`, 
      src: `/works/valentino-aw-2024.jpg`,
      description: `A piece from Valentino's Autumn/Winter 2024 collection, featuring sophisticated designs and rich fabrics.`,
      type: `physical`
  },
  { 
      title: `YSL AW 2024 Collection`, 
      src: `/works/ysl-aw-2024-collection.jpg`,
      description: `A collection from Yves Saint Laurent's Autumn/Winter 2024 line, showcasing timeless elegance and modern style.`,
      type: `physical`
  },
  { 
      title: `YSL SS24 Part 1`, 
      src: `/works/ysl-ss24-part1.jpg`,
      description: `The first part of Yves Saint Laurent's Spring/Summer 2024 collection, featuring fresh and innovative designs.`,
      type: `physical`
  },
  { 
      title: `YSL SS24 Part 2`, 
      src: `/works/ysl-ss24-part2.jpg`,
      description: `The second part of Yves Saint Laurent's Spring/Summer 2024 collection, continuing the theme of fresh and innovative designs.`,
      type: `physical`
  },
  { 
      title: `YSL SS204`, 
      src: `/works/ysl-ss204.jpg`,
      description: `A piece from Yves Saint Laurent's Spring/Summer 204 collection, showcasing timeless elegance and modern style.`,
      type: `physical`
  },
  { 
      title: `Zendaya Met Gala 2024`, 
      src: `/works/zendaya-metgala2024.jpg`,
      description: `A stunning portrait of Zendaya at the Met Gala 2024, capturing her elegance and style.`,
      type: `physical`
  }
].map((item, index) => {return { id: index, ...item }});