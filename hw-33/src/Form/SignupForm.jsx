import { React } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const validationSchema = Yup.object().shape({  
  firstName: Yup.string()
    .min(2, 'Your dick is too short, just like your name!')
    .max(20, 'Be easier cut it down to 20 symbols!')
    .required('I said this is a required field, bitch!'),
  phone_number: Yup.string()
    .required('I said this is a required field, bitch!')
    .matches(phoneRegExp, 'Are you disabled?')
    .min(12, 'Your dick is too short, just like your phone!')
    .max(12, 'Be easier cut it down to 12 symbols!'),
  email: Yup.string().email('You`re moron, invalid email!').required('I said this is a required field, bitch!'),
});

export const SignupForm = () => {
    const formik = useFormik ({
        initialValues: {
            firstName: '',
            phone_number: '',
            email: '',
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    console.log(formik.errors)

    return (
        <div className='form-wrapper'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Swear form</h1>
                <div className='input-box'>
                    <input 
                        id="firstName"
                        name="firstName"
                        placeholder='Write your name bitch.'
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <div>{formik.errors.firstName}</div>
                        ) : null}
                </div>
    
                <div className='input-box'>
                    <input 
                        id="phone_number"
                        name="phone_number"
                        placeholder='Phone number, damn.'
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.phone_number}
                    />
                    {formik.errors.phone_number && formik.touched.phone_number ? (
                        <div>{formik.errors.phone_number}</div>
                        ) : null}
                </div>
    
                <div className='input-box'>
                    <input 
                        id="email"
                        name="email"
                        placeholder='Write your fucking e-mail.'
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div>{formik.errors.email}</div>
                        ) : null}
                </div>
    
                <button type='submit' disabled={!(formik.isValid && formik.dirty)}>Click idiot!</button>
            </form>
        </div>
    )
}