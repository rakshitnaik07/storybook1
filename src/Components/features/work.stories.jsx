import React from "react";
import Features from "./stroy";

export default {
  title: "Components/Features",
  component: Features,
  argTypes: {
    features: { control: "array" },
    showAll: { control: "boolean" },
  },
};

const Template = (args) => <Features {...args} />;

export const Default = Template.bind({});
Default.args = {
  features: [
    "Keyless Entry",
    "Central Locking",
    "Air Conditioner",
    "Bluetooth Connectivity",
    "Touchscreen",
    "Steering Mounted Controls",
  ],
  showAll: false,
};

export const ShowAll = Template.bind({});
ShowAll.args = {
  features: [
    "Keyless Entry",
    "Central Locking",
    "Air Conditioner",
    "Bluetooth Connectivity",
    "Touchscreen",
    "Steering Mounted Controls",
    "Sunroof",
    "Rear Camera",
    "Leather Seats",
    "Automatic Headlights",
  ],
  showAll: true,
};
