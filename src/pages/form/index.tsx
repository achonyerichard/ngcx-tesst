import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import NavWrapper from '../../components/nav_wrapper';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import FormOne from '../../components/formfields/FormOne';
import FormTwo from '../../components/formfields/FormTwo';
import FormThree from '../../components/formfields/FormThree';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';






// Customize stepper icon color
function CustomStepIcon(props: StepIconProps) {
    const { active, completed } = props;
    return (
        <div
            style={{
                backgroundColor: active || completed ? "#72E128" : "gray",
                color: "white",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
            }}
        >
            {props.icon}
        </div>
    );
}

//   Customize stepper connector color
const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#72E128',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#72E128',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#72E128]',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));


// Step Label 
const steps = [{ head: "Account Details", sub: 'Enter your account details' }, { head: "Personal Info", sub: 'Setup Information' }, { head: "Social Links", sub: 'Add Social Links' },];

const Form: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [warning, setWarning] = useState(false)

    // State to check if forms have been filled
    const [checkone, setCheckOne] = useState(false)
    const [checktwo, setCheckTwo] = useState(false)
    const [checkthree, setCheckThree] = useState(false)

    // set timeout function to turn off mwarninf modal
    setTimeout(() => {
        setWarning(false);
    }, 5000);


    // Next button function
    const handleNext = () => {
        const copyStep = activeStep
        if (copyStep === 0) {
            if (checkone) {
                setWarning(false)
                setActiveStep(prevActiveStep => prevActiveStep + 1);
            } else {
                setWarning(true)

            }
        } else if (copyStep === 1) {
            if (checktwo) {
                setWarning(false)
                setActiveStep(prevActiveStep => prevActiveStep + 1);
            } else {
                setWarning(true)

            }
        }

        else if (copyStep === 2) {
            if (checkthree) {
                setWarning(false)
                setActiveStep(prevActiveStep => prevActiveStep + 1);
            } else {
                setWarning(true)

            }
        }

    };


    // Back button on stepper
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setCheckOne(false)
        setCheckTwo(false)
        setCheckThree(false)

    };
// Reset button on footer
    const handleReset = () => {
        setActiveStep(0);


    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (

                    <FormOne isCompleted={setCheckOne} />
                );
            case 1:
                return (
                    <FormTwo isComplete={setCheckTwo} />
                );
            case 2:
                return (
                    <FormThree isComplete={setCheckThree} />
                );

            default:
                return null;
        }
    };

    return (
        <div className=" bg-[#F7F7F9] h-screen ">
            <NavWrapper>
                <div className=" md:px-20 space-y-6 w-full">

                    <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                        {steps.map(label => (
                            <Step key={label.head}>
                                <div className='flex flex-col items-center'>
                                    <StepLabel StepIconComponent={CustomStepIcon}>{label.head}</StepLabel>
                                    <p className='text-xs text-gray-400'>{label.sub}</p>
                                </div>

                            </Step>
                        ))}
                    </Stepper>
                    <Grid container>
                        <Grid item xs={12}>
                            {activeStep === steps.length ? (
                                <div className='flex flex-col bg-white shadow-xl p-5'>
                                    <div>
                                        <p className='text-gray-700'>All Steps are Completed!</p>
                                    </div>

                                    <div className='flex justify-end'>
                                        <button className='px-3 py-2  rounded-lg bg-[#72E128] text-white text-lg font-semibold' onClick={handleReset}>Reset</button>
                                    </div>

                                </div>
                            ) : (
                                <div className='w-full bg-white p-5 shadow-2xl rounded-xl '>

                                    <div >
                                        {/* Warning modal */}
                                        {warning && <div
                                            className="flex justify-between text-red-200 shadow-inner rounded p-3 bg-red-600"
                                        >
                                            <p className="self-center"><strong>Error! </strong>Please fill all input fields to proceed.</p>
                                            <strong className="text-xl align-center cursor-pointer alert-del"
                                            >&times;</strong
                                            >
                                        </div>}
                                        {getStepContent(activeStep)}

                                    </div>

                                    <div className='flex'>
                                        <button className='px-3 py-2 border-2 rounded-lg text-lg font-medium text-gray-500' disabled={activeStep === 0} onClick={handleBack}>
                                            Back
                                        </button>
                                        <div className='grow'>

                                        </div>
                                        <button type='submit' className='px-3 py-2  rounded-lg bg-[#72E128] text-white text-lg font-semibold' onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Grid>
                    </Grid>

                </div>
            </NavWrapper>
        </div>
    );
};

export default Form;
