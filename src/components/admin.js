import React, { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./graph";
import { useParams } from "react-router-dom";
import "./admin.css";

function Admin() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [category_6, setCategory_6] = useState("");
  const [category_7, setCategory_7] = useState("");
  const [category_8, setCategory_8] = useState("");
  const [category_9, setCategory_9] = useState("");
  const [category_10, setCategory_10] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://stg.dhunjam.in/account/admin/${id}`
        );
        // console.log(response.data);
        const name = response.data.data.name;
        const city = response.data.data.location;
        setName(name);
        setCity(city);
        setCategory_6(response.data.data.amount.category_6);
        setCategory_7(response.data.data.amount.category_7);
        setCategory_8(response.data.data.amount.category_8);
        setCategory_9(response.data.data.amount.category_9);
        setCategory_10(response.data.data.amount.category_10);
      } catch (error) {
        console.error(error);
        setName("Error loading data");
      }
    };
    fetchData();
  }, []);

  async function updateDetail() {
    try {
      await axios.put(`https://stg.dhunjam.in/account/admin/${id}`, {
        amount: {
          category_6,
          category_7,
          category_8,
          category_9,
          category_10,
        },
      });
      window.location.reload()
    } catch (err) {
      console.error(err);
    }
    
  }

  function disabled() {
    setIsDisabled(false);
  }
  function enabled() {
    setIsDisabled(true);
  }

  return (
    <div className="adminPage">
      <div className="heading adminHeading">
        {`${name}, ${city} on Dhun Jam `}
      </div>

      <div className="questions">
        <div className="question">
          Do you want to charge your <br /> customers for requesting songs?
          <div className="radioButton">
            <div className="option ">
              <label>Yes</label>
              <input
                type="radio"
                name="options"
                value="yes"
                onClick={disabled}
              />
            </div>
            <div className="option">
              <label>No</label>
              <input type="radio" name="options" value="no" onClick={enabled} />
            </div>
          </div>
        </div>

        <div className="question">
          Custom song request amount-
          <input
            className="customAmount"
            type="Number"
            disabled={isDisabled}
            placeholder={category_6}
            onChange={(e) => {
              setCategory_6(e.target.value);
            }}
            min="99"
          />
        </div>

        <div className="question">
          Regular song request amounts,
          <br /> from high to low-
          <input
            className="highToLow"
            type="Number"
            disabled={isDisabled}
            placeholder={category_7}
            onChange={(e) => {
              setCategory_7(e.target.value);
            }}
            min="79"
          />
          <input
            className="highToLow"
            type="Number"
            disabled={isDisabled}
            placeholder={category_8}
            onChange={(e) => {
              setCategory_8(e.target.value);
            }}
            min="59"
          />
          <input
            className="highToLow"
            type="Number"
            disabled={isDisabled}
            placeholder={category_9}
            onChange={(e) => {
              setCategory_9(e.target.value);
            }}
            min="39"
          />
          <input
            className="highToLow"
            type="Number"
            disabled={isDisabled}
            placeholder={category_10}
            onChange={(e) => {
              setCategory_10(e.target.value);
            }}
            min="19"
          />
        </div>
        <div className="graph">
          <Graph
            data1={category_6}
            data2={category_7}
            data3={category_8}
            data4={category_9}
            data5={category_10}
          />
        </div>
        <div>
          <button onClick={updateDetail} disabled={isDisabled}>
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
