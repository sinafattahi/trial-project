import type { Meta, StoryObj } from "@storybook/react";
import OutBoxTag from ".";

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
      <div dir="rtl" className="bg-n-100 p-8 rounded w-90 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OutBoxTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const purpleTag: Story = {
  args: {
    outBoxTagColor: "purple",
    outBoxText: "قابل معامله - سهامی",
  },
};

export const blueTag: Story = {
  args: {
    outBoxTagColor: "blue",
    outBoxText: "صدور و ابطالی - درامد ثابت",
  },
};
