const ProjectIntroduction = ({ roles, description, duration, genre, platform }) =>
{
  return (
    <div className="flex flex-col px-4 gap-0 my-2
        sm:flex-row sm:px-16 sm:gap-8">
      <div className="sm:w-1/2">
        <div className="my-5">
          <p className="font-bold text-lg">ROLE</p>
          <p>{roles}</p>
        </div>

        <div className="my-5">
          <p className="font-bold text-lg">DESCRIPTION</p>
          <p className="whitespace-pre-line">{description}</p>
        </div>
      </div>

      <div className="h-auto border-l-2 border-surfaceA30 hidden
        sm:block" />
      <div className="sm:w-1/2">
        <div className="my-5">
          <p className="font-bold text-lg">YEAR</p>
          <p>{duration}</p>
        </div>

        <div className="my-5">
          <p className="font-bold text-lg">GENRE</p>
          <p>{genre}</p>
        </div>

        <div className="my-5">
          <p className="font-bold text-lg">PLATFORM</p>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectIntroduction;
