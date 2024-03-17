import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const alt = "Main Logo";
export const size = {
  width: 800,
  height: 400,
};

export const contentType = "image/jpg";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fef9f5",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <img src="/og.png" alt="tangguh" style={{ width: 500, height: 450 }} />
        {/* next */}
        <img
          src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
          alt="react"
          style={{
            width: 120,
            height: 78,
            position: "absolute",
            top: 90,
            left: 170,
          }}
        />
        {/* react */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
          alt="react"
          style={{
            width: 78,
            height: 78,
            position: "absolute",
            top: 20,
            left: 60,
          }}
        />
        {/* sql */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
          alt="react"
          style={{
            width: 78,
            height: 78,
            position: "absolute",
            top: 170,
            left: 100,
          }}
        />
        {/* sql */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="react"
          style={{
            width: 78,
            height: 78,
            position: "absolute",
            bottom: 50,
            left: 20,
          }}
        />
        {/* node */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          alt="react"
          style={{
            width: 128,
            height: 78,
            position: "absolute",
            bottom: 80,
            right: 60,
          }}
        />
        {/* go */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png"
          alt="react"
          style={{
            width: 128,
            height: 56,
            position: "absolute",
            top: 130,
            right: 150,
          }}
        />
        {/* docker */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"
          alt="react"
          style={{
            width: 78,
            height: 78,
            position: "absolute",
            top: 10,
            right: 220,
          }}
        />
        {/* ts */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
          alt="react"
          style={{
            width: 78,
            height: 78,
            position: "absolute",
            top: 10,
            right: 90,
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  );
}
