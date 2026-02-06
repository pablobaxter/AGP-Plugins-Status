---
hide:
  - toc
  - navigation
title: Gradle Isolated Projects
description: 3rd party plugin tracker for compatibility with Gradle Isolated Project
---
Current Status as of: **9.3.0**

## [Isolated Projects](https://docs.gradle.org/current/userguide/isolated_projects.html)

## Known Issues

#### Legend:

- :green_heart: Fixed
- :red_circle: Broken

| Plugin | Status                      | Issue link                                                                                    | Notes                                                                                                                                                             |
|:---|:---|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `com.diffplug.spotless`                  | :red_circle: Broken                  | https://github.com/diffplug/spotless/issues/1979                                              |                                                                                                                                                                   |
| `org.jetbrains.kotlin.multiplatform` | :red_circle: Broken                  | https://youtrack.jetbrains.com/issue/KT-80311                                                 | Broken due to WASM/js                                                                                                                                             |
| `com.google.devtools.ksp`            | :green_heart: Fixed (2.3.4)          | https://github.com/google/ksp/pull/2713                                                       | Requires KGP 2.3.0 and `ksp.project.isolation.enabled=true`                                                                                                       |
| `org.jetbrains.kotlin.jvm`           | :green_heart: Fixed (2.1.0)          | https://youtrack.jetbrains.com/issue/KT-74394 & https://youtrack.jetbrains.com/issue/KT-71074 | See this [ticket](https://youtrack.jetbrains.com/issue/KT-66049/KGP-JVM-Publishing-isnt-compatible-with-isolated-projects-and-project-dependencies) for more info |
| `com.apollographql.apollo`           | :green_heart: Fixed (5.0.0-alpha.0)  | https://github.com/apollographql/apollo-kotlin/pull/6351                                      |                                                                                                                                                                   |
| `org.jetbrains.kotlinx.benchmark`    | :green_heart: Fixed (0.4.16)         | https://github.com/Kotlin/kotlinx-benchmark/issues/258                                        |                                                                                                                                                                   |
| `com.squareup.wire`                  | :green_heart: Fixed (4.9.11)         | https://github.com/square/wire/pull/3078                                                      |                                                                                                                                                                   |
| `com.google.firebase.firebase-perf`  | :green_heart: Fixed (2.0.1)          | https://github.com/firebase/firebase-android-sdk/issues/6748                                  |                                                                                                                                                                   |
| `com.google.firebase.crashlytics`    | :green_heart: Fixed (3.0.6)          | https://github.com/firebase/firebase-android-sdk/issues/6748                                  |                                                                                                                                                                   |
