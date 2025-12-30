export type UserRole = "doctor" | "patient" | null;

export function setRole(role: UserRole) {
  localStorage.setItem("role", role ?? "");
}

export function getRole(): UserRole {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem("role") as UserRole) || null;
}

export function logout() {
  localStorage.removeItem("role");
}
