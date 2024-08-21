import { sculptureList } from "./data";
import BookStatus from "./BookStatus";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {sculptureList.map((product) => (
            <div key={product.Code} className="group relative">
              <div className="absolute top-0 right-0 p-2">
              </div>
              
              {/* Product Image */}
              <a href={product.href} className="block overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform transform hover:scale-105">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.Cover}
                    alt={product.Title}
                    className="h-full w-full object-cover object-center transition-opacity duration-200 ease-in-out group-hover:opacity-75"
                  />
                </div>
              </a>

              {/* Product Information */}
              <div className="mt-4 p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.Title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-700">{product.Price}</p>
                <BookStatus Bestseller={product.Bestseller} Recommended={product.Recommended} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
