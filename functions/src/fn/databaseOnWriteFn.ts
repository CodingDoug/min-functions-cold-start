/*
 * Copyright 2020, Doug Stevenson
 *
 * Copying and distribution of this file, with or without modification, are
 * permitted in any medium without royalty, provided the copyright notice and
 * this notice are preserved. This file is offered as-is, without any warranty.
 */

import * as functions from 'firebase-functions'

export default async (
    change: functions.Change<functions.database.DataSnapshot>,
    context: functions.EventContext
) => {
    console.log(change.before.val())
    console.log(change.after.val())
    return null
}
