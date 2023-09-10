export const name_validation = {
	name: 'name',
	label: 'name',
	type: 'text',
	id: 'name',
	placeholder: 'write your name ...',
	validation: {
		required: {
			value: true,
			message: 'required',
		},
		maxLength: {
			value: 30,
			message: '30 characters max',
		},
	},
};
export const alphabet_validation = {
	name: 'alphaNumeric',
	label: 'alphaNumeric',
	id: 'alphaNumeric',
	placeholder: 'type alphabets and digit ...',
	validation: {
		pattern: {
			value: /^[a-zA-Z]+$/,
			message: 'Only alphabets are allows',
		},
	},
};

export const alphaNumeric_validation = {
	name: 'alphaNumeric',
	label: 'alphaNumeric',
	id: 'alphaNumeric',
	placeholder: 'type alphabets and digit ...',
	validation: {
		pattern: {
			value: /^[a-zA-Z0-9]+$/,
			message: 'No speical charater allowed',
		},
	},
};

export const password_validation = {
	name: 'password',
	label: 'password',
	type: 'password',
	id: 'password',
	placeholder: 'type password ...',
	validation: {
		required: {
			value: true,
			message: 'required',
		},
		minLength: {
			value: 6,
			message: 'min 6 characters',
		},
	},
};

export const num_validation = {
	name: 'num',
	label: 'number',
	type: 'number',
	id: 'num',
	placeholder: 'write a random number',
	validation: {
		required: {
			value: true,
			message: 'required',
		},
	},
};

export const eightDigit_validation = {
	name: 'digit_8',
	label: 'digit_8',
	type: 'text',
	id: 'digit_8',
	placeholder: 'write 8 random digits',
	validation: {
		pattern: {
			value: /\d{8}/,
			message: 'enter 8 digits',
		},
	},
};

export const twelveDigit_validation = {
	name: 'digit_12',
	label: 'digit_12',
	type: 'text',
	id: 'digit_12',
	placeholder: 'write 12 random digits',
	validation: {
		pattern: {
			value: /\d{12}/,
			message: 'enter 12 digits',
		},
	},
};

export const email_validation = {
	name: 'email',
	label: 'email address',
	type: 'email',
	id: 'email',
	placeholder: 'write a random email address',
	validation: {
		required: {
			value: true,
			message: 'required',
		},
		pattern: {
			value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			message: 'not valid',
		},
	},
};
