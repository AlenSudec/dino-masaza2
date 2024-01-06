export function getImageUrl(imageName){
    //http://localhost:3001/imgs/hero_bg_1.jpg
    // const img = imageName.split(".")[0];
    //set to png if hero_bg_1.png name
    let img = imageName;
    if(imageName.includes("hero_bg_1")){
        img = imageName.split(".")[0] + ".jpg";
    }
    return `${process.env.REACT_APP_API_KEY}/imgs/${img}`;
}