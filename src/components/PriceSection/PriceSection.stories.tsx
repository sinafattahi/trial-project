import type { Meta, StoryObj } from "@storybook/react";
import { PriceSection } from ".";

const meta = {
  title: "Component/PriceSection",
  component: PriceSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div dir="rtl" className="p-8 rounded w-90 mx-auto my-10 w-96 h-96 bg-gray-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PriceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const haveAssets: Story = {
  args: {
    price: 343_343,
    text: "قیمت خرید هر واحد",
    unit: "ریال",
  },
};
