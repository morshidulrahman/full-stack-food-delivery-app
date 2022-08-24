import  { useState } from "react";
import {ref, uploadBytesResumable,getDownloadURL} from "firebase/storage"
import {Storage} from "../../../firebaseconfig"
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import Loader from "./loader";
import { categoriesData } from "../data";

function CreateContainer() {
  const [feild, setfeild] = useState(false);
  const [alert, setalert] = useState("danger");
  const [title, settitle] = useState("");
  const [calories, setcalories] = useState("");
  const [prices, setprices] = useState("");
  const [categroy, setcategory] = useState(null);
  const [assetimage, setimageaseset] = useState(null);
  const [msg, setmsg] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadImage = (e) => {
    setloading(true);
    const imagefile = e.target.files[0];
    const storageref=ref(Storage,`images/${Date.now()}-${imagefile.name}`)
    const uplodetask=uploadBytesResumable(storageref,imagefile)

    uplodetask.on("state_changed",
    (snapshot)=>{
      const uploadprogress=
      (snapshot.bytesTransferred/snapshot.totalBytes)*100
    },(error)=>{
      console.log(error)
      setfeild(true)
      setmsg("Error while uploading : Try Again 🫥")
      setalert("danger")
      setTimeout(() => {
        setfeild(false)
        setloading(false)
      },2000);
    },
    ()=>{
      getDownloadURL(uplodetask.snapshot.ref).then((downloadURL)=>{
        setimageaseset(downloadURL)
        setloading(false)
        setfeild(true)
        setmsg("image uploade succesfully")
        setalert("success")
        setTimeout(() => {
          setfeild(false)
        }, 2000);
      })
    })
  };
 
  const deletphoto = () => {};

  const savebutton = () => {};

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[75%] flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-4">
        {feild && (
          <p
            className={`w-full p-2 text-semibold text-lg capitalize text-center rounded-lg ${
              alert === "danger"
                ? "bg-red-400 text-red-800 "
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </p>
        )}
        <div className="w-full border-gray-300 py-2 border-b flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            placeholder="Give me a title..."
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-full h-full text-lg text-textcolor placeholder:text-gray-500 outline-none border-none"
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="p-2 bg-white w-full flex flex-col gap-4 outline-none border-b-2 border-gray-200 rounded-md"
          >
            <option className="capitalize text-headingcolor">
              select category
            </option>
            {categoriesData &&
              categoriesData?.map((item, index) => (
                <option
                  key={index}
                  className="text-headingcolor text-base border-0 outline-none capitalize"
                  value={item.ulparamname}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center group border-2 border-dotted rounded-md h-[220px] md:h-420 border-gray-300">
          {loading ? (
            <Loader />
          ) : (
            <>
              {!assetimage ? (
                <>
                  <label className="flex flex-col w-full h-full justify-center items-center">
                    <div className="flex flex-col w-full h-full justify-center items-center gap-2 cursor-pointer">
                      <MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        click here to upload
                      </p>
                    </div>
                    <input
                      onChange={uploadImage}
                      type="file"
                      name="uploadimage"
                      accept="images/*"
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="h-full relative overflow-hidden">
                    <img
                      src={assetimage}
                      alt="iamges"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onChange={deletphoto}
                      className="absolute bg-red-500 p-3 bottom-3 right-3 hover:shadow-md cursor-pointer duration-300 ease-in-out text-xl rounded-full"
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full border-gray-300 py-2 border-b flex items-center gap-2">
            <MdFoodBank className="text-xl text-gray-700" />
            <input
              type="text"
              placeholder="Carories"
              required
              value={calories}
              onChange={(e) => setcalories(e.target.value)}
              className="w-full h-full text-lg text-textcolor placeholder:text-gray-400 outline-none border-none"
            />
          </div>
          <div className="w-full border-gray-300 py-2 border-b flex items-center gap-2">
            <MdAttachMoney className="text-xl text-gray-700" />
            <input
              type="text"
              placeholder="prices"
              required
              value={prices}
              onChange={(e) => setprices(e.target.value)}
              className="w-full h-full text-lg text-textcolor placeholder:text-gray-400 outline-none border-none"
            />
          </div>
          <div></div>
        </div>
        <div className="w-full items-center flex">
          <button
            onChange={savebutton}
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto text-white px-12 py-2 rounded-lg border-none bg-emerald-500 font-semibold"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateContainer;
