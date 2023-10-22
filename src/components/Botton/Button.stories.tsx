import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BuyValue: Story = {
  args: {
    color : "green",
    label : "خرید"
  },
};

export const SaleValue: Story = {
    args: {
        color : "red",
        label : "فروش",
        
      },
};