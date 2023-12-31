import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Children } from "react";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div dir="rtl" className="p-8 rounded w-90 mx-auto my-10">
        <Story>{Children}</Story>
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BuyValueFilled: Story = {
  args: {
    color: "green",
    children: "خرید",
    disable: false,
    mode: "filled",
  },
};

export const BuyValueOutLine: Story = {
  args: {
    color: "green",
    children: "خرید",
    disable: false,
    mode: "outLine",
  },
};

export const SaleValueFilled: Story = {
  args: {
    color: "red",
    children: "فروش",
    disable: false,
    mode: "filled",
  },
};

export const SaleValueOutLine: Story = {
  args: {
    color: "red",
    children: "فروش",
    disable: false,
    mode: "outLine",
  },
};

export const DisabledFilled: Story = {
  args: {
    color: "red",
    children: "فروش",
    disable: true,
    mode: "filled",
  },
};

export const DisabledOutLine: Story = {
  args: {
    color: "red",
    children: "فروش",
    disable: true,
    mode: "outLine",
  },
};
