# Official Solution

**Link:** [https://leetcode.com/problems/escape-the-ghosts/solution/](https://leetcode.com/problems/escape-the-ghosts/solution/)

---

[TOC]

---
### Approach #1: Taxicab Distance [Accepted]

**Intuition**

The *taxicab* distance is the number of moves required to get from point `A` to point `B` in our grid.  It is calculated as `dist(A, B) = abs(A.x - B.x) + abs(A.y - B.y)`.

Let's say we start at `S`, the ghost starts at `G`, the target is `T`, and the ghost first meets us at `X`.  This implies `dist(G, X) <= dist(S, X)`, as the ghost must reach `X` before or at the time that we do.

Now, if the ghost travels from `G` to `X` and then to `T`, it will reach `T` at time `dist(G, T) <= dist(G, X) + dist(X, T) <= dist(S, X) + dist(X, T)`.  The first inequality is because of the *triangle inequality* that all distance metrics satisfy.

The above shows that it is at least as good for the ghost to just travel directly to the target: if it could reach us beforehand (at `X`), it will also reach us if it goes to `X` then to `T`, and then it would reach us if it just went directly to `T`.

Also, if the ghost goes directly to the target, then a necessary condition is clearly that we get to the target before the ghost.

Once we can make the assumption that all parties just go directly to the target in the shortest time possible, the problem is greatly simplified.

**Algorithm**

Check that our (taxicab) distance to the target is smaller than the distance from any ghost to the target.

<iframe src="https://leetcode.com/playground/EvWJ5TQG/shared" frameBorder="0" width="100%" height="276" name="EvWJ5TQG"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\text{ghosts}.\text{length})$$.

* Space Complexity:  $$O(1)$$.