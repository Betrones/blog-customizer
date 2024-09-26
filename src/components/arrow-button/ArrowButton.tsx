import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import React, { useRef } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type TProps = {
	isOpened: boolean;
	opener: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ArrowButton = ({ isOpened, opener }: TProps) => {
	const btnRef = useRef<HTMLDivElement | null>(null);
	const arrowRef = useRef<HTMLImageElement | null>(null);
	const toggleOpened = () => {
		isOpened ? opener(false) : opener(true);
	};
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpened })}
			onClick={toggleOpened}
			ref={btnRef}>
			<img
				src={arrow}
				ref={arrowRef}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpened })}
			/>
		</div>
	);
};
