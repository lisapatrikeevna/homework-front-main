import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (value:string)=>void
};

export const Input = ({currentText,setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        setCurrentText(event.currentTarget.value)
	};

	return (
	  // <input id={'hw04-input'} type="text" value={currentText} onChange={e=>onChangeHandler(e)} />
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
