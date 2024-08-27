export const getInitials = (name: string): string => {
  if (!name) return "";
  const names = name.split(" ");
  const initials = names
    .map((n) => n[0])
    .splice(0, 2)
    .join("");
  return initials.toUpperCase();
};
 