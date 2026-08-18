"use client";

import { useMemo, useState } from "react";
import { catalogue, pilotCatalogue, previewCatalogue, type Challenge, type Purpose } from "@/lib/catalogue";
import { buildQuestion, type ActivityQuestion } from "@/lib/questionEngine";

type Stage = "build" | "ready" | "live";
type ResponseMode = "Independent" | "Partner";
type ResponseMethod = "Mini whiteboards" | "Hand signals" | "Turn & Talk" | "Think-Pair-Share" | "Compare & Contrast" | "Vote → Discuss → Vote";

const challenges: Challenge[] = ["Support", "Core", "Stretch"];
const purposes: Purpose[] = ["Teach", "Check", "Compare", "Connect"];

function driveStreamUrl(link: string) {
  const match = link.match(/\/d\/([^/]+)/);
  return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : link;
}

export default function Home() {
  const [stage, setStage] = useState<Stage>("build");
  const [area, setArea] = useState(previewCatalogue[0]?.primaryCategory ?? "");
  const [concept, setConcept] = useState(previewCatalogue[0]?.musicalConcepts[0] ?? "");
  const [challenge, setChallenge] = useState<Challenge>("Core");
  const [purpose, setPurpose] = useState<Purpose>("Check");
  const [responseMode, setResponseMode] = useState<ResponseMode>("Independent");
  const [responseMethod, setResponseMethod] = useState<ResponseMethod>("Mini whiteboards");
  const [followOn, setFollowOn] = useState<ActivityQuestion | null>(null);
  const [showLiveModel, setShowLiveModel] = useState(false);

  const available = useMemo(
    () => previewCatalogue.filter((item) => item.primaryCategory === area && item.musicalConcepts.some((term) => term.toLowerCase() === concept.toLowerCase())),
    [area, concept],
  );

  const asset = available[0] ?? previewCatalogue.find((item) => item.primaryCategory === area) ?? previewCatalogue[0];
  const activity = asset ? buildQuestion(asset, challenge, purpose) : null;
  const audioPlayable = Boolean(asset?.pilotApproved && asset.repositoryLink);

  const areas = Array.from(new Set(previewCatalogue.map((item) => item.primaryCategory)));
  const concepts = Array.from(new Set(previewCatalogue.filter((item) => item.primaryCategory === area).flatMap((item) => item.musicalConcepts)));

  function clearFollowOn() {
    setFollowOn(null);
    setShowLiveModel(false);
  }

  function chooseArea(value: string) {
    setArea(value);
    const next = previewCatalogue.find((item) => item.primaryCategory === value);
    setConcept(next?.musicalConcepts[0] ?? "");
    clearFollowOn();
    setStage("build");
  }

  function chooseConcept(value: string) {
    setConcept(value);
    clearFollowOn();
  }

  function chooseChallenge(value: Challenge) {
    setChallenge(value);
    clearFollowOn();
  }

  function choosePurpose(value: Purpose) {
    setPurpose(value);
    clearFollowOn();
  }

  function chooseMode(mode: ResponseMode) {
    setResponseMode(mode);
    setResponseMethod(mode === "Independent" ? "Mini whiteboards" : "Turn & Talk");
  }

  function quickFollowOn(kind: "support" | "apply" | "stretch") {
    if (!asset) return;
    const nextChallenge: Challenge = kind === "support" ? "Support" : kind === "stretch" ? "Stretch" : challenge;
    const nextPurpose: Purpose = kind === "apply" ? "Connect" : "Check";
    setFollowOn(buildQuestion(asset, nextChallenge, nextPurpose));
    setShowLiveModel(false);
  }

  function navigate(next: Stage) {
    if (next === "build") {
      clearFollowOn();
      setStage("build");
      return;
    }
    if (!activity) return;
    if (next === "ready") clearFollowOn();
    setStage(next);
  }

  if (!asset) {
    return <main className="empty-state">No preview catalogue assets are available yet.</main>;
  }

  const shownActivity = followOn ?? activity;

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-play">▶</div>
          <div><strong>Music Ready to Teach</strong><span>Listening Lab</span></div>
        </div>
        <div className="pilot-pill">INTERACTIVE PREVIEW</div>
      </header>

      <nav className="progress" aria-label="Activity progress">
        {(["build", "ready", "live"] as Stage[]).map((item, index) => {
          const disabled = item !== "build" && !activity;
          return (
            <button key={item} disabled={disabled} className={stage === item ? "step active" : "step"} onClick={() => navigate(item)}>
              <span>{index + 1}</span>{item === "build" ? "Build" : item === "ready" ? "Ready" : "Go Live"}
            </button>
          );
        })}
      </nav>

      {stage === "build" && (
        <section className="screen build-grid">
          <div className="panel controls-panel">
            <p className="eyebrow">QUICK BUILD</p>
            <h1>What are you teaching?</h1>
            <p className="muted">Browse real catalogue meaning across the Listening Lab. Audio stays locked where rights are not yet cleared.</p>

            <label>Musical area</label>
            <select value={area} onChange={(e) => chooseArea(e.target.value)}>
              {areas.map((item) => <option key={item}>{item}</option>)}
            </select>

            <label>Key concept</label>
            <div className="chips">
              {concepts.map((item) => (
                <button key={item} className={concept === item ? "chip selected" : "chip"} onClick={() => chooseConcept(item)}>{item}</button>
              ))}
            </div>

            <label>Challenge</label>
            <div className="segmented">
              {challenges.map((item) => <button key={item} className={challenge === item ? "selected" : ""} onClick={() => chooseChallenge(item)}>{item}</button>)}
            </div>

            <label>What do you want pupils to do?</label>
            <div className="purpose-grid">
              {purposes.map((item) => <button key={item} className={purpose === item ? "purpose selected" : "purpose"} onClick={() => choosePurpose(item)}>{item}</button>)}
            </div>
          </div>

          <div className="panel preview-panel">
            <div className="source-row"><span>CATALOGUE SOURCE</span><strong>{asset.assetId}</strong></div>
            <h2>{asset.knowledgeSkill}</h2>
            <div className="meta-line">{asset.useType} · {asset.styleContext} · {asset.placement}</div>
            <div className="divider" />
            {activity ? (
              <>
                <p className="eyebrow">QUESTION FOR PUPILS</p>
                <div className="preview-question">{activity.question}</div>
                <p className="eyebrow">LISTEN FOR</p>
                <p>{activity.listenFor}</p>
                <div className="quality-pass">✓ Grounded in this asset&apos;s Knowledge / Skill · {challenge} · {purpose}</div>
              </>
            ) : (
              <div className="quality-hold"><strong>Needs editorial question</strong><p>This asset will not go live with a generic fallback question.</p></div>
            )}
            {!audioPlayable && <div className="rights-notice">🔒 Activity flow available for testing. Audio hidden while rights/provenance are under review.</div>}
            <button className="primary full" disabled={!activity} onClick={() => navigate("ready")}>Build activity</button>
          </div>
        </section>
      )}

      {stage === "ready" && activity && (
        <section className="screen ready-grid">
          <div className="panel ready-main">
            <p className="eyebrow">READY TO TEACH</p>
            <h1>{activity.question}</h1>
            <div className="model-card"><span>MODEL / EXEMPLAR RESPONSE</span><p>{activity.modelResponse}</p></div>
            <div className="teacher-check"><strong>What to look for:</strong> {activity.teacherCheck}</div>
            <div className="listen-card"><span>LISTEN FOR</span><p>{activity.listenFor}</p></div>
            <button className="text-action" onClick={() => navigate("build")}>← Change the activity</button>
          </div>

          <aside className="panel response-panel">
            <div className="audio-card">
              <div><strong>{asset.assetId}</strong><span>{asset.repositoryFile}</span></div>
              {audioPlayable ? (
                <>
                  <audio controls preload="metadata" src={driveStreamUrl(asset.repositoryLink)} />
                  <a href={asset.repositoryLink} target="_blank" rel="noreferrer">Open audio in Drive ↗</a>
                </>
              ) : (
                <div className="audio-lock"><strong>Audio locked in public preview</strong><span>{asset.rightsReview}</span><small>You can still test question design, response routines and follow-on branching.</small></div>
              )}
            </div>

            <p className="eyebrow">1. RESPONSE MODE</p>
            <div className="mode-grid">
              {(["Independent", "Partner"] as ResponseMode[]).map((mode) => <button key={mode} className={responseMode === mode ? "mode selected" : "mode"} onClick={() => chooseMode(mode)}>{mode === "Partner" ? "With a partner" : "Independently"}</button>)}
            </div>

            <div className="nested-options">
              <p className="eyebrow">2. CHOOSE METHOD</p>
              {(responseMode === "Independent" ? ["Mini whiteboards", "Hand signals"] : ["Turn & Talk", "Think-Pair-Share", "Compare & Contrast", "Vote → Discuss → Vote"]).map((method) => (
                <button key={method} className={responseMethod === method ? "method selected" : "method"} onClick={() => setResponseMethod(method as ResponseMethod)}>{method}</button>
              ))}
            </div>
            <button className="primary full" onClick={() => { clearFollowOn(); setStage("live"); }}>Go Live</button>
          </aside>
        </section>
      )}

      {stage === "live" && shownActivity && (
        <section className="screen live-screen">
          <div className="live-top"><span>{responseMethod.toUpperCase()}</span><span>{followOn ? "FOLLOW-ON" : `${concept.toUpperCase()} · ${challenge.toUpperCase()} · ${purpose.toUpperCase()}`}</span></div>
          <div className="live-question">{shownActivity.question}</div>
          {audioPlayable ? (
            <audio className="live-audio" controls preload="auto" src={driveStreamUrl(asset.repositoryLink)} />
          ) : (
            <div className="live-audio-lock">🔒 Audio unavailable in this public preview · interaction testing remains active</div>
          )}
          <p className="live-instruction">Listen → think → respond → show your evidence.</p>

          <div className="teacher-dock">
            <div className="dock-check"><strong>Quick class check</strong><span>{shownActivity.teacherCheck}</span></div>
            <div className="branch-buttons">
              <button onClick={() => quickFollowOn("support")}><strong>Needs support</strong><span>Simplify + recheck</span></button>
              <button onClick={() => quickFollowOn("apply")}><strong>Mostly secure</strong><span>Apply it</span></button>
              <button onClick={() => quickFollowOn("stretch")}><strong>Ready to stretch</strong><span>Increase the thinking</span></button>
            </div>
            <div className="dock-actions">
              <button onClick={() => setShowLiveModel((value) => !value)}>{showLiveModel ? "Hide model response" : "Reveal model response"}</button>
              <button onClick={() => navigate("ready")}>Back to Ready</button>
              <button onClick={() => navigate("build")}>New activity</button>
            </div>
            {showLiveModel && <div className="live-model"><strong>Model response</strong><span>{shownActivity.modelResponse}</span></div>}
            {followOn && <div className="follow-on-note"><strong>Follow-on spun up instantly.</strong> Same asset and musical meaning, adjusted cognitive demand.</div>}
          </div>
        </section>
      )}

      <footer className="statusbar">
        <span>{catalogue.length} real catalogue records in this preview · {pilotCatalogue.length} audio-playable</span>
        <span>No pupil data captured</span>
      </footer>
    </main>
  );
}
