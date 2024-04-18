import { client, writeClient } from "../client";
//Les mer om GROQ (Sanitys spørrespråk): https://www.sanity.io/docs/how-queries-work

//Funksjon som henter alt innhold av type products fra Sanity
export async function fetchAllProducts() {
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        "slug": producturl.current,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)
    return data
}

// funksjon som henter et pordukt basert på en slug
export async function fetchProductBySlug(slug) {

    // vi bruker f.eks "image": ... for å gi prop en variabel for enklere bruk i komponentene som trenger den propsen 
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug] {
        productname,
        "categoryname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        price,
        stock,
        description,
        reviews
    }`, { slug })
    console.log("Data", data)
    return data
}

//Funksjone som tar imot imformasjon og oppdaterer reviews-arrayer i et produkt
//www.sanity.io/docs/js-client  har mange kodesnutter vi kan bruke
//Dette er javascript, så casing er annerledes
export async function updateReview(productid, reviewer, comment, rating) {
    const result = await writeClient
        .patch(productid)
        //Setifmissing er for å konstruere noe, når det ikke er noe der
        //reviews er hentet fra review-schemaet
        .setIfMissing({ reviews: [] })
        //append sier legg til på slutten
        .append("reviews", [{ reviewer: reviewer, comment: comment, rating: rating }])
        .commit({ autoGenerateArrayKeys: true })
        .then(() => { return "Success" })
        .catch(() => { return "Error: " + error.message })
    //eks av denne setningen til writeClient her: https://www.sanity.io/docs/js-client#appendingprepending-elements-to-an-array
}