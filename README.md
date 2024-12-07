# Firebase onAuthStateChanged Listener Delay

This repository demonstrates a common but often overlooked issue with Firebase's `onAuthStateChanged` listener: a delay in updating the authentication state.

## Problem

The `onAuthStateChanged` listener doesn't always reflect the authentication state immediately after login or signup. This can cause race conditions and inconsistencies in your UI.

## Solution

The provided solution uses promises and async/await to ensure that the application waits for authentication completion before proceeding.