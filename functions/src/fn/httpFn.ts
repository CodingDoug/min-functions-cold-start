/*
 * Copyright 2020, Doug Stevenson
 *
 * Copying and distribution of this file, with or without modification, are
 * permitted in any medium without royalty, provided the copyright notice and
 * this notice are preserved. This file is offered as-is, without any warranty.
 */

import * as functions from 'firebase-functions'

// The cost of importing and initializing the Admin SDK here will not affect the
// other Cloud Functions defined in index.ts since this file is imported
// asynchronously at the time of the function call.
import * as admin from 'firebase-admin'
admin.initializeApp()

export default async (
    request: functions.https.Request,
    response: functions.Response
): Promise<void> => {
    const snapshot = await getDocument()
    const data = snapshot.data()
    response.send(data)
}

async function getDocument(): Promise<admin.firestore.DocumentSnapshot> {
    return admin.firestore().collection('users').doc('uid').get()
}
