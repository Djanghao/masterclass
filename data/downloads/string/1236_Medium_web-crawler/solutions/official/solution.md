# Official Solution

**Link:** [https://leetcode.com/problems/web-crawler/solution/](https://leetcode.com/problems/web-crawler/solution/)

---

[TOC]

## Solution

--- 

### Overview

We can model the problem with a directed graph where each URL is a vertex/node, and links between them are edges.

The problem is asking us to traverse the graph visiting only URLs with the same hostname as the one of the start URL.

How can we find the hostname of a URL (which starts with `http://`)? Let's look at two examples.

* The hostname of URL `http://example.org/foo/bar` is `example.org`. It is located between the second and the third slashes in the URL string.
* The hostname of URL `http://news.google.com` is `news.google.com`. The URL string contains only two slashes. The hostname begins after `http://` and goes to the end of the string.

From these examples, one can see that the hostname starts after the second slash (after `http://`) and goes either to the third slash or to the end of the string if there are only two slashes.

Now that we know how to find the hostname of a URL, we need to traverse the graph. In this article, we will describe how to apply two frequently used algorithms for traversing a graph: depth-first search and breadth-first search, which are feasible to implement during an interview.

>**Note.** If you are unfamiliar with these two algorithms, we highly recommend you visit the Graph Explore Card and watch the video explanations to gain a general understanding of [depth-first search](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) and [breadth-first search](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/3883/).

---

### Approach 1: Depth-first search

#### Intuition

Depth-first search is an algorithm for traversing a graph (directed or undirected). In this problem, we deal with a directed graph, which is not given explicitly. One has to call `htmlParser.getUrls(url)` to get the edges from the vertex corresponding to `url`.

We implement depth-first search (DFS) recursively as follows.

The recursive function `dfs` receives the vertex `url` we are now visiting.

There are (possibly zero) outgoing edges from `url` leading to other vertices. We iterate over all such vertices `nextUrl` using `htmlParser.getUrls(url)`. If the `nextUrl` has not yet been visited and has the same hostname as the start URL, visit it by calling `dfs(nextUrl)`. When visiting `nextUrl`, the algorithm will consider outgoing edges from the `nextUrl` and continue the recursion. In this way, DFS traverses all necessary vertices.

Since we visit a neighbor only if it is unvisited, we will not visit any vertex twice. We can use a set `visited` to track which vertices have been visited. At the end of the DFS, this set will hold the answer.

#### Algorithm

The recursive function `dfs` receives the current `url` we are visiting as a parameter. We keep a hash set `visited` of URLs visited by `dfs`.

The function `dfs` is as follows:

`dfs(url)`
1. Add `url` to the hash set `visited`.
2. Iterate over the list `htmlParser.getUrls(url)` of all URLs from a webpage of `url`. Let call the current element of this list `nextUrl`.
	* If `nextUrl` has the same hostname as the start URL and the set `visited` does not contain `nextUrl`, call `dfs(nextUrl)` recursively.

We initialize `startHostname` as the hostname of `startUrl`, call `dfs(startUrl)` from the main function, and return the URLs belonging to the hash set `visited` after the traversal.

#### Implementation

<iframe src="https://leetcode.com/playground/LEckdpMm/shared" frameBorder="0" width="100%" height="500" name="LEckdpMm"></iframe>


#### Complexity Analysis

Let $m$ be the number of edges in the graph, and $l$ be the maximum length of a URL (`urls[i].length`).

* Time complexity: $O(m \cdot l)$.

Let $k$ be the number of traversed vertices. We add all these nodes to the set, with each node costing up to $O(l)$. The total time for inserting into the set is thus $O(k \cdot l)$.

The most time-consuming part in the `dfs` is calling `htmlParser.getUrls(url)` to get the edges outgoing from `url` and iterating over all `nextUrl`. When processing `nextUrl`, we call `getHostname(nextUrl)` and search `nextUrl` in the hash set. Both of these can take $O(\text{nextUrl.length}) = O(l)$ time. The complexity equals the sum of all the $O(l)$ work done.

The total number of elements in `htmlParser.getUrls(url)` over all URLs is $m$ – the total number of edges in the graph. Each element can have a length of $O(l)$. The sum of lengths of the elements of `htmlParser.getUrls(url)` over all URLs is $O(m \cdot l)$.

The total complexity is $O(k \cdot l + m \cdot l)$. Since $k = O(m)$, we can simplify this expression to $O(m \cdot l)$.

* Space complexity: $O(m \cdot l)$.

At each recursion level, we simultaneously store the return value of `htmlParser.getUrls(url)`. As mentioned above, the total length of these is $O(m \cdot l)$. We also use a set to store the answer, which can grow to this size. While you usually don't include the answer as part of the space complexity, the set is also functional - it prevents us from visiting a URL more than once.

---

### Approach 2: Breadth-first search

#### Intuition

Breadth-first search is another algorithm for traversing a graph.

This algorithm uses a queue. The queue data structure has two primary operations:
* `enqueue`: add an element to the end of the queue.
* `dequeue`: remove the first element in the queue.

The breadth-first search operates as follows.

It maintains a queue of vertices (URLs). It starts with `startUrl`. Then it processes the vertices one by one in the queue. Let's say we are currently processing the vertex `url`.

There are (possibly zero) outgoing edges from `url` leading to other vertices. We iterate over all such vertices `nextUrl`. If the `nextUrl` has not yet been visited and has the same hostname as the start URL, add it to the queue.

The algorithm terminates when it has visited all vertices. This algorithm runs the same as DFS, the only difference is the order in which the vertices are visited. For this particular problem, we only want to visit all relevant vertices, so there isn't really a difference, and it's a matter of implementation preference.

#### Algorithm

1. Maintain a queue of vertices and the hash set `visited` (the same set as in the previous approach). Push the `startUrl` to the queue and the hash set.
2. While the queue is not empty:
	* Pop a vertex `url` from the queue.
	* Iterate over the list `htmlParser.getUrls(url)` of all URLs from a webpage of `url`. Let `nextUrl` be the current element of this list.
		* If `nextUrl` has the same hostname as the start URL and the set `visited` does not contain `nextUrl`, push the `nextUrl` to the queue and the hash set.
3. Return the URLs belonging to the set `visited`.

#### Implementation

<iframe src="https://leetcode.com/playground/mbuDkaYZ/shared" frameBorder="0" width="100%" height="500" name="mbuDkaYZ"></iframe>


#### Complexity Analysis

Let $n$ be the total number of URLs (`urls.length`), $m$ be the number of edges in the graph, and $l$ be the maximum length of a URL (`urls[i].length`).

* Time complexity: $O(m \cdot l)$.

Let $k$ be the number of traversed vertices. We add each of these vertices to the set and to the queue in up to $O(l)$ per vertex. The total time for inserting into the set and into the queue is thus $O(k \cdot l)$.

The most time-consuming part is calling `htmlParser.getUrls(url)` to get the edges outgoing from `url` and iterating over all `nextUrl`. When processing `nextUrl`, we call `getHostname(nextUrl)` and search `nextUrl` in the hash set. Both of these can take $O(\text{nextUrl.length}) = O(l)$ time. The complexity equals the sum of all the $O(l)$ work done.

The total number of elements in `htmlParser.getUrls(url)` over all URLs is $m$ – the total number of edges in the graph. Each element can have a length of $O(l)$. The sum of lengths of the elements of `htmlParser.getUrls(url)` over all URLs is $O(m \cdot l)$.

The total complexity is $O(k \cdot l + m \cdot l)$. Since $k = O(m)$, we can simplify this expression to $O(m \cdot l)$.

* Space complexity: $O(n \cdot l)$.

For each visited `url`, we call `htmlParser.getUrls(url)` and store its return value. For one `url`, `htmlParser.getUrls(url)` contains $O(n)$ elements (in the worst case, there are edges from the `url` to all other vertices), each having a length up to $O(l)$. The total length of the elements of `htmlParser.getUrls(url)` for one `url` could therefore be $O(n \cdot l)$. Unlike in the previous approach, we do not store them simultaneously for all vertices, but only for one vertex at a time.

The total length of the queue elements does not exceed the total length of all URLs – $O(n \cdot l)$.

So the total space complexity is $O(n \cdot l)$.