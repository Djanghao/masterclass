# Official Solution

**Link:** [https://leetcode.com/problems/cat-and-mouse/solution/](https://leetcode.com/problems/cat-and-mouse/solution/)

---

[TOC]

## Solution
---
### Approach 1: Minimax / Percolate from Resolved States

**Intuition**

The state of the game can be represented as `(m, c, t)` where `m` is the location of the mouse, `c` is the location of the cat, and `t` is `1` if it is the mouse's move, else `2`.  Let's call these states *nodes*.  These states form a directed graph: the player whose turn it is has various moves which can be considered as outgoing edges from this node to other nodes.

Some of these nodes are already resolved: if the mouse is at the hole `(m = 0)`, then the mouse wins; if the cat is where the mouse is `(c = m)`, then the cat wins.  Let's say that nodes will either be colored $$\small\text{MOUSE}$$, $$\small\text{CAT}$$, or $$\small\text{DRAW}$$ depending on which player is assured victory.

As in a standard minimax algorithm, the Mouse player will prefer $$\small\text{MOUSE}$$ nodes first, $$\small\text{DRAW}$$ nodes second, and $$\small\text{CAT}$$ nodes last, and the Cat player prefers these nodes in the opposite order.

**Algorithm**

We will color each `node` marked $$\small\text{DRAW}$$ according to the following rule.  (We'll suppose the `node` has `node.turn = Mouse`: the other case is similar.)

* ("Immediate coloring"):  If there is a child that is colored $$\small\text{MOUSE}$$, then this node will also be colored $$\small\text{MOUSE}$$.

* ("Eventual coloring"):  If all children are colored $$\small\text{CAT}$$, then this node will also be colored $$\small\text{CAT}$$.

We will repeatedly do this kind of coloring until no `node` satisfies the above conditions.  To perform this coloring efficiently, we will use a queue and perform a *bottom-up percolation*:

* Enqueue any node initially colored (because the Mouse is at the Hole, or the Cat is at the Mouse.)

* For every `node` in the queue, for each `parent` of that `node`:

  * Do an immediate coloring of `parent` if you can.

  * If you can't, then decrement the side-count of the number of children marked $$\small\text{DRAW}$$.  If it becomes zero, then do an "eventual coloring" of this parent.

  * All `parents` that were colored in this manner get enqueued to the queue.

**Proof of Correctness**

Our proof is similar to a proof that minimax works.

Say we cannot color any nodes any more, and say from any node colored $$\small\text{CAT}$$ or $$\small\text{MOUSE}$$ we need at most $$K$$ moves to win.  If say, some node marked $$\small\text{DRAW}$$ is actually a win for Mouse, it must have been with $$> K$$ moves.  Then, a path along optimal play (that tries to prolong the loss as long as possible) must arrive at a node colored $$\small\text{MOUSE}$$ (as eventually the Mouse reaches the Hole.)  Thus, there must have been some transition $$\small\text{DRAW} \rightarrow \small\text{MOUSE}$$ along this path.

If this transition occurred at a `node` with `node.turn = Mouse`, then it breaks our immediate coloring rule.  If it occured with `node.turn = Cat`, and all children of `node` have color $$\small\text{MOUSE}$$, then it breaks our eventual coloring rule.  If some child has color $$\small\text{CAT}$$, then it breaks our immediate coloring rule.  Thus, in this case `node` will have some child with $$\small\text{DRAW}$$, which breaks our optimal play assumption, as moving to this child ends the game in $$> K$$ moves, whereas moving to the colored neighbor ends the game in $$\leq K$$ moves.

<iframe src="https://leetcode.com/playground/TQVY6JML/shared" frameBorder="0" width="100%" height="500" name="TQVY6JML"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^3)$$, where $$N$$ is the number of nodes in the graph.  There are $$O(N^2)$$ states, and each state has an outdegree of $$N$$, as there are at most $$N$$ different moves.

* Space Complexity:  $$O(N^2)$$.
<br />
<br />