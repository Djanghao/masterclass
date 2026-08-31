# Official Solution

**Link:** [https://leetcode.com/problems/jump-game-iv/solution/](https://leetcode.com/problems/jump-game-iv/solution/)

---

[TOC]

## Solution

---

### Overview

You probably can guess from the problem title, this is the fourth problem in the series of [Jump Game](https://leetcode.com/problems/jump-game/) problems. Those problems are similar, but have considerable differences, making their solutions quite different.

Here, two approaches are introduced: *Breadth-First Search* approach and *Bidirectional BFS* approach.

---

### Approach 1: Breadth-First Search

Most solutions start from a brute force approach and are optimized by removing unnecessary calculations. Same as this one.

A naive brute force approach is to iterate all the possible routes and check if there is one reaches the last index. However, if we already checked one index, we do not need to check it again. We can mark the index as visited by storing them in a `visited` set.

From convenience, we can store nodes with the same value together in a `graph` dictionary. With this method, when searching, we do not need to iterate the whole list to find the nodes with the same value as the next steps, but only need to ask the precomputed dictionary. However, to prevent stepping back, we need to clear the dictionary after we get to that value.

<iframe src="https://leetcode.com/playground/Fe28Khke/shared" frameBorder="0" width="100%" height="500" name="Fe28Khke"></iframe>


**Complexity Analysis**

Assume $$N$$ is the length of `arr`.

* Time complexity: $$\mathcal{O}(N)$$ since we will visit every node at most once.

* Space complexity: $$\mathcal{O}(N)$$ since it needs `curs` and `nex` to store nodes.

---

### Approach 2: Bidirectional BFS

In the later part of our original BFS method, the layer may be long and takes a long time to compute the next layer. In this situation, we can compute the layer from the end, which may be short and takes less time.

<iframe src="https://leetcode.com/playground/NGZeg5uX/shared" frameBorder="0" width="100%" height="500" name="NGZeg5uX"></iframe>

**Complexity Analysis**

Assume $$N$$ is the length of `arr`.

* Time complexity: $$\mathcal{O}(N)$$ since we will visit every node at most once, but usually faster than approach 1.

* Space complexity: $$\mathcal{O}(N)$$ since it needs `curs`, `other` and `nex` to store nodes.