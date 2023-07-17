import { useState } from 'react';

export const useSubmitContactDetails = () => {
  const [status, setStatus] = useState(null);

  const submitContactDetails = async (formId, formData) => {
    setStatus('fetching');

    localStorage.setItem(formId, JSON.stringify(formData));

    setStatus('fetched');
  };

  return [submitContactDetails, status];
};
