import Link from "next/link";
import * as S from "./styles";

// Sections are used to group related components together
// they're also used to hold state related to specific layout sections

// Naming convention:
// - SectionName: "MySection"
// - SectionNameProps: "MySectionProps"

interface HeroSectionProps {
  title: string;
}

export const HeroSection = ({ title }: HeroSectionProps) => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <div>
          <h1>{title}</h1>
          <Link href="https://nextjs.org/docs" passHref>
            <a target="blank">Read the Docs</a>
          </Link>
        </div>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
