import { ReactNode } from "react";

type ContentPanelProps = {
    align?: 'left' | 'right' | 'top' | 'bottom',
    containerClass?: string,
    bodyClass?: string,
} & (
    {
        type: 'text',
        text?: string,
        title?: string,
    } | {
        type: 'child',
        children?: ReactNode
        title?: string
    }
)

function ContentPanel(props: ContentPanelProps) {
    const align = (props.align) ? props.align + '-align' : '';
    const bodyCls = (props.bodyClass) ? 
        ' ' + props.bodyClass : '';
    const cntnrCls = (props.containerClass) ? 
        ' ' + props.containerClass : '';
    return (
        <div className={'content ' + align + ' ' + cntnrCls}>
            {
                (props.type === 'text') ? (
                    <>
                        <h2 className={align + bodyCls}>{props.title}</h2>
                        <p className ={align + bodyCls}>{props.text}</p>
                    </>
                ) : (props.type === 'child') ? (
                    <>
                        {
                            (props.title) ? (
                                <h2 className={align + bodyCls}>{props.title}</h2>
                            ) : ''
                        }
                        <p className ={align + bodyCls}>{props.children}</p>
                    </>
                    ) : ''
            }
        </div>
    )
}

export default ContentPanel
