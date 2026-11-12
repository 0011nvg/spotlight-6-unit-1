# Optimise Stars A2 · Starter

Interactive classroom edition of Student’s Book Starter, pages 6–9. Replaces the former Spotlight course in this repository. The supplied Optimise Stars A2 book is the only course-content source for this version.

## Included

- All numbered Starter exercises, both Grammar in context sections on page 9, Reading, Think, Me, and Remember boxes.
- 25 task cards, 93 automatically checked answer fields, open speaking/writing notes, the five-question personal-interest quiz.
- Photographs and illustrations extracted from the supplied pages, plus page views for comparison with the book.
- Local S.01–S.06 MP3 audio, with native play/pause/seek/volume controls and downloads. Tracks were encoded at 96 kbps for web delivery.
- Starter Grammar references (134 and the Starter part of 135) and Vocabulary reference (the Starter part of 147).
- 30 vocabulary cards and a translation game, derived from this Starter content. Russian translations and teacher teaching notes are supplementary classroom support.
- Browser-local progress, notes, last-section restoration and UTF-8 answer export. No account or cross-device sync.
- Learner and teacher views. The teacher switching code is **7350**, configured in `app.js`. This is a classroom convenience on a static site, not secure authentication: answer keys are part of the downloaded JavaScript. Do not use a private password as this code.

## Source coverage

| Printed page | Source activity | Interactive section |
| --- | --- | --- |
| 6 | Vocabulary 1, exercises 1–3 | Photos, definitions, discussion notes |
| 6 | Grammar 1 context, Remember, exercises 1–2 | Signs, imperatives, choices, instruction-writing |
| 7 | Reading exercises 1–2, quiz, Think | S.03, personal quiz, activity list, paired discussion, reflection |
| 7 | Grammar 2 context, Remember, exercises 1–3 | Present simple, question writing, adverb placement |
| 8 | Vocabulary 2 exercises 1–4, Me | Phrasal verbs, complete word-formation table, sentences, speaking |
| 9 | Grammar 3 context, Remember, exercises 1–2 | Three pictures, possessives, apostrophe meanings |
| 9 | Grammar 3 context, Remember, exercises 3–4 | S.06, prepositions, complete Greece text |

Multi-gap source sentences use separate answer fields. Open tasks are marked complete by the learner and discussed with a teacher; they are not automatically graded. The quiz has no correct or incorrect personal answers. Written-question checking accepts the supplied model answers; teachers can assess other valid formulations.

## Run and publish

Buildless: `index.html`, `style.css`, `content.js`, `app.js`, `assets/` and `.nojekyll` can be served directly. GitHub Pages serves the repository root. There are no package dependencies, third-party fonts or external audio/image hosts.

Units after Starter are not implemented in this version. Unit 1 (Fun times) is the next phase; old course data is not retained as placeholder content.

## Validation

- `node --check app.js` and `node --check content.js` pass.
- Source/data inspection: unique task IDs, expected exercise coverage and choice/answer consistency.
- Browser checks on desktop: matching/incorrect/empty feedback, saved answers after reload, alternate contracted verb forms, the word-formation table, possessives and cloze fields.
- All six audio files decode; browser metadata loads for S.01–S.06. No automated transcription was used to validate the recordings against keys.
- Teacher-mode browser check completed with user approval: code 7350 opens answer keys and teaching notes; switching back to learner view removes all teacher keys from the page.
- Mobile CSS is included; a physical-device check has not been performed.

The original PDF and full original audio files remain outside the public source tree. Only assets used by Starter are included here.
