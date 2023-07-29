import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center flex-col flex">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    Ai-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                It is an open source AI Prompting tool for modern world to discover
                ,create and share creative propmpts
            </p>

            <Feed />
        </section>
    )
}

export default Home