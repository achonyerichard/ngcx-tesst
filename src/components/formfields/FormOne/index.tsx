import React, { useState } from 'react'





interface FormChecker {
  isCompleted: any;


}


const FormOne = ({ isCompleted }: FormChecker) => {

  // State to set form change events
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  // Validate form function before next page 

  if (formData.email.trim() != '' && formData.name.trim() != '' && formData.password.trim() != '' && formData.confirmPassword.trim() != '') {
    isCompleted(true)

  } else isCompleted(false)





  return (
    <>

      <form action="submit">
        <header className='py-2'>
          <h1 className='text-sm text-gray-900'>Account details</h1>
          <p className='text-xs text-gray-300'>Enter your Account Details</p>
        </header>
        <div className="grid md:grid-cols-2 xl:grid-cols-2      gap-6">
          <div className="relative z-0  mb-6 group">
            <input type="text" name="text" id="floating_text" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.name} onChange={(e: any) => {
              setFormData({ ...formData, name: e.target.value });

            }} />
            <label htmlFor="floating_text" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Username </label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="email" name="email" id="floating_email" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.email} onChange={(e: any) => {
              setFormData({ ...formData, email: e.target.value });

            }} />
            <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0  mb-6 group">
            <input type="text" name="password" id="password" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.password} onChange={(e: any) => {
              setFormData({ ...formData, password: e.target.value });

            }} />
            <label htmlFor="password" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" onChange={() => isCompleted(true)}>Password</label>
          </div>
          <div className="relative z-0  mb-6 group">
            <input type="text" name="confirm_password" id="confirm_password" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.confirmPassword} onChange={(e: any) => {
              setFormData({ ...formData, confirmPassword: e.target.value });

            }} />
            <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confitm Password</label>
          </div>
        </div>



      </form>
    </>
  )
}

export default FormOne