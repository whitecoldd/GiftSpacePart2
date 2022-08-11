import React, { useEffect, useState } from "react";
import "./topForm.css";

import Cards from "../../assets/img/topFormCards.png";
import { useForm } from "react-hook-form";

const cats = [
  { label: "Categ1", id: 1 },
  { label: "Categ2", id: 2 },
  { label: "Categ3", id: 3 },
];

const countries = [
  { label: "Comrat", id: 1 },
  { label: "Chisinau", id: 2 },
  { label: "Cahul", id: 3 },
];

export default function TopForm() {
  let [totalAmount, settotalAmount] = useState(1000);
  let [currAmount, setcurrAmount] = useState(0);

  let [formData, setFormData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // if true - form is validated, User is allowed to open modal window
  let [formValidated, setformValidated] = useState(false);

  const [CategsInForm, setCategsInForm] = useState([]);
  const [Country, setCountry] = useState([]);

  useEffect(() => {
    setCategsInForm(cats);
    setCountry(countries);
  }, []);

  let interval = (24 / totalAmount) * 60 * 60 * 1000;

  const func = () => {
    let date = new Date();
    let currDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let newTime = new Date(currDate).getTime();
    let AmountNow = (
      (Date.now() - newTime) /
      interval
    ).toFixed(); /*  / 1000 / 60 / 60 */
    setcurrAmount(AmountNow);
    console.log(AmountNow);
  };

  useEffect(() => {
    func();
    setTimeout(() => {
      func();
    }, interval + 500);
  });

  let handleForm = (e) => {
    e.preventDefault();

    if (formData.length < 4) {
      setformValidated(false);
    } else {
      setformValidated(true);
      console.log(formData);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="topForm">
      <div className="topForm_left">
        <div className="topForm_bgCard">
          <span>don't miss your chance</span>
        </div>
        <div className="topForm_left_cards">
          <img src={Cards} alt="" />
        </div>
        <div className="topForm_left_content">
          <h1>Increase the amount of your E-Gift card</h1>
          <button className="btn">View Odds</button>
          <div className="topForm_bottomInfo">
            <div className="top">
              <span>{currAmount}</span> out of {totalAmount}
            </div>
            <div className="bottom">
              People have alredy received their bonus
            </div>
          </div>
          <div className="bottomLine">
            <div
              className="bottomLineLoaded"
              style={{ width: (currAmount / totalAmount) * 100 + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="topForm_right">
        <h3>quick bonus</h3>
        <div className="topForm_form">
          <div className="topForm_inputArrow">
            <svg
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="productFormLeft">
              <label>Category</label>
              <select
                name="category"
                {...register("category", { required: true })}
                onChange={handleChange}
              >
                {CategsInForm.map((cat) => (
                  <option value={cat.label}>{cat.label}</option>
                ))}
              </select>
              <input
                type="text"
                onChange={handleChange}
                {...register("egift_number", { required: true })}
                placeholder="E-gift Number"
                name="egift_number"
              />
              <input
                type="text"
                onChange={handleChange}
                {...register("email", { required: true })}
                placeholder="E-Mail"
                name="email"
              />

              <label>Country</label>
              <select
                name="country"
                {...register("country", { required: true })}
                onChange={handleChange}
              >
                {Country.map((c) => (
                  <option value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>

            <button className="btn" type="submit" name="submitBtn">
              Get Bonus Now
            </button>
            {errors.category && <p>Please fill in all fields</p>}
            {errors.country && <p>Please fill in all fields</p>}
            {errors.email && <p>Please fill in all fields</p>}
            {errors.egift_number && <p>Please fill in all fields</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
