import { SectionIntro, SectionWhoI, SectionSkills } from "./components";

export default function Home() {
  return (
    <div className="container mx-auto">
      <SectionIntro />
      <SectionWhoI />
      <SectionSkills />
    </div>
  );
}
