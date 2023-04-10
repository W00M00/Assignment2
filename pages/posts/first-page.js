import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>Hello! My name is Oh SeungHyun</h2> 
            <p>
            Here's my simple description<br></br>
            I was born in 27 Jun 2001!<br></br>
            I have younger sister. She is at Canada<br></br>
            I like playing video games and working out<br></br>
            This is too hard for me..<br></br>
            Computer science class is very hard<br></br>
            </p>
            <Link href="/">Back to home</Link>
        </div>
    )
}