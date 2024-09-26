import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import React, { FormEvent, useRef, useState } from 'react';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Separator } from '../separator';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { Text } from '../text';
import clsx from 'clsx';

type TProps = {
	optionsChanger: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({ optionsChanger }: TProps) => {
	const [asideOpened, setAsideOpened] = useState(false);
	const [chosenFont, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [chosenFontSize, setFontSize] = useState(
		defaultArticleState.fontSizeOption
	);
	const [chosenFontColor, setFontColor] = useState(
		defaultArticleState.fontColor
	);
	const [chosenBgColor, setBgColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [chosenWidth, setWidth] = useState(defaultArticleState.contentWidth);
	const asideRef = useRef<HTMLDivElement | null>(null);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		optionsChanger({
			fontFamilyOption: chosenFont,
			fontSizeOption: chosenFontSize,
			backgroundColor: chosenBgColor,
			contentWidth: chosenWidth,
			fontColor: chosenFontColor,
		});
		setAsideOpened(false);
	};
	const handleReset = () => {
		optionsChanger(defaultArticleState);
		setOptionsToDefault(defaultArticleState);
		setAsideOpened(false);
	};
	const setOptionsToDefault = (defaultOptions: ArticleStateType) => {
		setFontFamily(defaultOptions.fontFamilyOption);
		setFontSize(defaultOptions.fontSizeOption);
		setFontColor(defaultOptions.fontColor);
		setBgColor(defaultOptions.backgroundColor);
		setWidth(defaultOptions.contentWidth);
	};
	useOutsideClickClose({
		isOpen: asideOpened,
		rootRef: asideRef,
		onChange: setAsideOpened,
	});
	return (
		<>
			<ArrowButton isOpened={asideOpened} opener={setAsideOpened} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: asideOpened,
				})}
				ref={asideRef}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						handleSubmit(e);
					}}
					onReset={handleReset}>
					<div className={styles.content}>
						<Text
							// eslint-disable-next-line react/no-children-prop
							children={'Задайте параметры'}
							as={'h2'}
							size={31}
							weight={800}
							family='open-sans'
							uppercase={true}
						/>
						<Select
							selected={chosenFont}
							options={fontFamilyOptions}
							title='Шрифт'
							onChange={(e: OptionType) => setFontFamily(e)}
						/>
						<RadioGroup
							name='Размер шрифта'
							options={fontSizeOptions}
							selected={chosenFontSize}
							title='Размер шрифта'
							onChange={(e: OptionType) => setFontSize(e)}
						/>
						<Select
							selected={chosenFontColor}
							options={fontColors}
							title='Цвет шрифта'
							onChange={(e: OptionType) => setFontColor(e)}
						/>
						<Separator />
						<Select
							selected={chosenBgColor}
							options={backgroundColors}
							title='Цвет фона'
							onChange={(e: OptionType) => setBgColor(e)}
						/>
						<Select
							selected={chosenWidth}
							options={contentWidthArr}
							title='Ширина контента'
							onChange={(e: OptionType) => setWidth(e)}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
