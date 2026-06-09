/**
 * Resolve a path under the Vite base URL so assets work both locally and when
 * served from a sub-path (e.g. GitHub Pages project site).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
