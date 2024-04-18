import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchProductBySlug } from "../../sanity/services/productServices"

// komponent for å hente nestemt produkt basert på produktets slug i sanity
export default function ProductPage() {
    // states for å lagre skjerminfo
    const [reviewer, setReviewer] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")


    const { slug } = useParams()

    // når () etter usestate er null, vil det si at det ikke finnes noe product til du sier noe annet
    const [product, setProduct] = useState(null)

    const getProductBySlug = async (slug) => {
        const data = await fetchProductBySlug(slug)
        setProduct(data[0])
        console.log(data)
    }

    // handleChange-funksjoner for felter
    // e.target.value setter staten til å være innholdet i feltet til en hver tid
    const handleReviewerChange = (e) => {
        e.preventDefault()
        setReviewer(e.target.value)
        console.log("reviewer:", e.target.value)
    }

    // Vi bruker preventDefault for at siden ikke skal refreshe når man trykker på søkeknappen før man får fylt ut noe
    const handleCommentChange = (e) => {
        e.preventDefault()
        setComment(e.target.value)
    }
    const handleRatingChange = (e) => {
        e.preventDefault()
        setRating(e.taret.value)
    }

    // vi bruker change for å sende data til staten , dette gjør at data fra bruker ikke blir borte uansett rekkeføle og tid brukt til å fylle ut et skjema

    useEffect(() => {
        getProductBySlug(slug)
    }, [slug])
    console.log("product:", product)
    // Vi trenger ikke bruke jsx fragments ( <></> ) når det kun er et nivå med html. her bruker vi kun main og ikke noe utenfor, som eks footer eller header og trenger det ikke
    if (product) {
        return (
            <main id="productpage">
                {/* vi legger id på main for å kunne bruke fles for å få img til venstre, info til høyre */}
                <figure>
                    <img src={product?.image} alt={`Produktbilde av LEGO-figuren ${product?.productname}`} />
                </figure>
                <article>
                    <h2>{product?.productname}</h2>
                    <p className="metainfo">
                        {/* vi bruker ? forran . for at siden skal kjøre selv om en prop mangler */}
                        <Link to={"/produkter/" + product?.catslug}>{product?.categoryname}</Link>
                        <span className="stockcount">{product?.stock === 0 ? "Ikke på lager" : product?.stock} på lager</span>
                    </p>
                    <p className="priceview">Kr. {product?.price}</p>
                    <p>{product?.description}</p>
                    <h3>Anmeldekser:</h3>
                    <form>
                        <p>
                            <label htmlFor="reviewer">Ditt navn:</label><br />
                            <input name="reviewer" type="text" onChange={handleReviewerChange} />
                        </p>
                        <p>
                            <label htmlFor="comment">Kommentar:</label><br />
                            <textarea name="comment" id="comment" onChange={handleCommentChange}></textarea>
                        </p>
                        <p>
                            <label htmlFor="rating">Vurdering:</label><br />
                            <select name="rating" id="rating" onChange={handleRatingChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <button>Send anmeldelse</button>
                    </form>
                    {
                        product?.reviews.map((r, i) => <p key={i}>
                            <strong>{r.reviewer}</strong><br />
                            {r.comment}<br />
                            Vudering: {r.rating}
                        </p>)
                    }
                </article>
            </main>
        )
    } else {
        return (
            <main><p>Laster produktet...</p></main>
        )


    }
}