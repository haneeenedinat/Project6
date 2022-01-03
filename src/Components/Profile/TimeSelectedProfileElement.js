import React from "react";
import './TimeSelectedProfileElement.css'


export default function TimeSelectedProfileElement(props) {
  return (
    <div className="TimeSelectedProfileElement">
      <table>
        <tbody>
          <tr>
            <td><p>{props.title}</p></td>
            <td><p>{props.StartDate}</p></td>

            <td><p>{props.price}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
