import Header from "../components/header";
import withMui from "../shared/MUI/withMUI";
import { Card, CardHeader, CardText } from "material-ui/Card";
import "isomorphic-fetch";
import RaisedButton from "material-ui/RaisedButton";
import Link from "next/link";

const Post = ({ title, content, author }) => (
  <div>
      <style jsx>
        {`
            .post-link {
                text-decoration: none;
                color: #FFF;
                font-size: 18px;
            }
        `}
      </style>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <h5>Escrito por: {author}</h5>
        <RaisedButton fullWidth={true} secondary={true}>
          <Link href="/" as="/blog">
            <a className="post-link">Go back to blog!</a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  </div>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  const title = data.title;
  const content = data.content;
  const author = data.author.displayName;

  return { title, content, author };
};

export default withMui(Post);
