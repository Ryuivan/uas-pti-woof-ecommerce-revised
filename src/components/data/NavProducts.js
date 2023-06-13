const navProducts = [ 
    {
        id: 1,
        name: 'Pink Signature Crop Top',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117452492314259557/crop-pink-signature.webp",
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117452492314259557/crop-pink-signature.webp"
            }
        ]
    },
    {
        id: 2,
        name: 'Green Crop Top',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465782637568072/crop-green.webp",
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#3EA590',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465782637568072/crop-green.webp"
            },
        ]
    },
    {
        id: 3,
        name: 'Black Crop Top',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460393183416501/crop-black.webp",
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#626669',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460393183416501/crop-black.webp"
            },
        ]
    },
    {
        id: 4,
        name: 'Red Crop Top',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677535375491/crop-red.webp",
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#BB4B63',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677535375491/crop-red.webp"
            },
        ]
    },
    {
        id: 5,
        name: 'Yellow Crop Top',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117470995058540645/crop-yellow.webp",
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#E4D793',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117470995058540645/crop-yellow.webp"
            },
        ]
    },
    {
        id: 6,
        name: 'Pink Signature Hoodie',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455567334674575/hoodies-pink-signature.webp",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455567334674575/hoodies-pink-signature.webp"
            },
        ]
        
    },
    {
        id: 7,
        name: 'Yellow Signature Hoodie',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455566873317406/hoodies-yellow-signature.webp",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#fde97f',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455566873317406/hoodies-yellow-signature.webp"
            },
        ]
        
    },
    {
        id: 8,
        name: 'Green Hoodie',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465781475745893/hoodies-green.webp",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#3EA590',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465781475745893/hoodies-green.webp"
            },
        ]
    },
    {
        id: 9,
        name: 'Black Hoodie',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460392415875143/hoodies-black.webp",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#626669',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460392415875143/hoodies-black.webp"
            },
        ]
    },
    {
        id: 10,
        name: 'Red Hoodie',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677971578890/hoodies-red.webp",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#BB4B63',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677971578890/hoodies-red.webp"
            },
        ]
    },
    {
        id: 11,
        name: 'Yellow Hoodie',
        image: "https://i.pinimg.com/564x/9e/d2/3e/9ed23e172766b22b0e4628af2b8fb323.jpg",
        description: 'A thick-material hoodie that is still wearable and comfortable.',
        price: '249.000',
        stock: 10,
        colors: [
            {
                code: '#E4D793',
                image: "https://i.pinimg.com/564x/9e/d2/3e/9ed23e172766b22b0e4628af2b8fb323.jpg"
            },
        ]
    },
    {
        id: 12,
        name: 'Pink Signature Sweater',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455566537760889/sweater-pink-signature.webp",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455566537760889/sweater-pink-signature.webp"
            },
        ]
    },
    {
        id: 13,
        name: 'Yellow Signature Sweater',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455565254303794/sweater-yellow-signature.webp",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#fde97f',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117455565254303794/sweater-yellow-signature.webp"
            },
        ]
    },
    {
        id: 14,
        name: 'Green Sweater',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465782281048114/sweater-green.webp",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#3EA590',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465782281048114/sweater-green.webp"
            },
        ]
        
    },
    {
        id: 15,
        name: 'Black Sweater',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460391941914695/sweater-black.webp",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#626669',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460391941914695/sweater-black.webp"
            },
        ]
    },
    {
        id: 16,
        name: 'Red Sweater',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469676407103589/sweater-red.webp",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#BB4B63',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469676407103589/sweater-red.webp"
            },
        ]  
    },
    {
        id: 17,
        name: 'Yellow Sweater',
        image: "https://i.pinimg.com/564x/16/b2/71/16b2719600d728daadf85f0de8095256.jpg",
        description: 'A sweater that offers high levels of comfort and warmth.',
        price: '199.000',
        stock: 10,
        colors: [
            {
                code: '#E4D793',
                image: "https://i.pinimg.com/564x/16/b2/71/16b2719600d728daadf85f0de8095256.jpg"
            },
        ]
    },
    {
        id: 18,
        name: 'Yellow Signature T-shirt',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117453363961937961/baju-yellow-signature.webp",
        description: 'A comfy top made of 100% cotton for Men',
        price: '129.000',
        stock: 10,
        colors: [
            {
                code: '#fde97f',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117453363961937961/baju-yellow-signature.webp"
            }
        ]

    },
    {
        id: 19,
        name: 'Black T-shirt',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460393644806194/baju-black.webp",
        description: 'A comfy top made of 100% cotton for Men',
        price: '129.000',
        stock: 10,
        colors: [
            {
                code: '#626669',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117460393644806194/baju-black.webp"
            },
        ]
    },
    {
        id: 20,
        name: 'Green T-shirt',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465781861634128/baju-green.webp",
        description: 'A comfy top made of 100% cotton for Men',
        price: '129.000',
        stock: 10,
        colors: [
            {
                code: '#3EA590',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117465781861634128/baju-green.webp"
            },
        ]
    },
    {
        id: 21,
        name: 'Red T-shirt',
        image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677120127076/baju-red.webp",
        description: 'A comfy top made of 100% cotton for Men',
        price: '129.000',
        stock: 10,
        colors: [
            {
                code: '#BB4B63',
                image: "https://cdn.discordapp.com/attachments/1091562630591811594/1117469677120127076/baju-red.webp"
            },
        ]
    },
    {
        id: 22,
        name: 'Yellow T-shirt',
        image: "https://i.pinimg.com/236x/82/dc/01/82dc01c6eb9a4a3770c193d8fc95898e.jpg",
        description: 'A comfy top made of 100% cotton for Men',
        price: '129.000',
        stock: 10,
        colors: [
            {
                code: '#E4D793',
                image: "https://i.pinimg.com/236x/82/dc/01/82dc01c6eb9a4a3770c193d8fc95898e.jpg"
            },
        ]
    },
    {
        id: 23,
        name: 'Pink Tote Bag',
        image: "https://i.pinimg.com/236x/b9/f8/06/b9f806503ab73003c49196a9978c1dad.jpg",
        description: 'A chic little green bag made entirely of canvas.',
        price: '79.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: "https://i.pinimg.com/236x/b9/f8/06/b9f806503ab73003c49196a9978c1dad.jpg"
            },
        ]
    },
    {
        id: 24,
        name: 'Yellow Tote Bag',
        image: "https://i.pinimg.com/236x/d7/0a/b3/d70ab33eb333820e7fe48345721751fa.jpg",
        description: 'A chic little yellow bag made entirely of canvas.',
        price: '79.000',
        stock: 10,
        colors: [
            {
                code: '#fde97f',
                image: "https://i.pinimg.com/236x/d7/0a/b3/d70ab33eb333820e7fe48345721751fa.jpg"
            },
        ]
    },
];

export default navProducts;