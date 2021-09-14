import React from "react";
// import Home from "../images/Home.png";
import StudentsInfo from "../images/studentsInfo.png";

const HomePage = () => {
  return (
    <>
      <main className="home-img relative flex items-center justify-evenly h-screen">
        {/* <img className="absolute" src={Home} alt="Home" /> */}
        <section className="absolute flex items-center justify-evenly">
          <section className="text-white flex flex-row items-center justify-evenly w-1/2 mx-10">
            <div>
              <h2 className="text-4xl">ISHONCHLI VA QULAY</h2>
              <p className="my-10">
                StudentHouse talabalarga ijara muammosini hal qilishda yordam
                beradi va uy egalariga ham foyda olib keladi.
              </p>
              <div>
                <button className="focus:outline-none border-2 mr-4 py-2 px-4">
                  Ijaraga Uy Olish
                </button>
                <button className="focus:outline-none border-2 mx-4 py-2 px-4">
                  E’lon Berish
                </button>
              </div>
            </div>
          </section>
          <section className="w-1/2 flex flex-col bg-white mx-10">
            <h2 className="text-center text-2xl my-2">UY QIDIRING</h2>

            <form className="flex flex-col px-8 border-t-2 border-primary py-4">
              <label htmlFor="country">Viloyatni Tanlang:</label>
              <select
                className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 mt-1 mb-6"
                id="country"
              >
                <option>Toshkent shahri</option>
                <option>Andijon viloyati</option>
                <option>Farg'ona viloyati</option>
                <option>Namangan viloyati</option>
                <option>Samarqand viloyati</option>
              </select>

              <label htmlFor="district">Tumanni Tanlang:</label>
              <select
                className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 my-1"
                id="district"
              >
                <option>Uchtepa tumani</option>
                <option>Yunusobod tumani</option>
                <option>Olmazor tumani</option>
                <option>Sergeli tumani</option>
                <option>Yakkasaroy tumani</option>
              </select>
              <div className="flex flex-row items-center justify-between my-6">
                <div className="flex flex-col w-1/4">
                  <label htmlFor="roomQuantity">Xonalar Soni:</label>
                  <select
                    className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 my-1"
                    id="roomQuantity"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/4">
                  <label htmlFor="houseFloor">Uy Qavatliligi:</label>
                  <select
                    className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 my-1"
                    id="houseFloor"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/4">
                  <label htmlFor="studentQuantity">Talabalar Soni:</label>
                  <select
                    className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 my-1"
                    id="studentQuantity"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>
              <label htmlFor="extra">Qo’shimcha qulayliklar:</label>
              <select
                className="bg-white border-2 border-gray-300 cursor-pointer px-2 py-1 mt-1 mb-6"
                id="extra"
              >
                <option value="" disabled selected>
                  Tanlang...
                </option>
                <option>Televizor</option>
                <option>Kir yuvish mashinasi</option>
                <option>Internet</option>
                <option>Konditsioner</option>
              </select>
              <input
                className="py-2 bg-primary transition text-white font-bold hover:bg-secondary tracking-wider cursor-pointer"
                type="submit"
                value="QIDIRISH"
              />
            </form>
          </section>
        </section>
      </main>
      <section className="flex flex-col justify-center items-center mt-14 mb-24">
        <img src={StudentsInfo} alt="Steps for students" />
      </section>
    </>
  );
};

export default HomePage;
