import { createClient } from "contentful";
import { useState, useEffect } from "react";

const apiUrl = "https://cdn.contentful.com";
const spaceId = "dtikhatjo673";
const deliveryKey = import.meta.env.VITE_API_KEY;

const client = createClient({
  space: spaceId,
  environment: "master", // defaults to 'master' if not set
  accessToken: deliveryKey,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getEntries = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {
          id,
          title,
          url,
          img,
        };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
