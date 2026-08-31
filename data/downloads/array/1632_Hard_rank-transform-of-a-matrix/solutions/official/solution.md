# Official Solution

**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solution/](https://leetcode.com/problems/rank-transform-of-a-matrix/solution/)

---

[TOC]

## Solution

---

#### Overview

This problem is an extension of the original problem, [Rank Transform of an Array](https://leetcode.com/problems/rank-transform-of-an-array/). However, the original method in the original problem does not work. To tackle this, we need to add some similar methods used in [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/). Moreover, to avoid *Time Limit Exceeded*, some optimization tricks should be applied.

It's indeed a hard problem, so please don't be frustrated if you can not solve it.

Below, we will discuss three approaches: *Sorting + BFS*, *Sorting + DFS*, and *Sorting + Union-Find*.

It's recommended to start reading from approach 1. Also, it's a long article, so take your time to read it.

---

#### Approach 1: Sorting + BFS

**Intuition**

Let's recall the method used in the original [Rank Transform of an Array](https://leetcode.com/problems/rank-transform-of-an-array/). The idea is simple: sort the values in the array, and arrange the ranks from the lowest value to the highest value.

It's natural to consider applying the same thing to our matrix: **sort the values in the matrix, and arrange the ranks from the lowest one to the highest one**.

However, this method does not work. In this problem, we are only required to rank values according to row and column, and not to the whole matrix. The condition is looser.

If we arrange the ranks according to the whole matrix, the resulting rank will be huger than what we want.

For example, consider this case:

![Figure 1](../Figures/5156/5156_1.png)

In this case, if we just rank `[2, 3, 4, 5]` by their values as `[1, 2, 3, 4]`, we will get a larger rank for some elements.

We need to make some modifications to get our solution to work.

The idea of sorting and ranking from small value to large value is good. The only problem is that the rank is larger than required. We want to reduce the rank to as small as possible.

When arranging ranks, we can check existing ranks in the same row and the same column, and let the rank be the largest rank checked plus one. 

For example, in the above matrix, when we fill in the rank of value `4` (corresponding order is `3`):

![Figure 2](../Figures/5156/5156_2.png)

The pseudo-code is as below. Let the required rank matrix be `answer`.

<pre>
initial answer to all zero
for (i, j) in sorted_order:
    rank = -1
    for row in 0...m-1:
        rank = max(rank, answer[row][j] + 1)
    for col in 0...n-1:
        rank = max(rank, answer[i][col] + 1)
    answer[i][j] = rank
</pre>

However, this approach still can not achieve the target rank matrix. There are two problems, and we will discuss that later.

Now, let's analyze the complexity first.

> It's recommended to find out an entire working approach and then optimize it. However, for the convenience of writing, we do the optimization here.

Let $$M$$ be the number of rows and $$N$$ be the number of columns.

Since there is $$\mathcal{O}(NM)$$ points in the matrix, and for each point, we are required to search the row and column to determine its rank, the overall time complexity is $$\mathcal{O}(NM\cdot(N+M))$$.

In the worst cases, where $$M=500$$ and $$N=500$$, $$NM\cdot(N+M) = 500 \cdot 500 \cdot (500 + 500) = 2.5 * 10^8$$.

Generally, to avoid *Time Limit Exceeded*, a complexity less than $$10^9$$ is needed. $$10^8$$ is dangerous. Can we simplify it?

Notice that we calculated the max of each row and each column many times. We can pre-calculate the maximum before iteration and update that max during the iteration.

We can use two arrays, `rowMax`  and `colMax`, to record the maximum rank of each row and each column, respectively.

> `rowMax[i]` means the max rank in `i` row, and `colMax[j]` means the max rank in `j` column.

Take the above example again. If we use these two arrays, we calculate ranks in this way:

![Figure 3](../Figures/5156/5156_3.png)

The pseudo-code is as below.

<pre>
initial answer to all zero
initial rowMax and colMax to all zero
for (i, j) in sorted_order:
    rank = max(rowMax[i], colMax[i]) + 1
    answer[i][j] = rank
    update rowMax and colMax
</pre>

Good. Now we only need $$\mathcal{O}(1)$$ for each point. The overall complexity is $$\mathcal{O}(NM)$$ for this part. Notice that sorting requires $$\mathcal{O}(NM\log(NM))$$, so the complexity so far is $$\mathcal{O}(NM\log(NM))$$.

Go back to our approach. In the above, we mention that there are two problems in the code.

The first one is that the minimal rank is not always the maximum of other ranks in the same row and columns plus one. It might be the same as the maximum.

For instance, consider this case:

![Figure 4](../Figures/5156/5156_4.png)

We can see that, if the value is the same, we may not need to add one to the maximum rank.

Well... we can use some if-conditions to solve this problem.

The second problem is even worse: we may need to adjust the previous rank we set before.

Take the below case as an example. In this case, we have filled all the rank matrix except the right-down corner.

![Figure 5](../Figures/5156/5156_5.png)

Since points with the same value in the same row or same column should share the same rank, we need to adjust the other 33.

So, how to solve this problem?

Let's dig into what parts should be adjusted.

Consider this case:

![Figure 6](../Figures/5156/5156_6.png)

Note that the connected points should share the same rank, since they are connected by some "same row or same column" connections.

Also, there is one single `11` and one single `33` that do not connect to any other points, since they do not have such connection.

In conclusion, the points with the same value connected by the "same row or same column" connection should share the same rank. Let's call those points "**connected part**".

> **Connected part** means a group of points with the same value, where any two points can be linked by a path consisting of horizontal lines ("the same row" connection) and vertical lines ("the same column" connection).

To avoid adjusting, we can find out the whole connected part's maximum rank first and then update that rank to each point in the part.

In this way, we can also avoid the first problem because the ranks in different connected parts are always different.

Now the question remaining is how to find the "connected parts"?

This question is similar to [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/), where we need to find the *numbers* of connected parts.

In [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/), there are three methods to locate the connected parts: BFS, DFS, and Union-Find. Here, we discuss BFS first.

> In approach 1, we discuss BFS first and discuss the remaining two in approach 2 and approach 3, respectively.

The idea of BFS is simple: from a starting point, add all the directly connected points (i.e., with the same row or same column) into a waiting queue, pop points from the waiting queue, add new directly connected points into the queue, and repeat until the queue is empty.

<pre>
add starting points to Queue q
while q is not empty:
    point p = q.pop()
    add p's adjacent points to q, skip visited points
</pre>

This search costs $$\mathcal{O}(V + E)$$, where $$V$$ is the number of points and $$E$$ is the number of edges in the graph, since we visit each point and each edge constant times.

We have $$\mathcal{O}(NM)$$ points, and if every two points are connected, the number of edges are $$\mathcal{O}((NM)^2)$$.  Therefore, in worst case, $$\mathcal{O}(V + E) = \mathcal{O}((NM)^2) = 500^4 = 6.25 * 10^{10}$$. This will absolutely cause *Time Limit Exceeded*.

Can we simplify it?

Instead of connecting point to point, we can connect **row** to **column**, and **column** to **row**.

Consider viewing a point `(i, j)` as an **edge** linking `i`-th row and `j`-th column.

For example, see this case:

![Figure 7](../Figures/5156/5156_7.png)

For a point `(i, j)`, we connect `i`-th row and `j`-th column together. With this graph, we can easily find the connected parts.

> For example, in the graph above, starting from `(0, 0)`, searching the neighbors of Row 0, we can find Col 0, and Col 2. Therefore, `(0, 0)` and `(0, 2)` are connected.
>
> Continue searching the neighbors of Col2, we can find Row 0 and Row 2. We have visited Row 0, but Row 2 is new. Hence, `(0, 0)`, `(0, 2)`, and `(2, 2)` are connected. Search the neighbors of Row 2, we find nothing new. For `(0, 0)`, we can also search the neighbors of Col 0.
>
> After this search, we get `(0, 0)`'s connected parts: `(0, 0)`, `(0, 2)`, and `(2, 2)`.

Now we need to store the graph. We can have a map `graphRow`, where `graphRow[i]` represent the columns linked to `i`-th row, and a map `graphCol`, where `graphCol[j]` represent the columns linked to `j`-th col.

Wait a minute. Can we combine those two maps into a single map? 

Note that the indexes of row start from 0 and occupy positive numbers. There are negative numbers that remain unused. We can store indexes of columns in negative numbers.

A natural idea is to use the negative of column index $$-\text{col}$$. But both row and column indexes use zero, resulting in duplication of number zero. We need to shift one unit to avoid repetition: using $$-\text{col} - 1$$.

Luckily, we happen to have an operator called "**complement**" ($$\sim$$), where $$\sim\text{col} = -\text{col} - 1$$. What's more, simple math shows $$\sim(\sim\text{col}) = \text{col}$$.

Therefore, we can use a single graph to store the connections between row and column:
if `i >= 0`, `graph[i]` represents `i`-th row's neighbors (the complement of indexes of linked columns), and if `i < 0`, `graph[~i]` gives `~i`-th column's adjacent points (the indexes of linked rows).

> It's also OK to use two single maps to represent the connection relationship. People just use this trick to make implementation a bit simpler.

Now, only $$M$$ points (represent rows) and $$N$$ points (represent columns) are in the graph. Since we can not have edges between rows or between columns, the largest number of edges are $$\mathcal{O}(NM) = 2.5 * 10^5$$. The number is small enough to pass the test.

So, we successfully achieved finding connected parts by BFS. The remaining part is to fill our rank matrix `answer` by connected parts, in the sorted value order.

<pre>
initial answer to all zero
initial rowMax and colMax to all zero
for connected_part in sorted_connected_parts:
    rank = -1
    for point (i, j) in connected_part:
        rank = (rank, max(rowMax[i], colMax[i]) + 1)
    for point (i, j) in connected_part:
        answer[i][j] = rank
        update rowMax and colMax
</pre>

By far, we solve every problem we encounter and cleverly avoid *Time Limit Exceeded* by some optimization. The essence of this algorithm is to separate points into different connected parts, sort them by values, and finally fill in the rank matrix from the lowest value to the highest value.

For the detail of the algorithm, check the "Algorithm" part.

**Algorithm**

> For convenience, 
> - We refer "points" to indexes in the matrix, in the form `(row_number, column_number)`.
> - We refer "value" to the values in the matrix. In other words, the value of point `(i, j)` is `matrix[i][j]`.
> - We say two points are "connected" if and only if they have the same values and are in the same row or column, or they are all connected to the same point.
> - A "connected part" represents a group of connected points.

*Step 1:* Initialize graphs for different values. Iterate `matrix` and link the rows and columns in the corresponding graph.

*Step 2:* Initialize a `value2index` map to store connected parts.

- This map will contain the value - index mapping. In the index part, separate points to put the connected points in the same array, and to put non-connected points in different arrays. (one array represents a connected part.)
- Therefore, `value2index` should be in this form: `{v1: [[point1, point2, ...], [point11, point12, ...], ...], v2: ...}`, where `point1, point2, ...` are connected, and `point11, point21, ...` are also connected, but none of points from different array are connected.

*Step 3:* Fill in `value2index` map by iterating over `matrix` again.

- For each point, use BFS to find out all the other connected points. Put all of them into `value2index`  as an array.
- Remember to mark those points visited to avoid duplicate additions.

*Step 4:* Sort the keys in `value2index` (i.e., all values in `matrix`).

*Step 5:* Initialize our `answer` matrix. Iterate `value2index` in the order of sorted keys to fill in `answer`.

- For a given key (i.e., a value in `matrix`), we fill in `answer` by connected parts (i.e., one array).
- Note that for points in the same connected part, they share the same rank.
- For a connected part, Find out the minimum possible rank and update that rank.
- To reduce the time for searching the minimum possible rank, we need two arrays to record the maximum rank of each row and each column, respectively.

*Step 6:* Return `answer`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/4krdAyFq/shared" frameBorder="0" width="100%" height="500" name="4krdAyFq"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows in `matrix` and $$N$$ be the number of columns in `matrix`.

* Time Complexity: $$\mathcal{O}(NM\log(NM))$$.
  - We need $$\mathcal{O}(NM)$$ to iterate `matrix` to build `graphs`.
  - We need $$\mathcal{O}(NM)$$ to iterate `matrix` to build `value2index`. We only visit points at most twice, since we skip points visited in BFS.
  - We need $$\mathcal{O}(NM\log(NM))$$ to sort the keys in `value2index`, since there are at most $$\mathcal{O}(NM)$$ different keys.
  - We need $$\mathcal{O}(NM)$$ to iterate `value2index` to build `answer`.
  - Adding together, the time we needed is $$\mathcal{O}(NM\log(NM))$$.

* Space Complexity: $$\mathcal{O}(NM)$$.
  - For `graphs`, we store $$\mathcal{O}(NM)$$ edges (viewing each point as an edge). 
  - For `value2index`, we store $$\mathcal{O}(NM)$$ points.
  - For `rowMax` and `columnMax`, they have size of $$\mathcal{O}(M)$$ and $$\mathcal{O}(N)$$, respectively.
  - In total, the size we needed is $$\mathcal{O}(NM)$$.

---

#### Approach 2: Sorting + DFS

**Intuition**

DFS is similar to BFS but differs in the order of searching. In most cases, when the search space is not huge, you can replace BFS with DFS.

In approach 1, we used BFS to find out the connected parts of each point. Now, we use DFS instead.

**Algorithm**

*Step 1:* Initialize graphs for different values. Iterate `matrix` and link the rows and columns in the corresponding graph.

*Step 2:* Initialize a `value2index` map to store connected parts.

- This map will contain the value - index mapping. In the index part, separate points to put the connected points in the same array, and to put non-connected points in different arrays. (one array represents a connected part.)
- Therefore, `value2index` should be in this form: `{v1: [[point1, point2, ...], [point11, point12, ...], ...], v2: ...}`, where `point1, point2, ...` are connected, and `point11, point21, ...` are also connected, but none of the points from different array are connected.

*Step 3:* Fill in `value2index` map by iterating over the `matrix` again.

- For each point, use **DFS** to find out all the other connected points. Put all of them into `value2index`  as an array.
- Remember to mark those points visited to avoid duplicate additions.

*Step 4:* Sort the keys in `value2index` (i.e., all values in `matrix`).

*Step 5:* Initialize our `answer` matrix. Iterate `value2index` in the order of sorted keys to fill in `answer`.

- For a given key (i.e., a value in `matrix`), we fill in `answer` by connected parts (i.e., one array).
- Note that for points in the same connected part, they share the same rank.
- For a connected part, Find out the minimum possible rank and update that rank.
- To reduce the time for searching the minimum possible rank, we need two arrays to record the maximum rank of each row and each column, respectively.

*Step 6:* Return `answer`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/WFRUEt3Z/shared" frameBorder="0" width="100%" height="500" name="WFRUEt3Z"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows in `matrix` and $$N$$ be the number of columns in `matrix`.

* Time Complexity: $$\mathcal{O}(NM\log(NM))$$.
  - We need $$\mathcal{O}(NM)$$ to iterate `matrix` to build `graphs`.
  - We need $$\mathcal{O}(NM)$$ to iterate `matrix` to build `value2index`. We only visit points at most twice, since we skip points visited in DFS.
  - We need $$\mathcal{O}(NM\log(NM))$$ to sort the keys in `value2index`, since there are at most $$\mathcal{O}(NM)$$ different keys.
  - We need $$\mathcal{O}(NM)$$ to iterate `value2index` to build `answer`.
  - Adding together, the time we needed is $$\mathcal{O}(NM\log(NM))$$.

* Space Complexity: $$\mathcal{O}(NM)$$.
  - For `graphs`, we store $$\mathcal{O}(NM)$$ edges (viewing each point as an edge). 
  - For `value2index`, we store $$\mathcal{O}(NM)$$ points.
  - For `rowMax` and `columnMax`, they have size of $$\mathcal{O}(M)$$ and $$\mathcal{O}(N)$$, respectively.
  - In total, the size we needed is $$\mathcal{O}(NM)$$.

---

#### Approach 3: Sorting + Union-Find

**Intuition**

As we mentioned in approach 1, [Union-Find](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) (or UF, Disjoint Set) can be applied to find the connected parts.

Since Union-Find is not the essence of this problem (and considering the length of the article), we will not provide a very detailed explanation of Union-Find here. You can find some tutorials on other problems that require Union-Find, such as [Redundant Connection](https://leetcode.com/problems/redundant-connection/) or [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/).

Now, we will have a quick review of Union-Find, and explain how we can use Union-Find to find the connected parts.

Similar to approach 1, we view the matrix points as **edges** that connect rows and columns.

As we know, we can view Union-Find as a forest-like structure (forest represents many trees). For example:

![Figure 8](../Figures/5156/5156_8.png)

To store this structure, we can store the node's parents in a map or an array. The root's parent is itself. A map is used here for illustration.

This structure provides two methods, `find` and `union`.

- For function `find`, it returns the root of the given node.

- For function `union`, it accepts two nodes and merges the two trees that the nodes belong to.

For example, if we want to union node Row2 and node Col1, we will have something like this:

![Figure 9](../Figures/5156/5156_9.png)

What `union` needs to do is to assure that `find(Row2)` and `find(Col1)` yield the same value. That's it.

There are two main optimizations we can do in Union-Find: path compression and union by rank.

- Path compression means that when we apply `find`, we can link the nodes on our search path to the root directly, which will reduce the search time for the next time.

- For union by rank, when we merge two trees, what we do is to link a tree's root to the other tree's leaf. But which tree's root should be linked? We can assign each tree a rank, and link the low-rank tree's root to the high-rank tree's leaf. The rank can be the size of the tree or the number of layers of the tree.

With path compression and union by rank, if we perform `find` and `union` $$N$$ times, it can be done in almost $$\mathcal{O}(N)$$.

> In fact, the time complexity is $$\mathcal{O}(N\alpha(N))$$, where function $$\alpha(n)$$ is [inverse Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse), which is much smaller than $$\log(n)$$ and approximately constant. The proof of the complexity is complicated, and interested readers can go to [Wikipedia](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) to check the detail.

Now, back to our problem. We need to find the connected parts.

We can use the `union` function to union rows and columns together and use `find` to determine which connected parts the given point belongs to.

Similar to approach 1, we use 0 and positive numbers to mark the row, and the complement numbers to mark the column.

**Algorithm**

*Step 1:* Implement `find` and `union` for Union-Find.

- `find` receives an integer and returns the "root" of that integer.
- `union` accepts two integers and merges them into the same union.

*Step 2:* Initialize Union-Finds (UFs) for different values. Iterate `matrix` and union the rows and columns in the corresponding Union-Find.

*Step 3:* Initialize a `value2index` map to store connected parts.

- This map will contain the value - index mapping. In the index part, separate points to put the connected points in the same array, and to put non-connected points in different arrays. (one array represents a connected part.)
- We mark those array by the "root" of points in Union-Find (so `value2index` is actually a nested map).
- Therefore, `value2index` should be in this form: `{v1: {root1: [point1, point2, ...], root2: [point11, point12, ...], ...}, v2: ...}`, where `point1, point2, ...` are connected, and `point11, point21, ...` are also connected, but none of points from different set are connected.

*Step 4:* Fill in `value2index` map by iterate `matrix` again.

- For a point, use `find` to calculate its "root". Put the point in the corresponding set.

*Step 5:* Sort the keys in `value2index` (i.e., all values in `matrix`).

*Step 6:* Initialize our `answer` matrix. Iterate `value2index` in the order of sorted keys to fill in `answer`.

- For a given key (i.e., a value in `matrix`), we fill in `answer` by connected parts (i.e., one array).
- Note that for points in the same connected part, they share the same rank.
- For a connected part, Find out the minimum possible rank and update that rank.
- To reduce the time for searching the minimum possible rank, we need two arrays to record the maximum rank of each row and each column, respectively.

*Step 7:* Return `answer`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

> For convenience, we only implement path compression in the code above, and that's enough to pass the test.

<iframe src="https://leetcode.com/playground/gpc8pUzA/shared" frameBorder="0" width="100%" height="500" name="gpc8pUzA"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows in `matrix` and $$N$$ be the number of columns in `matrix`.

* Time Complexity: $$\mathcal{O}(NM\log(NM))$$.
  - We need $$\mathcal{O}(NM\log(NM))$$ to iterate `matrix` to build `UFs`. However, with both union by rank and path compression, we can achieve $$\mathcal{O}(NM\alpha(NM))$$, where function $$\alpha(n)$$ is [inverse Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse), which is much smaller than $$\log(n)$$ and approximately constant.
  - We need $$\mathcal{O}(NM)$$ to iterate `matrix` to build `value2index`.
  - We need $$\mathcal{O}(NM\log(NM))$$ to sort the keys in `value2index`, since there are at most $$\mathcal{O}(NM)$$ different keys.
  - We need $$\mathcal{O}(NM)$$ to iterate `value2index` to build `answer`.
  - Adding together, the time we needed is $$\mathcal{O}(NM\log(NM))$$.

* Space Complexity: $$\mathcal{O}(NM)$$.
  - For `UFs`, we store $$\mathcal{O}(NM)$$ edges (viewing each point as an edge). 
  - For `value2index`, we store $$\mathcal{O}(NM)$$ points.
  - For `rowMax` and `columnMax`, they have size of $$\mathcal{O}(M)$$ and $$\mathcal{O}(N)$$, respectively.
  - In total, the size we needed is $$\mathcal{O}(NM)$$.