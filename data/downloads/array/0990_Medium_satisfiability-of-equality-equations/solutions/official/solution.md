# Official Solution

**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solution/](https://leetcode.com/problems/satisfiability-of-equality-equations/solution/)

---

[TOC]

## Solution

---

### Overview

Recall the problem description and the property of relationship `==`:

* **reflective**: `a==a` must hold for all variable `a`.
* **symmetric**: if `a==b` holds, then we have `b==a`.
* **transtive**: if `a==b` and `b==c`, then we have `a==c`.

Therefore, if we can build an undirected graph based on the `==` relationship among all variables by adding an edge between `a` and `b` if we have `a==b` in `equations`, then all variables, which are represented as vertices in the graph, that can reach from each other must have a relationship of `==`. In other words, all variables in a common **connected components** must share the same value. 

For example, assume that we have the following equations:

```
a==b
c==a
c==d
e==f
```

A graph can be built as below:

![Every `==` plays a role of an edge in the graph, the variables that in the same connected components (in the same color) are equal to each other](../Documents/990/990_example.drawio.svg)

Now, it is clear that the key challenge to solving this problem is how to figure out all connected components exactly in the graph above. Once it finishes, we can easily enumerate all equations in the form of `x!=y` to check if there is any contradiction showing that `x` and `y` are indeed in the same connected components in that graph. If no such contradiction, all the given equations can be satisfied; otherwise, no possible values can be assigned to them. 

In this solution, we provide the following two approaches to achieve the goal of obtaining all connected components correctly: the first approach is to perform a depth-first search and color all visited variables in each round of traversal starting from a given variable; the second approach is to maintain a union-find data structure to manage all known connected components so far.

### Approach 1: Depth-first Search (DFS)

**Intuition**

Recall how we build a graph based on `==` relationship between variables.After obtaining the graph in an adjacency list form, we can do one pass of **depth-first search** (see [this explore card](https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/)) from any vertice, and all visited vertices are in the same connected component with the starting vertice. Thus, they are marked with the same color, and we can check if two vertices are in the same connected component by querying their colors.

**Algorithm**

1. Build an undirected graph based on `==` relationship as what we discussed in Overview.
2. Initialize all variables as uncolored.
3. When there is still any uncolored variable in the graph, pick any of them to denote as `node` and choose a unique color `c`. 
4. Do a depth-first search starting from `node`, color all traversed variables during this pass with c. Repeat step 3 until there is no uncolored variables.
5. Enumerate all statements of the form `x!=y`, check if any `x` and `y` in a statement are in the same color. If so, we say they can't be equal. It is impossible to satisfy the equations, then return false.
6. Otherwise, all `x`s and `y`s are in different colors, our coloring demonstrates a way to satisfy the equations, and thus the result is true.

**Implementation**

<iframe src="https://leetcode.com/playground/nSTgh2pE/shared" frameBorder="0" width="100%" height="500" name="nSTgh2pE"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\max(N,|\Sigma|))$$ where $$N$$ is the length of `equations` and $$\Sigma$$ is the alphabet set of variables and $$|\Sigma|$$ refers to its size. Since $$\Sigma$$ is limited to the space of only 26 lowercase letters in this problem, we regard $$|\Sigma|$$ as 26 and the final time complexity as $$O(N)$$.

* Space Complexity:  $$O(\max(N,|\Sigma|))$$, though the variables are restricted to $$\Sigma$$, we may still include the duplicated vertices when building the adjacency list `graph`. As we discussed before, $$|\Sigma|$$ is fixed and small, so the time complexity is also $$O(N)$$.  However, we can reduce it to $$O(|\Sigma|)$$ (i.e., $$O(1)$$) if we apply a hash set instead of a list as `graph[i]` to guarantee all vertices in `graph[i]` are unique.

<br />
<br />

---

### Approach 2: Union-find

**Intuition**

Union-find, or disjoint-set (see [this explore card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/)), is also a popular approach to maintain the connected relationship in a graph we build as what we discuss in Overview. We can build this data structure during the enumeration of all `==` equations. Instead of searching after building the entire graph like approach 1, we handle the each `==` relationship on the fly, which provides a smaller constant in the time complexity, especially when we compress paths and merge those components in an optimal way. Similar to approach 1, after obtaining the union-find data structure that contains the information of all connected components, we check if any contradiction occurs and get the final result.



**Algorithm**

Similar to Approach 1, starting with a union-find data structure that sets all roots of the variables to themselves, we first pick all equations in the form of `x==y` and perform the union operation between variable `x` and `y`, which actually merge the connected components which `x` and `y` belong to respectively. Instead of searching after building the entire graph, we handle the each `==` relationship on the fly, which provides a smaller constant in the time complexity especially when we compress paths and merge those components in an optimal way.

1. Initialize a union-find data structure that sets all roots of the variables to themselves. All variables are isolated now.
2. Similar to approach 1, enumerate all equations in the form of `x==y` and perform the *union* operation between variable `x` and `y`,  which actually **merges** the connected components that `x` and `y` belong to respectively.
3. Enumerate all equations in the form of `x!=y` by *find* query to see if `x` and `y` are in the same connected component. If they are, we return `false` immediately. If all those equations can pass, we return `true`.

**Implementation**


<iframe src="https://leetcode.com/playground/gmiPRNiz/shared" frameBorder="0" width="100%" height="500" name="gmiPRNiz"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N\log |\Sigma|)$$, the time complexity of performing $$m$$-length sequence of `find` or `union` operations on $$n$$ vertices with path compression is $$O(m\log n)$$. However, for this problem, $$|\Sigma|$$ is only 26, as we discussed before. Thus, the overall time complexity is just $$O(N\log 26) = O(N)$$ as we invoke `find` or `union` methods to upper $$O(N)$$ times.

* Space complexity: $$O(|\Sigma|)$$, only a `root` array of alphabet size is introduced as extra space here. Similar, it is actually $$O(1)$$ because $$|\Sigma|=26$$.