#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "resume-tailor",
  "titleZh": "按岗定制简历",
  "summary": "只基于已有材料按 JD 改写，禁止捏造经历。",
  "tools": [
    "draft_resume"
  ],
  "proxyTools": {
    "draft_resume": "zc_assets_draft_resume"
  },
  "localKind": "draft"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
