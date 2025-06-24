interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  bgColor?: string;
}

export function PartnerLogo({ name, logoUrl, bgColor}: PartnerLogoProps) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24"
         style={{ backgroundColor: bgColor }}>
      <div className="relative h-12 w-full">
        <img
          src={logoUrl}
          alt={name}
          className="object-contain w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
             style={{ backgroundColor: bgColor }}>
          <span className="text-gray-700 text-sm">{name}</span>
        </div>
      </div>
    </div>
  );
}
