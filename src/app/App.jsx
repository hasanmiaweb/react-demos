import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";


const init = {
    title: '',
    bio: '',
    skills: ''
}


const App = () => {
    const [formState, setFormState] = useState({ ...init })
    const handleChange = (e) => {
        setFormState(ppp => ({
            ...ppp,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <>
            <InputGroup 
            value={formState.title}
            label={'title'}
            name={'title'}
            placeholder={'im Title'}
            onChange={handleChange}
            />
        </>
    );
};

export default App;