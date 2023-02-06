import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Book 1'
          price={6}
          description='My First Book!'
        />
        <ProductItem
          title='Book 2'
          price={10}
          description='My Second Book!'
        />
      </ul>
    </section>
  );
};

export default Products;
