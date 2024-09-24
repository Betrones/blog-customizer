import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import React, { useEffect, useRef } from 'react';
// import * as events from 'node:events';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type TProps = {
	isOpened: boolean;
};
export const ArrowButton = ({ isOpened }: TProps) => {
	const btnRef = useRef<HTMLDivElement | null>(null);
	const arrowRef = useRef<HTMLImageElement | null>(null);
	useEffect(() => {
		if (isOpened) {
			btnRef.current?.classList.add(styles.container_open);
			arrowRef.current?.classList.add(styles.arrow_open);
		} else {
			btnRef.current?.classList.remove(styles.container_open);
			arrowRef.current?.classList.remove(styles.arrow_open);
		}
	}, [isOpened]);
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}
			onClick={() => console.log()}
			ref={btnRef}>
			<img
				src={arrow}
				ref={arrowRef}
				alt='иконка стрелочки'
				className={styles.arrow}
			/>
		</div>
	);
};
