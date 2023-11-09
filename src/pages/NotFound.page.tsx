import { PATHS } from "configs";
import { MainLayout } from "layouts";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <main className="h-[60vh] w-auto flex flex-col justify-center items-center bg-white m-[-15px]">
        <h1 className="text-9xl font-extrabold text-[#1f2937] tracking-widest">404</h1>
        <div className="bg-[#1f2937] text-white border-2 border-white border-solid px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
            <a
              className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
            >
              <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#1f2937] group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link to={PATHS.HOME}>Home</Link>
              </span>
            </a>
          </button>
      </main>
    </MainLayout>
  )
}