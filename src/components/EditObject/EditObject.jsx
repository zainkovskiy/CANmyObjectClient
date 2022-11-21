import React from "react";
import { useParams } from "react-router-dom";

export const EditObject = () => {
  const { id } = useParams();
  return(
    <div className="container" style={{ color: '#fff' }}>
      edit object UID { id } page
    </div>
    )
}