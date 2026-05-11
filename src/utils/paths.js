export function assetPath(path) {
  if (!path) return '';
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}