/**
 * Copyright (c) 2022-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
