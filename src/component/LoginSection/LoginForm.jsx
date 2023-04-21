import React from "react";

const LoginForm = () => {
      
 
  return (
    <div class="h-screen py-20 -mx-2 px-3">
      <div class="container mx-auto">
        <div class="max-w-sm mx-auto md:max-w-lg">
          <div class="w-full">
            <div class="bg-orange-100 h-64 py-3 rounded text-center">
              <h1 class="text-xl font-bold">Enter mobile number</h1>
              <div className="my-6">
                <input
                  class="m-2 border h-10 w-3/5 text-center rounded-lg"
                  type="number"
                  maxlength="10"
                />
              </div>

              <button className="border bg-orange-400 w-56 text-xl text-yellow-50  text-center h-10 rounded-full hover:bg-orange-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
