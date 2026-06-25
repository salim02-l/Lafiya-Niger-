export type RegionNiger = 'Niamey' | 'Maradi' | 'Zinder' | 'Tahoua' | 'Tillabéri' | 'Agadez' | 'Dosso' | 'Diffa';

export type CenterType = 'hôpital' | 'csi' | 'pharmacie';

export interface HealthCenter {
  id: string;
  name: string;
  type: CenterType;
  region: RegionNiger;
  address: string;
  phone: string;
  specialties?: string[];
  isOpen: boolean;
  isGuardPharmacy?: boolean;
  latOffset: number; // Pour l'affichage de la carte simulée
  lngOffset: number;
  lat?: number; // Latitude réelle
  lng?: number; // Longitude réelle
}

export interface VaccineSchedule {
  id: string;
  disease: string;
  recommendedAge: string;
  status: 'done' | 'pending' | 'overdue';
  dateDone?: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  birthDate: string;
  gender: 'M' | 'F';
  vaccines: VaccineSchedule[];
}

export interface PreventionGuide {
  id: string;
  title: string;
  category: 'maternelle' | 'maladies' | 'premiers_secours' | 'hygiene';
  audioUrl?: string; // Audio simulé
  content: string[];
  languages: {
    fr: { title: string; content: string[] };
    ha: { title: string; content: string[] };
    zarm: { title: string; content: string[] };
  };
}