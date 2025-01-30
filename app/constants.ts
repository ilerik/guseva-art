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
    description: `Минималистичная модная иллюстрация, передающая суть роскоши через белое двубортное пальто. Драматичные белые мазки на коричневом фоне создают яркий контраст, подчеркивающий элегантный силуэт одежды.`,
    span: true,
    type: 'physical' as const,
},
{ 
    title: `Sporty Chic`, 
    src: `/works/miumiu-celeb-ss-2024.jpg`,
    description: `Современный портрет, демонстрирующий городскую спортивную одежду, с яркими красными тонами и динамичной композицией, объединяющей моду и уличный стиль.`,
    type: 'digital' as const,
    sold: true
},
{ 
    title: `Pop Culture`, 
    src: `/works/enjoy.jpg`,
    description: `Игривый взгляд на иконографию поп-культуры с яркими красными цветами и выразительным портретом, бросающим вызов узнаваемости бренда и идентичности.`,
    type: 'digital' as const
},
{ 
    title: `Spring Bloom`, 
    src: `/works/spring-bloom.jpg`,
    description: `Нежный акварельный портрет, где природа встречается с красотой, с тонкими цветочными элементами и выразительными голубыми глазами, которые погружают зрителя в момент созерцания.`,
    type: 'physical' as const
},
{ 
    title: `Lockdown`, 
    src: `/works/lockdown.jpg`,
    description: `Смелый комментарий о люксовой моде, с дизайнерской маской, выполненной в богатых золотых и глубоких черных тонах, исследующий темы идентичности и брендинга.`,
    type: 'digital' as const
},
{ 
    title: `Golden Feathers`, 
    src: `/works/schiaparelli.jpg`,
    description: `Роскошный портрет, украшенный изысканными золотыми перьями, сочетающий моду и природные элементы в гармоничном празднике красоты и текстуры.`,      
    type: 'physical' as const
},
{ 
    title: `Dior SS24 Collection`, 
    src: `/works/dior-ss24-collection.jpg`,
    description: `Показ коллекции Dior Весна/Лето 2024, демонстрирующий элегантные дизайны и роскошные ткани, подчеркивающие приверженность бренда мастерству и инновациям.`,
    type: 'physical' as const
},    
{ 
    title: `Mother Russia`, 
    src: `/works/mother_russia.jpg`,
    description: `Эмоциональный портрет, сочетающий традиционные русские элементы с современной модой, передающий суть культурного наследия и современного стиля.`,
    span: true,
    type: 'physical' as const
},
{ 
    title: `Balmain SS24`, 
    src: `/works/balmain-ss24.jpg`,
    description: `Яркая работа из коллекции Balmain Весна/Лето 2024, демонстрирующая смелые дизайны и сложные детали, отражающие авангардный подход бренда к моде.`,
    type: 'physical' as const
},
{ 
    title: `Dior AW24`, 
    src: `/works/dior-aw-2024-collection.jpg`,
    description: `Highlight коллекции Dior Осень/Зима 2024, представляющий изысканные силуэты и богатые текстуры, воплощающие вневременную элегантность бренда.`,
    type: 'physical' as const
},
{ 
    title: `Dior Backstage SS24`, 
    src: `/works/dior-backstage-ss-2024.jpg`,
    description: `Закулисный взгляд на коллекцию Dior Весна/Лето 2024, передающий энергию и креативность подготовки к модному показу.`,
    type: 'physical' as const
},
{ 
    title: `Dior SS2024`, 
    src: `/works/dior-ss2024.jpg`,
    description: `Работа из коллекции Dior Весна/Лето 2024, с нежными цветочными мотивами и утонченным мастерством, подчеркивающими преданность бренда красоте и элегантности.`,
    type: 'physical' as const
},
{ 
    title: `Giambattistavalli AW2024`, 
    src: `/works/giambattistavalli-aw24.jpg`,
    description: `Показ коллекции Giambattistavalli Осень/Зима 2024, демонстрирующий роскошные ткани и сложные дизайны, отражающие роскошный стиль бренда.`,
    type: 'physical' as const
},
// New entries
{ 
    title: `Lemon`, 
    src: `/works/lemon.jpg`,
    description: ``,
    type: 'physical' as const
},
{ 
    title: `Loewe Backstage SS24`, 
    src: `/works/loewe-backstage-ss24.jpg`,
    description: `Закулисный взгляд на коллекцию Loewe SS24, передающий энергию и волнение модного показа.`,
    type: 'physical' as const
},
{ 
    title: `Loewe SS24`, 
    src: `/works/loewe-ss24.jpg`,
    description: `Показ коллекции Loewe SS24, представляющий смелые дизайны и инновационную моду.`,
    type: 'physical' as const
},
{ 
    title: `Louis Vuitton SS24`, 
    src: `/works/louis-vuitton-ss24.jpg`,
    description: `Highlight коллекции Louis Vuitton SS24, подчеркивающий роскошь и мастерство.`,
    type: 'physical' as const
},
{ 
    title: `Miu Miu Celeb SS24 Collection`, 
    src: `/works/miumiu-celeb-ss24-collection.jpg`,
    description: `Вдохновленная знаменитостями коллекция от Miu Miu, сочетающая высокую моду со звездным влиянием.`,
    type: 'physical' as const
},
{ 
    title: `Russian Style`, 
    src: `/works/russian-style.jpg`,
    description: `Исследование традиционной русской моды с замысловатыми узорами и богатыми цветами.`,
    type: 'physical' as const
},
{ 
    title: `Schiaparelli Haute Couture 2024`, 
    src: `/works/schiaparelli-haute-couture-2024.jpg`,
    description: `Работа от-кутюр из коллекции Schiaparelli 2024, демонстрирующая безупречное мастерство и дизайн.`,
    type: 'physical' as const
},
{ 
    title: `Schiaparelli Haute Couture Collection 24`, 
    src: `/works/schiaparelli-haute-couture-collection24.jpg`,
    description: `Коллекция работ от-кутюр из линии Schiaparelli 2024, подчеркивающая роскошь и элегантность.`,
    type: 'physical' as const
},
{ 
    title: `Streetstyle PFW 2024`, 
    src: `/works/streetstyle-pfw2024.jpg`,
    description: `Моментальный снимок уличного стиля во время Парижской недели моды 2024, запечатлевший последние тренды и стили.`,
    type: 'physical' as const
},
{ 
    title: `Valentino AW 2024`, 
    src: `/works/Valentino-aw 2024.jpg`,
    description: `Работа из коллекции Valentino Осень/Зима 2024, представляющая изысканные дизайны и богатые ткани.`,
    type: 'physical' as const
},
{ 
    title: `Valentino AW 2024`, 
    src: `/works/valentino-aw- 2024.jpg`,
    description: `Работа из коллекции Valentino Осень/Зима 2024, представляющая изысканные дизайны и богатые ткани.`,
    type: 'physical' as const
},
{ 
    title: `Valentino AW 2024`, 
    src: `/works/valentino-aw-2024.jpg`,
    description: `Работа из коллекции Valentino Осень/Зима 2024, представляющая изысканные дизайны и богатые ткани.`,
    type: 'physical' as const
},
{ 
    title: `YSL AW 2024 Collection`, 
    src: `/works/ysl-aw-2024-collection.jpg`,
    description: `Коллекция Yves Saint Laurent Осень/Зима 2024, демонстрирующая вневременную элегантность и современный стиль.`,
    type: 'physical' as const
},
{ 
    title: `YSL SS24 Part 1`, 
    src: `/works/ysl-ss24-part1.jpg`,
    description: `Первая часть коллекции Yves Saint Laurent Весна/Лето 2024, представляющая свежие и инновационные дизайны.`,
    type: 'physical' as const
},
{ 
    title: `YSL SS24 Part 2`, 
    src: `/works/ysl-ss24-part2.jpg`,
    description: `Вторая часть коллекции Yves Saint Laurent Весна/Лето 2024, продолжающая тему свежих и инновационных дизайнов.`,
    type: 'physical' as const
},
{ 
    title: `YSL SS204`, 
    src: `/works/ysl-ss204.jpg`,
    description: `Работа из коллекции Yves Saint Laurent Весна/Лето 204, демонстрирующая вневременную элегантность и современный стиль.`,
    type: 'physical' as const
},
{ 
    title: `Zendaya Met Gala 2024`, 
    src: `/works/zendaya-metgala2024.jpg`,
    description: `Потрясающий портрет Зендаи на Met Gala 2024, передающий её элегантность и стиль.`,
    type: 'physical' as const
}
].map((item, index) => {return { id: index, ...item }});