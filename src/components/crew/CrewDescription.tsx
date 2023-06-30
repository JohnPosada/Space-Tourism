interface Props {
  name: string;
  role: string;
  bio: string;
}

const CrewDescription = ({ name, role, bio }: Props) => {
  return (
    <div className="text-white">
      <h2 className="font-sans text-4xl opacity-60">{role}</h2>
      <h1 className="font-sans text-6xl mt-4">{name}</h1>
      <p className="font-serif text-lg mt-7">{bio}</p>
    </div>
  );
};

export default CrewDescription;
