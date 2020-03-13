import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Post() {
    const route = useRouter()

    return (
        <Layout content ={
            <div>
                <h1>{ route.query.title }</h1>
                <p>{ route.query.content }</p>
                <p>Some random text here</p>
            </div>            
        } />
    )
}