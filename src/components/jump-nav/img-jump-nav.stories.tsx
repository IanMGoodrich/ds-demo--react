import type { Meta, StoryObj } from '@storybook/react';
import ImgJumpNav from './img-jump-nav';
import { sharedThemes } from "../../utilities/types"
import type { JumpNavProps } from './img-jump-nav';

type SimpleArgs = JumpNavProps & { sticky: boolean };

const meta: Meta<SimpleArgs> = {
  title: 'Pages/Jump-Nav (Simple)',
  component: ImgJumpNav,
  tags: ['autodocs'],
  parameters: { 
    layout: 'fullscreen',
      docs: {
      disable: true,
      description: {
        component: `
        ### Img Jump Nav Component

        Use \`<img-jump-nav>\` to generate a css driven auto scaling grid of slotted content.  
        You can control the layout and behavior with the following props.
          * \`slug\`: The target string for developers to prefix the id of every section of content developers want a link to.\`, 
          * \`headerId\`: The id of any header or other single sticky element the jump nav needs to stay positioned below.\`, 
          * \`data-link\`: An attribute that needs to be added to every section of content developers want a link to. This will be the name generated for the actual tab.\`,

        #### Usage Example:
        \`\`\`
        <div>
          <header id="header1"></header>
          <ImgJumpNav slug="jump--" headerId="header1" />
            <section data-link="Section One" id="jump--1">
            <h3>Section One</h3>
              {content}
            </section>
            <section data-link="Section Two" id="jump--2">
            <h3>Section Two</h3>
              {content}
            </section>
            <section data-link="Section Three" id="jump--3">
            <h3>Section Three</h3>
              {content}
            </section>
            <section data-link="Section Four" id="jump--4">
            <h3>Section Four</h3>
              {content}
            </section>
          </div>
        \`\`\`
                `
      }
    }
  },
  argTypes: {
    sticky: {
      name: 'Sticky Header',
      description: 'Whether the top header should remain fixed at the top of the viewport.',
      control: { type: 'boolean' },
    },
     headerId: {
      table: {
        disable: true
      }
     },
     slug: {
      table: {
        disable: true
      }
     },
     theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    }
  },
  args: {
    sticky: true,
    slug: 'jump--',
  },
};

export default meta;

type Story = StoryObj<SimpleArgs>;


export const Simple: Story = {
  render: ({ slug, sticky, theme }) => (
  <div>
    <header id={sticky ? 'header' : 'not-sticky' } style={{ position: sticky ? 'sticky' : 'relative', top: 0,height: '150px', width: '100%', backgroundColor: 'blue', justifyContent: 'center' }}> <p>HEADER</p></header>
    <main>
      <ImgJumpNav slug={slug} headerId={sticky ? 'header' : undefined} theme={theme}/>
        <section style={{padding: "0px var(--spacing-75-125)" }}>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum.</p>
        </section>
        <section data-link="Section One" id="jump--1" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section One</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
        <section data-link="Section Two" id="jump--2" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section Two</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
        <section data-link="Section Three" id="jump--3" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section Three</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
        <section data-link="Section Four" id="jump--4" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section Four</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
        <section data-link="Section Five" id="jump--5" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section Five</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
        <section data-link="Section Six" id="jump--6" style={{padding: "0px var(--spacing-75-125)" }}>
          <h3 style={{fontSize: '28px', lineHeight:'1.25', marginBottom: '1.25rem', fontWeight: 'bold', padding: '0px 1rem'}}>Section Six</h3>
          <p style={{fontSize: '20px', lineHeight:'1.1', padding: '1rem'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus… Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.
            Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.
            Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.
            Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.
            Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.
          </p>
        </section>
      </main>
    <footer style={{ height: '450px', width: '100%', backgroundColor: 'green' }}></footer>
  </div>
  )
};