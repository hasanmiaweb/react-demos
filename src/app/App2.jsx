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
    setFormState((prev)=> ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(formState);
  }

  return <div style={{width:"80%", margin:"auto"}}>
    <h1>FORM VALIDATION APPLICATION</h1>
    <form onSubmit={handleSubmit}>
      <p>Hello World</p>
      <>
        <InputGroup
          value={formState.title}
          label="Title"
          name={'title'}
          placeholder={"software Engineer"}
          onChange={handleChange}
        />
        <br />
        <InputGroup
          value={formState.bio}
          label="Bio"
          name={'bio'}
          placeholder={"Enter your Bio"}
          onChange={handleChange}
        />
        <br />
        <InputGroup
          value={formState.skills}
          label="Skills"
          name={'skills'}
          placeholder={"Enter your Skill"}
          onChange={handleChange}
        />
        <InputGroup
          value={formState.skills}
          label="TO SIGNUP"
          name={'skills'}
          placeholder={"Enter your Skill"}
          onChange={handleChange}
        />
      </>
    <br />
    <Button type="submit">Submit</Button>
    </form>
    <br />
  </div>;
};

export default App;
