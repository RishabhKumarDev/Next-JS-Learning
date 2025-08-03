export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1 className=" h-12 bg-pink-700 text-center text-black text-2xl">
          {" "}
          Not nav bar
        </h1>
        {children}
        </>
  );
}
