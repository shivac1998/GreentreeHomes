import React from "react";
import About from "../pages/About.jsx";
import Amenities from "../pages/Amenities.jsx";

export const main = () => {
  return (
    <div>
      <div className="main">
        <video
          src="https://ff2afeaa77e4295103ad0f2f5b02318f82ddd236876455c73691aab-apidata.googleusercontent.com/download/storage/v1/b/greentree/o/bg.mp4?jk=AahUMluehoVXcV-7_fFmP_Nk7D_yFDMxK67fKfqUIhpPDymV52pGR12ZWgaMQsRoR-BrUYlI7iELLCxkW-aN9IB5QdsMyYaequS45s_Khy2u4UxpRAO_dDXkQUohgc5uBH_bh6n45NQpBP7hCRTuLpRIhWzLMHXNyObes0_eDRmW1EcusE0VC4mA5oXO5Dh9ZFOSZRGjCxoSRIgfiWgIM67z1b-fmTBewyGoSGtJCtwkTeFOgWekhTSDgr4HxpebjckaK9iufcjvojT18ccuYkAp0aBkC0KAxMrADtIIxJtkMqe14fPrvR_m6NbMK-ZqaMiy4aRoPGz_Y6md_fOYMFyZFPzaoztxD9v5ajWD_KgigCb2Dczr-U9eHiE1lb0EuFFhGSWZORSQByi78Zng24JPcxIQ08FX8bg2BK0G5q3aZ988y6lfegIU0v9SZtmrcF-EWmuUwVfCvUoyDQ4ahpBofGy0_wQ8wnicQeUornqQNz10Ks9GnOU_HzdAiWxxGJHkIbukM--LqIg56mwUoAfUu1SBepUK3H7g19VbEZ_9TkWk_6p7OfIMZQnyfpFSdYJl7s9g2h98dRpq4Xr89UKsPydoTqyJJ1TqilMOY0Cvx1Cjio3Z0orejbXiIETflIHF2cMOrZ1qRfSF1mZEp2Rq9Pzq4cS2dwICr-UiQdDvqmOguWHQbncyxtxuexSnrrORr57onqmdhStjn3qfvIDHDwQz6a5g3BaxCgxUpxBVXlBJbkLQivqt0iHJGY-hzeJDKcTZ2mWARRAjJcvjWAiT7UrTWy91q6SPfL7Hki-C59o0juy2RcZkKzyTa-xhg8p11V-shKWIJ8Pqisnd3GBvdn9oD-efu_uTVObfwQ1YuaEW-A6EtjotIR25z4aZlx1CEH8jQisEt9paFPTWJDGdvnrRF0fmHwmnI3gOma8j2vlqzl3Fet2naC0d8py6eyl4UmYG3fgt6qyZpOQxT3VCPZuJgKb5grD0Dft5R_lMNLm_WnIEBKgQJR9mVb3T3pVSZFz-UZNS27fy6eQf9a6-mcLuqOg652TDefBIxMG2QAFt3MTe5XagrjAWxaD-2L02j5KmyDs7gYzNz4JrcYNYvfWXQEexXTP5KbExA7cOuYHvKxJsDSnKbOW6Q9Wog_7HbCwp7G8&isca=1"
          autoPlay
          loop
          muted
        />
        <div className="content">
          <h1>Welcome to</h1>
          <h1>Greentree Homes</h1>
          <section className="flex justify-center mt-5">
            <div className="bg-gray-600 py-3 w-6/12 md:w-4/12 rounded text-center border-b-4 border-white flex justify-center opacity-80 ...">
              <p className="font-sans text-xl w-11/12">
                Irvine's hidden gem with 626 single family homes at the city's
                center. As one of the oldest neighborhoods in Irvine, this area
                has a rich history and has made significant contributions to the
                fabric of Irvine City.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Amenities />
      <About />
    </div>
  );
};

export default main;
