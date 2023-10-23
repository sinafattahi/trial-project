import type { Meta, StoryObj } from "@storybook/react";
import { AssetsComponent } from ".";

const meta = {
  title: "Component/AssetsComponent",
  component: AssetsComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        dir="rtl"
        className="p-8 rounded w-90 mx-auto my-10 w-96 h-96 bg-gray-100"
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AssetsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const haveAssets: Story = {
  args: {
    propertyValue: 33_343_343,
    profit: 343_343,
    profitPercentage: 12.3,
  },
};
