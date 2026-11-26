# Fortune Cookie Funnies for Engineers

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Rank](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a-entry-v1/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Reward](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a-entry-v1/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

Entry for the [Fortune Cookie Funnies for Engineers](https://make.fun/competitions/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) competition on make.fun.

## Description

A program that writes a single fresh fortune-cookie message for a software engineer to `/output/entry.txt` — one line, max 120 characters, landing on first read. The fortune is validated before writing (non-blank, exactly one line, 1–120 chars, no control characters), then re-read from disk and asserted byte-equal to what was written.

## Run

```bash
npx tsx main.ts
```

Or compile and run with the TypeScript compiler:

```bash
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
```

The output directory is resolved from the `MAKEFUN_OUTPUT_DIR` environment variable, falling back to `/output`. The program writes `entry.txt` there.
