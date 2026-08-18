import type { CatalogueAsset, Challenge, Purpose } from "./catalogue";
import { pupilLanguageIssues } from "./pupilLanguage";

export type ActivityQuestion = {
  question: string;
  modelResponse: string;
  teacherCheck: string;
  scaffoldLabel: "LISTEN FOR" | "THINK ABOUT";
  scaffold: string;
  source: "editorial";
};

type PupilVariant = {
  question: string;
  modelResponse: string;
};

type VariantSet = Record<Challenge, PupilVariant>;

type Scaffold = {
  label: ActivityQuestion["scaffoldLabel"];
  text: string;
};

type EditorialPack = {
  scaffolds: Record<Challenge, Scaffold>;
  teacherChecks: Record<Challenge, string>;
  purposes: Record<Purpose, VariantSet>;
};

function variants(
  supportQuestion: string,
  supportModel: string,
  coreQuestion: string,
  coreModel: string,
  stretchQuestion: string,
  stretchModel: string,
): VariantSet {
  return {
    Support: { question: supportQuestion, modelResponse: supportModel },
    Core: { question: coreQuestion, modelResponse: coreModel },
    Stretch: { question: stretchQuestion, modelResponse: stretchModel },
  };
}

const packs: Record<string, EditorialPack> = {
  "AUD-RHY-001": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "The steady beat before the sound stops and when it comes back." },
      Core: { label: "THINK ABOUT", text: "What stays the same while the audio is silent?" },
      Stretch: { label: "THINK ABOUT", text: "Which tempo leaves more space between beats, and why might that be harder?" },
    },
    teacherChecks: {
      Support: "Pupils keep an even beat through the silence and rejoin with the audio.",
      Core: "Pupils explain that matching the returning beat shows their internal pulse stayed steady.",
      Stretch: "Pupils compare tempi and describe a useful strategy, such as subdivision, for stopping the pulse from drifting.",
    },
    purposes: {
      Teach: variants(
        "Can you tap the beat and keep it going when the sound stops?",
        "I kept tapping at the same speed through the silence.",
        "How can you keep the beat steady when the sound disappears?",
        "I keep the same speed in my head and body, so the pulse stays steady through the silence.",
        "Which tempo is hardest to keep through the silence, and what helps you stay steady?",
        "The slower tempo is harder because there is more space between beats. Subdividing the gap helps me stay steady.",
      ),
      Check: variants(
        "Can you keep the beat going when the sound stops?",
        "I kept the same speed and came back in with the music.",
        "How do you know your pulse stayed steady through the silence?",
        "I came back in on the beat with the music, so my internal pulse stayed steady.",
        "Which tempo makes your internal pulse drift most, and how can you fix it?",
        "The slower tempo makes my pulse drift more, so I subdivide the space between beats to keep it steady.",
      ),
      Compare: variants(
        "Which tempo is easier to keep through the silence?",
        "The faster tempo is easier because the beats are closer together.",
        "What changes when you keep the pulse at the faster and slower tempos?",
        "The slower tempo gives me more space between beats, so I have to work harder to stop the pulse drifting.",
        "Why is one tempo harder to hold internally than the other?",
        "The slower tempo is harder because each beat is further apart. Subdivision gives me smaller points to hold onto.",
      ),
      Connect: variants(
        "How does keeping the beat in your head help you come back in at the right time?",
        "The beat keeps going in my head, so I know when to come back in.",
        "How could an internal pulse help you play accurately with other people?",
        "An internal pulse helps everyone keep the same timing, even through rests or gaps in the sound.",
        "Why does an internal pulse matter when a group has rests or silent gaps?",
        "The pulse keeps the shared timing alive during silence, so the group can re-enter together instead of guessing.",
      ),
    },
  },
  "AUD-RHY-005": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "Tap the steady pulse and notice where the strongest sounds land." },
      Core: { label: "LISTEN FOR", text: "A steady pulse underneath accents that arrive in unexpected places." },
      Stretch: { label: "THINK ABOUT", text: "How predictable accents would feel compared with these irregular ones." },
    },
    teacherChecks: {
      Support: "Pupils hear that the pulse remains steady while some accents land in unexpected places.",
      Core: "Pupils distinguish pulse from accent and connect irregular emphasis with an unsettled or tense feel.",
      Stretch: "Pupils explain that tension comes from unpredictable emphasis against a stable underlying pulse.",
    },
    purposes: {
      Teach: variants(
        "Can you hear the steady pulse underneath the unexpected accents?",
        "The pulse stays steady, but the accents land in unexpected places.",
        "How can the beat stay steady while the accents make the music feel unsettled?",
        "The beat keeps the same speed, but the unexpected accents disturb the pattern and make the music feel unsettled.",
        "Why can irregular accents create tension without changing the underlying pulse?",
        "The pulse stays stable, but the accents keep breaking our expectations. That contrast creates tension.",
      ),
      Check: variants(
        "Which accents sound unexpected against the steady beat?",
        "The unexpected accents are the strong sounds that do not fall where I expect them against the beat.",
        "How do the unexpected accents change the feel of the music?",
        "The pulse stays steady, but the unexpected accents make the music feel tense and unsettled.",
        "Why do the accents create tension even though the beat stays steady?",
        "The beat gives us a stable pattern, while the accents keep disrupting it. That clash between stable and unexpected creates tension.",
      ),
      Compare: variants(
        "Which feels more predictable: accents on the beat or accents in unexpected places?",
        "Accents on the beat feel more predictable because they match the pulse more clearly.",
        "What changes when accents line up with the beat and when they do not?",
        "Accents on the beat feel settled, while unexpected accents make the rhythm feel less predictable.",
        "Which accent pattern creates more tension, and what do you hear that makes it stronger?",
        "The irregular accents create more tension because the strong sounds keep arriving where I do not expect them.",
      ),
      Connect: variants(
        "How are the steady beat and the unexpected accents happening at the same time?",
        "The beat keeps going steadily underneath while the accents land in different places above it.",
        "How do irregular accents create tension against a steady pulse?",
        "The steady pulse creates an expectation, then the irregular accents keep pushing against it and making the rhythm feel unsettled.",
        "How can rhythm feel unstable even when the underlying beat stays steady?",
        "The beat can stay stable while the accents shift around it. Changing the emphasis is enough to make the surface rhythm feel unstable.",
      ),
    },
  },
  "AUD-FILM-003": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "Places where the melody moves by step and places where it jumps." },
      Core: { label: "THINK ABOUT", text: "Steps, leaps and the overall shape of the melody." },
      Stretch: { label: "THINK ABOUT", text: "Which leaps stand out most and how they change the melodic shape." },
    },
    teacherChecks: {
      Support: "Pupils hear a mixture of stepwise movement and larger leaps rather than labelling the whole melody one way.",
      Core: "Pupils connect the mixture of steps and leaps to the shape of the motif.",
      Stretch: "Pupils justify how selected leaps change the contour and contribute to a memorable, heroic character.",
    },
    purposes: {
      Teach: variants(
        "Can you hear where the melody moves by step and where it leaps?",
        "Some notes move by step, while other notes jump further.",
        "How do steps and leaps work together to shape the melody?",
        "The melody mostly moves by step, with some larger leaps that change its shape and stand out.",
        "Why do a few larger leaps make the motif more memorable?",
        "The leaps create bigger changes in shape, so important moments stand out and are easier to remember.",
      ),
      Check: variants(
        "Does the melody use only steps, only leaps, or a mixture of both?",
        "It uses a mixture of stepwise movement and larger leaps.",
        "How does the melody use steps and leaps to create its shape?",
        "Some notes move by step and others leap further. The contrast gives the melody a clear, memorable shape.",
        "Which leaps matter most to the shape of the motif, and why?",
        "The larger leaps matter most because they create the biggest changes in the melodic shape and make those moments stand out.",
      ),
      Compare: variants(
        "What is different about the stepwise parts and the parts with leaps?",
        "The stepwise parts move between nearby notes, while the leaps jump further.",
        "How does the shape change when the melody moves by step and when it leaps?",
        "Stepwise movement makes the shape smoother, while the leaps create bigger changes that stand out.",
        "Which gives the motif more character: the steps or the leaps? Why?",
        "The leaps give it more character because they create the strongest changes in shape, while the steps help join the melody together.",
      ),
      Connect: variants(
        "How do the steps and leaps help you remember the melody?",
        "The steps make it easy to follow, while the leaps create moments that stand out in my memory.",
        "How does melodic shape help make this motif memorable?",
        "The mixture of smooth stepwise movement and larger leaps gives the motif a clear shape that is easy to recognise.",
        "How do selected leaps help the motif sound both memorable and heroic?",
        "The larger leaps give the melody lift and bold changes in shape, which helps it sound heroic as well as memorable.",
      ),
    },
  },
  "AUD-BAS-016": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "How many other musical layers are sounding around the bass." },
      Core: { label: "THINK ABOUT", text: "Texture and how much space the other instruments leave around the bass." },
      Stretch: { label: "THINK ABOUT", text: "Whether the bass stands out because of the bass part, the arrangement, or both." },
    },
    teacherChecks: {
      Support: "Pupils connect bass prominence with the relatively thin surrounding texture.",
      Core: "Pupils explain how texture and orchestration leave space for the bass rather than reducing the answer to loudness.",
      Stretch: "Pupils make a defensible judgement about the part versus the arrangement and justify it from what they hear.",
    },
    purposes: {
      Teach: variants(
        "Can you hear why the bass has so much space around it?",
        "There are fewer other layers around the bass, so it has more space and stands out.",
        "How does the texture help the bass line stand out?",
        "The texture is quite thin, so fewer other parts compete with the bass and it is easier to hear.",
        "How does the arrangement direct your attention towards the bass?",
        "The arrangement leaves space around the bass and reduces competing layers, so my attention is drawn towards the low line.",
      ),
      Check: variants(
        "Why is the bass line so easy to hear?",
        "There are fewer other musical layers around it, so the bass has more space and stands out.",
        "What about the texture makes the bass line stand out?",
        "The texture is thin, so fewer instruments compete with the bass. That makes the bass line much easier to hear.",
        "What matters more here: the bass part itself or the way the rest is arranged? Why?",
        "The arrangement matters more because the thin texture gives the bass space. A busier arrangement would make the same bass line less obvious.",
      ),
      Compare: variants(
        "Where does the bass stand out more: in thinner or fuller texture?",
        "The bass stands out more in the thinner texture because fewer other layers cover it.",
        "How does the bass change in prominence when the texture gets thinner or fuller?",
        "The bass becomes easier to hear as the texture gets thinner because there is less competition from other parts.",
        "Which change in texture makes the biggest difference to how clearly you hear the bass?",
        "Reducing the other layers makes the biggest difference because it creates space around the bass without changing the bass part itself.",
      ),
      Connect: variants(
        "How does a thinner texture give the bass more space?",
        "With fewer parts sounding, less music covers the bass, so it stands out more clearly.",
        "How are texture and bass prominence connected here?",
        "The thinner the surrounding texture becomes, the more clearly the bass can stand out from the other parts.",
        "How could an arranger make a bass line stand out without simply making it louder?",
        "The arranger could thin out the other layers, leave gaps around the bass, or reduce parts that compete in the same space.",
      ),
    },
  },
  "AUD-TIM-012": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "Brass and percussion." },
      Core: { label: "THINK ABOUT", text: "Brass, percussion, dynamics and texture." },
      Stretch: { label: "THINK ABOUT", text: "Which feature makes the music feel most important and ceremonial." },
    },
    teacherChecks: {
      Support: "Pupils identify brass and percussion as central to the fanfare sound.",
      Core: "Pupils connect instruments, dynamics and texture with ceremonial character rather than saying only that the music is loud or powerful.",
      Stretch: "More than one feature can be defended; quality depends on a clear musical reason for the judgement.",
    },
    purposes: {
      Teach: variants(
        "Which instrument families give this fanfare its strongest sound?",
        "The brass and percussion give the fanfare its strongest, boldest sound.",
        "What makes this music sound important and ceremonial?",
        "The brass sounds bold, the percussion adds impact, and the strong dynamics give the music weight.",
        "How do the instruments, dynamics and texture work together to make the music feel ceremonial?",
        "The brass and percussion create a strong sound, while the dynamics and fuller texture add weight and make the music feel important.",
      ),
      Check: variants(
        "Which two instrument families are most important to the sound?",
        "Brass and percussion are the two most important families in the fanfare sound.",
        "What makes this music sound important and ceremonial?",
        "The bold brass, strong percussion, dynamics and weight of the texture make the music feel important and ceremonial.",
        "Which feature matters most to the ceremonial feel, and what do you hear that supports your choice?",
        "The brass matters most to me because its bold sound dominates the fanfare, although another answer could work with a clear musical reason.",
      ),
      Compare: variants(
        "How do the brass and percussion contribute in different ways?",
        "The brass gives a bold tone, while the percussion adds impact.",
        "How do brass and percussion contribute differently to the ceremonial feel?",
        "The brass gives the fanfare a strong, bold sound, while the percussion adds weight and impact to important moments.",
        "Which has the bigger effect on the ceremonial feel: brass or percussion? Why?",
        "The brass has the bigger effect for me because its bold sound shapes the overall character, while the percussion adds extra impact.",
      ),
      Connect: variants(
        "How do the instruments help the music suit a ceremony?",
        "The brass and percussion create a strong, important sound that suits a ceremony.",
        "How do the instruments and dynamics help the music suit a ceremonial occasion?",
        "The bold brass and percussion create impact, while the strong dynamics make the music feel formal and important.",
        "Why do these choices work well for music meant to sound public, formal and important?",
        "The strong instrumental sound, dynamics and weight of the texture make the music feel designed for a large, important occasion.",
      ),
    },
  },
  "AUD-FRM-011": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "One clear change when the middle section begins." },
      Core: { label: "THINK ABOUT", text: "Instruments, dynamics and texture." },
      Stretch: { label: "THINK ABOUT", text: "How several changes work together to mark the sections." },
    },
    teacherChecks: {
      Support: "Pupils identify at least one audible contrast between the outer and middle sections.",
      Core: "Pupils connect changes in orchestration, dynamics or texture with hearing a new section.",
      Stretch: "Pupils judge which audible changes make the ternary structure clearest rather than simply naming ABA.",
    },
    purposes: {
      Teach: variants(
        "Can you hear one clear change when the middle section begins?",
        "The instruments, dynamics or texture change when the middle section begins.",
        "What changes when the middle section begins?",
        "The instruments and texture change, so the middle section sounds different from the outer sections.",
        "How do several musical changes make the middle section feel separate from the outer sections?",
        "Changes in instruments, dynamics and texture work together, so the middle section has a clearly different sound.",
      ),
      Check: variants(
        "What is one thing that changes when the middle section begins?",
        "One clear change is the sound of the instruments or the texture.",
        "What changes in the instruments, dynamics or texture when the middle section begins?",
        "The instrumental sound, dynamics and texture change, which makes the middle section easier to hear as a new section.",
        "Which change makes the middle section easiest to recognise, and why?",
        "The change in instrumental sound is the clearest clue because it immediately makes the middle section sound different from the outer sections.",
      ),
      Compare: variants(
        "What is one clear difference between the outer and middle sections?",
        "The middle section has a different instrumental sound or texture from the outer sections.",
        "How do the outer and middle sections sound different?",
        "They use different instrumental colours, dynamics and textures, so the middle section contrasts with the outer sections.",
        "Which combination of changes creates the strongest contrast between the sections?",
        "The change in instruments together with the change in texture creates the strongest contrast because both the sound colour and density shift.",
      ),
      Connect: variants(
        "How do those changes help you hear a new section?",
        "The new instrumental sound or texture tells me that the music has moved into a different section.",
        "How do changes in instruments, dynamics and texture help you hear the ternary form?",
        "The middle section sounds different, then the outer sound returns. Those contrasts help me hear the ABA shape.",
        "How can you hear the ABA shape without looking at a score?",
        "I hear the first sound, a contrasting middle section, then the return of the outer sound. The changes make the three-part shape clear.",
      ),
    },
  },
  "AUD-STY-001": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "More than one repeating rhythm at the same time." },
      Core: { label: "THINK ABOUT", text: "Layered rhythms and how thick the texture sounds." },
      Stretch: { label: "THINK ABOUT", text: "How independent rhythms fit together without becoming the same pattern." },
    },
    teacherChecks: {
      Support: "Pupils notice several rhythmic layers sounding together.",
      Core: "Pupils connect independent layered rhythms with polyrhythm and a thicker texture.",
      Stretch: "Pupils explain that textural thickness comes from the number and independence of layers, not simply loudness.",
    },
    purposes: {
      Teach: variants(
        "Can you hear more than one rhythm happening at the same time?",
        "Several different repeating rhythms are sounding together.",
        "How do the layered rhythms make the texture sound thicker?",
        "Several independent rhythms are layered at the same time, so there is more happening in the texture.",
        "How do several independent rhythms make the texture feel more complex?",
        "Each rhythm keeps its own pattern while sounding with the others, so the texture becomes denser and more complex.",
      ),
      Check: variants(
        "How many different rhythmic layers can you notice?",
        "Several different repeating rhythms are sounding at the same time.",
        "What makes this texture sound thick?",
        "Several different rhythms are layered together, so the texture sounds thick rather than like one single pattern.",
        "Why is this a thick texture even if the music is not especially loud?",
        "The texture is thick because several independent rhythms are sounding together. Thickness comes from layers, not just volume.",
      ),
      Compare: variants(
        "What changes when you focus on one rhythm and then listen to all the layers?",
        "One rhythm sounds simple on its own, while all the layers together sound much thicker.",
        "How is one rhythmic layer different from the full polyrhythmic texture?",
        "One layer has a single repeating pattern, while the full texture combines several independent patterns at once.",
        "What does the full texture contain that a single rhythmic layer cannot create on its own?",
        "The full texture contains several independent patterns interacting at once, which creates rhythmic density a single layer cannot produce.",
      ),
      Connect: variants(
        "How are polyrhythm and thick texture connected here?",
        "Several rhythms happen together, so the polyrhythm also makes the texture thicker.",
        "How do layered rhythms create both polyrhythm and a thick texture?",
        "The rhythms stay different while sounding together. That creates polyrhythm and increases the number of layers in the texture.",
        "Why does adding independent rhythms change texture more than simply making one rhythm louder?",
        "Adding rhythms creates new layers and relationships between parts. Making one rhythm louder changes volume, but it does not add textural layers.",
      ),
    },
  },
  "AUD-FILM-031": {
    scaffolds: {
      Support: { label: "LISTEN FOR", text: "One musical clue that suggests an action or mood." },
      Core: { label: "THINK ABOUT", text: "Rhythm, pitch, harmony or texture." },
      Stretch: { label: "THINK ABOUT", text: "Which musical clue makes the action or mood easiest to recognise." },
    },
    teacherChecks: {
      Support: "Pupils match an audible scoring device with an intended action or mood.",
      Core: "Pupils name an audible feature and connect it with the dramatic function rather than relying only on a story association.",
      Stretch: "Pupils judge which device communicates its dramatic function most clearly and justify the judgement from an audible feature.",
    },
    purposes: {
      Teach: variants(
        "Can you match the musical sound to the action or mood it suggests?",
        "I match the sound by noticing its rhythm, pitch, harmony or texture and linking that clue to the action or mood.",
        "What musical clue helps you work out the action or mood?",
        "The rhythm, pitch, harmony or texture gives me a clue about the action or mood the music is trying to suggest.",
        "Which musical clue makes the dramatic idea easiest to recognise, and why?",
        "The clearest clue is the feature that changes the character of the sound most strongly and fits the action or mood best.",
      ),
      Check: variants(
        "Which action or mood does this musical device suggest?",
        "The sound suggests the action or mood because of a clear feature in the rhythm, pitch, harmony or texture.",
        "What do you hear that helps you match this device to its action or mood?",
        "I hear a clear musical feature, such as rhythm, pitch, harmony or texture, that fits the action or mood.",
        "How convincing is the match between the musical device and the action or mood? Why?",
        "The match is convincing because the main musical feature supports the character of the action or mood rather than feeling unrelated.",
      ),
      Compare: variants(
        "What is the clearest difference between these two scoring devices?",
        "The two devices use different musical features, so they suggest different actions or moods.",
        "How do the two devices use music differently to suggest an action or mood?",
        "They change different features, such as rhythm, pitch, harmony or texture, so each one creates a different dramatic clue.",
        "Which device makes its action or mood clearer, and what makes it more effective?",
        "The clearer device uses a more distinctive musical feature, so its action or mood is easier to recognise from the sound alone.",
      ),
      Connect: variants(
        "How can one musical feature give you a clue about an action or mood?",
        "A change in rhythm, pitch, harmony or texture can make the sound fit a particular action or mood.",
        "How are musical features and dramatic meaning connected in screen music?",
        "Composers shape rhythm, pitch, harmony and texture so the sound gives us clues about what is happening or how it should feel.",
        "Why can the same scene feel different when the musical device changes?",
        "Changing the musical device changes the clues we hear, so the same scene can feel tense, playful, calm or dramatic in different ways.",
      ),
    },
  },
};

export function buildQuestion(asset: CatalogueAsset, challenge: Challenge, purpose: Purpose): ActivityQuestion | null {
  const pack = packs[asset.assetId];
  if (!pack) return null;

  const pupilCopy = pack.purposes[purpose][challenge];
  const scaffold = pack.scaffolds[challenge];
  const issues = pupilLanguageIssues({
    question: pupilCopy.question,
    modelResponse: pupilCopy.modelResponse,
    scaffold: scaffold.text,
  });

  if (issues.length > 0) return null;

  return {
    question: pupilCopy.question,
    modelResponse: pupilCopy.modelResponse,
    teacherCheck: pack.teacherChecks[challenge],
    scaffoldLabel: scaffold.label,
    scaffold: scaffold.text,
    source: "editorial",
  };
}
