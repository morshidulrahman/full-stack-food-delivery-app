import { doc,setDoc } from "firebase/firestore";
import { firestore } from "../../firebaseconfig";

export const savingdata = async (data) => {
     await setDoc(doc(firestore,"fooditems",`${Date.now()}`),data,{
        merge:true,
     })
}