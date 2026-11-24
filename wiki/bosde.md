---
layout: wiki
title: "BosDE"
permalink: /wiki/bosde
description: "BlastmasterOS Development Environment: goals, architecture, and toolchain strategy."
---
**BosDE** stands for **BlastmasterOS Development Environment**. It is a toolchain and build-environment project intended to support development of BlastmasterOS.

Repository: [BlastmasterOS-Dev-Environment](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)

## Project decisions

The current project direction records these decisions:

- **Architectures:** all intended target architectures, rather than limiting the project to one CPU family.
- **Toolchain strategy:** hybrid, combining suitable prebuilt/native tools with tools built as part of the environment where appropriate.
- **Packaging:** native packages for supported environments.
- **Current build focus:** Windows/MSYS2 toolchains, with Unix-like platforms including macOS and additional architecture work intended as later stages.

These are project goals and decisions; they do not mean every target toolchain or host platform is already complete.

## Toolchain components

The RosBE-derived toolchain work has involved components such as:

- GNU Binutils for assembler, linker, and related binary utilities.
- GCC for C and C++ compilation.
- GNU Bison and Flex for parser generation.
- GMP, MPFR, and MPC as compiler dependencies.
- CMake and Ninja for build configuration and execution.
- MinGW-w64 components for Windows-target support.

Versions and patches are build-specific. Consult the repository's source manifests and build scripts rather than assuming that every component uses the latest upstream release.

## Build workflow at a high level

1. Prepare the supported host shell and compiler environment.
2. Verify required host tools and target tools.
3. Obtain the source archives and any project patches.
4. Configure the target triplet and installation prefix.
5. Build dependencies in the order required by the scripts.
6. Verify the installed compiler, linker, assembler, and target headers.
7. Record the exact versions and test results.

## Important distinction: host and target

The **host** is the machine and environment running the build. The **target** is the platform for which the generated compiler or binaries are intended. A compiler executable being present does not, by itself, prove that it targets the intended architecture or operating system.

## Platform status

Windows/MSYS2 is the current hands-on build focus. Unix-like hosts, including macOS, and additional architectures are part of the broader goal and should be considered planned until their build and verification steps are documented in the repository.

See [BosDE on Windows]({{ '/wiki/bosde-windows' | relative_url }}) for the current Windows-oriented notes.
