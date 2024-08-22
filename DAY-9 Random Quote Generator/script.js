const api_url = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        document.querySelector("blockquote").innerHTML = data[0].q;
        document.getElementById("author").innerHTML = "- " + data[0].a;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        document.querySelector("blockquote").innerHTML = "Oops! Something went wrong.";
        document.getElementById("author").innerHTML = "";
    }
}

getQuote(api_url);

document.querySelector("button").addEventListener("click", () => getQuote(api_url));

function tweet() {
    const quoteText = document.querySelector("blockquote").innerHTML;
    const authorText = document.getElementById("author").innerHTML;
    const tweetContent = `"${quoteText}" ${authorText}`;

    // The authorText is already a string, so no need for `.innerHTML`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetContent)}`, "Tweet Window", "width=600, height=300");
}
