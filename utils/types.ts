export type ServiceType = {
  title: string;
  image: string;
  variant: "light" | "primary" | "dark";
};

export type TeamMemberType = {
  name: string;
  position: string;
  image: string;
  description: string;
};

export type LogoType =
  | "amazon"
  | "dribbble"
  | "hubspot"
  | "notion"
  | "netflix"
  | "zoom";
