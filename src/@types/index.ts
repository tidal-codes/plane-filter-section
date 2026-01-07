// types.ts

import type { ADD_FILTER_MENU, OPERATORS } from "../constants/filter";

export type Label = {
  id: string;          // id مچ با تسک‌ها
  name: string;        // اسم لیبل
  color: string;       // رنگ هگز یا RGB
  description: string; // توضیح کوتاه
};

export type Member = {
  id: string;          // id مچ با assignees تو تسک‌ها
  name: string;        // اسم کامل
  email: string;       // ایمیل
  role: string;        // نقش تیمی
  avatar: string;      // لینک عکس واقعی
};

export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;   // ISO date
  updatedAt: string;   // ISO date
  labels: string[];    // فقط id لیبل‌ها
  assignees: string[]; // فقط id ممبرها
  projectId: string;
};

export type DisplayPropertiesType = "priority" | "labels" | "assignees";
export interface SelectItem<T extends string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

export type FilterField = typeof ADD_FILTER_MENU[number]["value"];
export type FilterOperator = typeof OPERATORS[keyof typeof OPERATORS]["value"];

export interface FilterItem {
  id: string
  field: FilterField
  operator: FilterOperator
  value: string[] | null
}