---
layout: post
title: "GNU Binutils 2.34 build advances in BosDE"
date: 2026-11-10 09:18:31 -0500
author: "Blastmaster Fixup & Kleanup Crew"
description: "GNU Binutils 2.34 has progressed through compilation and into installation as another major toolchain component is brought into BosDE."
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

Another major component is moving forward in the **BlastmasterOS Dev Environment (BosDE)**: we have been building **GNU Binutils 2.34**, the binary utilities package used by toolchains to assemble, link, inspect, and manipulate compiled programs.

The Binutils source archive used for this build is **`binutils.tar.bz2`**, from the RosBE 2.2.1 toolchain sources.

## Building GNU Binutils 2.34

Binutils was selected in the BosDE toolchain build, with the other optional components skipped for this build pass. The build was configured with options including:

- `--disable-multilib`
- `--disable-werror`
- `--enable-lto`
- `--enable-plugins`
- `--with-zlib=yes`
- `--disable-nls`

Compilation was run with:

```bash
make -j 9
```

The build progressed through configuration of **libctf**, the library that provides support for Compact C Type Format debugging information. Compilation then appeared to complete, and the installation phase was started.

## The tools being brought into BosDE

The installation output showed a broad set of GNU and Windows-targeting binary utilities, including:

- `as-new` — assembler
- `ld-new` — linker
- `ar` and `ranlib` — archive creation and indexing
- `nm-new` — symbol listing
- `objdump` and `objcopy` — object-file inspection and transformation
- `readelf` — ELF file inspection
- `strip-new` — removal of symbol information
- `dlltool` — DLL import-library and export-file support
- `windres` and `windmc` — Windows resource and message tools

These tools are important pieces of a compiler toolchain: they help turn object files into executables and libraries, inspect the results, and support Windows-specific binary and resource workflows. The [GNU Binutils project](https://www.gnu.org/software/binutils/) provides an overview of the utilities and their roles.

## Installation is still being finalized

The installation process reached its final cleanup work, including stripping and removing debugging symbols. At the last observed point, that step had not yet visibly finished, so we are not marking the installation as fully complete just yet.

This is a significant step forward: the Binutils build has progressed through compilation and into installation, and the expected tool set is appearing in the install output. We will verify the final installed tools once the remaining cleanup finishes.

## Another step toward a complete BosDE

With GNU Bison 3.5.4 already integrated and CMake 3.17.2-ReactOS successfully built, GNU Binutils 2.34 is another major piece of the BosDE development toolchain taking shape.

BosDE is being developed as the dedicated development environment for **BlastmasterOS**. Follow the source code and ongoing development here:

**[BlastmasterOS Dev Environment — Source Code](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)**

Thank you for following our progress as we continue building BosDE.

**— Blastmaster Fixup & Kleanup Crew**
