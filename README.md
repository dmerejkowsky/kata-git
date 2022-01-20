# Git Katas

## Notes:

Those tasks should be worked on by teams of 2 people at least.  We'll use Alice and Bob as names.

You should never use push --force or equivalent unless otherwise stated

You should be able to perform the tasks listed here using either the
command line or a tool like `sourcetree`.

## Task 0 - Clone this repo

The first task is to clone this repo in a place where you have *write* access.

You can either fork it on GitHub, or re-create it from scratch on GitLab for instance.

## Task 1 - The cycle of collaboration

*Goal: learn how to share a branch across the same team*

Make sure Alice and Bob both have cloned the repo

* Alice: add your name to the THANKS
* Alice: make a commit with the message "Add Alice to THANKS file"
* Alice: push the commit to the main branch
* Bob: fetch Alice's changes from the main branch
* Bob: make a commit with the message "Add Bob to THANKS file"
* Bob: push the commit to the main branch
* Alice: update the main branch

Alice should end up with a log looking like this:

```diff
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

## Task 2 - Two commits from one file

*Goal: learn about the git index *

This should be done by each member of the team.

* Change at least two different lines in `index.html` file (I'm sure you can find something to improve)

* Make two commits, each one containing a different line change.

## Task 3 - Undoing changes

*Goal: learn about the various ways to undo changes in git*

This should be done by each member of the team.

* Revert the two commits made during task 2

* Change a few lines in `index.html` and then restore the file to its original version

* Move the head of the branch to where it was before task 2 started branch

## Task 4 - Happy merge

*Goal: show how to merge in the trivial case*

* Alice: Change the `<title>` in `index.html`
* Alice: push the changes to the main branch
* Bob: do *not* fetch Alice's changes
* Bob: change something in the JavaScript code
* Bob: make a commit and try to push it to the main branch - git will ask
  your to merge first
* Bob: merge your branch and push the result

## Task 4 bis - Happy  rebase

Some as task 4, but use `rebase` so that there is no merge commit in the history.

## Task 5 - Conflict resolution

*Goal: learn about merging conflicting changes*

* Alice: Edit 'conflict.txt' and add the following text on line 2:

> C'est la goutte d'eau qui met le feu aux poudres

* Alice: make a commit and push it to the main branch

* Bob: make sure to *not* fetch Alice's changes at this point.

* Bob: Edit 'conflict.txt' and add the following line also on line 2:

> C'est l'étincelle qui fait déborder le vase

* Bob: make a commit and try to push it to the main branch - git will ask
  your to merge first

* Bob: try and merge - git will tell you that there are conflicts

* Alice & Bob: resolve the conflict and push the resolution

## Task 6 - Cherry-picking

If you look at the repo, you will see that the 'release' branch does not contain
the commit that bumps the year in the `COPYRIGHT` file (which is expected since it was
created in 2021).

Use cherry-picking to fix the COPYRIGHT year on the `release` branch as well

## Task 7 - Rebase

Make three commits that each add one line in a distinct, existing file.

Use interactive rebase to put the commits in reverse order.

Harder: make three commits that each add one line to the `index.html` file so you end up with:

```html
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
```

Use rebase to put the commits in the order "one - three - two". You will
have to solve conflicts during the rebase - have fun.

## Task 8 - Code review

* Alice: Fix style issues in 'index.html'
* Alice: Make sure to include a typo in the code
* Alice: Make a commit and push it in a branch named 'fix-style'
* Alice: Create a merge request (GitLab) or a pull request (GitHub)
* Bob: look at Alice's changes and leave some comments about the typo
* Alice: Use rebase or `git commit --amend` to address Bob's feedback and fix
  the typo (you are allowed to use `push --force` this time)
* Bob: Merge Alice's branch
