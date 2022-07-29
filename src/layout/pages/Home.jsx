import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import { getAllCategories } from "../../api";
import CategoryList from "../../components/CategoryList";
import Loader from "../../components/Loader";
import Search from "../../components/Search";

export default function Home() {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])
  const {pathname, search} = useLocation()

  const handleSearch = (str)=>{
    setFilteredCatalog(catalog.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase()))) //includes - ichida bor bo'lsa true qaytaradi

  }

  useEffect(()=>{
    getAllCategories().then(data=>{
      setCatalog(data.categories)
      setFilteredCatalog(data.categories) //includes - ichida bor bo'lsa true qaytaradi
    })
  }, [])

  return (
    <div className="content">
      {/* <Search cb={handleSearch} /> */}
      {!catalog.length ? <Loader /> : <CategoryList catalog={filteredCatalog} />}
    </div>
  );
}
