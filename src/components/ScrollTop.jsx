import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrollTop.css";

export default function ScrollTop() {

    const [show,setShow]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            if(window.scrollY>400){
                setShow(true);
            }
            else{
                setShow(false);
            }

        };

        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    const scrollTop=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    return(

        <button

            className={`scroll-top ${show?"show":""}`}

            onClick={scrollTop}

        >

            <FaArrowUp/>

        </button>

    );

}