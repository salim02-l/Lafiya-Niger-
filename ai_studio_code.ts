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
  isGuardPharmacy?: boolean; // Pour pharmacie de garde
  latOffset?: number; // 0 à 100 pour l'affichage de la carte simulée
  lngOffset?: number; // 0 à 100 pour l'affichage de la carte simulée
  lat?: number; // Latitude réelle
  lng?: number; // Longitude réelle
}

export interface PreventionTip {
  id: string;
  title: string;
  category: 'nutrition' | 'hygiene' | 'paludisme' | 'vaccination' | 'maternite';
  content: string;
  steps: string[];
  audioUrl?: string; // Optionnel pour le support vocal
}

export interface SymptomReport {
  id: string;
  symptoms: string[];
  duration: string;
  severity: 'low' | 'medium' | 'high';
  region: RegionNiger;
  timestamp: string;
  aiAssessment?: string;
  recommendedAction?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  audioUrl?: string;
}

export interface CarnetVaccination {
  id: string;
  enfantNom: string;
  dateNaissance: string;
  vaccins: {
    nom: string;
    ageRecommande: string;
    statut: 'fait' | 'a_faire' | 'retard';
    dateAdministration?: string;
  }[];
}