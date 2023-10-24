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
    name : "هستی‌بخش آگاه",
    issuingNav: 343_343,
    fundTypeCode : 1 ,
    fundTypeTitle: "قابل معامله - سهامی",  
    annualEfficiency : 12.3
  },
};

export const dontHaveAssets: Story = {
  args: {
    id: 2,
    name :  "زمرد آگاه",
    issuingNav: 343_343,
    fundTypeCode : 1 ,
    fundTypeTitle: "صدور و ابطالی - درامد ثابت",  
    annualEfficiency : 12.3
  },
};
