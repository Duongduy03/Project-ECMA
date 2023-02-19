import { useEffect, useState } from "../../lib";

const categoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((respone) => respone.json())
      .then((data) => setCategories(data));
  }, []);

  return /*html*/ `
  
     
    <h1>Quản lý dự án</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Tên danh mục</th>
        
       
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
    ${categories
      .map(
        (category) =>
          `
            <tr>
            <td>${category.id}</td>
            <td>${category.name}</td>
           
            <td>
                <button data-id="${category.id}" class="btn btn-remove btn-danger"> Remove</button>
                <button data-id="${category.id}" class="btn btn-edit btn-danger">
                <a href="/admin/projects/edit/${category.id}">Sửa
                </a>
                  </button>
                 </button>
            </td>
          </tr>
            `
      )
      .join("")}
    

    </tbody>
  </table>
  `;
};

export default categoryAdmin;
