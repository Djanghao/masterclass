# Official Solution

**Link:** [https://leetcode.com/problems/loud-and-rich/solution/](https://leetcode.com/problems/loud-and-rich/solution/)

---

[TOC]

---
### Approach #1: Cached Depth-First Search [Accepted]

**Intuition**

Consider the directed graph with edge `x -> y` if `y` is richer than `x`.

For each person `x`, we want the quietest person in the subtree at `x`.

**Algorithm**

Construct the graph described above, and say `dfs(person)` is the quietest person in the subtree at `person`.   Notice because the statements are logically consistent, the graph must be a DAG - a directed graph with no cycles.

Now `dfs(person)` is either `person`, or `min(dfs(child) for child in person)`.  That is to say, the quietest person in the subtree is either the `person` itself, or the quietest person in some subtree of a child of `person`.

We can cache values of `dfs(person)` as `answer[person]`, when performing our *post-order traversal* of the graph.  That way, we don't repeat work.  This technique reduces a quadratic time algorithm down to linear time.

<iframe src="https://leetcode.com/playground/UXq5wv8E/shared" frameBorder="0" width="100%" height="500" name="UXq5wv8E"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(N^2)$$, where $$N$$ is the number of people.
We are iterating here over array `richer`. It could contain up to 
$$1 + ... + N - 1 = N(N - 1) / 2$$ elements, for example, in the situation 
when each new person is richer than the previous one.  

* Space Complexity: $$\mathcal{O}(N^2)$$, to keep the graph with $$N^2$$ edges.