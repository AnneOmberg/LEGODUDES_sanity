// Vi bruker string når det er kort f.eks navn eller lignende, og bruker text når det er mer tekst, slik som en kommentar 
export const reviews = {
    title: "Anmeldelser",
    name: "reviews",
    type: "object",
    fields: [
        {
            title: "Navn",
            name: "reviewer",
            type: "string"
        },
        {
            title: "Vudering",
            name: "rating",
            type: "number"
        },
        {
            title: "Kommentar",
            name: "comment",
            type: "text"
        }
    ]
}