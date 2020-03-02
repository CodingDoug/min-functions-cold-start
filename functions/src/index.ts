/*
 * Copyright 2020, Doug Stevenson
 *
 * Copying and distribution of this file, with or without modification, are
 * permitted in any medium without royalty, provided the copyright notice and
 * this notice are preserved. This file is offered as-is, without any warranty.
 */

// This should be the only import in index.ts, other than what you need to build
// these functions.
import * as functions from 'firebase-functions'

// HTTP trigger
// https://firebase.google.com/docs/functions/http-events

export const httpFn =
functions.https.onRequest(async (request, response) => {
    await (await import('./fn/httpFn')).default(request, response)
})

// Callable trigger
// https://firebase.google.com/docs/functions/callable

export const callableFn =
functions.https.onCall(async (data, context) => {
    return (await import('./fn/callableFn')).default(data, context)
})

// Firestore triggers
// https://firebase.google.com/docs/functions/firestore-events

export const firestoreOnCreateFn =
functions.firestore.document('users/{id}').onCreate(async (snapshot, context) => {
    await (await import('./fn/firestoreOnCreateFn')).default(snapshot, context)
})

export const firestoreOnDeleteFn =
functions.firestore.document('users/{id}').onDelete(async (snapshot, context) => {
    await (await import('./fn/firestoreOnDeleteFn')).default(snapshot, context)
})

export const firestoreOnUpdateFn =
functions.firestore.document('users/{id}').onUpdate(async (change, context) => {
    await (await import('./fn/firestoreOnUpdateFn')).default(change, context)
})

export const firestoreOnWriteFn =
functions.firestore.document('users/{id}').onWrite(async (change, context) => {
    await (await import('./fn/firestoreOnWriteFn')).default(change, context)
})

// Realtime Database triggers
// https://firebase.google.com/docs/functions/database-events

export const databaseOnCreateFn =
functions.database.ref('users/{id}').onCreate(async (snapshot, context) => {
    await (await import('./fn/databaseOnCreateFn')).default(snapshot, context)
})

export const databaseOnDeleteFn =
functions.database.ref('users/{id}').onDelete(async (snapshot, context) => {
    await (await import('./fn/databaseOnDeleteFn')).default(snapshot, context)
})

export const databaseOnUpdateFn =
functions.database.ref('users/{id}').onUpdate(async (change, context) => {
    await (await import('./fn/databaseOnUpdateFn')).default(change, context)
})

export const databaseOnWriteFn =
functions.database.ref('users/{id}').onWrite(async (change, context) => {
    await (await import('./fn/databaseOnWriteFn')).default(change, context)
})

// Remote Config trigger
// https://firebase.google.com/docs/functions/rc-events

export const remoteConfigFn =
functions.remoteConfig.onUpdate(async (version, context) => {
    await (await import('./fn/remoteConfigFn')).default(version, context)
})

// Authentication trigger
// https://firebase.google.com/docs/functions/auth-events

export const authUserOnCreateFn =
functions.auth.user().onCreate(async (user, context) => {
    await (await import('./fn/authUserOnCreateFn')).default(user, context)
})

export const authUserOnDeleteFn =
functions.auth.user().onDelete(async (user, context) => {
    await (await import('./fn/authUserOnDeleteFn')).default(user, context)
})

// Analytics trigger
// https://firebase.google.com/docs/functions/analytics-events

export const analyticsEventOnLogFn =
functions.analytics.event('in_app_purchase').onLog(async (event, context) => {
    await (await import('./fn/analyticsEventOnLogFn')).default(event, context)
})

// Crashlytics triggers
// https://firebase.google.com/docs/functions/crashlytics-events

export const crashlyticsIssueOnNewFn =
functions.crashlytics.issue().onNew(async (issue, context) => {
    await (await import('./fn/crashlyticsIssueOnNewFn')).default(issue, context)
})

export const crashlyticsIssueOnRegressedFn =
functions.crashlytics.issue().onRegressed(async (issue, context) => {
    await (await import('./fn/crashlyticsIssueOnRegressedFn')).default(issue, context)
})

export const crashlyticsIssueOnVelocityAlertFn =
functions.crashlytics.issue().onVelocityAlert(async (issue, context) => {
    await (await import('./fn/crashlyticsIssueOnVelocityAlertFn')).default(issue, context)
})

// Cloud Storage triggers
// https://firebase.google.com/docs/functions/gcp-storage-events

export const storageObjectOnFinalizeFn =
functions.storage.object().onFinalize(async (object, context) => {
    await (await import('./fn/storageObjectOnFinalizeFn')).default(object, context)
})

export const storageObjectOnDeleteFn =
functions.storage.object().onDelete(async (object, context) => {
    await (await import('./fn/storageObjectOnDeleteFn')).default(object, context)
})

export const storageObjectOnArchiveFn =
functions.storage.object().onArchive(async (object, context) => {
    await (await import('./fn/storageObjectOnArchiveFn')).default(object, context)
})

export const storageObjectOnMetadataUpdateFn =
functions.storage.object().onMetadataUpdate(async (object, context) => {
    await (await import('./fn/storageObjectOnMetadataUpdateFn')).default(object, context)
})

// Pub/sub triggers
// https://firebase.google.com/docs/functions/pubsub-events

export const pubsubTopicFn =
functions.pubsub.topic('topic').onPublish(async (message, context) => {
    await (await import('./fn/pubsubTopicOnPublishFn')).default(message, context)
})

// Scheduled pub/sub trigger
// https://firebase.google.com/docs/functions/schedule-functions

export const pubsubScheduledFn =
functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
    await (await import('./fn/pubsubScheduledFn')).default(context)
})

// Test Lab triggers
// https://firebase.google.com/docs/functions/test-lab-events

export const testLabMatrixOnCompleteFn =
functions.testLab.testMatrix().onComplete(async (testMatrix, context) => {
    await (await import('./fn/testLabMatrixOnCompleteFn')).default(testMatrix, context)
})
