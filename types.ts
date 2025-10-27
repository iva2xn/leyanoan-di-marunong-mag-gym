
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  twitter?: string;
}

export interface Profile {
  username: string;
  displayName: string;
  bio: string;
  profilePicture: string | null;
  skills: string[];
  interests: string[];
  socials: SocialLinks;
}
