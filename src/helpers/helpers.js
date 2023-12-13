export function getImageUrl(imageName){
    //http://localhost:3001/imgs/hero_bg_1.jpg
    return `${process.env.REACT_APP_API_KEY}/imgs/${imageName}`;
}