# Git Katas

Those katas should be worked on by teams of 2 to 4 people, unless stated otherwise.

We'll use Alice, Bob and Charlie as names

## Task 1 - The cycle of collaboration

* Alice: make a commit adding your name to the THANKS file and push it to the
  main branch
* Bob: fetch Alice's changes and add your name to the THANKS file and push it
* Charlie: fetch Alice and Bob changes and add your names to the THANKS file
* Alice: fetch all changes

Alice should end up with a log looking like this:

```diff
* 8443aa2 Add Charlie to THANKS file (29 seconds ago) <charlie>
--- a/THANKS
+++ b/THANKS
@@ -1,2 +1,3 @@
 Alice
 Bob
+Charlie

* 6430036 - Add Bob to THANKS file (62 seconds ago) <bob>
--- a/THANKS
+++ b/THANKS
@@ -1 +1,2 @@
 Alice
+Bob

* a6c829f - Add Alice to THANKS file (2 minutes ago) <alice>
-
+Alice
```
