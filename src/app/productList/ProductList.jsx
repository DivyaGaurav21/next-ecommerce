import ProductItem from './ProductItem'
const ProductList = ({ allProductData }) => {
    // console.log(allProductData)
    return (
        <section className="py-12">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row -mx-4">
                    <main className="md:w-2/3 lg:w-11/12 px-3">
                        {allProductData?.products?.map((product) => (
                            <ProductItem key={product?._id} product={product} />
                        ))}
                    </main>
                </div>
            </div>
        </section>
    )
}

export default ProductList;