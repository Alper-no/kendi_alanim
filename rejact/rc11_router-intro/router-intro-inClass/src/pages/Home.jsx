//Routes: Konum her değiştiğinde, Routes en iyi eşleşmeyi bulmak için childları olan tüm alt Route öğelerine bakar ve kullanıcı arabiriminin bu dalını oluşturur.
//Route: Url pathinden gelene göre hangi sayfanın(yani hangi componentin) render edileceğini belirtir.

import { Outlet } from "react-router-dom";
// import About from "../components/About";
// import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      <h1>Home Page</h1>
      {/* <About /> */}
      {/* <Courses /> */}
      {/* //? nested route yapısında kullandığımız child componentleri Outlet componenti ile sergiliyoruz */}
      <Outlet />
    </div>
  );
};

export default Home;
