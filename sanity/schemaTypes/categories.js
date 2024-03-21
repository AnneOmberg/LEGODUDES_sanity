export const categories = {
    // title er label på etikett av schemaet
    title: "Kategorier",
    name: "categories",
    type: "document",
    // fields er en liste med FileSystemWritableFileStream, hvert felt har et eget objekt
    fields: [
        {
            title: "Kategoritittel",
            name: "categorytitle",
            type: "string"
        },
        {
            title: "Kategorilink",
            name: "categoryurl",
            type: "slug",
            options: {
                source: "categorytitle",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        }
    ]
}