export default function BookStatus({ Bestseller, Recommended }) {
  return (
    <div className="flex space-x-2">
      {Bestseller && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-300 text-pink-800 border border-pink-400 shadow-sm hover:bg-pink-300 transition-colors duration-300 ease-in-out">
          สินค้าขายดี
        </span>
      )}
      {Recommended && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-300 text-blue-800 border border-blue-400 shadow-sm hover:bg-blue-300 transition-colors duration-300 ease-in-out">
          แนะนำ
        </span>
      )}
    </div>
  );
}
