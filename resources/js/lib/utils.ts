// resources/js/lib/utils.ts
// Common helper functions for Filament + Radix + Tailwind projects

/**
 * Format a Date object into a readable string
 * Example: 2026-02-14 -> Feb 14, 2026
 */
export function formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Combine multiple class names into a single string
 * Useful for conditional Tailwind classes
 */
export function cn(
    ...classes: (string | undefined | null | boolean)[]
): string {
    return classes.filter(Boolean).join(" ");
}

/**
 * Simple numeric sum helper
 */
export function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Generate a random integer between min and max
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Debounce function for event handling
 */
export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait = 300,
): T {
    let timeout: NodeJS.Timeout;
    return function (...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    } as T;
}
