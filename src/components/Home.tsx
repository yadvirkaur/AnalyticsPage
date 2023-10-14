import Analytic from './Analytics/Analytic';
import Transaction from './Transaction/Transaction';
import Banner from './banner';
import Notifications from './Notifications';
import HeaderTag from './HeaderTag';

const Home = () => {
  return (
    <div className=" flex  gap-8 m-4 mx-2 lg:mx-4 flex-wrap lg:flex-nowrap overflow-hidden ">
      <div className=" flex-1 justify-stretch  ">
        <div className="md:hidden">
          <HeaderTag />
        </div>
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
