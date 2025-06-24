import { StaggerContainer } from "../animations/stagger-container";
import { StaggerItem } from "../animations/stagger-item";
import { PartnerLogo } from "../components/partner-logo";

interface ParceirosGridProps {
  parceiros: { nome: string; logoUrl: string; bgColor?: string; websiteUrl?: string }[];
  gridCols?: string;
}

export function ParceirosGrid({ parceiros,gridCols = "grid-cols-[repeat(auto-fit,minmax(150px,1fr))]"}: ParceirosGridProps) {
  return (
    <StaggerContainer className={`grid ${gridCols} gap-8 mb-12`}>
      {parceiros.map((parceiro, index) => (
        <StaggerItem key={index}>
          <PartnerLogo
            name={parceiro.nome}
            logoUrl={parceiro.logoUrl}
            bgColor={parceiro.bgColor}
            websiteUrl={parceiro.websiteUrl}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}