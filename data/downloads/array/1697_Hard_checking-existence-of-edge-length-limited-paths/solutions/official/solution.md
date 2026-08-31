# Official Solution

**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solution/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solution/)

---

[TOC]

## Solution
--- 

### Approach 1: Disjoint-Set Union

#### Intuition

We have a graph with weighted, bidirectional edges and a set of queries. For each query, we need to determine if it's possible to go from one node to another while only using edges with weights strictly less than the limit specified in the query.

The simplest solution would be to perform a breadth-first search or depth-first search for every query, starting from one of the nodes and only considering edges with weights less than the limit until we reach the end node or run out of edges. However, this approach is not efficient because we would end up traversing the same edges repeatedly for each query.

Another way to solve this problem is to create connected components using only edges with weights less than the limit specified in the query. If both the starting and end nodes are in the same component, it means there is a path between them that uses only edges with weights less than the limit.

> To implement this solution, we can use a Disjoint Set Union (DSU) or Union-Find data structure. This article assumes that you are already familiar with these data structures and will not go into further detail. If you would like to learn more, you can refer to our [Graph Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/), or this post [Disjoint Set Union (DSU)/Union-Find - A Complete Guide](https://leetcode.com/discuss/general-discussion/1072418/Disjoint-Set-Union-(DSU)Union-Find-A-Complete-Guide) written by one of our authors.


If for each query, we generate the connected components from scratch (i.e. iterate on all edges in each query), then the approach will still not be optimized enough. Instead what we can do is we can sort the `queries` array by the weight limit in increasing order.   

The advantage of sorting is that when we reach a query at index $i$, and we need to create connected components with edges having weights less than $\text{limit}_{(i)}$, we can utilize the components created in the previous query with a weight limit of $\text{limit}_{(i-1)}$ as it cannot be more than the current limit, $\text{limit}_{(i)}$. This eliminates the need to generate connected components anew for each query and increases the optimization of the solution.

We can also sort the edges by their weight in increasing order as well. This allows us to easily process the edges in the correct order.

We are attaching the following slideshow for better understanding:     

!?!../Documents/1697/slideshow.json:1024,768!?!

<br />

#### Algorithm

1. Create a `UnionFind` class:
    - It has two arrays: `group` and `rank` which store the group and rank of the tree of index `i` respectively.
    - And three methods: 
        - `find(node)` to find the group of `node`, 
        - `join(node1, node2)` to include both nodes in the same component, and 
        - `areConnected(node1, node2)` to check if both nodes belong to the same component.

2. Initialize variables:
    - `uf`, a `UnionFind` class's object with `n` size:
    - `queriesCount`, an integer variable denoting the size of the `queries` array.
    - `answer`, an array with `queriesCount` size.
    - `queriesWithIndex`, an array storing all the queries of the `queries` array with their original indices.
    - `edgesIndex`, integer variable with initial value `0`.

3. Sort all edges in the `edgeList` array in increasing order of their edge weights.

4. Sort all queries in the `queriesWithIndex` array in increasing order of the limit of edge allowed.

5. Iterate on `queriesWithIndex` array, for each query:
    - Get the nodes `p` and `q`, the limit `limit` and the original index `queryOriginalIndex` of the current query.  
    - While `edgesIndex` is less than the number of edges and its edge weight is less than `limit`, join the nodes in the edge using UnionFind's join method `uf.join(node1, node2)` and increment `edgesIndex` by `1`.  
    - Check if both nodes `p`, and `q` belong to the same component using UnionFind's `uf.areConnected(p, q)` method. If yes, set `answer[queryOriginalIndex]` to `true`, otherwise to `false`.   

6. Return `answer`.

#### Implementation


<iframe src="https://leetcode.com/playground/jkUBK6SS/shared" frameBorder="0" width="100%" height="500" name="jkUBK6SS"></iframe>


#### Complexity Analysis

Here, $n$ is the number of nodes, $e$ is the number of edges and $q$ is the number of queries.


* Time complexity: $O(n + e \log e + q \log q)$          
  - It will take $O(n)$ time to initialize `group` and `rank` arrays in `uf` object. 
  - Sorting the `edgeList` and `queriesWithIndex` arrays takes $O(e \log e + q \log q)$ time.
  - Then we iterate over $q$ queries and $e$ edges. At worst, each edge and query is processed only once. So, the while loop takes $O(e + q)$ time.
  - The `find()`, `join()`, and `areConnected()` methods of the `UnionFind` class takes $O(\alpha(n))$ time each. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$.
  - Thus, overall we take $O(n + (e \log e + q \log q) + \alpha(n) \cdot (e + q)) = O(n + e \log e + q \log q)$ time. 

* Space complexity: $O(n + q + e)$    
  - The `UnionFind` class uses $O(n)$ space to store the `group` and `rank` arrays.
  - Then we use $O(q)$ space to store the `queriesWithIndex` array.
  - Also, some extra space is used when we sort it in-place. The space complexity of the sorting algorithm depends on the programming language.      
    - In Python, the sort() method sorts a list using the Timsort algorithm which has $O(n)$ additional space where $n$ is the number of the elements. 
    - In C++ and Swift, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.                    
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$.          
    - In JavaScript, the space complexity of sort() is $O(\log n)$.   
  - Thus, overall we use up to $O(n + q + \log e + \log q)$ or $O(n + q + e + q) = O(n + q + e)$ space.