import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 // 12 blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:8000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if(selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    // Page changing btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Category Changing btn
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
  return (
    <div>
        <div className='my-8'>
            <CategorySelection onSelectcategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>
        <div className='my-8 flex flex-col lg:flex-row gap-12'>
            <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

            <div>
                <SideBar/>
            </div>
        </div>
        <div className='my-8'>
            <Pagination  onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>
      
    </div>
  )
}

export default BlogPage;
