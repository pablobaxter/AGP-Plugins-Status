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

- :green_heart: Ready
- :yellow_square: Partially Fixed
- :red_circle: Broken

| Plugin | Status | Issue link | Notes |
|:---|:---|:---|:---|
| `co.touchlab.skie` | :green_heart: Ready (0.10.14) | [https://github.com/touchlab/SKIE/issues/178](https://github.com/touchlab/SKIE/pull/196) | |
| `com.diffplug.spotless` | :yellow_square: Partial Fix (8.3.0) | https://github.com/diffplug/spotless/issues/1979 | |
| `org.jetbrains.kotlinx.binary-compatibility-validator` | 🔴 Broken | https://youtrack.jetbrains.com/issue/KT-78262 | Probably not resolved until it's finished moving to KGP |
| `org.jetbrains.kotlin.multiplatform` | :red_circle: Broken | https://youtrack.jetbrains.com/issue/KT-80311 | Broken due to WASM/js |
| `com.jraska.module.graph.assertion` | :red_circle: Broken | https://github.com/jraska/modules-graph-assert/issues/322 | [Fork that works with isolated projects](https://github.com/eduardbosch/modules-graph-assert) |
| `com.google.devtools.ksp` | :green_heart: Ready (2.3.4) | https://github.com/google/ksp/pull/2713 | Requires KGP 2.3.0 and `ksp.project.isolation.enabled=true` |
| `org.jetbrains.kotlin.jvm` | :green_heart: Ready (2.1.0) | https://youtrack.jetbrains.com/issue/KT-74394 & https://youtrack.jetbrains.com/issue/KT-71074 | See this [ticket](https://youtrack.jetbrains.com/issue/KT-66049/KGP-JVM-Publishing-isnt-compatible-with-isolated-projects-and-project-dependencies) for more info |
| `com.apollographql.apollo` | :green_heart: Ready (5.0.0-alpha.0) | https://github.com/apollographql/apollo-kotlin/pull/6351 | |
| `org.jetbrains.kotlinx.benchmark` | :green_heart: Ready (0.4.16) | https://github.com/Kotlin/kotlinx-benchmark/issues/258 |
| `com.squareup.wire` | :green_heart: Ready (4.9.11) | https://github.com/square/wire/pull/3078 |
| `com.google.firebase.firebase-perf` | :green_heart: Ready (2.0.1) | https://github.com/firebase/firebase-android-sdk/issues/6748 | |
| `com.google.firebase.crashlytics` | :green_heart: Ready (3.0.6) | https://github.com/firebase/firebase-android-sdk/issues/6748 | |
| `com.google.firebase.crashlytics` | :green_heart: Ready (3.0.6) | https://github.com/firebase/firebase-android-sdk/issues/6748 | |
| `com.autonomousapps.build-health` | :green_heart: Ready (1.31.0) | https://github.com/autonomousapps/dependency-analysis-gradle-plugin/pull/1153 | |
| `com.osacky.doctor` | :red_circle: Broken | https://github.com/runningcode/gradle-doctor/issues/481 | |
| `com.newrelic.agent.android` | :red_circle: Broken | https://github.com/newrelic/newrelic-android-agent/issues/617 | Broken as of 7.8.1. `BuildHelper` reads `rootProject` in `hasOptional` and `checkReactNative`, so configuration fails as soon as the plugin is applied. Fix proposed in [#618](https://github.com/newrelic/newrelic-android-agent/pull/618) |
| `snyk-gradle-plugin` (Snyk CLI) | :red_circle: Broken | https://github.com/snyk/snyk-gradle-plugin/issues/344 | Not applied by id: the Snyk CLI injects an init script with `-I` when you run `snyk test`. It forces `--no-configuration-cache` on Gradle 7+, which Gradle refuses when Isolated Projects is on, so the scan fails before resolving anything. Per-invocation workaround: `snyk test -- -Dorg.gradle.unsafe.isolated-projects=false`. Fix proposed in [#352](https://github.com/snyk/snyk-gradle-plugin/pull/352) |
