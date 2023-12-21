import Navigation from "./Navigation";

function PageTemplate({children}) {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default PageTemplate;