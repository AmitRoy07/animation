"use client";
import ReactLenis from "@studio-freight/react-lenis";

const Scroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  return <ReactLenis root>{children}</ReactLenis>;
};

export default Scroll;
