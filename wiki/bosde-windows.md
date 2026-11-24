---
layout: wiki
title: "BosDE on Windows"
permalink: /wiki/bosde-windows
description: "A practical overview of the Windows/MSYS2 BosDE build workflow."
---
This article records the Windows/MSYS2 direction of the BosDE build. The build scripts and repository are authoritative: paths, package names, versions, and build steps may change as the toolchain is repaired and verified.

## Host environment

The current Windows build work uses a portable MSYS2 installation and a non-administrator workflow. The relevant shell for the 32-bit MinGW build script is **MSYS2 MinGW 32-bit** (MSYSTEM=MINGW32), not the plain MSYS shell.

The MSYS shell can be useful for general Unix-like utilities, but it does not provide the same compiler environment as the MinGW32 shell.

## Check the environment

Before building, verify:

- The intended MSYS2 shell is active.
- MSYSTEM reports the expected environment.
- Required host programs such as Bash, Git, CMake, Ninja, Make, Python, and Perl are available.
- The MinGW32 compiler directory is on the expected PATH.
- The target-prefixed compiler, linker, and assembler resolve to the intended BosDE installation after installation.

Do not assume that a successful host check means the target compiler is complete.

## Host compiler versus target compiler

A common source of confusion is having more than one compiler on PATH. For example, the shell may find an MSYS2 compiler while a target-prefixed BosDE compiler exists elsewhere.

Use the which command to identify the executable being invoked and inspect the compiler's reported target and version. Verify the C and C++ compilers independently; a working target GCC executable does not prove that the corresponding G++ executable has been installed correctly.

## Build script

The Windows-oriented script used in the current work is:

RosBE-Windows/Buildtoolchain/buildtoolchain-mingw32.sh

Read the script before running it. Confirm its target triplet, module list, source locations, and installation prefix. Do not copy paths from an old log without checking the current checkout.

## Source archives and patches

BosDE uses source archives and project-specific patches. Keep the source archive versions consistent with the version manifest and apply patches only to the intended source tree. A patch that applies to one upstream version may not apply cleanly to another.

## Verification checklist

- [ ] Build ran in the intended MSYS2 MinGW32 shell.
- [ ] The target C compiler resolves to the BosDE prefix.
- [ ] The target C++ compiler resolves to the BosDE prefix.
- [ ] Compiler target triplet is correct.
- [ ] Target assembler and linker resolve to the expected toolchain.
- [ ] Compiler version and thread model are recorded.
- [ ] A small target test program compiles and links.
- [ ] Build logs and any local patches are retained for diagnosis.

## Troubleshooting

If the wrong compiler is being selected, inspect PATH order and the output of which. If a target compiler is only partially installed, return to the build logs and verify each module's install step rather than treating a directory's existence as proof of success.

For general guidance, see [Troubleshooting]({{ '/wiki/troubleshooting' | relative_url }}).
