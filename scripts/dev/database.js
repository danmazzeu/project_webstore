let productIdCounter = 1;

export const products = [
    {
        id: productIdCounter++,
        name: "iPhone X",
        image: "images/iphone_x.webp",
        description: "Reviva a inovação com o iPhone X. Design elegante, tela Super Retina e Face ID revolucionário. Desbloqueie o futuro.",
        colors: ["Prateado", "Cinza Sideral"],
        quantity: 1,
        value: 799,
        memories: ["64GB", "256GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone XR",
        image: "images/iphone_xr.jpg",
        description: "Exploda em cores com o iPhone XR. Tela Liquid Retina HD vibrante, chip A12 Bionic poderoso e seis cores deslumbrantes para expressar seu estilo.",
        colors: ["Preto", "Branco", "Azul", "Amarelo", "Coral", "Vermelho"],
        quantity: 15,
        value: 999,
        memories: ["64GB", "128GB", "256GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone XS",
        image: "images/iphone_xs.jpg",
        description: "Experimente o luxo com o iPhone XS. Tela Super Retina HD, câmera dupla avançada e design elegante em aço inoxidável. Fotografia e desempenho elevados a um novo patamar.",
        colors: ["Dourado", "Prateado", "Cinza Sideral"],
        quantity: 8,
        value: 1199,
        memories: ["64GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone XS Max",
        image: "images/iphone_xs.jpg",
        description: "O máximo em tudo: iPhone XS Max. Tela Super Retina HD gigante, bateria de longa duração e desempenho excepcional. Uma experiência imersiva sem limites.",
        colors: ["Dourado", "Prateado", "Cinza Sideral"],
        quantity: 12,
        value: 1299,
        memories: ["64GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 11",
        image: "images/iphone_11.jpg",
        description: "Capture a vida em detalhes com o iPhone 11. Câmera dupla poderosa, chip A13 Bionic e seis cores vibrantes. Deixe sua criatividade fluir.",
        colors: ["Preto", "Branco", "Verde", "Roxo", "Amarelo", "Vermelho"],
        quantity: 20,
        value: 1799,
        memories: ["64GB", "128GB", "256GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 11 Pro",
        image: "images/iphone_11_pro_max.avif",
        description: "Fotografia de nível profissional com o iPhone 11 Pro. Sistema de câmera tripla, tela Super Retina XDR e chip A13 Bionic. A ferramenta perfeita para criadores.",
        colors: ["Dourado", "Prateado", "Cinza Sideral", "Verde Meia-Noite"],
        quantity: 7,
        value: 1699,
        memories: ["64GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 11 Pro Max",
        image: "images/iphone_11_pro_max.avif",
        description: "O ápice da inovação: iPhone 11 Pro Max. Tela Super Retina XDR imersiva, bateria de longa duração e desempenho inigualável. Para quem exige o melhor.",
        colors: ["Dourado", "Prateado", "Cinza Sideral", "Verde Meia-Noite"],
        quantity: 11,
        value: 1899,
        memories: ["64GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone SE (2ª geração)",
        image: "images/iphone_se.jpg",
        description: "Poderoso e compacto: iPhone SE (2ª geração). Chip A13 Bionic, tela Retina HD e design clássico. Desempenho de ponta em um formato prático.",
        colors: ["Preto", "Branco", "Vermelho"],
        quantity: 25,
        value: 799,
        memories: ["64GB", "128GB", "256GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 12 mini",
        image: "images/iphone_12_mini.jpg",
        description: "5G na palma da sua mão com o iPhone 12 mini! Tela Super Retina XDR vibrante, chip A14 Bionic poderoso e design compacto que cabe no seu bolso. Tecnologia de ponta em um tamanho perfeito para o seu dia a dia.",
        colors: ["Preto", "Branco", "Azul", "Verde", "Vermelho"],
        quantity: 18,
        value: 699,
        memories: ["64GB", "128GB", "256GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 12",
        image: "images/iphone_12.webp",
        description: "A nova geração do iPhone: iPhone 12. 5G, tela Super Retina XDR e chip A14 Bionic. Tudo o que você espera de um smartphone, elevado a um novo nível.",
        colors: ["Preto", "Branco", "Azul", "Verde", "Vermelho"],
        quantity: 22,
        value: 799,
        memories: ["64GB", "128GB", "256GB"]
    }, {
        iid: productIdCounter++,
        name: "iPhone 12 Pro",
        image: "images/iphone_12_pro.avif",
        description: "O Pro está no nome: iPhone 12 Pro. Sistema de câmera Pro, tela Super Retina XDR com ProMotion e chip A14 Bionic. A ferramenta definitiva para profissionais e entusiastas.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul-Pacífico"],
        quantity: 9,
        value: 1799,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 12 Pro Max",
        image: "images/iphone_12_pro_max.webp",
        description: "O máximo do Pro: iPhone 12 Pro Max. Tela Super Retina XDR gigante com ProMotion, bateria de longa duração e sistema de câmera Pro. A experiência iPhone elevada ao máximo.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul-Pacífico"],
        quantity: 13,
        value: 1899,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 13 mini",
        image: "images/iphone_13.webp",
        description: "Pequeno notável: iPhone 13 mini. Chip A15 Bionic, tela Super Retina XDR ainda mais brilhante e design compacto. Grande em desempenho, pequeno no tamanho.",
        colors: ["Rosa", "Azul", "Meia-Noite", "Starlight", "Vermelho"],
        quantity: 16,
        value: 2099,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 13",
        image: "images/iphone_13.webp",
        description: "Fotografe como um profissional com o iPhone 13. O sistema de câmera dupla avançado captura fotos e vídeos incríveis, mesmo em ambientes com pouca luz. O chip A15 Bionic garante um desempenho excepcional em tudo o que você faz, desde jogos e aplicativos pesados até tarefas do dia a dia. Experimente um novo nível de fotografia e desempenho.",
        colors: ["Rosa", "Azul", "Meia-Noite", "Starlight", "Vermelho"],
        quantity: 21,
        value: 2599,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 13 Pro",
        image: "images/iphone_13_pro.webp",
        description: "Prepare-se para uma experiência cinematográfica com o iPhone 13 Pro. A tela ProMotion oferece cores vibrantes, detalhes impressionantes e uma fluidez incrível, ideal para assistir filmes, jogar games e navegar na internet. O sistema de câmera Pro de cinema captura fotos e vídeos de qualidade profissional, com recursos avançados como o Modo Cinema e o ProRes. Experimente um novo nível de imersão e criatividade.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul-Sierra"],
        quantity: 10,
        value: 2899,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 13 Pro Max",
        image: "images/iphone_13_pro.webp",
        description: "Experimente a próxima geração de smartphones com o iPhone 12. Equipado com 5G ultrarrápido, tela Super Retina XDR deslumbrante e o poderoso chip A14 Bionic, ele redefine o que você espera de um smartphone. Fotos e vídeos de nível profissional, jogos imersivos e desempenho excepcional em tudo o que você faz.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul-Sierra"],
        quantity: 14,
        value: 3199,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 14",
        image: "images/iphone_14.webp",
        description: "Fotografe momentos incríveis com o iPhone 14. A câmera de 12MP aprimorada captura fotos nítidas e vibrantes, mesmo em ambientes com pouca luz. A tela Super Retina XDR oferece cores vibrantes e detalhes impressionantes para você reviver cada momento com perfeição.",
        colors: ["Meia-Noite", "Starlight", "Azul", "Roxo", "Vermelho"],
        quantity: 19,
        value: 3399,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 14 Plus",
        image: "images/iphone_14.webp",
        description: "Desfrute de uma experiência imersiva com o iPhone 14 Plus. A tela grande de 6,7 polegadas é perfeita para assistir filmes, jogar games e navegar na internet com conforto. A bateria de longa duração te acompanha durante todo o dia, sem se preocupar em ficar sem energia",
        colors: ["Meia-Noite", "Starlight", "Azul", "Roxo", "Vermelho"],
        quantity: 17,
        value: 3599,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 14 Pro",
        image: "images/iphone_14_pro.avif",
        description: "Experience the future of smartphones with the iPhone 14 Pro.  Introducing the revolutionary Dynamic Island, a new way to interact with your iPhone.  Capture stunning detail with the advanced 48MP camera.  Innovation has arrived.",
        colors: ["Dourado", "Prateado", "Roxo-Profundo", "Preto-Espacial"],
        quantity: 10,
        value: 3899,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 14 Pro Max",
        image: "images/iphone_14_pro_max.jpg",
        description: "Tenha informações importantes sempre à vista com o iPhone 14 Pro Max. A tela sempre ligada te mostra notificações, hora e widgets sem precisar tocar no aparelho. A Dynamic Island, inovadora e intuitiva, te permite interagir com seu iPhone de um jeito totalmente novo.",
        colors: ["Dourado", "Prateado", "Roxo-Profundo", "Preto-Espacial"],
        quantity: 12,
        value: 4199,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 15",
        image: "images/iphone_15.avif",
        description: "Experimente a próxima geração de smartphones com o iPhone 15. A tela Super Retina XDR aprimorada oferece cores vibrantes e detalhes impressionantes, enquanto o chip A17 Bionic garante um desempenho incrível em tudo o que você faz. A câmera avançada de 48MP captura fotos e vídeos de qualidade profissional, mesmo em ambientes com pouca luz.",
        colors: ["Preto", "Azul", "Amarelo", "Rosa", "Verde"],
        quantity: 20,
        value: 3499,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 15 Plus",
        image: "images/iphone_15_plus.avif",
        description: "Desfrute de uma experiência imersiva com o iPhone 15 Plus. A tela Super Retina XDR de 6,7 polegadas te transporta para outro mundo, com cores vibrantes e detalhes impressionantes. O chip A17 Bionic garante um desempenho incrível em tudo o que você faz, desde jogos e aplicativos pesados até tarefas do dia a dia. A bateria de longa duração te acompanha durante todo o dia, sem se preocupar em ficar sem energia.",
        colors: ["Preto", "Azul", "Amarelo", "Rosa", "Verde"],
        quantity: 18,
        value: 3699,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 15 Pro",
        image: "images/iphone_15_pro.avif",
        description: "Experimente a inovação com o iPhone 15 Pro. A Dynamic Island transforma a forma como você interage com o seu iPhone, oferecendo notificações e controles de forma intuitiva e dinâmica. A tela ProMotion proporciona uma experiência visual fluida e responsiva, ideal para jogos e vídeos. O sistema de câmera Pro de 48MP captura fotos e vídeos de qualidade profissional, com detalhes incríveis e cores vibrantes.",
        colors: ["Dourado", "Prateado", "Cinza Sideral", "Azul-Titânio"],
        quantity: 15,
        value: 3999,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 15 Pro Max",
        image: "images/iphone_15_pro_max.jpeg",
        description: "Experimente o ápice da tecnologia com o iPhone 15 Pro Max. A Dynamic Island revoluciona a forma como você interage com o seu iPhone, a tela ProMotion oferece uma experiência visual fluida e responsiva, o chip A17 Pro garante um desempenho excepcional em tudo o que você faz, e o melhor sistema de câmera em um iPhone eleva a fotografia a um novo patamar. Tudo isso em um design elegante e sofisticado.",
        colors: ["Dourado", "Prateado", "Cinza Sideral", "Azul-Titânio"],
        quantity: 12,
        value: 4099,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 16",
        image: "images/iphone_16.avif",
        description: "O iPhone 16, com tela Super Retina XDR aprimorada, novo chip A18 Bionic e câmera de 48MP aprimorada, capturando detalhes incríveis em qualquer condição de luz.",
        colors: ["Preto", "Branco", "Verde", "Roxo", "Laranja"],
        quantity: 20,
        value: 4399,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 16 Plus",
        image: "images/iphone_16_plus.webp",
        description: "O iPhone 16 Plus, com tela Super Retina XDR de 6,7 polegadas, novo chip A18 Bionic e bateria de longa duração para você aproveitar ao máximo seu dia.",
        colors: ["Preto", "Branco", "Verde", "Roxo", "Laranja"],
        quantity: 18,
        value: 4599,
        memories: ["128GB", "256GB", "512GB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 16 Pro",
        image: "images/iphone_16_pro.png",
        description: "O iPhone 16 Pro, com Dynamic Island, tela ProMotion, o poderoso chip A18 Bionic e sistema de câmera Pro de 48MP com tecnologia avançada para fotos e vídeos cinematográficos.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul"],
        quantity: 15,
        value: 4899,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }, {
        id: productIdCounter++,
        name: "iPhone 16 Pro Max",
        image: "images/iphone_16_pro_max.webp",
        description: "O iPhone 16 Pro Max, com Dynamic Island, tela ProMotion, o chip A18 Bionic mais avançado e o melhor sistema de câmera em um iPhone, com recursos inovadores para você registrar momentos inesquecíveis.",
        colors: ["Dourado", "Prateado", "Grafite", "Azul"],
        quantity: 12,
        value: 5399,
        memories: ["128GB", "256GB", "512GB", "1TB"]
    }
];