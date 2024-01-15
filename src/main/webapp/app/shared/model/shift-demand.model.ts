import { IShift } from 'app/shared/model/shift.model';
import { ITask } from 'app/shared/model/task.model';
import { IPosition } from 'app/shared/model/position.model';
import { IDepartment } from 'app/shared/model/department.model';

export interface IShiftDemand {
  id?: number;
  count?: number | null;
  shift?: IShift | null;
  task?: ITask | null;
  position?: IPosition | null;
  department?: IDepartment | null;
}

export const defaultValue: Readonly<IShiftDemand> = {};
