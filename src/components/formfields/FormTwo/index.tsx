import React, { useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface FormChecker {
    isComplete: any;
   

}

const names = [
    'English',
    'French',
    'Spanish',
    'Portugese',
    'Italian',
    'German',
    'Arabic',

];

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const FormTwo = ({ isComplete}: FormChecker) => {
    const theme = useTheme();
    const [lang, setLang] = React.useState<string[]>([]);

    // State to set form change events
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        country:'',

    });


    // Validate form function before next page 
        if (formData.firstname.trim() != ''  && formData.lastname.trim() != '' && lang.length > 0 && formData.country != '') {
            isComplete(true)
        } 

    const handleChange = (event: SelectChangeEvent<typeof lang>) => {
        const {
            target: { value },
        } = event;
        setLang(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <>
            <form action="submit">
                <header className='py-2'>
                    <h1 className='text-sm text-gray-900'>Personal Info</h1>
                    <p className='text-xs text-gray-300'>Setup Information</p>
                </header>
                <div className="grid md:grid-cols-2 xl:grid-cols-2  gap-6">
                    <div className="relative z-0  mb-6 group">
                        <input type="text" name="first_name" id="first_name" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg " placeholder=" " required value={formData.firstname} onChange={(e) => {
                            setFormData({ ...formData, firstname: e.target.value });
                           
                        }} />
                        <label htmlFor="first_name" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name </label>
                    </div>

                    <div className="relative z-0  mb-6 group">

                        <input type="text" name="last_name" id="last_name" className="pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg" placeholder=" " required value={formData.lastname} onChange={(e) => {
                            setFormData({ ...formData, lastname: e.target.value });
                           
                        }} />
                        <label htmlFor="last_name" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>
                    <div className="relative z-0  mb-6 group">
                        <select className="cursor-pointer pl-5 block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#64C623] bo peer rounded-lg" name="floating_email" id="floating_email" onChange={(e:any)=>  setFormData({ ...formData, country: e.target.value })}>
                            <option className='hover:bg-red-500' value="">Please choose&hellip;</option>
                            <option value="1">UK</option>
                            <option value="2">USA</option>
                            <option value="3">Australia</option>
                            <option value="3">Germany</option>
                        </select>
                        <label htmlFor="floating_email" className="peer-focus:z-10 peer-focus:bg-white peer-focus:px-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 pl-5 origin-[0] peer-focus:left-0 peer-focus:text-[#64C623] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                    </div>
                    <div className="relative z-0  -mt-2 group">
                        <FormControl sx={{ m: 1, width: '100%' }}>
                            <InputLabel id="demo-multiple-name-label">Language</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={lang}
                                onChange={handleChange}
                                input={<OutlinedInput label="Language" />}

                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, lang, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>



            </form>
        </>
    )
}

export default FormTwo