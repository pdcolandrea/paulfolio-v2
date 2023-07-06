// "use client";

// import { Nullable } from "@/lib/util";
// import { useCallback, useEffect, useRef, useState } from "react";
// import Globe from "react-globe.gl";

// export interface GeoJson {
//   type: string;
//   features: Feature[];
//   bbox: number[];
// }

// export interface Feature {
//   type: string;
//   properties: {
//     [key: string]: string;
//   };
//   bbox: number[];
//   geometry: unknown;
// }

// // TODO: FIX THIS UNHAPPY TS SCREEN
// // rel: https://github.com/vasturiano/react-globe.gl/issues/15

// function Earth() {
//   const [countries, setCountries] = useState<Nullable<GeoJson>>(null);
//   const [hover, setHover] = useState<Nullable<string>>(null);

//   const earth = useRef<unknown>(null);

//   useEffect(() => {
//     fetch(
//       "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
//     )
//       .then((res) => res.json() as Promise<GeoJson>)
//       .then((countries) => {
//         setCountries(countries);
//         earth.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 1.5 });
//       });
//   }, []);

//   const onHoverHandler = useCallback(
//     (polygon: Record<string, Record<string, string>>) => {
//       if (polygon !== null) {
//         setHover(polygon.properties.ISO_A3);
//         earth.current.controls().autoRotate = false;
//       } else {
//         setHover(null);
//         earth.current.controls().autoRotate = true;
//       }
//     },
//     []
//   );

//   return (
//     <Globe
//       ref={earth}
//       width={400}
//       height={400}
//       polygonsData={countries?.features.filter(
//         (d) => d.properties.ISO_A2 !== "AQ"
//       )}
//       polygonAltitude={0.01}
//       polygonCapColor={(d) =>
//         d.properties.ISO_A3 === hover
//           ? "rgba(255, 255,255, 0.3)"
//           : "rgba(255, 255,255, 0)"
//       }
//       rendererConfig={{}}
//       polygonSideColor={() => "rgba(255, 255, 255, 0)"}
//       globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//       onPolygonHover={onHoverHandler}
//       backgroundColor="#020817"
//     />
//   );
// }

// export default Earth;
