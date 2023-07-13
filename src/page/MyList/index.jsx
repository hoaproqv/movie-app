import React, { useEffect, useLayoutEffect, useState } from "react";
import ListFavorite from "./ListFavorite";

function MyList() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("myList")));
  const [idDelete, setIdDelete] = useState();
  useLayoutEffect(() => {
    const icon = document.querySelectorAll(".fa-download");
    icon.forEach((item) => {
      item.setAttribute("class", "fa fa-trash");
    });
  });

  const divDeleteList = document.querySelectorAll(".fa-trash");
  if (divDeleteList.length > 0) {
    divDeleteList.forEach((item) => {
      item.addEventListener("click", (e) => {
        const deleteID = e.target.getAttribute("data");
        setIdDelete(deleteID);
      });
    });
  }

  useEffect(() => {
    const newData = data.filter((item) => item.id !== idDelete);
    setData(newData);
    localStorage.setItem("myList", JSON.stringify(newData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDelete]);
  return <ListFavorite data={data} />;
}

export default MyList;
