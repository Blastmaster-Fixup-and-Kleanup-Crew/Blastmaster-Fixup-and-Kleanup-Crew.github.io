---
layout: post
title: "GNU Bison is now integrated into the BosDE build"
date: 2026-11-09 17:38:50 -0500
author: "Blastmaster Fixup & Kleanup Crew"
description: "GNU Bison 3.5.4 is now present in the BosDE i386 build environment. Work continues on building the BlastmasterOS development toolchain."
categories:
  - news
  - development
tags:
  - BlastmasterOS
  - BosDE
  - RosBE
  - Bison
  - toolchain
published: true
---

We have another development milestone to share: **GNU Bison has officially been added to the BosDE build environment**, and work is actively continuing on the **BlastmasterOS Dev Environment (BosDE)**.

## Bison is in the build

Bison is a parser generator used by build tools and software projects to turn grammar descriptions into parsers. Getting it integrated is another step toward assembling the tools needed by BosDE.

The installed executable is available in the i386 RosBE build environment. We verified it directly with:

```bash
bison --version
```

The version check reports:

```text
bison (GNU Bison) 3.5.4
```

That confirms Bison 3.5.4 is present and runnable from the BosDE build tree.

## Working through the build

BosDE is being built around the RosBE-Windows MinGW32 toolchain. During the Bison build, we encountered a MinGW compatibility issue in `spawn-pipe.c`: the compiler rejected the pointer qualification used for the `spawnvpe` argument. We adjusted the affected casts in the local source patch so the build could proceed past that issue.

The toolchain build is being driven with the following command:

```bash
bash RosBE-Windows/Buildtoolchain/buildtoolchain-mingw32.sh \
  <sources-directory> \
  <build-directory> \
  1 0 0 0 0 0 0
```

This is still an active build effort. Bison's successful version check is an important integration milestone, but it does **not** mean the complete BosDE toolchain is finished yet. We are continuing to build and verify the remaining environment.

## What's next?

The focus now is to keep the BosDE build moving, resolve any further toolchain compatibility issues that appear, and verify the resulting build tools as they become available.

BosDE is being developed as the dedicated development environment for **BlastmasterOS**. You can follow the source and ongoing development here:

**[BlastmasterOS Dev Environment — Source Code](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)**

Thank you for following along as we continue building BosDE.

**— Blastmaster Fixup & Kleanup Crew**
