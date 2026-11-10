---
layout: post
title: "GNU Binutils 2.34 successfully built and installed in BosDE"
date: 2026-11-10 09:18:31 -0500
author: "Blastmaster Fixup & Kleanup Crew"
description: "GNU Binutils 2.34 has successfully completed its build and installation in the BosDE i386 environment."
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

Another major component is now complete in the **BlastmasterOS Dev Environment (BosDE)**: **GNU Binutils 2.34 has successfully built and installed**. Binutils is the collection of binary utilities used by toolchains to assemble, link, inspect, and manipulate compiled programs.

The Binutils source archive used for this build was **`binutils.tar.bz2`**, from the RosBE 2.2.1 toolchain sources.

## GNU Binutils 2.34 successfully built

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

The build progressed through configuration and compilation of **libctf**, the library that provides support for Compact C Type Format debugging information. The compilation completed, and the installation phase followed.

## Binutils tools installed in BosDE

The installation included a broad set of GNU and Windows-targeting binary utilities, including:

- `as-new` — assembler
- `ld-new` — linker
- `ar` and `ranlib` — archive creation and indexing
- `nm-new` — symbol listing
- `objdump` and `objcopy` — object-file inspection and transformation
- `readelf` — ELF file inspection
- `strip-new` — removal of symbol information
- `dlltool` — DLL import-library and export-file support
- `windres` and `windmc` — Windows resource and message tools

Together, these utilities help turn object files into executables and libraries, inspect the results, and support Windows-specific binary and resource workflows. The [GNU Binutils project](https://www.gnu.org/software/binutils/) provides an overview of the utilities and their roles.

## Installation completed

The installation proceeded through its final cleanup operations, including stripping and removing debugging symbols, and **completed successfully**. GNU Binutils 2.34 is now built and installed as part of the BosDE toolchain.

This marks the completion of another substantial toolchain component and brings the assembler, linker, binary inspection, archive, and Windows resource utilities into the development environment.

## Another step toward a complete BosDE

With GNU Bison 3.5.4 integrated, CMake 3.17.2-ReactOS successfully built, and GNU Binutils 2.34 now built and installed, the BosDE development toolchain continues to take shape.

BosDE is being developed as the dedicated development environment for **BlastmasterOS**. Follow the source code and ongoing development here:

**[BlastmasterOS Dev Environment — Source Code](https://github.com/Blastmaster-Fixup-and-Kleanup-Crew/BlastmasterOS-Dev-Environment)**

Thank you for following our progress as we continue building BosDE.

**— Blastmaster Fixup & Kleanup Crew**
