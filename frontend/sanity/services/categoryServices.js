import { client } from "../client";
//Les mer om GROQ (Sanitys spørrespråk): https://www.sanity.io/docs/how-queries-work

//Funksjon som spør etter alt innhold av typen categories fra Sanity
export async function fetchAllCategories() {
    const data = await client.fetch(`*[_type == "categories"]{
        _id,
        categorytitle,
        "catslug":categoryurl.current}`)
    return data
}

//Funksjon som spør Sanity om å hente alle kategorier som matcher en slug
export async function fetchCategoryBySlug(slug) {
    const data = await client.fetch(`*[_type == "categories" && categoryurl.current == $slug]{
        _id,
        categorytitle,
        "catProducts": *[_type == "products" && references(^._id)]{
            _id,
            productname,
            "slug": producturl.current,
            price,
            stock,
            "catname": category->categorytitle,
            "catslug": category->categoryurl.current,
            "image": productimage.asset->url
        }
    }`, { slug })
    return data
}
// hentet object _id - "image" fra productServicesfor å hente image vi lagde slug selv og hentet url fra sanity inspect
//alle produkter med et filter skrives slik. Det ligner på en if-test. viktig å inspisere på sanity for struktur.
// vi kaller det "products0 pgs sanity schematypes products name="products"
//*[_type == "products" && category._ref == _id]
//https://www.sanity.io/docs/query-cheat-sheet#e82ab8c0925b eks