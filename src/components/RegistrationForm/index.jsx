import React, {useRef, useState} from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address,setAddress] = useState('');
    const [country,setCountry] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [email,setEmail] = useState('');
    const [sex,setSex] = useState('');
    const [language,setLanguage] = useState('');
    const [about,setAbout] = useState('');

    const englishRef = useRef(null);
    const nonEnglishRef = useRef(null);

    const handleInputChange = (e) => {
        const {className, value} = e.target;
        switch(className) {
            case 'user-id':
                setUserId(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'zip-code':
                setZipCode(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'sex':
                setSex(value);
                break;
            case 'language':
                if (language === '') {
                    setLanguage(value);
                } else if (language === value) {
                    setLanguage('')
                } else {
                    if (language === 'english') {
                        englishRef.current.checked = false
                    } else {
                        nonEnglishRef.current.checked = false
                    }
                    setLanguage(value)
                }
                break;
            case 'about':
                setAbout(value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = () => {
        if (userId === '') {
            alert('User Id is required')
            return
        } else if (userId.length < 5 || userId.length > 12) {
            alert('User id must be of length 5 to 12')
            return
        }
        if (password === '') {
            alert('Password is required')
            return
        } else if (password.length < 7 || password.length > 12) {
            alert('Password must be of length 7 to 12')
            return
        }
        if (name === '') {
            alert('Name is required')
            return
        } else if (!/^[a-zA-Z ]*$/.test(name)) {
            alert('Name must be alphabates only')
            return
        }
        if (country === '') {
            alert('Country is required')
            return
        }
        if (zipCode === '') {
            alert('Zip Code is required')
            return
        } else if (!/^[0-9\b]+$/.test(zipCode)) {
            alert('Zip Code must be numeric only')
            return
        }
        if (email === '') {
            alert('Email is required')
            return
        } else if (!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(email)) {
            alert('Must be a valid email')
            return
        }
        if (sex === '') {
            alert('Sex is required')
            return
        }
        if (language === '') {
            alert('Language is required')
            return
        }
        console.log('User Id:', userId);
        console.log('Password:', password);
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Country:', country);
        console.log('Zip Code:', zipCode);
        console.log('Email:', email);
        console.log('Sex:', sex);
        console.log('Language:', language);
        console.log('About:', about);
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td colSpan={2}><h3>Registration Form</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User Id:</td>
                        <td><input type='text' size='12' className='user-id' value={userId} onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' size='12' className='password' value={password} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type='text' size='30' className='name' value={name} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type='text' size='30' className='address' value={address} onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>
                            <select className='country' value={country} onChange={handleInputChange}>
                                <option value=''>-Select-</option>
                                <option value='china'>China</option>
                                <option value='australia'>Australia</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>ZiP Code:</td>
                        <td><input type='text' size='8' className='zip-code' value={zipCode} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type='email' size='30' className='email' value={email} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Sex:</td>
                        <td className='radio'>
                            <input type='radio' name='gender' className='sex' value='male' onChange={handleInputChange}/>Male
                            <input type='radio' name='gender' className='sex' value='female' onChange={handleInputChange}/>Female
                        </td>
                    </tr>
                    <tr>
                        <td>Language:</td>
                        <td className='checkbox'>
                            <input type='checkbox' ref={englishRef} className='language' value='english' onChange={handleInputChange}/>English
                            <input type='checkbox' ref={nonEnglishRef} className='language' value='non english' onChange={handleInputChange}/>Non English
                        </td>
                    </tr>
                    <tr>
                        <td className='about'>
                            <label>About:</label>
                        </td>
                        <td><textarea rows='4' cols='40' className='about' value={about} onChange={handleInputChange}/></td>
                    </tr>
                </tbody>
            </table>
            <input type='submit' className='submit' value='Submit' onClick={handleSubmit}/>
        </>
    )
}

export default RegistrationForm