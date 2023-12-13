import { useFetchCMSData } from "../../hooks";

function InfoItem({ data, dataParent, index }) {

    const paragraphClass = dataParent.length - 1 === index ? "mb-0" : "mb-4";

    return (
        <>
            <p className="mb-0 font-weight-bold">{data.title}</p>
            <p className={paragraphClass}>
                <LinkWrap link={data.link}>
                    {data.content}
                </LinkWrap>
            </p>
        </>
    )
}

function LinkWrap({children, link}){
    if(link){
        return <a href={link}>
            {children}
        </a>
    }
    return children;
}

const filter = {
    pageAbrv: "contactPageData",
    sectionAbrv: "quickInfoContact"
}

export function Info() {

    const data = useFetchCMSData(filter);

    if(!data){
        return null;
    }

    return (
        <div className="col-md-5" data-aos="fade" data-aos-delay="100">

            <div className="p-4 mb-3 bg-white">
                {data.info.map((infoItem, i) => <InfoItem data={infoItem} dataParent={data.info} index={i}/>)}

            </div>

            <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">{data.additionalInfo.title}</h3>
                <p>{data.additionalInfo.content}</p>
                <p><a href={data.additionalInfo.link} className="btn btn-primary px-4 py-2 text-white btn-pill btn-sm">{data.additionalInfo.linktext}</a></p>
            </div>

        </div>
    )
}