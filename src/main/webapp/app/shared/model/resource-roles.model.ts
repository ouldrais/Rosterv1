import { IRole } from 'app/shared/model/role.model';
import { IResource } from 'app/shared/model/resource.model';

export interface IResourceRoles {
  id?: number;
  role?: IRole | null;
  resource?: IResource | null;
}

export const defaultValue: Readonly<IResourceRoles> = {};
