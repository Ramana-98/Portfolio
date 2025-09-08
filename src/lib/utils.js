import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const downloadResume = () => {
  // Create a dummy resume download - replace with actual resume file
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // Replace with actual resume path
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
