import type { CatalogueAsset, Challenge, Purpose } from "./catalogue";

export type ActivityQuestion = {
  question: string;
  modelResponse: string;
  teacherCheck: string;
  listenFor: string;
  source: "editorial" | "generated";
};

const editorial: Record<string, Record<Challenge, ActivityQuestion>> = {
  "AUD-RHY-001": {
    Support: {
      question: "Keep tapping the steady pulse when the sound drops out. Are you still with the beat when the music returns?",
      modelResponse: "Yes. I kept the beat at the same speed through the silence and came back in with the music.",
      teacherCheck: "Pupils maintain an even pulse through the silent gap rather than speeding up, slowing down or copying the surface rhythm.",
      listenFor: "The steady beat underneath the changing sound, including the moment when the audio drops out.",
      source: "editorial",
    },
    Core: {
      question: "Keep the pulse through the silence. What tells you that your internal pulse stayed steady when the audio returns?",
      modelResponse: "I came back in on the beat at the same point as the music, so I kept the pulse steady during the silence.",
      teacherCheck: "Pupils connect successful re-entry to maintaining a regular internal pulse, not simply to guessing when the sound will restart.",
      listenFor: "Whether the pulse remains regular before, during and after the silent section.",
      source: "editorial",
    },
    Stretch: {
      question: "Which tempo makes the internal pulse hardest to maintain, and what changes in your listening or movement help you keep it steady?",
      modelResponse: "The slower tempo is harder because there is more time between beats. I have to subdivide the space mentally so the pulse does not drift.",
      teacherCheck: "Pupils explain a strategy for maintaining pulse and relate difficulty to the amount of time between beats.",
      listenFor: "How accurately pupils maintain the underlying beat at contrasting tempi, especially where beats are widely spaced.",
      source: "editorial",
    },
  },
};

const bannedGenericPatterns = [
  /how does .* create (the )?musical effect/i,
  /what does .* add to the music/i,
  /how does .* work in this extract/i,
  /describe .* in this extract/i,
];

export function isQuestionSpecific(question: string, asset: CatalogueAsset) {
  if (bannedGenericPatterns.some((pattern) => pattern.test(question))) return false;
  const meaningfulTerms = asset.knowledgeSkill
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 5);
  const q = question.toLowerCase();
  return meaningfulTerms.some((term) => q.includes(term.slice(0, Math.min(term.length, 7))));
}

function purposeLead(purpose: Purpose) {
  switch (purpose) {
    case "Teach":
      return "Listen for";
    case "Check":
      return "What do you hear that shows";
    case "Compare":
      return "What changes when you compare the examples of";
    case "Connect":
      return "What musical evidence helps you connect";
  }
}

export function buildQuestion(
  asset: CatalogueAsset,
  challenge: Challenge,
  purpose: Purpose,
): ActivityQuestion | null {
  const locked = editorial[asset.assetId]?.[challenge];
  if (locked) return locked;

  // Temporary deterministic fallback. It is intentionally rejected when it does
  // not retain enough of the asset's actual Knowledge / Skill meaning.
  const question = `${purposeLead(purpose)} ${asset.knowledgeSkill.replace(/\.$/, "").toLowerCase()}?`;
  if (!isQuestionSpecific(question, asset)) return null;

  return {
    question,
    modelResponse: "Editorial model response required before this asset can go live.",
    teacherCheck: `Look for evidence that pupils can: ${asset.knowledgeSkill}`,
    listenFor: asset.knowledgeSkill,
    source: "generated",
  };
}
