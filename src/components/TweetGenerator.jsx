import { useState, useEffect } from "react";
import axios from "axios";

const TweetGenerator = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const tweetUrl = import.meta.env.VITE_APP_TWEET_GENERATOR_URL;

  useEffect(() => {
    // Function to fetch educational tweets from your endpoint
    const fetchTweets = async () => {
      try {
        const response = await axios.get(tweetUrl );
        setTweets(response.data);
      } catch (error) {
        setError("Error fetching tweets");
      }
    };

    // Initial fetch when the component mounts
    fetchTweets();

    // Set up interval to fetch tweets every hour (3600000 milliseconds)
    const intervalId = setInterval(fetchTweets, 3600000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [tweetUrl]); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetGenerator;
