import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [styleOptions, setStyleOptions] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': styleOptions.fontFamilyOption.value,
					'--font-size': styleOptions.fontSizeOption.value,
					'--font-color': styleOptions.fontColor.value,
					'--container-width': styleOptions.contentWidth.value,
					'--bg-color': styleOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm optionsChanger={setStyleOptions} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
