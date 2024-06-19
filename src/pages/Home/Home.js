import Navbar from "../Navbar/Navbar";
function Home() {
  return (
    <>
      <div className="relative h-full">
        <img className="absolute z-0 w-full"  src="Rectangle 4.png" />
        <div className="relative sticky z-10">
          <Navbar />
        </div>

        <div className="relative z-10 px-12 pt-44 pb-24 h-full">
          <div className="text-3xl color-black text-center font-bold mb-8">
            Home
          </div>
          <div className="flex mt-4 mb-4 justify-center w-full">
            <img className="w-28 h-28" src="profilepicture.png" />
          </div>
          <div className="mt-4">
            <p className="text-l font-mono">
              Hello!My name is Stefan Lazar and I am a web developer. The point
              of this website is to develop my frontend and my backend skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
