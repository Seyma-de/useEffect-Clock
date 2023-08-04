// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);

import React, { useEffect, useState } from "react";
import moment from "moment";
const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  const [sayac, setSayac] = useState(0);

  //!componentDidMount=ilk render da çalış birdaha burayı görme
  useEffect(() => {
    const time = setInterval(() => {
      console.log("merhaba");
      setZaman(moment());
    }, 1000);

    //!component kapandığında yada başka sayfaya gidildiğinde çalışma dursun istersek
    return () => {
      console.log("başka sayfaya gidildiği için component öldü ");
      clearInterval(time);
    };
  }, []);

  //!sayac değişkeni her güncellendiğinde alttakiler olsun

  useEffect(() => {
    console.log("sayac değişti");
    //  ilk render da + her sayac değiştiğinde çalışır
  }, [sayac]);

  return (
    <div>
      {zaman.format("HH")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("mm")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("ss")}

      <div>
        <h2>*************************</h2>
        <h1>{sayac}</h1>
        <button class="btn btn-warning" onClick={() => setSayac(sayac + 1)}>
          {" "}
          ARTTIR
        </button>
      </div>
    </div>
  );
};

export default Clock;
