//domain.com/
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";



function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups Test</title>
        <link rel="icon" href="/test.ico" />
        <meta
          name="description"
          content="Browse a small list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:>password>@cluster0.g3ysge4.mongodb.net/<db>?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //revalidate: 3600 (seconds)
  };
}

export default HomePage;
