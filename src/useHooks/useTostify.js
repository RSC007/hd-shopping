import { toast } from "react-toastify";

export const useMessages = () => {
  const onSuccessMessage = (message = "") => toast.success(message);
  const onErroMessage = (message = "") => toast.error(message);

  return {
    onErroMessage,
    onSuccessMessage,
  };
};
