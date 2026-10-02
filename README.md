# 按岗定制简历

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

只基于已有材料按 JD 改写，禁止捏造经历。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-resume-tailor
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-resume-tailor": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-resume-tailor/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `draft_resume` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-resume-tailor/SKILL.md`.

## License

MIT — see `LICENSE`.
