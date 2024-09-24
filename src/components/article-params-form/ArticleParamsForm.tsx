import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import React, { useEffect, useRef, useState } from 'react';

export const ArticleParamsForm = () => {
	const [opened, setOpened] = useState(false);
	const asideRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		setOpened(true);
	}, []);
	useEffect(() => {
		if (!opened) {
			asideRef.current?.classList.remove(styles.container_open);
		} else {
			asideRef.current?.classList.add(styles.container_open);
		}
	}, [opened]);
	return (
		<>
			<ArrowButton isOpened={opened} />
			<aside className={styles.container} ref={asideRef}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
