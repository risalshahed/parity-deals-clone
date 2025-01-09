import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";

const DashboardPage = async () => {
  const { userId, redirectToSignIn } = auth();

  if(user == null) return redirectToSignIn()

  const products = await getProducts(userId, { limit: 6 })

  if(products.length === 0) return <p>No Product Found</p>

  return null;
}

export default DashboardPage;