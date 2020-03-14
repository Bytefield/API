import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Post() {
    const router = useRouter()

    return <Layout content={
        <div>
            <h1>{router.query.id}</h1>
            <p>{ router.query.content }</p>
        </div>        
    } />
}