
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
  latOffset: number; // 0 à 100 pour l'affichage de la carte simulée
  lngOffset: number; // 0 à 100 pour l'affichage de la carte simulée
  lat?: number; // Latitude réelle
  lng?: number; // Longitude réelle
}

export interface PreventionTopic {
  id: string;
  title: string;
  icon: string;
  category: 'paludisme' | 'vaccination' | 'nutrition' | 'hygiene';
  shortSummary: string;
  longTextFr: string;
  longTextHa: string; // Traduction Haoussa
  longTextZy: string; // Traduction Zarma
  videoSpeaker: string;
  videoDuration: string;
}

export interface Vaccine {
  id: string;
  name: string;
  disease: string;
  ageText: string;
  description: string;
  isCompleted: boolean;
  completedDate?: string;
  reminderDate?: string;
  parentPhone?: string;
}

export interface Appointment {
  id: string;
  clinicName: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  notes?: string;
}

export interface HealthMetric {
  id: string;
  date: string;
  weight?: number; // kg
  temperature?: number; // °C
  systolic?: number; // mmHg
  diastolic?: number; // mmHg
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}import { HealthCenter, PreventionTopic, Vaccine } from "./types";

export const NIGER_REGIONS = [
  'Niamey',
  'Maradi',
  'Zinder',
  'Tahoua',
  'Tillabéri',
  'Agadez',
  'Dosso',
  'Diffa'
] as const;

export const HEALTH_CENTERS_SEED: HealthCenter[] = [
  {
    id: "h1",
    name: "Hôpital National de Niamey (HNN)",
    type: "hôpital",
    region: "Niamey",
    address: "Avenue Charles de Gaulle, Niamey Centre",
    phone: "+227 20 72 22 53",
    specialties: ["Urgences", "Pédiatrie", "Maternité", "Chirurgie", "Cardiologie"],
    isOpen: true,
    latOffset: 34,
    lngOffset: 25,
    lat: 13.5085,
    lng: 2.1154
  },
  {
    id: "h3",
    name: "Hôpital Régional de Maradi",
    type: "hôpital",
    region: "Maradi",
    address: "Avenue de l'Hôpital, Maradi Centre",
    phone: "+227 21 41 01 24",
    specialties: ["Urgences", "Médecine Générale", "Nutrition Clinique"],
    isOpen: true,
    latOffset: 52,
    lngOffset: 48,
    lat: 13.4917,
    lng: 7.0985
  }
  // ... (Tu peux ajouter d'autres centres ici si nécessaire)
];

export const PREVENTION_SEED: PreventionTopic[] = [
  {
    id: "p1",
    title: "Lutte contre le Paludisme",
    icon: "Bug",
    category: "paludisme",
    shortSummary: "Le paludisme est la première cause de consultation au Niger. Dormez sous moustiquaire !",
    longTextFr: `Le paludisme est une maladie transmise par la piqûre de moustiques infectés (les anophèles)...`,
    longTextHa: `Zazzabin cizon sauro (Palu) shi ne babban sanadin shiga asibiti a Niger. Ku kiyaye lafiyar ku !...`,
    longTextZy: `Targassuyey (Palu) no ga ti zamba beryo Niger dda ka ga mutey dabu daban...`,
    videoSpeaker: "Mme Halima, Agent de santé communautaire à Tillabéri",
    videoDuration: "1:45"
  }
];
