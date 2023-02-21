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

  // State to toggle password view
  const [passwordtoggle, setPasswordToggle] = useState(false)

    // State to toggle confirm password view
    const [confirmpasswordtoggle, setConfirmPasswordToggle] = useState(false)
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
            <div className="relative">
              <input type={passwordtoggle?"password":"text"} name="password" id="password" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.password} onChange={(e: any) => {
                setFormData({ ...formData, password: e.target.value });

              }} />
                 <label htmlFor="password" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" onChange={() => isCompleted(true)}>Password</label>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <span onClick={() => setPasswordToggle(!passwordtoggle)} className="cursor-pointer">
                  <svg className={passwordtoggle ? "h-6  fill-gray-500" : "hidden"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EyeOutlineIcon"><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg>

                </span>

                <span onClick={()=> setPasswordToggle(!passwordtoggle)} className="cursor-pointer">
                  <svg className={passwordtoggle?"hidden": "h-6  fill-gray-500"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EyeOffOutlineIcon"><path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path></svg>

                </span>

              </div>
            </div>
         
          </div>
          
          <div className="relative z-0  mb-6 group">
          <div className="relative z-0  mb-6 group">
            <div className="relative">
              <input type={confirmpasswordtoggle?"password":"text"} name="confirm_password" id="confirm_password" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer" placeholder=" " required value={formData.confirmPassword} onChange={(e: any) => {
              setFormData({ ...formData, confirmPassword: e.target.value });

            }}  />
                 <label htmlFor="confirm_password" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Confirm Password</label>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <span onClick={() => setConfirmPasswordToggle(!confirmpasswordtoggle)} className="cursor-pointer">
                  <svg className={confirmpasswordtoggle ? "h-6  fill-gray-500" : "hidden"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EyeOutlineIcon"><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg>

                </span>

                <span onClick={()=> setConfirmPasswordToggle(!confirmpasswordtoggle)} className="cursor-pointer">
                  <svg className={confirmpasswordtoggle?"hidden": "h-6  fill-gray-500"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EyeOffOutlineIcon"><path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path></svg>

                </span>

              </div>
            </div>
          
          </div>
           
           
          </div>

        </div>




      </form>
    </>
  )
}

export default FormOne