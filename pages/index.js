import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href={ `/p/${ props.title }?content=${ props.content }` }>
            <a>{ props.title }</a>
        </Link>
    </li>
)

export default function Index() {
    return (
        <Layout content={
            <div>
                <h1>My blog</h1>
                <ul>
                    <PostLink title="Hello Next.js" content="some content here" />
                    <PostLink title="Second post" content="some content here 2" />
                    <PostLink title="Third post" content="some content here 3" />
                </ul> 
            </div>
        }/>
    )
}