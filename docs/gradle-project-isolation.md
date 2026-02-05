---
hide:
  - toc
  - navigation  
---
Current Status as of: **9.3.0**

## [Isolated Projects](https://docs.gradle.org/current/userguide/isolated_projects.html)

## Known Issues

#### Legend:

- :green_heart: Fixed
- :red_circle: Broken

| Plugin | Status                      | Issue link                                       | Workarounds? | Notes                                                                                                                                              |
|:---|:----------------------------|:-------------------------------------------------|:---|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| `com.google.devtools.ksp` | :green_heart: Fixed (2.3.4) | https://github.com/google/ksp/pull/2713          |  | Requires KGP 2.3.0 and `ksp.project.isolation.enabled=true`                                                                                        |
| `org.jetbrains.kotlin.jvm` | :green_heart: Fixed (2.1.0) | https://youtrack.jetbrains.com/issue/KT-74394 & https://youtrack.jetbrains.com/issue/KT-71074 |  | See https://youtrack.jetbrains.com/issue/KT-66049/KGP-JVM-Publishing-isnt-compatible-with-isolated-projects-and-project-dependencies for more info |
| `org.jetbrains.kotlin.multiplatform` | :red_circle: Broken         | https://youtrack.jetbrains.com/issue/KT-80311 |  | Broken due to WASM/js                                                                                                                              |
