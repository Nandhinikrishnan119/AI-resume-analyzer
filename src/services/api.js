export const API_BASE = import.meta.env.VITE_API_URL || '/api';

export function getToken() {
  return localStorage.getItem('resumeai_token');
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem('resumeai_user');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

export function authHeaders(extra = {}) {
  const token = getToken();
  return {
    ...extra,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}
