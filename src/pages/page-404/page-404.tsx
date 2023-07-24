import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


function Page404(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 Cities | 404 Page not found</title>
      </Helmet>
      <h1>404 Page not found</h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default Page404;
