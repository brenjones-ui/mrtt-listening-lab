export type PupilFacingCopy = {
  question: string;
  modelResponse: string;
  scaffold: string;
};

export const PUPIL_LANGUAGE_GUIDE = {
  maxQuestionWords: 24,
  maxScaffoldWords: 22,
  maxModelWords: 48,
  principles: [
    "Keep the musical thinking ambitious; make the pupil language simple, direct and speakable.",
    "Ask one main question at a time.",
    "Keep technical musical vocabulary when it is the learning, but explain it through ordinary language.",
    "Ask about something pupils can actually hear, notice, tap, identify, compare or explain.",
    "Put the big pupil question first, then a short Listen for or Think about scaffold.",
    "Model responses should sound like something a strong pupil could genuinely say aloud.",
    "Support reduces choices; Stretch increases thinking rather than reading difficulty.",
  ],
} as const;

const teacherHeavyPatterns = [
  { pattern: /\bperceptually\b/i, label: "perceptually" },
  { pattern: /\bcommunicat(?:e|es|ing)\b/i, label: "communicate" },
  { pattern: /\bdifferentiat(?:e|es|ing)\b/i, label: "differentiate" },
  { pattern: /\bsonority\b/i, label: "sonority" },
  { pattern: /\bstylistic conventions?\b/i, label: "stylistic conventions" },
  { pattern: /\bmusical evidence\b/i, label: "musical evidence" },
];

const genericQuestionPatterns = [
  /how does .* create (the )?musical effect/i,
  /what does .* add to the music/i,
  /how does .* work in this extract/i,
  /describe .* in this extract/i,
];

function wordCount(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

export function pupilLanguageIssues(copy: PupilFacingCopy) {
  const issues: string[] = [];

  if (!copy.question.trim().endsWith("?")) {
    issues.push("Pupil question must be a direct question.");
  }

  if (wordCount(copy.question) > PUPIL_LANGUAGE_GUIDE.maxQuestionWords) {
    issues.push(`Pupil question is longer than ${PUPIL_LANGUAGE_GUIDE.maxQuestionWords} words.`);
  }

  if (wordCount(copy.scaffold) > PUPIL_LANGUAGE_GUIDE.maxScaffoldWords) {
    issues.push(`Pupil scaffold is longer than ${PUPIL_LANGUAGE_GUIDE.maxScaffoldWords} words.`);
  }

  if (wordCount(copy.modelResponse) > PUPIL_LANGUAGE_GUIDE.maxModelWords) {
    issues.push(`Model response is longer than ${PUPIL_LANGUAGE_GUIDE.maxModelWords} words.`);
  }

  if (/^\s*i can\b/i.test(copy.modelResponse)) {
    issues.push("Model response must answer the question rather than state a success criterion.");
  }

  if (genericQuestionPatterns.some((pattern) => pattern.test(copy.question))) {
    issues.push("Pupil question uses a banned generic question stem.");
  }

  for (const { pattern, label } of teacherHeavyPatterns) {
    if (pattern.test(copy.question) || pattern.test(copy.modelResponse) || pattern.test(copy.scaffold)) {
      issues.push(`Pupil-facing copy contains teacher-heavy wording: ${label}.`);
    }
  }

  return issues;
}
