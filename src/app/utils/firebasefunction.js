import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../../firebaseconfig";

export const savingdata = async (data) => {
    await setDoc(doc(firestore, "fooditems", `${Date.now()}`), data, {
        merge: true,
    })
}

// get all data

export const getalldata = async () => {
    // eslint-disable-next-line
    let items = await getDocs(
        query(collection(firestore, "fooditems"), orderBy("id", "desc"))
    )

    return items.docs.map(doc => doc.data())
}