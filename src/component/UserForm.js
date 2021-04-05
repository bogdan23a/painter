import {useForm} from 'react-hook-form';

export const withForm = Component => {
    return props => {
        const {control, register, handleSubmit, errors} = useForm();
        return <Component {...props} control={control} 
                                     register={register} 
                                     handleSubmit={handleSubmit} 
                                     errors={errors}/>
    }
};