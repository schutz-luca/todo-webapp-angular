
export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'TO_DO' | 'DOING' | 'DONE';
}
