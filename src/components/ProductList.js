
import { useFilterContext } from '../context/FilterContext'
import GridView from './GridView';


function ProductList({ product }) {
    const { filter_products, grid, setGridView } = useFilterContext();
    
    if (setGridView ) {
        
      return <GridView products={filter_products} />
    }
    // else {
    //   return <ListView products={filter_products}/>
    // }
}

export default ProductList