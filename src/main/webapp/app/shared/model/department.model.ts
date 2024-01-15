import { IFacility } from 'app/shared/model/facility.model';

export interface IDepartment {
  id?: number;
  key?: number | null;
  team?: string | null;
  facility?: IFacility | null;
}

export const defaultValue: Readonly<IDepartment> = {};
