// components/DressStyles.js
import { dressStyles } from "../data/products";

export default function DressStyles() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Browse by Dress Style</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {dressStyles.map((style) => (
          <div
            key={style.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold">{style.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
