export default function Newsletter() {
    return (
      <section className="bg-white text-black text-center py-12 px-6 rounded-2xl mt-16 mx-4">
        <h2 className="text-2xl font-bold mb-4">ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full border w-full"
          /> 
           <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"> 
            Subscribe to Newsletter
          </button> 
         </div> 
      </section>
    );
  }
  


  