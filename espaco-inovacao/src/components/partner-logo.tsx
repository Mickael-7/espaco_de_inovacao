interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  bgColor?: string;
  websiteUrl?: string;
}

export function PartnerLogo({ name, logoUrl, bgColor, websiteUrl }: PartnerLogoProps) {
  /**
   * @param {string} 
   * @param {number}
   * @returns {string}
   */
  const hexToRgba = (hex = "#ffffff", alpha = 0.9) => {
    try {
      let r = 0, g = 0, b = 0;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
      }
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch {
      return `rgba(255, 255, 255, 0.9)`;
    }
  };

  /**
   * @param {string} 
   * @returns {boolean}
   */
  const isColorLight = (hex = "#ffffff") => {
    try {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
      return luminance > 186;
    } catch {
      return true;
    }
  };

  const overlayBgColor = hexToRgba(bgColor);
  const textColorClass = isColorLight(bgColor) ? 'text-gray-900' : 'text-white';

  const content = (
    <div 
      className="p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24 transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative h-12 w-full">
        <img
          src={logoUrl}
          alt={name}
          className="object-contain w-full h-full"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: overlayBgColor }}
        >
          <span className={`text-sm font-semibold text-center px-2 ${textColorClass}`}>{name}</span>
        </div>
      </div>
    </div>
  );

  if (websiteUrl) {
    return (
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" title={`Visitar site de ${name}`}>
        {content}
      </a>
    );
  }

  return content;
}