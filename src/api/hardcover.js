const HARDCOVER_API_KEY = import.meta.env.VITE_HARDCOVER_API_KEY;

export const fetchBooks = async () => {
  const query = `{
    me {
    user_books(order_by: {date_added: desc}, limit: 5, where: {status_id: {_eq: 3}}) {
      id
      book {
        title
        contributions {
          author {
            name
          }
        }
      }
    }
  }
  }`;

  const res = await fetch("https://api.hardcover.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${HARDCOVER_API_KEY}`
    },
    body: JSON.stringify({ query }),
  });
  let response = res.json(); 
  console.log(response);
  return response;
};