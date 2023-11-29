import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetail() {
  // Use the useRouter hook to access the id query parameter
  const router = useRouter();
  const { id } = router.query;

  // Fetch data for the specific product based on the id
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  // Handle loading state
  if (!data) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading product data</div>;
  }

  // Render the product details
  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Price: ${data.price}</p>
      {/* Add other product details as needed */}
    </div>
  );
}
