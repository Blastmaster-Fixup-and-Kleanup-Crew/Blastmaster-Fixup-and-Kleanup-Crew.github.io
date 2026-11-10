---
layout: post
title: "GNU Binutils 2.34 installation finished and verified"
date: 2026-11-10 11:19:52 -0500
author: "Blastmaster Fixup & Kleanup Crew"
description: "The GNU Binutils 2.34 build and installation have finished successfully, and the assembler and linker version checks confirm the expected MinGW target."
categories:
  - news
  - development
tags:
  - BlastmasterOS
  - BosDE
  - RosBE
  - GNU
  - Binutils
  - toolchain
published: true
---

We have another important BosDE milestone to report: **GNU Binutils 2.34 has finished building and installing successfully**, and we have verified key tools from the completed toolchain.

This follows the earlier progress update where Binutils had reached its installation and cleanup stages. We can now confirm that the process reached its completion message and that the assembler and linker report the expected version and target.

## Build and installation completed

The parallel build completed successfully with:

```bash
make -j 9
```

The installation was then run with:

```bash
make install
```

The build script reached its final **`Finished!`** message. There was also a cleanup warning about an absent `bin/yacc` file, but it did not prevent the build and installation process from reaching completion.

## Verifying the installed tools

We checked the GNU assembler using:

```bash
as.exe --version
```

It reported:

```text
GNU assembler (GNU Binutils) 2.34
Target: i686-w64-mingw32
```

We also checked the GNU linker:

```bash
ld.exe --version
```

It reported:

```text
GNU ld (GNU Binutils) 2.34
```

Both version checks completed without errors. The assembler's target confirms that this toolchain is configured for **i686-w64-mingw32**, matching the 32-bit Windows/MinGW direction of the BosDE environment.

## A completed toolchain milestone

With the build, installation, and key executable version checks complete, **GNU Binutils 2.34 is now finished for this BosDE build**. The assembler and linker are verified, adding another foundational part of the development toolchain.

Binutils supplies essential utilities for assembling source into object files, linking programs, inspecting binaries, managing archives, and working with Windows-specific binary formats and resources.

## Continuing BosDE development

Alongside GNU Bison 3.5.4 and CMake 3.17.2-ReactOS, the completed Binutils 2.34 toolchain is another major step toward a capable development environment for **BlastmasterOS**.

Follow the source code and ongoing development here:

**[BlastmasterOS Dev Environment — Source Code](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)**

Thank you for following our progress as we continue building BosDE.

**— Blastmaster Fixup & Kleanup Crew**
