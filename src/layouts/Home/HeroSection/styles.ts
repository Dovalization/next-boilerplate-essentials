import { Container } from "@styles/global";
import styled, { keyframes } from "styled-components";

// Naming convention:
// - MySectionStylesProps

interface HeroSectionStylesProps {
  // Dollar sign indicates style props,
  // this follows transient props pattern
  // Read more on: https://github.com/styled-components/styled-components/pull/2093
  $backgroundColor?: string;
}

// Wrappers are used mainly for the semantic of the section/component
// In this case, we use section, but you can use any element as long
// as it's semanticly meaningful.
// It can also be used to apply section specific styles, like background color

// Pass prop types as generics, like this:
export const Wrapper = styled.section<HeroSectionStylesProps>`
  // Props for the style should be destructured, improving readability
  background-color: ${({ $backgroundColor }) => $backgroundColor || "white"};
`;

// Container is a styled component that is used to constrain the width of the
// section/component to a maximum width, defined in the global styles.
// This is done to prevent the section/component from overflowing the page
// and causing the page to become unreadable.

// You can have multiple containers in a section/component, but you should
// only have one wrapper.

// In general, you should use the wrapper for the semantic of the section/component
// and the container for the width of the section/component.
// You can also add padding if necessary, however it's not a good idea to change
// the width of the Container.
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(2rem);
  }

  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const ContentContainer = styled(Container)`
  display: grid;
  place-items: center;
  height: 100vh;

  > div {
    animation: ${fadeInUp} 0.5s ease-in-out;

    h1 {
      display: block;
      text-align: center;
      margin-bottom: 1rem;
    }

    a {
      display: block;
      text-align: center;
    }
  }
`;
