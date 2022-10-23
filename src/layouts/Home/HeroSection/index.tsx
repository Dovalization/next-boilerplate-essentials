import Link from "next/link";

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
    <section className="flex h-screen w-screen flex-col items-center justify-center">
      <div>
        <div>
          <h1 className="text-3xl font-bold uppercase">{title}</h1>
          <Link href="https://tailwindcss.com/docs/" passHref>
            <a target={"_blank"}>
              <h2 className="text-lg font-bold uppercase  text-blue-600 hover:text-blue-800">
                +TailwindCSS
              </h2>
            </a>
          </Link>
          <Link href="https://nextjs.org/docs" passHref>
            <a target="blank">Read the Docs</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
