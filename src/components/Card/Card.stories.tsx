import type { Meta, StoryObj } from "@storybook/react";
import {Card} from ".";

const meta = {
  title: "Component/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div dir="rtl" className="p-8 rounded w-90 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const haveAssets: Story = {
  args: {
    id: 1,
    name: "هستی‌بخش آگاه - آکاس",
    revenue: +2.45,
    isAsset: true,
    buyPrice: 343_343,
    salePrice: 343_343,
    outBoxText: "قابل معامله - سهامی",
    outBoxTagColor: "purple",
    propertyValue: 33_343_343,
    profit: 343_343,
    profitPercentage: 12.3,
  },
};

export const dontHaveAssets: Story = {
  args: {
    id: 2,
    name: "زمرد آگاه",
    revenue: -2.45,
    isAsset: false,
    buyPrice: 343_343,
    salePrice: 343_343,
    outBoxText: "صدور و ابطالی - درامد ثابت",
    outBoxTagColor: "blue",
  },
};
