import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const meta = {
    title: 'modules/Article',
    component: Article,
    decorators: [
        (Story) => (
            <div className="main">
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof Article>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
