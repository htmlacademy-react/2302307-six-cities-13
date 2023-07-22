import { Link } from 'react-router-dom';


function Page404(): React.JSX.Element {
  return (
    <>
      <h1>404 Page not found</h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default Page404;
