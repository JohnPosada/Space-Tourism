interface Props {
  name: string;
  role: string;
  bio: string;
}

const CrewDescription = ({ name, role, bio }: Props) => {
  return (
    <div className="text-white max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:p-6">
      <h2 className="font-sans text-5xl font-thin text-gray-400 max-lg:text-2xl ">
        {role}
      </h2>
      <h1 className="font-sans text-7xl mt-4 max-lg:text-5xl max-sm:text-center">
        {name}
      </h1>
      <p className="font-serif text-xl text-secondary mt-7 max-lg:px-20 max-sm:px-0 max-lg:mt-4 max-lg:text-base max-lg:text-center">
        {bio}
      </p>
    </div>
  );
};

export default CrewDescription;
