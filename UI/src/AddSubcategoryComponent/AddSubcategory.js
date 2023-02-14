import { useState, useEffect } from "react";
import axios from "axios";
import { _apiURLCategory, _apiURLSubCategory } from "../apiURl";

function AddSubcategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiURLCategory + "fetch").then((result) => {
      setCategoryDetails(result.data);
    });
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("subcatnm", subCatName);
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };
    axios
      .post(_apiURLSubCategory + "save", formData, config)
      .then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput("SubCategory Added Successfully....");
      });
  };

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
                      <h2>Add SubCategory !!</h2>
                      <font style={{ color: "blue" }}>{output}</font>

                      <div class="form-row">
                        <label for="catnm">Category Name:</label>
                        <select
                          class="form-control"
                          value={catName}
                          onChange={(e) => setCatName(e.target.value)}
                        >
                          <option>Select Category</option>

                          {cDetails.map((row) => (
                            <option>{row.catnm}</option>
                          ))}
                        </select>
                      </div>

                      <div class="form-row">
                        <label for="subcategory">Sub Category Name:</label>
                        <input
                          type="text"
                          name="your_email"
                          id="your_email"
                          class="input-text"
                          value={subCatName}
                          onChange={(e) => setSubCatName(e.target.value)}
                        />
                      </div>
                      <div class="form-row">
                        <label for="your_email">Sub Category Icon:</label>
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
                          value="Add Category"
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

export default AddSubcategory;
