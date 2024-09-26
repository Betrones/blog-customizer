import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	title: 'components/ArrowButton',
	tags: ['autodocs'],
} satisfies Meta<typeof ArrowButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ArrowButtonStory: Story = {
	args: {
		isOpened: false,
	},
};
