import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import { v4 as uuidv4 } from "uuid";
import SearchProduct from "./SearchProduct";
import AddForm from "./AddForm"
import EditForm from "./EditForm";


const Products = ({ products, setProducts, setActive, user, setUser }) => {
  const [proName, setProName] = useState("");
  const [proPrice, setProPrice] = useState(0);
  const [formactive, setFormActive] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {!user.isAdmin ? (
        <>
          {console.log("admin olunmur")}
          <button
            className="log-out"
            onClick={() => {
              setActive(true);
              navigate("/");
            }}
          >
            Log out
          </button>
          <AddForm
            proName={proName}
            setProName={setProName}
            proPrice={proPrice}
            setProPrice={setProPrice}
            products={products}
            setProducts={setProducts}
            formactive={formactive}
            setFormActive={setFormActive}
          />
          <SearchProduct products={products} setProducts={setProducts} />
          <table variant="sm">
            <thead>
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
                <th>Edit</th>
                <th>Delete</th>
              </>
            </thead>
            <tbody>
              {products.map((product) => {
                let stock = product.unitsInStock < 10 ? true : false;
                let sale = product.sale ? true : false;
                if (stock) {
                  return (
                    <tr style={{ color: "red" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  );
                } else if (sale) {
                  return (

                    <tr style={{ color: "green" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <td><button
                        style={{ marginLeft: 0 }}
                        className="edit-btn-table"
                        onClick={(e) => {
                          let edited = {
                            name: editName,
                            unitPrice: editPrice,
                          };

                          e.preventDefault();
                          axios
                            .put(
                              "https://6556162184b36e3a431efcfa.mockapi.io/api/products/" +
                              edit.id,
                              edited
                            )
                            .then((res) => {
                              let arr = [...products];
                              let idx;
                              let editedProduct = arr.find((item) => item.id == res.data.id);
                              products.forEach((item, i) => {
                                if (item.id == editedProduct.id) {
                                  idx = i;
                                }
                              });

                              products[idx] = res.data;
                              setProducts([...products]);
                            });

                          setEditName("");
                          setEditPrice(0);
                        }}
                      >

                        Edit
                      </button></td>
                      <td><button
                        className="delete-btn"

                        id={product.id}
                        onClick={(e) => {
                          console.log(e.target.getAttribute("id"));
                          let founds = [...products];
                          founds = products.filter(
                            (product) => product.id != e.target.getAttribute("id")
                          );

                          setProducts(founds);
                          axios.delete(
                            "https://6556162184b36e3a431efcfa.mockapi.io/api/products/" +
                            e.target.getAttribute("id")
                          );
                        }}
                      >
                        Delete
                      </button></td>

                    </tr>
                  );
                }
              })}
            </tbody>

          </table>
        </>
      ) : (
        <>
          <button

            className="log-out"
            onClick={() => {
              setActive(true);
            }}
          >
            Log out
          </button>
          <AddForm
            proName={proName}
            setProName={setProName}
            proPrice={proPrice}
            setProPrice={setProPrice}
            products={products}
            setProducts={setProducts}
            formactive={formactive}
            setFormActive={setFormActive}
          />
          <SearchProduct products={products} setProducts={setProducts} />
          <table variant="sm">
            <thead>
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
                <th>Edit</th>
                <th>Delete</th>
              </>
            </thead>
            <tbody>
              {products.map((product) => {
                let stock = product.unitsInStock < 10 ? true : false;
                let sale = product.sale ? true : false;
                if (stock) {
                  return (
                    <tr style={{ color: "red" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />
                    </tr>
                  );
                } else if (sale) {
                  return (
                    <tr style={{ color: "green" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />
                    </tr>
                  );
                } else {
                  return (
                    <tr key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>

                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />

                    </tr>

                  );
                }
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
          <EditForm
            edit={edit}
            editName={editName}
            editPrice={editPrice}
            setEditName={setEditName}
            setEditPrice={setEditPrice}
            products={products}
            setProducts={setProducts}
          />
        </>
      )
      }
    </>
  );
};

export default Products;