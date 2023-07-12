import React from "react";
import { useParams } from "react-router-dom";
import useDetailPage from "../../hook/useDetailPage";
import Header from "../../components/Header/Header";
import "./Detail.scss";
import Content from "./Content";

function DetailPage() {
  const { id } = useParams();
  const [detailPage] = useDetailPage(id);
  return (
    <div>
      <Header />
      <Content data={detailPage} />
    </div>
  );
}

export default DetailPage;
