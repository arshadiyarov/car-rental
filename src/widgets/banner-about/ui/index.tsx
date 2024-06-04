import { BannerTitle } from "shared/ui";

export const BannerAbout = () => {
  return (
    <div className={"self-center flex flex-col items-center space-y-3"}>
      <BannerTitle title={"About company"} />
      <div className={"flex self-center gap-10 md:w-[70%] sm:w-full"}>
        <div
          className={"flex flex-col justify-between flex-1 space-y-3 gap-10"}
        >
          <div className={"space-y-3"}>
            <p className={"text-2xl font-bold leading-2xl text-center"}>
              Drive Your Journey with Confidence
            </p>
            <p className={"text-typeGray text-center"}>
              Effortless elegance in every mile. Glide through your travels with
              ease and style. Choose from our curated fleet of vehicles, each
              meticulously maintained for your comfort and safety. Embrace the
              freedom of the open road while we handle the details. Your
              journey, your way, with Toureno.
            </p>
          </div>
          <div className={"flex items-center justify-evenly"}>
            <div className={"flex items-center flex-col"}>
              <div className={"bg-bgBlue p-[16px] rounded-md"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="var(--clr-primary)"
                  stroke="var(--clr-primary)"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zm-344 0h56v16H56z"
                  ></path>
                  <path d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zm67.1-66.11a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zm-351.14 0a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z"></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M432 192h16m-384 0h16m-2 19s46.35-12 178-12 178 12 178 12"
                  ></path>
                </svg>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"text-[44px] font-bold"}>30</span>
                <div>
                  <p>Car</p>
                  <p>Types</p>
                </div>
              </div>
            </div>
            <div className={"flex items-center flex-col"}>
              <div className={"bg-bgBlue p-[16px] rounded-md"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="var(--clr-primary)"
                  stroke="var(--clr-primary)"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 44.158L19.76 165.816 32 173.937l224-112 224 112 12.24-8.12L256 44.157zm0 37.904l-215 107.5V495h30V203h370v292h30V189.562l-215-107.5zM92 223v18h328v-18H92zm0 36v18h328v-18H92zm100 36c-8.5 0-14.393 5.524-18.95 11.6-4.556 6.075-8.276 13.701-11.478 22.24-4.27 11.389-7.54 24.334-9.248 36.887-8.722-2.235-22.048-4.431-24.324 2.273-2.354 6.934 7.344 13.583 16.668 18.217-.32 1.067-.63 2.17-.906 3.344C141.969 397.18 141 406.6 141 416c0 9.4.969 18.82 2.762 26.44 1.272 5.406 3.108 9.766 4.744 12.56h214.988c1.636-2.794 3.472-7.154 4.744-12.56C370.031 434.82 371 425.4 371 416c0-9.4-.969-18.82-2.762-26.44a56.768 56.768 0 00-.906-3.343c9.324-4.634 19.022-11.283 16.668-18.217-2.276-6.704-15.602-4.508-24.324-2.273-1.707-12.553-4.977-25.498-9.248-36.887-3.202-8.539-6.922-16.165-11.479-22.24C334.393 300.524 328.5 295 320 295H192zm0 18h128c-.5 0 1.607.476 4.55 4.4 2.944 3.925 6.224 10.299 9.022 17.76 3.673 9.795 6.488 21.437 8.028 32.414C318.195 361.125 292.18 361 256 361c-36.18 0-62.195.125-85.6 6.574 1.54-10.977 4.355-22.62 8.028-32.414 2.798-7.461 6.078-13.835 9.021-17.76 2.944-3.924 5.051-4.4 4.551-4.4zm-16 87a16 16 0 0116 16 16 16 0 01-16 16 16 16 0 01-16-16 16 16 0 0116-16zm160 0a16 16 0 0116 16 16 16 0 01-16 16 16 16 0 01-16-16 16 16 0 0116-16zm-183 73v22h30v-22h-30zm176 0v22h30v-22h-30z"></path>
                </svg>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"text-[44px] font-bold"}>85</span>
                <div>
                  <p>Rental</p>
                  <p>Outlets</p>
                </div>
              </div>
            </div>
            <div className={"flex items-center flex-col"}>
              <div className={"bg-bgBlue p-[16px] rounded-md"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="var(--clr-primary)"
                  stroke="var(--clr-primary)"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    stroke="none"
                    d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2v3zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3h-2z"
                  ></path>
                </svg>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"text-[44px] font-bold"}>75</span>
                <div>
                  <p>Repair</p>
                  <p>Shops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
