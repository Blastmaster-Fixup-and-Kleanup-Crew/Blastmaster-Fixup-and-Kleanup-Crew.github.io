---
layout: wiki
title: "Roadmap & status"
permalink: /wiki/roadmap
description: "How to interpret current work and future plans across BFKC projects."
---
This page summarizes publicly described directions. It is not a release schedule, and it does not replace the latest information in each repository.

## Current areas of work

### BFKC website and Wiki
The website uses GitHub Pages and Jekyll. This Wiki is intended to grow alongside the projects and should be updated as verified information changes.

### BlastmasterOS
The operating-system project is under development. Consult its repository for the current source, build process, and implementation status.

### BosDE
The Windows/MSYS2 toolchain build is the current hands-on focus. The broader project direction includes additional Unix-like hosts (including macOS) and architecture targets. Those targets require their own completed builds and verification before being described as supported.

### BlastmasterServer
A separate server counterpart to BlastmasterOS is planned. Its feature set and implementation status should be documented as decisions and working code become available.

## How to read status claims

- **Implemented** should mean code exists and the behavior has been verified.
- **In progress** means work is underway but may be incomplete.
- **Planned** means an intention, not an implementation.
- **Supported** should be reserved for targets with documented build and test evidence.

## Keeping this page accurate

When a project reaches a milestone, update this page and the relevant project article with a link to the commit, release, test log, or other evidence. Avoid adding speculative dates.
