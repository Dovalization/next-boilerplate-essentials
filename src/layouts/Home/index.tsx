import { HomeProps } from "@pages/index";
import { HeroSection } from "./HeroSection";
import * as S from "./styles";
// Layouts are responsible for holding different components together
// this can be achieved by creating multiple sections whithin the layout

// Naming convention:
// - LayoutName: "MyLayout"
// - LayoutNameProps: "MyLayoutProps"

// Layout prop types should be the same or extend the page's prop types
// In this case, since we're not extending the page's prop types, we use type instead of interface

type HomeLayoutProps = HomeProps;

// For components and layouts, the return type is inferred from the component
// Props should be destructured before being passed to the component, like so:

export const HomeLayout = ({ title }: HomeLayoutProps) => {
  return (
    <S.Wrapper>
      <HeroSection title={title} />
    </S.Wrapper>
  );
};
