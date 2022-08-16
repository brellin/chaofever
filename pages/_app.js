import Layout from '../components/Layout';
import '../styles/globals.scss';

function ChaoFever({ Component, pageProps }) {
    return <Layout>
        <Component { ...pageProps } />
    </Layout>;
}

export default ChaoFever;
