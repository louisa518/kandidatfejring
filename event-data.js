export const INVITED_USERS = [
  { key: "Louisa", name: "Louisa Xu", role: "Admin" },
  { key: "Anders", name: "Anders Ørsted" },
  { key: "Emma", name: "Emma Juan Roug Nielsen" },
  { key: "Frederik", name: "Frederik Hoffmann Bertelsen" },
  { key: "Gustav", name: "Gustav Lunding Smith" },
  { key: "Julius", name: "Julius Winkel" },
  { key: "Kasper", name: "Kasper Petersen" },
  { key: "Laura", name: "Laura Rovsing Meiborg" },
  { key: "Marie", name: "Marie Samsøe" },
  { key: "Nicolai", name: "Nicolai Sode Mikkelsen" },
  { key: "Maya", name: "Maya Findshøj" }
];

export const VALID_ANSWERS = ["Ja", "Måske", "Nej"];

export function getUserByKey(key) {
  return INVITED_USERS.find(user => user.key === key) || null;
}

export function normalizeUsername(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}
