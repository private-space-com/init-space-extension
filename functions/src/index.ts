/*
 * This template contains a HTTP function that responds
 * with a greeting when called
 *
 * Reference PARAMETERS in your functions code with:
 * `process.env.<parameter-name>`
 * Learn more about building extensions in the docs:
 * https://firebase.google.com/docs/extensions/publishers
 */

import * as functions from 'firebase-functions';
import { Request, Response } from 'express';

exports.exchangeToken = functions.https.onRequest(
  (req: Request, res: Response) => {
    const greeting = `hello World`;

    res.send(greeting);
  },
);

export const onInit = functions.tasks.onTaskDispatched(async (data) => {
  console.log('Hello World, onInit');
});

export const onConfigUpdate = functions.tasks.onTaskDispatched(async (data) => {
  console.log('Hello World, onConfigUpdate');
});
