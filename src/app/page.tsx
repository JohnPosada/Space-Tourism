import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout section="home">
      <div className="h-full w-full grid grid-cols-2 grid-rows-5 place-items-center max-sm:block max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="row-span-full row-start-2 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-4 px-6">
          <h2 className="row-span-full font-serif tracking-[5px] text-secondary text-2xl max-sm:text-base max-lg:text-center">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-sans text-tertiary text-[150px] font-bold max-sm:text-7xl max-lg:text-center">
            SPACE
          </h1>
          <p className="w-[440px] font-serif text-tertiary text-lg leading-loose max-sm:text-[19px] max-sm:w-auto max-lg:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="row-span-full row-start-3 max-lg:mt-16 max-sm:flex max-sm:justify-center max-sm:items-center">
          <div className="rounded-full h-64 w-64 text-3xl font-sans flex justify-center items-center text-primary bg-white">
            EXPLORE
          </div>
        </div>
      </div>
    </Layout>
  );
}
