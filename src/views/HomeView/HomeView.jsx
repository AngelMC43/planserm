import HomeCards from "./components/HomeCards";
import HomeHeader from "./components/HomeHeader";

export default function HomeView() {
  return (
    <div
      style={{
        // height: "250vh",
        marginTop: "4%",
      }}
    >
      <HomeHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // paddingTop: "2%",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <HomeCards />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          // marginInline: "auto",
        }}
      ></div>
    </div>
  );
}
