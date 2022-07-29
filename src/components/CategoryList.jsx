
import CategoryItems from './CategoryItems';

const CategoryList = ({catalog = []}) => {
    return (
        <div className="container">
            <h1 className='text-center mt-4'>List of categories</h1>
            <div className='row d-flex justify-content-center mt-4 mb-5'>
            {catalog.map(element =>(
                <CategoryItems key={element.idCategory} {...element} />
            ))}
        </div>
        </div>
    );
};

export default CategoryList;