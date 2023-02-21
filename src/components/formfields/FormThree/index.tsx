import React,{useState} from 'react'

interface FormChecker {
    isComplete: any;


}
// state to change form events
const FormThree = ({isComplete}:FormChecker) => {
    const [formData, setFormData] = useState({
        facebook: '',
        twitter: '',
        google: '',
        linkedin: ''
      });

// Validate form before smoving next
    if (formData.twitter.trim() != '' && formData.facebook.trim() != '' && formData.google.trim() != '' && formData.linkedin.trim() != '') {
        isComplete(true)
  
      }else isComplete(false)
  return (
    <>
     <form action="submit">
                        <header className='py-2'>
                            <h1 className='text-sm text-gray-900'>Social Links</h1>
                            <p className='text-xs text-gray-300'>Add Social Links</p>
                        </header>
                        <div className="grid md:grid-cols-2 xl:grid-cols-2  gap-6">
                            <div className="relative z-0  mb-6 group">
                                <input type="email" name="floating_email" id="floating_email" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg " placeholder=" " required  value={formData.twitter} onChange={(e:any) => {
              setFormData({ ...formData, twitter: e.target.value });
             
            }} />
                                <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Twitter </label>
                            </div>

                            <div className="relative z-0  mb-6 group">
                                <input type="email" name="floating_email" id="floating_email"className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg" placeholder=" " required  value={formData.facebook} onChange={(e:any) => {
              setFormData({ ...formData, facebook: e.target.value });
             
            }}/>
                                <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook</label>
                            </div>
                            <div className="relative z-0  mb-6 group">
                                <input type="email" name="floating_email" id="floating_email"className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg" placeholder=" " required  value={formData.google} onChange={(e:any) => {
              setFormData({ ...formData, google: e.target.value });
             
            }} />
                                <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Google +</label>
                            </div>
                            <div className="relative z-0  mb-6 group">
                                <input type="email" name="floating_email" id="floating_email"className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg" placeholder=" " required  value={formData.linkedin} onChange={(e:any) => {
              setFormData({ ...formData, linkedin: e.target.value });
             
            }} />
                                <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LinkedIn</label>
                            </div>
                        </div>



          </form>
    </>
  )
}

export default FormThree