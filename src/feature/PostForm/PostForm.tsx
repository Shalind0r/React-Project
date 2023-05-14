import React, { FC, useState } from 'react';
import Input from '../../shared/ui/fieds/Input/Input';
import RadioButton from '../../shared/ui/buttons/RadioButton/RadioButton';
import { IPositions } from '../../shared/types/IPositions';
import Upload from '../../shared/ui/fieds/Upload/Upload';
import ButtonAction from '../../shared/ui/buttons/ButtonAction/ButtonAction';
import classes from './PostForm.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { validationRules } from './validationRules';
import ErrorMessage from '../../shared/ui/fieds/ErrorMessage/ErrorMessage';

interface IProps {
	positions: IPositions[];
	onSubmit: SubmitHandler<FieldValues>;
	error: string;
}
const PostForm: FC<IProps> = ({ positions, onSubmit, error }) => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		resolver: validationRules,
		mode: 'onChange',
	});

	const [fileName, setFileName] = useState('');
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<Input
				register={register('name')}
				errors={errors}
				type={'name'}
				id={'name'}
				placeholder={'Your name'}
			/>
			<Input
				register={register('email')}
				errors={errors}
				type={'name'}
				id={'email'}
				placeholder={'Email'}
			/>
			<Input
				register={register('phone', {
					onChange: (e) =>
						(e.target.value = e.target.value.replace(/[^\d+]/g, '')),
				})}
				errors={errors}
				type={'phone'}
				id={'phone'}
				placeholder={'Phone'}
			/>
			<p>Select your position</p>
			<fieldset>
				{positions.map((data: IPositions) => (
					<RadioButton
						key={data.id}
						id={`${data.id}`}
						name={'positions'}
						text={data.name}
						value={data.id}
						register={register('position_id')}
					/>
				))}
			</fieldset>
			<Upload
				errors={errors}
				id={'photo'}
				fileName={fileName}
				register={register('photo', {
					onChange: (e) => setFileName(e.target.files[0]?.name || ''),
				})}
			/>
			{error && <ErrorMessage className={classes.error} message={error} />}
			<fieldset>
				<ButtonAction
					type={'button'}
					disabled={!isValid}
					className={classes.button}
				>
					Sign up
				</ButtonAction>
			</fieldset>
		</form>
	);
};

export default PostForm;
