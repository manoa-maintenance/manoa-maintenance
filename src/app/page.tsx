import { Container } from 'react-bootstrap';
import Link from 'next/link';

/** The Home page. */
const Home = () => (
  <main className="facility-landing">
    <Container className="facility-content">
      <h1>REPORT YOUR FACILITIES!</h1>

      <p>
        A PLACE FOR UH MANOA STUDENTS TO REPORT
        <br />
        BROKEN OR DAMAGED FACILITIES
      </p>

      <div className="facility-buttons">
        <Link href="/auth/signup" className="btn facility-button">
          CREATE ACCOUNT
        </Link>

        <Link href="/auth/signup" className="btn facility-button">
          SIGN IN
        </Link>
      </div>
    </Container>
  </main>
);

export default Home;
