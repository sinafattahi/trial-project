import type { Meta, StoryObj } from "@storybook/react";
import {Footer} from ".";

const meta = {
  title: "Component/Footer",
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultFooter: Story = {
  args: {},
};
