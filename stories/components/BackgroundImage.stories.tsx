import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundImage } from "./BackgroundImage";

const meta = {
    title: 'components/BackgroundImage',
    component: BackgroundImage,
    decorators: [
        (Story) => (
            <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof BackgroundImage>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        url: '/work/expedia/expediaVAC.png'
    }
}