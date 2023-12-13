import { useFetchCMSData } from "../../hooks";
import { StaffItem } from "./StaffItem";

export function Staff() {

    const filter = {
        pageAbrv: "aboutPageData",
        sectionAbrv: "staff"
    }

    const staffData = useFetchCMSData(filter);

    if(!staffData){
        return null;
    }

    return (
        <div className="site-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center">
                        <h2 className="text-primary mb-3">{staffData.title}</h2>
                        <p>{staffData.content}</p>
                    </div>
                </div>
                <div className="row">
                    {staffData.staffs.map(entry => <StaffItem item={entry} />)}
                </div>
            </div>
        </div>
    )
}