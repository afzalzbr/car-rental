export type Vehicle = {
  id?: string;
  make?: string;
  model?: string;
  title?: string;
  colour?: string;
  description?: string;
  vehicleCategory?: string;
  ulezCompliant?: boolean | string;
  doors?: number;
  seats?: number;
  dateOfRegistration?: string | null;
  registration?: string;
  price?: number;
  sold?: boolean | string;
  unlist?: boolean | string;
  bodyType?: string;
  fuel?: string;
  transmission?: string;
  owners?: number | null;
  year?: number;
  mileage?: number;
  emissionClass?: string;
  images: string[];
  condition?: string;
  createdAt?: string;
  updatedAt?: string;
};
