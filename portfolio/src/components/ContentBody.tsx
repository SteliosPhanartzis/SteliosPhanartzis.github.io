import { ReactNode } from 'react'
type ContentBodyProps = {
    title: string,
    children?: ReactNode
}
function ContentBody(props: ContentBodyProps) {
    return (
        <section id={props.title}>
            {props.children}
        </section>
    )
}

export default ContentBody;
