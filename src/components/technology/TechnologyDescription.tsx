interface Props {
  name: string;
  description: string;
}

const TechnologyDescription = ({ name, description }: Props) => {
  return (
    <div className="text-white font-serif flex flex-col gap-4 pr-16 max-sm:text-center max-sm:p-6">
      <p className="text-base text-secondary max-sm:text-sm">
        {" "}
        THE TERMINOLOGY…
      </p>
      <h1 className="font-sans text-6xl max-sm:text-4xl">
        {name.toUpperCase()}
      </h1>
      <p className="text-xl text-secondary max-sm:text-lg">{description}</p>
    </div>
  );
};

export default TechnologyDescription;
