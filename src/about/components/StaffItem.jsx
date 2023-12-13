export function StaffItem({item}){
    return (
        <div className="col-md-6 col-lg-6 mb-4 mb-lg-5 text-center">
        <img src={`images/${item.image}`} alt="SomeImage" className="img-fluid mb-3 w-50 rounded-circle" />
        <h3 className="h4">{item.name}</h3>
        <p className="caption text-primary">{item.role}</p>
        <p>{item.desc}</p>
    </div>
    )
}