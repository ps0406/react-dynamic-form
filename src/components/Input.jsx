import { AnimatePresence, motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { findInputError, isFormInvalid } from '../assets/client-js/utils';

const InputError = ({ message }) => {
	return (
		<motion.p
			className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
			{...framer_error}>
			{message}
		</motion.p>
	);
};

const framer_error = {
	intial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 1, y: 10 },
	transition: { duration: 0.2 },
};

export const Input = ({ label, type, id, placeholder, name, validation }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputError = findInputError(errors, label);
	const isInvalid = isFormInvalid(inputError);

	return (
		<div className="flex flex-col w-full gap-2">
			<div className="flex justify-between">
				<label
					htmlFor={id}
					className="font-semibold capitalize">
					{label}
				</label>
				<AnimatePresence
					mode="wait"
					initial={false}>
					{isInvalid && (
						<InputError
							message={inputError.error.message}
							key={inputError.error.message}
						/>
					)}
				</AnimatePresence>
			</div>
			<input
				id={id}
				type={type}
				className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
				placeholder={placeholder}
				{...register(name, validation)}
			/>
		</div>
	);
};

export default Input;
