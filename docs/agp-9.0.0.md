---
hide:
  - toc
  - navigation  
---
Current Release: **9.0.0-alpha07**

Release notes: https://developer.android.com/build/releases/agp-preview

**Note: For AGP 9.0.0-alpha06, there is discussions about `android.enableLegacyVariantApi=true` usage here: https://issuetracker.google.com/issues/446123111**

| Plugin | Status | Issue link | Workarounds? | Notes |
|:---|:---|:---|:---|:---|
| `com.google.devtools.ksp` | Fixed (2.2.20-2.0.3) | https://github.com/google/ksp/pull/2579 | None | Note: KSP 2.0.3 was released, but only for Kotlin 2.2.20. Requesting release for previous versions as well. |
| `com.google.firebase.firebase-perf` | Broken | https://github.com/firebase/firebase-android-sdk/issues/7293 | None | |
| `com.google.dagger.hilt.android` | Broken | https://github.com/google/dagger/issues/4944<br>https://github.com/google/dagger/issues/4979 | <pre>android.newDsl=false<br>android.enableLegacyVariantApi=true</pre> | Second Gradle property should not be necessary, and only came about as of AGP 9.0.0-alpha06. |
| `androidx.baselineprofile` | Broken | https://issuetracker.google.com/issues/443311090 | `android.newDsl=false` | |
| `androidx.navigation.safeargs` | Fixed (2.9.5) | https://issuetracker.google.com/issues/442620441 | None | Addressed by https://r.android.com/3754932 |
| `com.squareup.wire` | Broken | https://github.com/square/wire/issues/3371 | `android.enableLegacyVariantApi=true` | |
| `de.mannodermaus.android-junit5` | Fixed (1.13.4.0) | https://github.com/mannodermaus/android-junit5/issues/380 | `android.newDsl=false` | |
| `com.google.android.gms:oss-licenses-plugin` | Fixed (0.10.8) | | `android.newDsl=false` | |
| `com.apollographql.apollo` | Fixed (5.0.0-alpha.3) | https://github.com/apollographql/apollo-kotlin/issues/6693 | `android.newDsl=false` | Addressed by https://github.com/apollographql/apollo-kotlin/pull/6703 |
| `org.gradle.android.cache-fix` | Broken | https://github.com/gradle/android-cache-fix-gradle-plugin/issues/447 | `android.newDsl=false` | [Draft PR](https://github.com/gradle/android-cache-fix-gradle-plugin/pull/1886) created but waiting for https://issuetracker.google.com/issues/443225252 | |
| `com.jaredsburrows.license` | Broken | https://github.com/jaredsburrows/gradle-license-plugin/issues/693 | <pre>android.newDsl=false<br>android.enableLegacyVariantApi=true</pre> | Second Gradle property should not be necessary, and only came about as of AGP 9.0.0-alpha06. |
| `com.google.firebase.testlab` | Broken | https://issuetracker.google.com/issues/444866155 | None | |
| `app.cash.burst` | Fixed (2.10.0) | https://github.com/cashapp/burst/issues/197 | None | Addressed by https://github.com/cashapp/burst/pull/200 |
| `app.cash.sqldelight` | Broken | https://github.com/sqldelight/sqldelight/issues/5940 | `android.newDsl=false` | |
