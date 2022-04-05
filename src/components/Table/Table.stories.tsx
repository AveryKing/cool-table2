import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Table, TableProps } from "./Table";
export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Primary", size: "large" };

//export const Secondary = Template.bind({});
//Secondary.args = { ...Primary.args, primary: false, label: "Secondary" };
