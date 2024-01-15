export interface ITask {
  key?: number | null;
  id?: number;
  description?: string | null;
}

export const defaultValue: Readonly<ITask> = {};
