---
layout: post
title: "CMake 3.17.2-ReactOS successfully built for BosDE"
date: 2026-11-10 08:59:52 -0500
author: "Blastmaster Fixup & Kleanup Crew"
description: "CMake 3.17.2-ReactOS has successfully compiled in the BosDE i386 build environment. Work continues toward integrating it into RosBE."
categories:
  - news
  - development
tags:
  - BlastmasterOS
  - BosDE
  - RosBE
  - CMake
  - toolchain
published: true
---

We are pleased to announce another milestone in the development of the **BlastmasterOS Dev Environment (BosDE)**: **CMake 3.17.2-ReactOS has successfully built** in our i386 build environment.

CMake is an important part of the development toolchain. It is a build-system generator that helps projects configure their builds and generate the files used by tools such as Make. Bringing the ReactOS-customized version into BosDE moves us another step closer to a more complete development environment.

## CMake has successfully compiled

After continuing the build with `make -j9`, the CMake build completed without reporting errors. The resulting executable is located at:

```text
/home/jmgagnon30/BosDE/build-i386/cmake-build/bin/cmake.exe
```

We checked the executable and confirmed its reported version:

```text
cmake version 3.17.2-ReactOS
```

This verifies that the CMake executable was produced and can run in the build environment.

## Resolving a compatibility issue

During the earlier build process, we encountered a compatibility issue involving the `u_long` type in the cURL portion of the build. A source compatibility patch resolved that issue and allowed the `cmcurl` build to continue.

With that obstacle addressed, we resumed the CMake build using:

```bash
make -j9
```

The build then continued without errors, leading to the successful CMake version check.

## The next integration step

The CMake build output is currently under:

```text
/home/jmgagnon30/BosDE/build-i386/cmake-build
```

The intended installation destination in the BosDE environment is:

```text
/home/jmgagnon30/BosDE/build-i386/RosBE
```

The successful build is an important milestone, but building the executable and installing it into the final RosBE location are separate steps. We are continuing the integration work as BosDE takes shape.

## Building BosDE one tool at a time

With GNU Bison 3.5.4 already added and CMake 3.17.2-ReactOS now successfully built, another important part of the development toolchain is coming together.

BosDE is being developed as the dedicated development environment for **BlastmasterOS**. Follow the source code and ongoing development here:

**[BlastmasterOS Dev Environment — Source Code](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)**

Thank you for following our progress as we continue building BosDE.

**— Blastmaster Fixup & Kleanup Crew**
