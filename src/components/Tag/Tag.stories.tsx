import type { Meta, StoryObj } from "@storybook/react";
import Tag from ".";

const meta = {
  title: "Component/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PoitiveValue: Story = {
  args: {
    revenue: 50,
    text: "تست",
  },
};

export const NegativeValue: Story = {
  args: {
    revenue: -40,
    text: "تست",
  },
};
