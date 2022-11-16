import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_API_BASE_URL;

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  console.log(data);
}
