import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout section="home">
      <div className="h-full w-full grid grid-cols-2 grid-rows-5 place-items-center">
        <div className="row-span-full row-start-2">
          <h2 className="row-span-full font-serif tracking-[5px] text-secondary text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-sans text-tertiary text-[150px] font-bold">
            SPACE
          </h1>
          <p className="w-[440px] font-serif text-tertiary text-lg leading-loose">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="row-span-full row-start-3 rounded-full h-64 w-64 text-3xl font-sans flex justify-center items-center text-primary bg-white">
          EXPLORE
        </div>
      </div>
    </Layout>
  );
}
