import emailjs from '@emailjs/browser';

export const sendEmail = async (templateId, params) => {
    let result = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        templateId, params)
    return result;
};