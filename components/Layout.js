import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            {children}
        </>
    )
}


Layout.defaultProps = {
    title: 'CC Right To Life',
    description: 'Welcome to Corpus Christi Right To Life',
    keywords: 'life, pro-life, prolife, abortion, anti abortion, prayer, legislation, corpus, corpus christi'
}