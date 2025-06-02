interface PartnerLogoProps {
  name: string
}

export function PartnerLogo({ name }: PartnerLogoProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24">
      <div className="relative h-12 w-full">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012024/upe-30052023-1.png?Ynvb_k3qgvKLIPX7gCkQhxOehwGPg0M.&itok=Q1Ubjo5R" alt={name} className="object-contain w-full h-full" />
      </div>
    </div>
  )
}