import type { CatalogueAsset, Challenge, Purpose } from "./catalogue";

export type ActivityQuestion = {
  question: string;
  modelResponse: string;
  teacherCheck: string;
  listenFor: string;
  source: "editorial" | "generated";
};

type Profile = {
  supportIdentify: string;
  coreExplain: string;
  stretchEvaluate: string;
  compareFocus: string;
  connectionFocus: string;
  supportModel: string;
  coreModel: string;
  stretchModel: string;
  listenFor: string;
  misconception: string;
};

const profiles: Record<string, Profile> = {
  "AUD-RHY-001": {
    supportIdentify: "the steady pulse, even when the sound drops out",
    coreExplain: "how successful re-entry shows that the internal pulse stayed regular through the silence",
    stretchEvaluate: "which tempo is hardest to maintain internally and which strategy keeps the beat from drifting",
    compareFocus: "the easier and harder tempo sections",
    connectionFocus: "internal pulse and accurate ensemble timing",
    supportModel: "I kept tapping at the same speed through the silence and came back in with the music.",
    coreModel: "I re-entered on the beat at the same point as the music, which shows that I maintained the pulse through the silent section.",
    stretchModel: "The slower tempo is harder because there is more space between beats. Subdividing the gap helps stop the pulse from drifting.",
    listenFor: "A regular beat before, during and after the silent section, especially at contrasting tempi.",
    misconception: "Do not accept pupils following the surface rhythm or guessing the restart instead of maintaining a regular beat.",
  },
  "AUD-RHY-005": {
    supportIdentify: "the irregular accents that land against the regular pulse",
    coreExplain: "how the underlying pulse stays stable while accents disrupt the expected pattern",
    stretchEvaluate: "how irregular accent placement creates tension without changing the underlying pulse",
    compareFocus: "moments where accents feel expected and moments where they disrupt the beat",
    connectionFocus: "irregular accents and musical tension",
    supportModel: "The pulse stays steady, but some accents land in unexpected places.",
    coreModel: "The music keeps a regular pulse while the accents interrupt the expected emphasis, so the rhythm feels unsettled.",
    stretchModel: "The tension comes from hearing a stable pulse underneath unpredictable accents. The beat remains secure while the surface emphasis keeps disturbing our expectations.",
    listenFor: "A stable beat underneath accents that do not consistently reinforce the expected strong beats.",
    misconception: "Pupils should not describe the pulse itself as irregular if the underlying beat remains steady.",
  },
  "AUD-FILM-003": {
    supportIdentify: "where the melody moves by step and where it uses a leap",
    coreExplain: "how mostly stepwise motion with selected leaps shapes the heroic motif",
    stretchEvaluate: "why the balance of steps and leaps helps the motif sound memorable and heroic",
    compareFocus: "the stepwise parts of the motif and the larger leaps",
    connectionFocus: "melodic shape and heroic character",
    supportModel: "Most of the melody moves by step, with some larger jumps that stand out.",
    coreModel: "The motif uses mainly stepwise movement, but selected leaps make important moments more striking and help shape its heroic character.",
    stretchModel: "The stepwise motion makes the theme easy to follow, while the larger leaps give it lift and emphasis. That contrast helps the motif feel bold and memorable.",
    listenFor: "Conjunct movement, clear leaps and the way those changes shape the contour of the motif.",
    misconception: "Avoid answers that label the whole melody as either conjunct or disjunct; pupils should notice the mixture.",
  },
  "AUD-BAS-016": {
    supportIdentify: "why the bass line is easy to hear in the texture",
    coreExplain: "how thin texture and orchestration make the bass line perceptually prominent",
    stretchEvaluate: "how reducing competing layers changes the listener's attention toward the bass",
    compareFocus: "thinner moments and fuller moments in the texture",
    connectionFocus: "texture, orchestration and bass prominence",
    supportModel: "There are fewer other parts competing with the bass, so it stands out clearly.",
    coreModel: "The texture is relatively thin, so fewer instrumental layers cover the bass. The orchestration leaves space around it, making the bass line prominent.",
    stretchModel: "Bass prominence is created by both register and arrangement. When competing layers are reduced, the listener's attention is drawn toward the exposed low line rather than a dense overall texture.",
    listenFor: "How many layers are sounding and how clearly the bass can be separated from the rest of the texture.",
    misconception: "Do not reduce the explanation to 'the bass is loud'; the catalogue teaching point is about texture and orchestration.",
  },
  "AUD-TIM-012": {
    supportIdentify: "the brass and percussion sounds that dominate the fanfare",
    coreExplain: "how brass, percussion, dynamics and texture make the music sound ceremonial",
    stretchEvaluate: "how the combined sonority, dynamics and texture communicate importance and occasion",
    compareFocus: "thinner passages and fuller brass-and-percussion passages",
    connectionFocus: "orchestration choices and ceremonial purpose",
    supportModel: "Brass and percussion are the strongest sounds, giving the music a bold, important character.",
    coreModel: "The brass gives the music a bold, resonant sonority while the percussion adds weight and impact. Strong dynamics and a fuller texture make the fanfare feel ceremonial.",
    stretchModel: "The ceremonial effect is created by several features working together: powerful brass sonority, emphatic percussion, strong dynamics and a broad texture. Together they make the music sound public, important and formal.",
    listenFor: "Brass and percussion sonority, changes in dynamic weight and the density of the orchestral texture.",
    misconception: "Do not accept only 'it is loud'; pupils should connect identifiable orchestral features to the ceremonial character.",
  },
  "AUD-FRM-011": {
    supportIdentify: "what changes between the outer section and the contrasting middle section",
    coreExplain: "how orchestration, dynamics and texture distinguish the outer and middle sections",
    stretchEvaluate: "which combination of orchestration, dynamics and texture makes the sectional contrast most convincing",
    compareFocus: "the outer section and the middle trio section",
    connectionFocus: "changes in musical elements and our perception of ternary form",
    supportModel: "The middle section sounds different because the instrumental colour, dynamics and texture change.",
    coreModel: "The middle section contrasts with the outer section through changes in orchestration, dynamic level and texture, which helps us hear it as a separate section.",
    stretchModel: "The form is made clear by coordinated contrasts rather than one feature alone. Changes in instrumental colour, dynamics and texture combine to separate the trio from the returning outer material.",
    listenFor: "Differences in instrumental colour, dynamic level and textural density between the outer and middle sections.",
    misconception: "Pupils should describe audible contrasts, not simply state that the form is ABA.",
  },
  "AUD-STY-001": {
    supportIdentify: "the different rhythmic layers sounding at the same time",
    coreExplain: "how several independent rhythmic layers create polyrhythm and a thicker texture",
    stretchEvaluate: "how the interaction of cyclic rhythmic layers changes the density and energy of the texture",
    compareFocus: "a single rhythmic layer and the fuller layered texture",
    connectionFocus: "polyrhythm and thick texture in the drumming example",
    supportModel: "Several different rhythms are sounding together instead of everyone playing the same pattern.",
    coreModel: "The texture becomes thicker because several independent rhythmic patterns are layered at the same time, creating a polyrhythmic effect.",
    stretchModel: "The cyclic parts remain distinct while interlocking with one another. Their simultaneous repetition increases rhythmic density and gives the ensemble a thick, energetic texture.",
    listenFor: "Independent repeating rhythmic layers and the change in density as more parts are heard together.",
    misconception: "Do not equate 'thick texture' simply with loudness; the key evidence is the number and independence of rhythmic layers.",
  },
  "AUD-FILM-031": {
    supportIdentify: "which scoring device matches the dramatic action or mood",
    coreExplain: "how a specific musical feature signals its intended dramatic function",
    stretchEvaluate: "which scoring device communicates its dramatic function most clearly and what musical evidence makes it effective",
    compareFocus: "two contrasting scoring devices and the dramatic functions they suggest",
    connectionFocus: "musical feature and dramatic function in screen scoring",
    supportModel: "I can match the device to the action by listening for its distinctive musical feature.",
    coreModel: "The device works because its rhythm, pitch shape, harmony or texture creates a clear musical signal that fits the dramatic action.",
    stretchModel: "The strongest match is the device whose musical behaviour most clearly mirrors the dramatic function. I would justify it using the specific rhythm, pitch, harmony or texture I hear.",
    listenFor: "Distinctive scoring devices and the musical feature that makes each one suggest a particular action or mood.",
    misconception: "Pupils should name audible musical evidence, not rely only on a story or visual association.",
  },
};

const bannedGenericPatterns = [
  /how does .* create (the )?musical effect/i,
  /what does .* add to the music/i,
  /how does .* work in this extract/i,
  /describe .* in this extract/i,
];

export function isQuestionSpecific(question: string) {
  return !bannedGenericPatterns.some((pattern) => pattern.test(question));
}

function questionFor(profile: Profile, challenge: Challenge, purpose: Purpose) {
  const focus = challenge === "Support" ? profile.supportIdentify : challenge === "Core" ? profile.coreExplain : profile.stretchEvaluate;

  if (purpose === "Teach") {
    return challenge === "Support"
      ? `Listen for ${focus}. What do you notice first?`
      : `Listen closely: ${focus}. Which musical evidence helps you hear this?`;
  }

  if (purpose === "Check") {
    return challenge === "Support"
      ? `Which part of the extract shows ${focus}?`
      : `What do you hear that shows ${focus}?`;
  }

  if (purpose === "Compare") {
    return challenge === "Support"
      ? `Compare ${profile.compareFocus}. What is the clearest difference?`
      : challenge === "Core"
        ? `Compare ${profile.compareFocus}. Which musical changes make them sound different?`
        : `Compare ${profile.compareFocus}. Which contrast matters most, and what evidence supports your judgement?`;
  }

  return challenge === "Support"
    ? `What connection can you hear between ${profile.connectionFocus}?`
    : challenge === "Core"
      ? `How are ${profile.connectionFocus} connected in this extract? Use something you can hear.`
      : `How convincingly are ${profile.connectionFocus} connected? Use precise musical evidence.`;
}

function modelFor(profile: Profile, challenge: Challenge) {
  if (challenge === "Support") return profile.supportModel;
  if (challenge === "Core") return profile.coreModel;
  return profile.stretchModel;
}

export function buildQuestion(asset: CatalogueAsset, challenge: Challenge, purpose: Purpose): ActivityQuestion | null {
  const profile = profiles[asset.assetId];
  if (!profile) return null;

  const question = questionFor(profile, challenge, purpose);
  if (!isQuestionSpecific(question)) return null;

  return {
    question,
    modelResponse: modelFor(profile, challenge),
    teacherCheck: `${profile.misconception} Secure responses should address: ${asset.knowledgeSkill}`,
    listenFor: profile.listenFor,
    source: "editorial",
  };
}
