import { IconType } from 'react-icons';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'secondary' | 'flat' | 'white' | 'outlined';

export interface Advantage {
  id: number;
  title: string;
  imageUrl: string;
  icon: IconType;
}

export interface Service {
  id: number;
  title: string;
  imageUrl: string;
}
