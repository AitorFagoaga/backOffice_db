export interface BrandCategoryI {
    brandName: string;
    description: string;
    emailOficial: string;
    logoImg: File | null; 
    websiteUrl: string;
    instagramUrl: string;
    country: string;
    existingCategoryId: string[];
    newCategoryName: string;
    newCategoryImageUrl?: File | null; 
  
  }