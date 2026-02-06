---
hide:
  - toc
  - navigation
title: Homepage
description: 3rd party plugin tracker for compatibility with AGP and Gradle Isolated Project
---
# Status of 3rd party plugins used with Android Gradle Projects

This site is to track plugins and issues that are affected by updates from Gradle, Kotlin, and AGP.

Current AGP release: [**9.0.0**](./agp-9.0.0.md)
Current Gradle Isolated Project status: [**pre-alpha**](./gradle-project-isolation.md)

If you find a plugin is broken with the latest AGP or Gradle using Isolated Projects, and would like to add it to the list, please create a PR and do the following:

- Add a new row in the page to be updated.
- Include:
    - Plugin ID
    - Status (Fixed, Broken, Partially fixed, etc)
    - Link to issue tracker
    - Workarounds, if any (AGP tracker only)
    - Any extra notes about the plugin
- Link the issue ticket for the new plugin in the PR as well

Updates to the plugins should follow similar process as above.
