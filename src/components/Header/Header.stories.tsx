import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta = {
  title: "Component/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        dir="rtl"
        className="bg-n-100 p-8 rounded w-90 mx-auto my-10 w-96 h-96 bg-gray-100"
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const header: Story = {
  args: {
    text: "صندوق سرمایه گذاری آگاه",
  },
};
