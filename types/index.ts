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
