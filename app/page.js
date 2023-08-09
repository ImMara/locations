"use client";
import { signOut } from "next-auth/react";
import { useContext, useEffect , useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Category from "@/components/Home/Category";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
import GoogleMapView from "@/components/Home/GoogleMapView";
import GoogleApi from "@/utils/GoogleApi";
import { UserLocationContext } from "@/context/UserLocationContext";
import BusinessList from "@/components/Home/BusinessList";
import SkeltonLoading from "@/components/SkeltonLoading";

export default function Home() {

  const {data:session} = useSession();
  const router = useRouter();
  const [category, setCategory] = useState("restaurant");
  const [radius, setRadius] = useState(1000);
  const [businessList, setBusinessList] = useState([]);
  const {userLocation, setUserLocation} = useContext(UserLocationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!session?.user){
      router.push('/login')
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace(category,radius,userLocation.lat,userLocation.lng);
  }, [category,radius]);

  const getGooglePlace = (category,radius,lat,lng)=> {
    setLoading(true);
    GoogleApi.getGooglePlace(category,radius,lat,lng)
    .then(res=>{
      setBusinessList(res.data.product.results);
      setLoading(false);
    })
  }

  return (
    <div className="
    grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-2">
        <Category onCategoryChange={ (value) => setCategory(value)}/>
        <RangeSelect setRadius={setRadius}/>
      </div>
      <div className="col-span-3">
        <GoogleMapView businessList={businessList}/>  
        <div className="md:absolute w-[90%] md:w-[71%] ml-6 md:ml-10 bottom-36 relative md:bottom-3">
          {
            !loading ? 
            <BusinessList businessList={businessList}/> 
            : 
            <div className="flex gap-3">{[1,2,3,4,5].map(item => <SkeltonLoading/>)}</div>
          }
          
        </div>
      </div>      
    </div>
  )
}
