---
hide:
  - toc
  - navigation  
---
Current Release: **9.0.0-alpha06**

Release notes: https://developer.android.com/build/releases/agp-preview

| Plugin | Status | Issue link | Workarounds? | Notes |
|:---|:---|:---|:---|:---|
| `com.google.devtools.ksp` | Partially fixed | https://github.com/google/ksp/pull/2579 | None | Note: KSP 2.0.3 was released, but only for Kotlin 2.2.20. Requesting release for previous versions as well. |
| `com.google.firebase.firebase-perf` | Broken | https://github.com/firebase/firebase-android-sdk/issues/7293 | None | |
| `com.google.dagger.hilt.android` | Broken | https://github.com/google/dagger/issues/4944<br>https://github.com/google/dagger/issues/4979 | <pre>android.newDsl=false<br>android.enableLegacyVariantApi=true</pre> | Second issue as of `alpha06`. Both required to use hilt android. |
| `androidx.baselineprofile` | Broken | https://issuetracker.google.com/issues/443311090 | `android.newDsl=false` | |
| `androidx.navigation.safeargs` | Broken | https://issuetracker.google.com/issues/442620441 | None | |
| `com.squareup.wire` | Broken | https://github.com/square/wire/issues/3371 | `android.enableLegacyVariantApi=true` | |
| `de.mannodermaus.android-junit5` | Fixed (1.13.4.0) | https://github.com/mannodermaus/android-junit5/issues/380 | `android.newDsl=false` | |
| `com.google.android.gms:oss-licenses-plugin` | Fixed (0.10.8) | | `android.newDsl=false` | |
| `com.apollographql.apollo` | Fixed (5.0.0-alpha.3) | https://github.com/apollographql/apollo-kotlin/issues/6693 | `android.newDsl=false` | Addressed by https://github.com/apollographql/apollo-kotlin/pull/6703 |
| `org.gradle.android.cache-fix` | Broken | https://github.com/gradle/android-cache-fix-gradle-plugin/issues/447 | `android.newDsl=false` | [Draft PR](https://github.com/gradle/android-cache-fix-gradle-plugin/pull/1886) created but waiting for https://issuetracker.google.com/issues/443225252 | |
| `com.jaredsburrows.license` | Broken | https://github.com/jaredsburrows/gradle-license-plugin/issues/693 | <pre>android.newDsl=false<br>android.enableLegacyVariantApi=true</pre> | |
| `com.google.firebase.testlab` | Broken | https://issuetracker.google.com/issues/444866155 | None | |
| `app.cash.burst` | Fixed (2.10.0) | https://github.com/cashapp/burst/issues/197 | None | Addressed by https://github.com/cashapp/burst/pull/200 |
