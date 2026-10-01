function Form() {
  return (
    <div className="pt-36 px-4 py-20 bg-gray-100">
      <form className="max-w-sm mx-auto ">
        <div className="bg-gradient-to-r from-teal-600 to-gray-700 p-10 rounded-lg hover:shadow-2xl hover:-translate-y-2">
          <div className="mb-5 mt-10">
            <label htmlFor="email" className="block mb-2.5 text-xl font-medium text-heading">
              Your email
            </label>
            <input type="email" placeholder=" Email" id="email" className="bg-white rounded-lg border-2 border-gray-300" />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2.5 text-xl font-medium text-heading">
              Your password
            </label>
            <input type="password" placeholder=" Password" id="password" className="bg-white rounded-lg border-2 border-gray-300" />
          </div>

          <label htmlFor="remember" className="flex items-center mb-5 mt-10">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 ..." />
            <p className="ms-2  text-sm font-medium text-heading select-none">
              I agree with the terms and conditions.
            </p>
          </label>

          <button type="submit" className="text-white font-semibold bg-black px-4 py-2 rounded-lg  bg-brand mb-6 mt-6">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;