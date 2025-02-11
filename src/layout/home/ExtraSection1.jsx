import CountUp from "react-countup";
const ExtraSection1 = () => {
  return (
    <div className=" text-center my-32">
      <div className="stats max-sm:inline-block  shadow">
        <div className="stat place-items-center lg:w-96">
          <div className="stat-title">Online Users</div>
          <CountUp
            className="stat-value"
            duration={2}
            end={12000}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">From January 1st to December last</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Books To Read</div>
          <CountUp
            className="text-blue-500 stat-value"
            duration={2}
            end={4200}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Best Authors</div>
          <CountUp
            className="stat-value"
            duration={3}
            end={1250}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Awards</div>
          <CountUp
            className="stat-value"
            duration={2}
            end={45}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
