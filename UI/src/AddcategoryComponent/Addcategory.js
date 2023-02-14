import { useState } from "react";
import axios from "axios";
import {_apiURLCategory} from '../apiURl'



function Addcategory() {
 const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [output , setOutput] = useState();
    
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiURLCategory+"save", formData, config).then((response) => {
      console.log(response.data)
      
        setCatName("");
        setOutput("Category Added Successfully....");
      });
    }




  return (
    <div>
     
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 text-center">
<div className="inner-column">
   <div class="page-content1">
        <div class="form-v4-content">
         <form class="form-detail" onSubmit={handleSubmit}>
            <h2>Add Category !!</h2>
            <font style={{ color: "blue" }}>{output}</font>
            <div class="form-row">
              <label for="your_email">Category Name:</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                class="input-text"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label for="your_email">Category Icon:</label>
              <input
                type="file"
                name="your_email"
                id="your_email"
                class="input-text"
             
                onChange={handleChange}
              />
            </div>

            <div class="form-row-last">
              <input
                type="submit"
                name="register"
                class="register"
                value="Add category"
              />
            </div>
          </form>      
</div>       
</div>
</div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
    </div>
  );
}

export default Addcategory;
