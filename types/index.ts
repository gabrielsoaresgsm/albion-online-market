import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

interface NetIO {
  down: string;
  up: string;
}

export interface AppStatus {
  id?: string;
  container?: string;
  cpu?: string;
  memory?: string;
  ssd?: string;
  netIO?: NetIO;
  last_restart?: string;
  startedAt?: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  apps: AppStatus;
}

export interface Root {
  status: string
  message: string
  user: Partial<User>
}

export interface User {
  userID: string
  totalRamMb: number
  ramUsedMb: number
  subdomains: any[]
  customdomains: any[]
  apps: string[]
  plan: string
  locale: string
  planDataEnd: string
}

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
};