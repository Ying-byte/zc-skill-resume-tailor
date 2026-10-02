---
name: zc-skill-resume-tailor
description: >-
  只基于已有材料按 JD 改写，禁止捏造经历。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-resume-tailor.
---

# 按岗定制简历 · Skill

## When to use

- User asks for: 按岗定制简历
- 只基于已有材料按 JD 改写，禁止捏造经历。

## Tools (`zc-skill-resume-tailor`)

| Tool | Args |
|------|------|
| `draft_resume` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
