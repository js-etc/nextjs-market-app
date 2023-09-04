import prisma from "@/helpers/prismadb";
interface Params {
  productId?: string;
}

export default async function getProductById(params: Params) {
  try {
    const { productId } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      // product 데이터를 가져오면서 product를 생성한 user의 데이터도 같이 가져옴.
      include: {
        user: true,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
