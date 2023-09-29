import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/detailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProductType } from "../types/product.type";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // Client Side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* client Side */}
      {/* <DetailProduct product={isLoading ? [] : data.data} /> */}
      {/* Server Side */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   // Fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await res.json();

//   return {
//     props: {
//       products: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
  // Fetch data
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
