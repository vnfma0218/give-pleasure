export default function Home() {
  return (
    <div className="bg-orange-400 border-t-[1px] border-black">
      <div className="flex h-[500px] py-20 px-14">
        <div className="border-2 border-red-600 w-3/5 h-full">
          <h2 className="tracking-widest text-4xl font-extrabold text-black">
            Find or be professional
            <div className="h-4"></div>
            freelancer with passion
          </h2>
          <div className="form-control mt-24">
            <div className="input-group input-group-lg">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-96"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 ml-2 border-blue-700 h-full">
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
