import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data } = useSWR("/api/products", fetcher);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return data.map((product) => {
    return (
      <li key={product.id}>
        {product.name}, {product.description}, , {product.category} ,{" "}
        {product.price}
        {product.currency}
      </li>
    );
  });
}
