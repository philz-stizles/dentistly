import { Fragment } from 'react';
import { Header } from '../../components/shared';
import { Advantages, CallToAction, Services } from './_components';
import SERVICES from '../../assets/data/services';
import ADVANTAGES from '../../assets/data/advantages';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Advantages advantages={ADVANTAGES} />
        <CallToAction />
        <Services services={SERVICES} />
      </main>
    </Fragment>
  );
};

export default Home;
