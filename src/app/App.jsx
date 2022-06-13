import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";
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
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState);
    }

    return (
        <div style={{ width: "800px", margin: "50px auto" }}>
            <form onSubmit={onSubmit}>
            <InputGroup
                value={formState.title}
                label={'title'}
                name={'title'}
                placeholder={'im Title'}
                onChange={handleChange}
            /> <br />
            <InputGroup
                value={formState.bio}
                label={'Bio'}
                name={'bio'}
                placeholder={'Type Your Bio'}
                onChange={handleChange}
            /><br />
            <InputGroup
                value={formState.skills}
                label={'SKILS'}
                name={'skills'}
                placeholder={'set your skill'}
                onChange={handleChange}
            />
            <br />
            <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default App;