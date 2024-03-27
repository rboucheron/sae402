import Maps from "./maps.jsx";
function home() {
  return (
    <>
      <h1 className="w-full text-center text-3xl text-blue mt-40">
        Devine dans quelles pays se trouve la plus part des communautés amish ?{" "}
      </h1>
      <div className="mt-10 w-5/6 m-auto">
        <Maps />
      </div>
    </>
  );
}

export default home;
