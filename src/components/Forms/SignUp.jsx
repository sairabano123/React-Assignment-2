import { Button, Form, Stack } from "react-bootstrap";
import Card from "../Layout/Card";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp(props) {


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      address: '',
      cnic: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less").required("Required"),
      email: Yup.string().email("Invalid email.").required("Required"),
      password: Yup.string()
        .min(8, "Must at least 8 characters")
        .required('Required'),
      address: Yup.string()
        .min(50, "Must at least 50 characters").max(500, "Must be less than 500 characters"),
      cnic: Yup.mixed().required("Required.")
    }),
    onSubmit: values => {
      props.registerUser(values)
    },
  });

  return (
    <Card title={"Register"}>
      <Form onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type='textInput'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name} />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-warning">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-warning">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-warning">{formik.errors.password}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Home address</Form.Label>
            <Form.Control as="textarea" rows={3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address} />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-warning">{formik.errors.address}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="cnic">
            <Form.Label>CNIC</Form.Label>
            <Form.Control type='file' accept='application/pdf'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cnic} />
            {formik.touched.cnic && formik.errors.cnic ? (
              <div className="text-warning">{formik.errors.cnic}</div>
            ) : null}
          </Form.Group>
          <Button className="mt-2" type="submit" variant="dark">Sign up</Button>
        </Stack>
      </Form>
    </Card>
  );
}
