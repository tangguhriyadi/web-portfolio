import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenArray(arr: any[]): any[] {
  let result: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

export function formatDate(inputDate: string): string {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const parts: string[] = inputDate.split("-");
  const year: number = parseInt(parts[0]);
  const monthIndex: number = parseInt(parts[1]) - 1; // Month indexes start from 0
  const day: number = parseInt(parts[2]);

  const formattedDate: string = `${months[monthIndex]} ${day}, ${year}`;

  return formattedDate;
}
