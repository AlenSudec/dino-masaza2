import { useFetchCMSData } from "../../hooks";

export function History() {

    const filter = {
        pageAbrv: "aboutPageData",
        sectionAbrv: "history"
    }

    const historyData = useFetchCMSData(filter);

    if(!historyData){
        return null;
    }

    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`images/${historyData.imageFirst}`} alt="SomeImage" className="img-fluid rounded mb-3" />
                        <img src={`images/${historyData.imageSecond}`} alt="SomeImage" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-5 ml-auto">
                        <h2 className="text-primary mb-3">{historyData.title}</h2>
                        <p className="lead">{historyData.leadTitle}</p>
                        <p className="mb-4">{historyData.paragraphFirst}</p>

                        <p>{historyData.parapraphSecond}</p>
                        <p className="mb-4">{historyData.paragraphThird}</p>

                        <ul className="ul-check list-unstyled success">
                            {historyData.list.map(entry => <li>{entry.content}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}