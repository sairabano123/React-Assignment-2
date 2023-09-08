import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";
import Card from "../Layout/Card";
import { useState } from "react";
import PromptCard from "../Layout/PromptCard";
import { useNavigate } from "react-router";

export default function SignIn(props) {
  const navigate = useNavigate();

  const [msg, setMsg] = useState();

  const validate = (e) => {
    e.preventDefault();
    const user = props.users.filter((user) => {
      return user.email === e.target.email.value;
    })[0]

    if (user == null) {
      setMsgPrompt("fail");
    } else if (user.failedAttempts >= 3) {
      setMsgPrompt("block", user.name);
    } else if (user.password === e.target.password.value) {
      setMsgPrompt("success");
    } else {
      user.failedAttempts++;
      props.failedAttempt(user)
      setMsgPrompt("fail");
    }
  }


  const setMsgPrompt = (msgType, user = null) => {
    if (msgType === "success") {
      setMsg(<PromptCard class={"primary"} body={"User successfully logged in."} />)
      setTimeout(()=>{props.setUserLoginFlag(true)},1500);
      navigate('/blogs');

    } else if (msgType === "fail") {
      setMsg(<PromptCard class={"secondary"} body={"Invalid credentials."} />)
    } else {
      setMsg(<PromptCard class={"danger"} body={user + " has been block due to too many invalid attempts."} />)
    }
  }

  return (
    <>
      <Card title={"Welcome back!"}>
        <Form className="text-dark" onSubmit={validate}>
          <Stack>
            <Form.Group>
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel controlId="password" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
            <Button className="mt-2" type="submit" variant="dark">Sign in</Button>
          </Stack>
        </Form>
      </Card>
      {msg}
    </>
  );
}
