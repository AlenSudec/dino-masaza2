import { useState } from "react"
import { QuickInfo, Services, Offers} from ".";
import { Hero, Statistics, Discount, HappyCustomers } from "../shared"
import { cmsApiCalls } from "../api-calls";

export function MainPage({ isAdmin }) {

   return <>
      <Hero start="We give solutions to your test" words={["pain", "stress", "fatigue"]} withNavigation />

      <QuickInfo />

      {isAdmin && <UploadImageComponent />}

      <Services isAdmin={isAdmin} />

      <Statistics />

      <Offers />

      <HappyCustomers />

      <Discount />
   </>

}

function UploadImageComponent() {

   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
   };

   const handleUpload = async () => {
      try {
         const formData = new FormData();
         formData.append('image', selectedFile);

         const response = await cmsApiCalls.uploadImage(formData);

         // Use the image URL received from the server
         console.log('Image URL:', response.data.imageUrl);
      } catch (error) {
         console.error('Error uploading image:', error);
      }
   };

   return (
      <div>
         <input type="file" onChange={handleFileChange} />
         <button onClick={handleUpload}>Upload</button>
      </div>
   );
}