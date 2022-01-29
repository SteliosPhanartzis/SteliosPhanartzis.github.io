import { useContext } from 'react'
import ContentBody from './components/ContentBody';
import ContentPanel from './components/ContentPanel';
import WorkPanel from './components/WorkPanel';
import pageContext from './data/PageContext';
function Page() {
    const PageContext = useContext(pageContext);
    return (
        <div>
            <section id="intro">
                <div className="content">
                <h2 className="">Stelios</h2>
                    <h2 className="">Phanartzis</h2>
                </div>
            </section>
            {
                PageContext.map((content) =>
                    <ContentBody key={content.sectionTitle} title={content.sectionTitle}>
                        {
                            (content.sectionBodyAlign === 'right') ? (
                                (content.sectionImage) ? (
                                    <ContentPanel 
                                        type='child'>
                                            <img className="full-pic" src={content.sectionImage} alt="profile"/>
                                    </ContentPanel>
                                ) : (content.sectionTitle === 'work') ? (
                                    <WorkPanel />
                                ) : ''
                            ) : ''
                        }
                        {
                            (content.sectionBodyLink) ? (
                                <ContentPanel
                                    type='child'
                                    title={content.sectionTitle}
                                    align={content.sectionBodyAlign}>
                                        <a href={content.sectionBodyLink}>{content.sectionBodyLink.replace('mailto:', '')}</a>
                                </ContentPanel>
                            ) : (
                                <ContentPanel 
                                    type='text'
                                    title={content.sectionTitle}
                                    text={content.sectionBodyText}
                                    align={content.sectionBodyAlign}/>
                            )
                        }
                        {
                            (content.sectionBodyAlign === 'left') ? (
                                (content.sectionImage) ? (
                                    <ContentPanel 
                                        type='child'
                                        align='top'
                                        containerClass='image'>
                                        <img className="full-pic" src={content.sectionImage} alt="profile"/>
                                    </ContentPanel>
                                ) : ''
                            ) : ''
                        }
                    </ContentBody>
                )
            }
            {/* <ContentBody title={PageContext.sectionTitles[0]} text={PageContext.sectionBodyText[0]} leftAlign bodyClass='bio'/> */}
        </div>
    )
}

export default Page
