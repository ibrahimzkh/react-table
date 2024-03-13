import Projekts from "./Projekts"

function Main (props){
    return(
        <div className="div">

             <tr className="general">
                        <td><img className="image" src={props.img} alt="" /></td>
                        <td  className="name">{props.name}</td>
                        <td className="price">{props.price} </td>
                        <td className="left">{props.left} </td> 
            </tr>
        </div>

    )
}
export default Main