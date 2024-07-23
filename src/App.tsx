import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import ECommerce from './pages/Dashboard/ECommerce';
import FormLayout from './pages/Form/FormLayout';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <ECommerce />
            </>
          }
        />
        
        <Route
          path="/forms/form-layout"
          element={
            <>
              <FormLayout />
            </>
          }
        />
       
      </Routes>
    </DefaultLayout>
  );
}

export default App;
