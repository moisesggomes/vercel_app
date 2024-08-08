import Link from "next/link"

function Home() {
    return (
    <div>
        <h1>Home</h1>
        <p>
            <Link href="/sobre">
                <a>Acessar a página Sobre</a>
            </Link>
        </p>
    </div>
    )
}

export default Home
