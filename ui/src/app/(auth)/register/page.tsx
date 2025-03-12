'use client'
import React from 'react';
import lab from '../../../../assets/woman-working-laborator.jpg';
import Image from 'next/image';
import { useState } from 'react';
import FormPage1 from '@/components/SignUpForm/FormPage1';
import FormPage2 from '@/components/SignUpForm/FormPage2';
import FormPage3 from '@/components/SignUpForm/FormPage3';
import FormPage4 from '@/components/SignUpForm/FormPage4';
import FormPage5 from '@/components/SignUpForm/FormPage5';
import { useEffect } from 'react';
import { useStepContext } from '@/context/StepContext';
const Register = () => {

    const {currentStep, nextStep , prevStep} = useStepContext();
    const totalSteps = 5;
    // const [currentStep, setCurrentStep] = useState(1);
    const progress = currentStep / totalSteps * 100;

    // const nextStep = () => {
    //     if (currentStep < totalSteps) {
    //         setCurrentStep((prev) => prev + 1);
    //     }
    // }
    // const prevStep = () => {
    //     if (currentStep > 1) {
    //         setCurrentStep((prev) => prev - 1);
    //     }
    // }
    // Auth Form //

    const [formData, setFormData] = useState(
        {
            fullName: "",
            email: "",
            phoneNumber: "",
            facilityName:"",
            facilityNumber:"",
            Role:"",
            DepartMent:"",
            password:"",
            confirmPassword:""
        }
    )

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setFormData((prev)=> ({
            ...prev, [name]:value
        }))
    }

    const handleSumit = (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>

        <form className="w-full">
            {currentStep === 1 && (
            
             
                <FormPage1 
                progress={progress}
                formData = {formData}
                setFormData={setFormData}
                handleFormChange={handleFormChange}
                nextStep={nextStep}
                />
            )}

            {currentStep === 2 && (
                <FormPage2 
                progress={progress}
                formData = {formData}
                setFormData={setFormData}
                handleFormChange={handleFormChange}
                nextStep={nextStep}
                />
            )}

            {currentStep === 3 && (
                <FormPage3
                progress={progress}
                formData = {formData}
                setFormData={setFormData}
                handleFormChange={handleFormChange}
                nextStep={nextStep}
                />
                
                )}

                {currentStep === 4 && (

                    <FormPage4
                    progress={progress}
                    nextStep={nextStep}
                    />
                ) }

                {currentStep ===5 && (
                    <FormPage5
                    progress={progress}
                    />
                )}

            {/* <button type='submit'>Next</button> */}
            </form>
        </>
    );
};

export default Register;