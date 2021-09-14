import React from "react";

const SignupLandlord = () => {
  return (
    <main className="flex flex-row items-center justify-center my-10">
      <section className="flex flex-col">
        <h2 className="text-3xl text-center">Ro’yhatdan O’ting</h2>
        <form className="flex flex-col items-center">
          <select className="py-4 cursor-pointer w-96 px-4 bg-gray-200 my-10">
            <option>Uy egasi</option>
            <option>Talaba</option>
            <option>OTM ma'sul xodimi</option>
          </select>
          <div className="flex flex-row">
            <input
              className="bg-gray-200 px-4 py-4 my-6 mx-10"
              type="text"
              placeholder="Ism Familiya"
            />
            <input
              className="bg-gray-200 px-4 py-4 my-6 mx-10"
              type="tel"
              placeholder="Telefon raqam"
            />
          </div>
          <div className="flex flex-row">
            <input
              className="bg-gray-200 px-4 py-4 my-6 mx-10"
              type="email"
              placeholder="Elektron manzil"
            />
            <input
              className="bg-gray-200 px-4 py-4 my-6 mx-10"
              type="password"
              placeholder="Parol"
            />
          </div>
          <input
            className="bg-primary hover:bg-secondary cursor-pointer font-bold px-10 my-10 transition py-2 text-white"
            type="submit"
            value="Ro’yhatdan O’tish"
          />
        </form>
      </section>
    </main>
  );
};

export default SignupLandlord;
