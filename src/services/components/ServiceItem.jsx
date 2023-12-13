export function ServiceItem({item}) {
    return (
        <div className="mb-4 mb-lg-4 col-sm-6 col-md-6 col-lg-3">
            <div className="block-service-1-card">
                <a href={item.link} className="thumbnail-link d-block mb-4"><img src={`images/${item.image}`} alt="SomeImage" className="img-fluid" /></a>
                <h3 className="block-service-1-heading mb-3"><a href={item.link}>{item.title}</a></h3>
                <div className="block-service-1-excerpt"><p>{item.content}</p></div>
                <p><a href={item.link} className="d-inline-flex align-items-center block-service-1-more"><span>{item.linkButton}</span> <span className="icon-keyboard_arrow_right icon"></span></a></p>
            </div>
        </div>
    )
}