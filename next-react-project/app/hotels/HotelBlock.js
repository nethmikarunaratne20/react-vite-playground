"use client";

import Image from "next/image";

export default function HotelBlock({id, name, capacity}){
    const imageLoader = ({src}) => {
        return `./hotels/${src}.jpg`
    }
    return(
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{capacity}</td>
                <td>
                    <Image 
                    src={id} 
                    width={300} 
                    height={300}
                    loader={imageLoader}
                    /></td>
            </tr>
        </tbody>            

    )
}