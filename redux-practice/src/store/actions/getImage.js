import axios from "axios"
const getImage =(data)=>{
    return {
        type:"IMAGE",
        payload:data,
    }
}

const getImageViaApi =()=>{
    return async (dispatch,getState)=>{
          try{
            let {data} = await axios.get("https://dog.ceo/api/breeds/image/random");
           
            dispatch(getImage(data))
          }catch(error){
            console.log(error)
          }
    }
}
export default getImageViaApi;
