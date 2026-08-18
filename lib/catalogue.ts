export type Challenge = "Support" | "Core" | "Stretch";
export type Purpose = "Teach" | "Check" | "Compare" | "Connect";

export type CatalogueAsset = {
  assetId: string;
  repositoryFile: string;
  repositoryLink: string;
  primaryCategory: string;
  musicalConcepts: string[];
  knowledgeSkill: string;
  useType: string;
  styleContext: string;
  bpmTempo: string;
  mrttStrand: string;
  placement: string;
  rightsReview: string;
  reuseDecision: string;
  notes: string;
  pilotApproved: boolean;
};

// Preview seed data copied from the live MRTT Audio Repository Index.
// Google Sheets remains the editorial source of truth. The preview intentionally
// includes rights-review rows so teachers can test the product flow, but audio is
// only playable when pilotApproved === true.
export const catalogue: CatalogueAsset[] = [
  {
    assetId: "AUD-RHY-001",
    repositoryFile: "Pulse Patterns - 96 48 2 BPM - Internal Pulse Practice.mp3",
    repositoryLink: "https://drive.google.com/file/d/1s9UGHoR9CM-hYJZ0CPIv6qz78kGI2bOJ/view",
    primaryCategory: "Rhythm, Pulse, Meter & Groove",
    musicalConcepts: ["Pulse", "BPM", "steady beat"],
    knowledgeSkill: "Internalise and maintain a regular pulse at contrasting tempi, including continuing through silence",
    useType: "Listening / active response",
    styleContext: "General musical elements",
    bpmTempo: "96 / 48 / 2 BPM",
    mrttStrand: "Perform; Listen",
    placement: "Y7 Sound Foundations / Building Blocks of Music",
    rightsReview: "Low content-risk; provenance retained",
    reuseDecision: "KEEP / REPURPOSE",
    notes: "Purpose established from lesson plan; pedagogically reusable outside legacy branding.",
    pilotApproved: true,
  },
  {
    assetId: "AUD-RHY-005",
    repositoryFile: "Rite of Spring - Dance of the Youths and Maidens - Regular Pulse and Irregular Accents.mp3",
    repositoryLink: "https://drive.google.com/file/d/1b51VhU7XH4eWiP1aPC02SgZkL-TW7BWe/view",
    primaryCategory: "Rhythm, Pulse, Meter & Groove",
    musicalConcepts: ["Regular pulse", "irregular accents", "rhythmic disruption"],
    knowledgeSkill: "Hear how irregular accents create tension against a stable underlying pulse.",
    useType: "Listening example",
    styleContext: "Stravinsky / ballet / early 20th century",
    bpmTempo: "76-120 BPM category in source plan",
    mrttStrand: "Listen",
    placement: "Y7 Patterns in Rhythm; Y9 Modernism",
    rightsReview: "COPYRIGHT/RECORDING RIGHTS REVIEW REQUIRED",
    reuseDecision: "HOLD FOR RIGHTS REVIEW",
    notes: "High-value concept example; retain regardless of later publication decision.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-FILM-003",
    repositoryFile: "Leitmotif Melody - Indiana Jones Conjunct and Disjunct Movement.mp3",
    repositoryLink: "https://drive.google.com/file/d/1sD0uKspJ1kDHxFoo5d7Q-Ak4Ia8lha7d/view",
    primaryCategory: "Pitch, Melody & Motif",
    musicalConcepts: ["Conjunct movement", "disjunct movement", "steps and leaps", "melodic shape"],
    knowledgeSkill: "Analyse how stepwise motion and selected leaps shape a memorable heroic motif.",
    useType: "Melody analysis model",
    styleContext: "Film music / Indiana Jones",
    bpmTempo: "Not specified",
    mrttStrand: "Listen; Perform",
    placement: "Y8 Music at the Movies / leitmotif and melody",
    rightsReview: "COPYRIGHT/ARRANGEMENT RIGHTS REVIEW REQUIRED",
    reuseDecision: "REVIEW / HIGH PEDAGOGICAL VALUE",
    notes: "Guide identifies this as a piano model supporting conjunct/disjunct melodic analysis.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-BAS-016",
    repositoryFile: "Prominent Bass Line - Come Together - Thin Texture and Bass Solo.mp3",
    repositoryLink: "https://drive.google.com/file/d/1jDcl5CL7xxBVFYrqHG-wo_XSYG5GXeCV/view",
    primaryCategory: "Harmony, Tonality, Chords & Bass",
    musicalConcepts: ["Bass prominence", "thin texture", "bass solo"],
    knowledgeSkill: "Evaluate how texture and orchestration make a bass line perceptually prominent.",
    useType: "Listening example",
    styleContext: "Rock / pop",
    bpmTempo: "Not specified",
    mrttStrand: "Listen",
    placement: "Y7 Layers of Sound; Y9 Rock",
    rightsReview: "COPYRIGHT REVIEW REQUIRED",
    reuseDecision: "HOLD FOR RIGHTS REVIEW",
    notes: "Retained despite source use as silent-debate prompt because audio itself is reusable.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-TIM-012",
    repositoryFile: "Fanfare Style - Copland Fanfare for the Common Man - Brass Percussion Dynamics Texture.mp3",
    repositoryLink: "https://drive.google.com/file/d/16Vdg6dWQ0qZGH8xaK2wByx4ejZxaGQQ0/view",
    primaryCategory: "Timbre, Instrumentation & Texture",
    musicalConcepts: ["Fanfare", "brass", "percussion", "dynamics", "texture", "occasion"],
    knowledgeSkill: "Analyse how brass/percussion sonority, dynamics and texture communicate ceremonial importance.",
    useType: "Listening / style exemplar",
    styleContext: "20th-century American orchestral",
    bpmTempo: "Not specified",
    mrttStrand: "Listen; Evaluate",
    placement: "Y7 Sound Detectives; Y9 Composer's Toolkit",
    rightsReview: "COPYRIGHT/RECORDING RIGHTS REVIEW REQUIRED",
    reuseDecision: "HOLD FOR RIGHTS REVIEW",
    notes: "Clear support document explicitly identifies Copland work.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-FRM-011",
    repositoryFile: "Ternary Form - Haydn Symphony 104 Minuet and Trio - Dynamics Timbre Texture.mp3",
    repositoryLink: "https://drive.google.com/file/d/1robXzdDQuRiBnqT4HyjUXkngCigNXbrl/view",
    primaryCategory: "Structure, Form & Arrangement",
    musicalConcepts: ["Ternary form", "minuet/trio", "dynamics", "orchestration", "texture", "3/4"],
    knowledgeSkill: "Analyse how orchestration, dynamics and texture distinguish outer and middle sections.",
    useType: "Listening / analysis exemplar",
    styleContext: "Classical orchestral",
    bpmTempo: "3/4",
    mrttStrand: "Listen",
    placement: "Y7 elements; orchestra; form",
    rightsReview: "RECORDING RIGHTS REVIEW REQUIRED",
    reuseDecision: "REVIEW / POSSIBLE KEEP",
    notes: "Rich multi-concept example with clear ternary structure.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-STY-001",
    repositoryFile: "West African Ghanaian Drumming - Polyrhythm and Thick Texture Example.mp3",
    repositoryLink: "https://drive.google.com/file/d/160pVrZYON-zFHbjX3c1EEkw2BH_gywVn/view",
    primaryCategory: "Style, Genre, Culture & Context",
    musicalConcepts: ["Polyrhythm", "cyclic rhythm", "thick texture", "West African drumming"],
    knowledgeSkill: "Recognise several layered rhythms and connect polyrhythm with a thicker texture.",
    useType: "Listening example",
    styleContext: "Ghana / West African drumming",
    bpmTempo: "Not specified",
    mrttStrand: "Listen",
    placement: "Y7 African Rhythms / African Grooves",
    rightsReview: "SOURCE/RECORDING RIGHTS REVIEW REQUIRED",
    reuseDecision: "REVIEW / POSSIBLE KEEP",
    notes: "Retain as culturally situated listening example pending source verification.",
    pilotApproved: false,
  },
  {
    assetId: "AUD-FILM-031",
    repositoryFile: "Cartoon Scoring Cliches - Listening Identification Set.mp3",
    repositoryLink: "https://drive.google.com/file/d/1obb2cSuWckpY1n4OocPEnSqQ2cMXSK52/view",
    primaryCategory: "Composition, Sound Design & Production",
    musicalConcepts: ["scoring devices", "aural recognition", "device-to-effect matching"],
    knowledgeSkill: "Identify scoring devices aurally and match musical features to intended dramatic functions.",
    useType: "Listening identification / device bank",
    styleContext: "Cartoon / animation scoring",
    bpmTempo: "Varied",
    mrttStrand: "Listen",
    placement: "Y8 Music at the Movies / aural recognition",
    rightsReview: "Check source creation/licence provenance",
    reuseDecision: "KEEP / REPURPOSE",
    notes: "Underlying device examples have standalone teaching value.",
    pilotApproved: false,
  },
];

export const previewCatalogue = catalogue;
export const pilotCatalogue = catalogue.filter((asset) => asset.pilotApproved);
export const areas = Array.from(new Set(previewCatalogue.map((asset) => asset.primaryCategory)));

export function conceptsForArea(area: string) {
  return Array.from(
    new Set(
      previewCatalogue
        .filter((asset) => asset.primaryCategory === area)
        .flatMap((asset) => asset.musicalConcepts),
    ),
  );
}
