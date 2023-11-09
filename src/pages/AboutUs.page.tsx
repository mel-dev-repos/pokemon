import { MainLayout } from "layouts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className="bg-gray-100 m-[-15px] h-[60vh]">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">Melina Musakhani</p>
          <hr className="border-[#1f2937]"/>
          <p className="text-lg mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit euismod, fringilla ex ut, feugiat elit.
            Quisque sed purus in felis consectetur tristique. Sed id metus vitae nunc pellentesque fringilla.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/mel-dev-repos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-lg mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit euismod, fringilla ex ut, feugiat elit.
            Quisque sed purus in felis consectetur tristique. Sed id metus vitae nunc pellentesque fringilla.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};