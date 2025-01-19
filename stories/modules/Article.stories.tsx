import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundImage } from '../components/BackgroundImage';
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

export const Default: Story = {
    args: {
        align: 'left',
        title: 'Some name for an experience I had once',
        text: ['Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi, eleifend convallis sapien penatibus porttitor tempus platea, enim nunc quisque primis vulputate vestibulum justo.Commodo varius ad cras morbi donec sagittis tristique accumsan, cubilia tempus ipsum turpis amet vehicula ac, magnis etiam massa senectus phasellus bibendum lacinia.Massa condimentum etiam phasellus primis nunc lacus sagittis habitasse posuere, lacinia tortor accumsan metus non consequat taciti cursus, dis dignissim conubia enim ridiculus vehicula diam egestas.',
            'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi, eleifend convallis sapien penatibus porttitor tempus platea, enim nunc quisque primis vulputate vestibulum justo.Commodo varius ad cras morbi donec sagittis tristique accumsan, cubilia tempus ipsum turpis amet vehicula ac, magnis etiam massa senectus phasellus bibendum lacinia.Massa condimentum etiam phasellus primis nunc lacus sagittis habitasse posuere, lacinia tortor accumsan metus non consequat taciti cursus, dis dignissim conubia enim ridiculus vehicula diam egestas.'
        ],
        children: (
            <React.Fragment>
                <BackgroundImage url="/work/expedia/expediaVAC.png" />
            </React.Fragment>),
        anchor: 'one'
    }
}

export const Right: Story = {
    args: {
        align: 'right',
        title: 'Some name for an experience I had once',
        text: ['Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi, eleifend convallis sapien penatibus porttitor tempus platea, enim nunc quisque primis vulputate vestibulum justo.Commodo varius ad cras morbi donec sagittis tristique accumsan, cubilia tempus ipsum turpis amet vehicula ac, magnis etiam massa senectus phasellus bibendum lacinia.Massa condimentum etiam phasellus primis nunc lacus sagittis habitasse posuere, lacinia tortor accumsan metus non consequat taciti cursus, dis dignissim conubia enim ridiculus vehicula diam egestas.',
            'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi, eleifend convallis sapien penatibus porttitor tempus platea, enim nunc quisque primis vulputate vestibulum justo.Commodo varius ad cras morbi donec sagittis tristique accumsan, cubilia tempus ipsum turpis amet vehicula ac, magnis etiam massa senectus phasellus bibendum lacinia.Massa condimentum etiam phasellus primis nunc lacus sagittis habitasse posuere, lacinia tortor accumsan metus non consequat taciti cursus, dis dignissim conubia enim ridiculus vehicula diam egestas.'
        ],
        children: (
            <React.Fragment>
                <BackgroundImage url="/work/expedia/expediaVAC.png" />
            </React.Fragment>),
        anchor: 'two'
    }
}
