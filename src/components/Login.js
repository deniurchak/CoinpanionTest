import React, { useEffect } from 'react'
import { Formik,Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, tryLogIn } from '../actions';
import * as Yup from 'yup' 
import { Button, Header } from 'semantic-ui-react';
import history from '../history';
import { toast } from 'react-toastify';

export default function Login() {

    const {loginData} = useSelector(state => state.login)
    

    const validationSchema = Yup.object(
    {
        email: Yup.string().required(),
        password: Yup.string().required(),
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        
        if(loginData) {
            if(loginData.success === true) {
                if(loginData.user.status === 'completed') {
                    dispatch(signIn(loginData.user.id))
                    history.push('/dashboard')
                } else {
                    dispatch(signIn(loginData.user.id))
                    history.push('/incomplete')
                }
            } else {toast.error(loginData.message)}
        }
        },[loginData,dispatch])

    // const handleResponse = ({loginData}) => {
    //     console.log(loginData.success)
    //     if(loginData.success === true) {
    //         if(loginData.user.status === 'completed') {
    //             history.push('/dashboard')
    //         } else {history.push('/incomplete')}
    //     } else {toast.error(loginData.message)}
    // }   
        return(
        <Formik
            validationSchema={validationSchema}
            initialValues={{ email: 'completed@coinpanion.com', password: 'Test@123' }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(tryLogIn(values))
                setSubmitting(false)
            }
        }
        >
       {({
         errors,
         touched,
         handleSubmit,
         isSubmitting,
         isValid
       }) => (
         <Form className='ui form error' onSubmit={handleSubmit}>
            <Header as='h2' textAlign='center' content='Login to app' />
            <Field
             name="email"
             placeholder="email"
           />
           <Field 
             name="password"
             placeholder="password"
             onKeyPress={e=>{
                if (e.key === 'Enter' && e.shiftKey) {
                    return
                } else if(e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    isValid && handleSubmit()
                }}}
           />
           {errors.email && touched.email && errors.email}
           {errors.password && touched.password && errors.password}
           <Button positive type="submit" disabled={isSubmitting}>
             Log in
           </Button>
         </Form>
       )}
        </Formik>
    )
}
    
