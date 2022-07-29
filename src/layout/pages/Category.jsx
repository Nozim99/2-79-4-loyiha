import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../../api";
import Loader from "../../components/Loader";
import CategoryListByName from "../../components/CategoryListByName";

const Category = () => {
  const [categoryName, setCategory] = useState([]);
  const value = useParams();

  useEffect(() => {
    getFilterCategory(value.name).then((data) => {
      setCategory(data.meals);
    });
  }, [value]);

  return (
    <div className="content text-center">
      {!categoryName.length ? (
        <Loader />
      ) : (
        <CategoryListByName categoryName={categoryName} />
      )}
    </div>
  );
};

export default Category;
