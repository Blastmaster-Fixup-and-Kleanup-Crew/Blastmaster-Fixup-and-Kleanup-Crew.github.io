---
layout: wiki
title: "Troubleshooting"
permalink: /wiki/troubleshooting
description: "A diagnostic starting point for common website and development issues."
---
This page provides general diagnostic steps. It does not replace the exact error output, build log, or project-specific instructions.

## Before changing anything

1. Record the exact command that failed.
2. Copy the complete error message, including the first error rather than only the final failure summary.
3. Record the active branch, shell, operating system, and relevant tool versions.
4. Identify which executable is actually being run.
5. Change one thing at a time so the result is understandable.

## MSYS2: wrong compiler is selected

**Symptoms:** A command reports an unexpected GCC version or target.

**Checks:**
- Confirm the active shell and MSYSTEM value.
- Run which gcc, which g++, and the corresponding target-prefixed commands.
- Inspect PATH order.
- Check compiler target and version output.

A target-prefixed compiler and the default shell compiler are not necessarily the same program.

## Build succeeds for C but not C++

**Symptoms:** The C compiler exists, but the C++ compiler is missing or points to a different installation.

**Checks:**
- Verify the G++ build and install stages separately.
- Check that the C and C++ executables come from the same intended prefix.
- Review the GCC configuration and build logs for the C++ language front end and runtime libraries.

## A patch no longer applies

**Symptoms:** A patch reports rejected hunks or cannot find the expected source file.

**Checks:**
- Confirm the archive version matches the patch's expected source version.
- Confirm the patch is being applied from the correct directory.
- Check whether the source was already patched.
- Preserve the patch output and inspect the rejected hunks before editing source files.

## A Jekyll page does not appear

**Checks:**
- Confirm the Markdown file has valid YAML front matter.
- Check that its permalink is unique.
- Confirm the layout file exists under _layouts.
- Review the GitHub Pages build/deployment log for Liquid or YAML errors.
- Check whether the page is excluded by Jekyll configuration.

## Reporting a problem

Include the smallest reproducible set of details: environment, exact steps, expected result, actual result, and relevant logs. Remove passwords, access tokens, private keys, and other secrets before sharing diagnostic output.

For project-specific help, open the relevant repository and use its issue tracker or contribution instructions.
