import React, {useState} from "react";

export default function FormApp(props){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [gender , setGender] = useState('female')
    const [address , setAddress] = useState('')
    const [agree , setAgree] = useState(false)


    
    const EmailChange = function(e){
        setEmail(e.target.value)
    }

        
    const PasswordChange = function(e){
        setPassword(e.target.value)
    }
        
    const GenderChange = function(e){
        setGender(e.target.value)
    }
        
    const AdressChange = function(e){
        setAddress(e.target.value)
    }
        
    const AgreeChange = function(e){
        setAgree(e.target.checked)
    }


    return(

        
        <form onSubmit={function(e){ 
            let data = {
                'email' : email,
                'password' : password,
                'gender' : gender,
                'address' : address 
            }
             e.preventDefault()}}>

           메일: <br/> <input type="email" value={email} onChange = {EmailChange} />
           암호: <br/> <input type="password" value={password} onChange = {PasswordChange} />
           성별 : <br/>
            <select value={gender} onChange = {GenderChange}>
                 <option value="male">man</option>
                 <option value="female">woman</option>
            </select>
                
          
          주소 : <br/> <textarea value={address} onChange = {AdressChange} />
          동의? <br/> <input type="checkbox" value={email} onChange = {AgreeChange} />

            <button type="submit" disabled = {!agree}>asd</button>
        </form>
        );
}