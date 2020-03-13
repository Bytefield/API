import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href={ `/post?title=${ props.title }` }>
            <a>{ props.title }</a>
        </Link>
    </li>
)

const content = (
    <div>
        <h1>My blog</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Second post" />
            <PostLink title="Third post" />
        </ul>        
    </div>    
)

export default function Index() {
    return (<Layout content={ content } />
    )
}