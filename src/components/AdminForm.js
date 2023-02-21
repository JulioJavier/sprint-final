import React, { useContext, useState } from "react";

const initialStateForm = {
  id: "",
  name: "",
  categories: [],
  shedule: "",
  start: "",
  banner: "",
  logo: "",
  description: "",
  menu: [],
};

const findCheckbox = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkboxValues = [];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkboxValues.push(checkbox.value);
    }
  });

  console.log(checkboxValues);
  return checkboxValues;
};

const AdminForm = () => {
  const [values, setValues] = useState(initialStateForm);
  const [categoriesR, setCategoriesR] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    console.log(name, value);
  };

  const handleCheckbox = (e) => {
    const { name, value } = e.target;
    if (e.target.checked) {
      categoriesR.push(value);
      console.log(categoriesR);
    }
    console.log(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    values.categories = findCheckbox();
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Restaurats</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 items-center w-96 h-96 p-2"
      >
        <div className="flex  justify-around items-center w-full h-12 ">
          <div className="flex flex-col text-center w-24 text-xs gap-1">
            <label htmlFor="id" className="text-xs cursor-pointer">
              Id Restaurant
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="id"
              id="id"
              placeholder="Id"
              className="bg-slate-200 w-full rounded-lg cursor-pointer text-center"
            />
          </div>
          <div className="flex flex-col text-center w-24 text-xs gap-1">
            <label htmlFor="name" className="text-xs cursor-pointer">
              Name Restaurant
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="bg-slate-200 w-full rounded-lg cursor-pointer text-center"
            />
          </div>
        </div>
        <div className="flex  justify-around items-center w-full h-12 ">
          <div className="flex flex-col text-center w-24 text-xs gap-1">
            <label htmlFor="schedule" className="text-xs cursor-pointer">
              Schedule
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="schedule"
              id="schedule"
              placeholder="11:00-22:00"
              className="bg-slate-200 w-full rounded-lg cursor-pointer text-center"
            />
          </div>
          <div className="flex flex-col text-center w-24 text-xs gap-1">
            <label htmlFor="start" className="text-xs cursor-pointer">
              Calificatión
            </label>
            <input
              onChange={handleInputChange}
              type="number"
              name="start"
              id="start"
              placeholder="5"
              className="bg-slate-200 w-full rounded-lg cursor-pointer text-center"
            />
          </div>
        </div>
        <span className="text-sm">Categories</span>
        <div className="flex w-full justify-center items-center gap-2 h-6">
          <input
            onChange={handleCheckbox}
            id="hamburger"
            value="hamburger"
            name="categories"
            type="checkbox"
          />
          <label htmlFor="hamburger" className="text-xs">
            Hamburger
          </label>
          <input
            onChange={handleCheckbox}
            id="salad"
            value="salad"
            name="categories"
            type="checkbox"
          />
          <label htmlFor="salad" className="text-xs">
            Salad
          </label>
          <input
            onChange={handleCheckbox}
            id="pizza"
            value="pizza"
            name="categories"
            type="checkbox"
          />
          <label htmlFor="pizza" className="text-xs">
            Pizza
          </label>
          <input
            onChange={handleCheckbox}
            id="pasta"
            value="pasta"
            name="categories"
            type="checkbox"
          />
          <label htmlFor="pasta" className="text-xs">
            Pasta
          </label>
        </div>
        <div className="flex w-full justify-around items-center  h-6">
          <label htmlFor="banner" className="text-xs cursor-pointer">
            Url Banner
          </label>
          <input
            onChange={handleInputChange}
            type="url"
            name="banner"
            id="banner"
            placeholder="https://banner/image.com"
            className="bg-slate-200 w-3/4 rounded-lg cursor-pointer text-center text-xs"
          />
        </div>
        <div className="flex w-full justify-around items-center  h-6">
          <label htmlFor="logo" className="text-xs cursor-pointer">
            Url Logo
          </label>
          <input
            onChange={handleInputChange}
            type="logo"
            name="logo"
            id="logo"
            placeholder="https://logo/image.com"
            className="bg-slate-200 w-3/4 rounded-lg cursor-pointer text-center text-xs"
          />
        </div>
        <div className="flex flex-col w-full h-24 justify-around   ">
          <label htmlFor="description" className="text-xs cursor-pointer">
            Write your description:
          </label>
          <textarea
            onChange={handleInputChange}
            className="bg-slate-200 rounded-lg cursor-pointer text-center text-xs"
            name="description"
            id="description"
            rows={4}
            cols={40}
          />
        </div>
        <button
          className="w-full h-10 bg-yellow-1000 rounded-xl hover:bg-yellow-400"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
