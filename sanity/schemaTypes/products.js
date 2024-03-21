export const products = {
    title: "Produkter",
    name: "products",
    type: "document",
    fields: [
        {
            title: "Produktnavn",
            name: "productname",
            type: "string"
        },
        {
            title: "Produktlink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                // s står for space og g gjelder for hele, altså global
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            title: "Pris",
            name: "price",
            type: "number"
        },
        {
            title: "Produktbilde",
            name: "productimage",
            type: "image"
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{ type: "categories" }]
        },
        {
            title: "Lager",
            name: "stock",
            type: "number"
        }
    ]
}