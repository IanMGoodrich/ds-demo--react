import type { StoryObj, Meta } from "@storybook/react"
import { sharedThemes } from "../../utilities/types"
import ImgBasicCard from "./img-basic-card"

export default {
  title: 'Components/Basic Card',
  component: ImgBasicCard,
   argTypes: {
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    }
  },
} satisfies Meta<typeof ImgBasicCard>

type Story = StoryObj<typeof ImgBasicCard>

export const BasicLinkCard: Story = {
  args: {
    theme: 'floral',
    eyebrow: "Eyebrow Text",
    heading: "Heading Text",
    imgSrc: "https://picsum.photos/250/300",
    description: "Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.",
    linkUrl: "https://www.npr.org",
    linkText: "Link Text" 
  },
}
export const BasicButtonCard: Story = {
  args: {
    theme: 'floral',
    eyebrow: "Eyebrow Text",
    heading: "Heading Text",
    imgSrc: "https://picsum.photos/250/300",
    description: "Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.",
    buttonOnClick: () => console.log('clicked'),
    linkText: "button Text" 
  },
}
export const SilentLinkCard: Story = {
  args: {
    theme: 'floral',
    eyebrow: "Eyebrow Text",
    heading: "Heading Text",
    imgSrc: "https://picsum.photos/250/300",
    description: "Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.",
    linkUrl: "https://www.npr.org",
  },
}
