import {useNavigate} from 'react-router-dom'

const CategoryItemByName = ({strMeal, strMealThumb, idMeal}) => {
    const navigate = useNavigate()
    return (
        <div className="card m-2 p-0 CategoryItembyName position-relative">
        <img src={strMealThumb} className="card-img-top p-3" alt={strMeal} />
        <div className="card-body p-0">
          <h5 className="card-title text-center">{strMeal.length > 46 ? strMeal.slice(0, 46) + '...' : strMeal}</h5>
          <div className="text-center mb-3 border-top position-absolute bottom-0 start-50 translate-middle-x w-100">
            <button onClick={()=>navigate(`meal/${idMeal}`)} className="btn btn-primary mt-3 ">
              Watch Recipe
            </button>
          </div>
        </div>
      </div>
    );
};

export default CategoryItemByName;