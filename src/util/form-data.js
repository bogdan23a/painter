import { useForm } from 'react-hook-form';

export default function FormData() {
    const {control, register, handleSubmit, errors} = useForm();
    return [control, register, handleSubmit, errors];
}