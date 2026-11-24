export const CHAT_WELCOME =
  "Toujours Présent. En 10 secondes : bureaux, flotte nautique, ou logements d’entreprise ?";
export const CHAT_FALLBACK =
  "Je n’ai pas ça en stock. Bureaux · Nautique · ou WhatsApp (bouton vert).";
export const CHAT_QUICK = ["Bureaux", "Nautique", "Résidences", "Tarifs", "Zone", "WhatsApp"];

function stripAccents(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function botReply(text: string) {
  const t = stripAccents(text);
  if (/prix|tarif|devis|combien|budget/.test(t)) return "Pas de prix affiché. Audit court, devis sous 24–48 h.";
  if (/bureau|locaux|syndic|copro/.test(t)) return "Entretien de locaux pro. Un interlocuteur. Photos après chaque passage.";
  if (/bateau|nautique|flotte|port|yacht/.test(t)) return "Conciergerie nautique B2B : contrôle, nettoyage, préparation de parc.";
  if (/residence|logement/.test(t)) return "Résidences et parties communes. Contrat résidence par résidence.";
  if (/zone|region|nouvelle.?aquitaine|ou intervenez|ou etes/.test(t)) return "On intervient en Nouvelle-Aquitaine, sans distinction de ville.";
  if (/bonjour|salut|hello/.test(t)) return "Bonjour. Bureaux, nautique B2B ou résidences ?";
  return CHAT_FALLBACK;
}
