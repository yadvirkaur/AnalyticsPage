import Analytic from './Analytics/Analytic';
import Transaction from './Transaction/Transaction';
import Banner from './banner';
import Notifications from './Notifications';

const Home = () => {
  return (
    <div className=" flex  gap-8 m-4 flex-wrap lg:flex-nowrap overflow-hidden ">
      <div className=" flex-1 justify-stretch  ">
        <Banner />
        <Analytic />
        <Transaction />
      </div>

      <div>
        <Notifications />
      </div>
    </div>
  );
};

export default Home;
