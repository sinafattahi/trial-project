import type { Meta, StoryObj } from "@storybook/react";
import {OutBoxTag} from ".";

const meta = {
  title: "Component/OutBoxTag",
  component: OutBoxTag,
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
} satisfies Meta<typeof OutBoxTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const purpleTag: Story = {
  args: {
    fundTypeCode: 1,
    fundTypeTitle: "قابل معامله - سهامی",
  },
};

export const blueTag: Story = {
  args: {
    fundTypeCode: 2,
    fundTypeTitle: "صدور و ابطالی - درامد ثابت",
  },
};

export const orangeTag: Story = {
  args: {
    fundTypeCode: 3,
    fundTypeTitle: "صدور و ابطالی - درامد ثابت",
  },
};
