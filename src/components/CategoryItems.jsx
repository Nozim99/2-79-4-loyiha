import { useNavigate } from "react-router-dom";

const CategoryItems = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card m-2 p-0 CategoryItem position-relative">
      <img src={strCategoryThumb} className="card-img-top p-3" alt={strCategory} />
      <div className="card-body p-0">
        <h5 className="card-title text-center">{strCategory}</h5>
        <p className="card-text mx-3">
          {strCategoryDescription.length > 90
            ? strCategoryDescription.slice(0, 90) + "..."
            : strCategoryDescription}
        </p>
        <div className="text-center mb-3 border-top position-absolute bottom-0 start-50 translate-middle-x w-100">
          <button onClick={() => navigate(`category/${strCategory}`)} className="btn btn-primary mt-3 ">
            Watch Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
