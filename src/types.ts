import { ReactNode } from 'react';

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  emoji: string;
  items: string[];
  backgroundColor: string;
  hoverColor: string;
}