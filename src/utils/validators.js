export function isEmail(value) {
if (!value) return false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(value);
}


// Checks if a string is a valid phone number (basic validation)
export function isPhone(value) {
if (!value) return false;
// Accepts digits, optional +, and length between 7 and 15
const phoneRegex = /^\+?\d{7,15}$/;
return phoneRegex.test(value);
}


// Ensures a text input has at least X characters (default 2)
export function minLength(value, min = 2) {
if (!value) return false;
return value.trim().length >= min;
}


// Simple empty check
export function isNotEmpty(value) {
return value && value.trim().length > 0;
}


// Example: validate form object
export function validateForm({ name, email, phone, message }) {
const errors = {};
if (!isNotEmpty(name)) errors.name = 'Name is required';
if (email && !isEmail(email)) errors.email = 'Invalid email format';
if (phone && !isPhone(phone)) errors.phone = 'Invalid phone number';
if (message && !minLength(message, 10)) errors.message = 'Message should be at least 10 characters';
return errors;
}