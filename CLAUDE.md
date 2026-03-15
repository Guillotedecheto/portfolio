# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment

- **OS**: Windows 11, but use Unix shell syntax (bash) — forward slashes, `/dev/null`, etc.
- **Shell**: bash via Claude Code
- **Working directory**: `C:\Users\guill` — this is a personal home directory, not a project root

## Context

No persistent code project lives here. Claude Code is used to start new projects or work on code brought into context ad-hoc. When a project is created, it will likely be placed under `OneDrive/Escritorio/Proyectos/` or a subdirectory of the home folder.

## Plugins Available

Claude Code has the official plugin marketplace installed at `.claude/plugins/`. Relevant plugins include:
- LSP support for TypeScript, Python, Go, Rust, C#, and others
- Agent SDK plugin for building Claude-powered agents
- Commit, PR review, and code review skill plugins
