interface Props {
  name: string;
  role: string;
  bio: string;
}

const CrewDescription = ({ name, role, bio }: Props) => {
  return (
    <div className="text-white max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-6">
      <h2 className="font-sans text-5xl opacity-60 max-sm:text-2xl">{role}</h2>
      <h1 className="font-sans text-7xl mt-4 max-sm:text-5xl max-sm:text-center">
        {name}
      </h1>
      <p className="font-serif text-xl mt-7 max-sm:text-base max-sm:text-center">
        {bio}
      </p>
    </div>
  );
};

export default CrewDescription;
