import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Signin from './Signin';
import Login from './Login';

function Home({ tasks, router }: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    if (router && router.name == 'email') {
      return <Signin />;
    } else {
      return <Login />;
    }
  }
}

function mapStateToProps(state: any) {
  return {
    tasks: state.task.tasks,
    router: state.route.router,
  };
}

export default connect(mapStateToProps)(Home);
