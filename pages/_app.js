import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import GridItemStyle from '../components/grid-item'
import theme from '../lib/theme'

export default function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <GridItemStyle />
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
  