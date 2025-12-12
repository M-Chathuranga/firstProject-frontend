import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProductsAdminPage (){
    return(
        <div className="w-full h-full border-2">
            <Link to={"/admin/newProduct"} className="fixed right-[30px] bottom-[30px] p-5 text-white bg-black rounded-full shadow-2xl  ">
                <BiPlus className="text-3xl"/>
            </Link>
        </div>
    )
}