//domain.com/
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://365atlantatraveler.com/wp-content/uploads/2022/06/swift-cantrell-1275x850.jpg",
    address: "Some Address 5, 12344 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://365atlantatraveler.com/wp-content/uploads/2022/06/swift-cantrell-1275x850.jpg",
    address: "Some Address 5, 12344 Some City",
    description: "This is a second meetup!",
  },
];

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
    "mongodb+srv://DataBaseAdmin:0uZANKDJSNJeBh0t@cluster0.g3ysge4.mongodb.net/meetups?retryWrites=true&w=majority"
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
