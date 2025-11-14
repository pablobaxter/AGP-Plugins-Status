---
hide:
  - toc
  - navigation  
---
Current Release: **9.0.0-beta01**

Release notes: https://developer.android.com/build/releases/agp-preview

**Note: As of AGP 9.0.0-beta01, setting `android.enableLegacyVariantApi=true` will throw the following error**
```
> Failed to apply plugin 'com.android.internal.application'.
   > com.android.builder.errors.EvalIssueException: The option 'android.enableLegacyVariantApi' is deprecated.
     The current default is 'false'.
     It was removed in version 9.0 of the Android Gradle plugin.
     The android.enableLegacyVariantApi property has no effect, use android.newDsl instead
```


### Issues that affect multiple plugins or AGP itself
Note: These issues should highlight issues that affect multiple plugins and may be a bug in AGP.

| Status | Issue link | Summary | Workarounds? | Notes |
|:---|:---|:---|:---|:---|
| Broken | https://issuetracker.google.com/issues/459088185 | The `internal` modifier mangled name differs depending on usage of builtInKotlin | `android.builtInKotlin=false` | This affects multiple plugins, such as KSP and Hilt/Dagger, causing them to trigger a build failure. |

### Known Plugin Issues

| Plugin | Status | Issue link | Workarounds? | Notes |
|:---|:---|:---|:---|:---|
| `com.google.devtools.ksp` | Fixed (2.3.1) | https://github.com/google/ksp/issues/2615 | None | Fixed in 2.0.3 but reverted in 2.0.4, fixed again in 2.3.1. |
| `com.google.firebase.firebase-perf` | Fixed (2.0.2) | https://github.com/firebase/firebase-android-sdk/issues/7293 | None | |
| `com.google.dagger.hilt.android` | Broken | https://github.com/google/dagger/issues/4944<br>https://github.com/google/dagger/issues/4979 | `android.newDsl=false` | `android.enableLegacyVariantApi=true` was removed as a workaround due to removal in 9.0.0-beta01 |
| `androidx.baselineprofile` | Broken | https://issuetracker.google.com/issues/443311090 | `android.newDsl=false` | |
| `androidx.navigation.safeargs` | Fixed (2.9.5) | https://issuetracker.google.com/issues/442620441 | None | Addressed by https://r.android.com/3754932 |
| `com.squareup.wire` | Broken | https://github.com/square/wire/issues/3371 | `android.enableLegacyVariantApi=true` | The given workaround may not work any longer with AGP 9.0.0-beta01. Needs to be verified with `android.newDsl=false` |
| `de.mannodermaus.android-junit5` | Fixed (1.13.4.0) | https://github.com/mannodermaus/android-junit5/issues/380 | `android.newDsl=false` | |
| `com.google.android.gms:oss-licenses-plugin` | Fixed (0.10.8) | | `android.newDsl=false` | |
| `com.apollographql.apollo` | Fixed (5.0.0-alpha.3) | https://github.com/apollographql/apollo-kotlin/issues/6693 | `android.newDsl=false` | Addressed by https://github.com/apollographql/apollo-kotlin/pull/6703 |
| `org.gradle.android.cache-fix` | Fixed (3.0.2) | https://github.com/gradle/android-cache-fix-gradle-plugin/issues/447 | `android.newDsl=false` | Addressed by https://github.com/gradle/android-cache-fix-gradle-plugin/pull/1894. Requires >= AGP 9.0.0-alpha06 | |
| `com.jaredsburrows.license` | Broken | https://github.com/jaredsburrows/gradle-license-plugin/issues/693 | `android.newDsl=false` | |
| `com.google.firebase.testlab` | Fixed (0.0.1-alpha11) | https://issuetracker.google.com/issues/444866155 | None | |
| `app.cash.burst` | Fixed (2.10.0) | https://github.com/cashapp/burst/issues/197 | None | Addressed by https://github.com/cashapp/burst/pull/200 |
| `app.cash.sqldelight` | Broken | https://github.com/sqldelight/sqldelight/issues/5989 | `android.newDsl=false` | Previous ticket tracking this issue: https://github.com/sqldelight/sqldelight/issues/5940 |
| `app.cash.paparazzi` | Broken | https://github.com/cashapp/paparazzi/issues/2095 | `android.newDsl=false` | Will be addressed by https://github.com/cashapp/paparazzi/pull/2106 |
| `org.jetbrains.compose` | Fixed (1.9.3) | https://youtrack.jetbrains.com/issue/CMP-8771 | None | Fixed in https://github.com/JetBrains/compose-multiplatform/pull/5473 |
| `org.jetbrains.dokka` | Broken | https://github.com/Kotlin/dokka/issues/4256 | | Looks like there will be a fix coming soon: https://github.com/Kotlin/dokka/pull/4231 |
| `io.github.gmazzo.android.manifest.lock` | Fixed (1.4.0) | https://github.com/gmazzo/gradle-android-manifest-lock-plugin/issues/163 | | Addressed by https://github.com/gmazzo/gradle-android-manifest-lock-plugin/pull/164 |
| `dev.icerock.mobile.multiplatform-resources` | Broken | https://github.com/icerockdev/moko-resources/issues/820<br>https://github.com/icerockdev/moko-resources/issues/852 | <pre>android.builtInKotlin=false<br>android.newDsl=false<br>android.sourceset.disallowProvider=false</pre> | |
