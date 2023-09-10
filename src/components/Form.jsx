import Input from './Input';
import { useForm, FormProvider } from 'react-hook-form';
import * as validator from '../assets/client-js/utils/inputValidation.js';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { useState } from 'react';
const Form = () => {
	const methods = useForm();
	const [success, setSuccess] = useState(false);

	const onSubmit = methods.handleSubmit((data) => {
		console.log(data);
		methods.reset;
		setSuccess(true);
	});

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={(e) => e.preventDefault()}
				noValidate
				autoComplete="off"
				className="container">
				<div className="container mt-5 text-center">
					<div className="grid gap-5 md:grid-cols-2">
						<Input {...validator.name_validation} />
						<Input {...validator.password_validation} />
						<Input {...validator.eightDigit_validation} />
						<Input {...validator.twelveDigit_validation} />
					</div>
				</div>
				<div className="mt-5">
					{success && (
						<p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
							<BsFillCheckSquareFill /> Form has been submitted successfully
						</p>
					)}
					<button
						onClick={onSubmit}
						className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800">
						Submit Form
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default Form;
