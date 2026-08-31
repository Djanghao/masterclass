# Review of two popular approaches, Disjoint Sets and DFS, including optimizations (Java centric)

**Author:** totsubo
**Votes:** 85
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/393127/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/393127/)

---

*If you like this post please give it a vote, it will encourage me to post similar reviews for other problems ^_^*

I found this problem interesting because some of the solutions used an algorithm and data structure that I did not know, the Disjoint Sets Data Structure.

If the disjoint set algorithm is new to you I highly recommend watching this video: https://www.youtube.com/watch?v=wU6udHRIkcc

Also interesting is that both the Depth First Search or Disjoint Sets solutions can be improved using the same optimization, using Sets to track node neighbours.

To solve the problem the basic idea is to notice that to make a valid move, we need a stone to be connected to at least one other stone. Also notice that stones that are connected to each other form a connected graph (or set). For each connected graph the largest number of moves possible is to remove the stones one by one, and we will be left with the last stone in the graph, which cannot be removed (because it is not connected to any other stone). All we need to do is count how many separate (unique) connected graphs exist.

If we can do that we get that answer =  Sum(number of stones in each graph - 1).

Which is also equivalent to answer = Sum(number of stones in each graph) - (number of graphs * 1) or answer = total number of stones - number of graphs.

## Na\xEFve Disjoint Set Union Solution
https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/discuss/199168/standard-union-find-solution

This video may also help (thought there are small errors in the implementation): https://www.youtube.com/watch?v=y-rfZ_ToHv8&t=14s

Time comlexity: `O(n^2)`
Space complexity:  `O(n)`

The idea is to first make each stone a disjoint set, then everytime we find a neighbour we union the two sets. The implementation is relatively simple. However because of the two for loops, the time complexity is `O(n^2)`

## Improved DSU
https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/discuss/197973/Java-Union-Find-finding-number-of-connected-components/202775

See comment by @Big_News for an improvement

Time comlexity: `O(n)`
Space complexity:  `O(n)`

The improved DSU solution creates a map of all the nodes with a certain X coordinate and a second map with all the nodes with a specific X coordinate. This allows us to quickly join all of a node's neighbour into a set. This improves the na\xEFve DSU implementation from `O(n^2)` to `O(n)`

Two more small improvements can be done.

The first is improving find() by using `collapsing find`. This will make find() constant time:

```
public int find(int x) {
	if (parents[x] != x) {
		parents[x] = find(parents[x]);
	}
	return parents[x];
}
```

The second is to use `Weighted Union `, where when union two sets, we make the smaller set a child of the larger set.

```
public void union(int x, int y) {
	int rootX = find(x);
	int rootY = find(y);
	if (rootX == rootY) return;
	if (counts[rootX] > counts[rootY]) {
		parents[rootY] = rootX;
		counts[rootX] += counts[rootY];
	} else {
		parents[rootX] = rootY;
		counts[rootY] += counts[rootX];
	}
	count--;
}
```

**Note**: From my `Java` submission results the optmized DSU solutions is the fastest solution at 10 ms, probably because it uses `int[]` instead of the `Map` objects in the DFS solutions below.

## Na\xEFve DFS solution
Time comlexity: `O(n^2)`
Space complexity:  `O(n)`

This solution is a simple and easy to understand implementation, and inspired by: https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/discuss/209369/Java-recursive-DFS-Short-and-easy-to-understand

However it is **not** a real ```DFS``` since for each node, the solution just vists *all* the other nodes, not just it's neighbors. This is why it has an `O(n^2)` complexity.

## Real DFS solution
Time comlexity: `O(n)`
Space complexity:  `O(n)`

This solution is a real `DFS` implementation because it only visits each nodes connected neighbour: https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/discuss/239162/DFS-Time-O(N)-Space-O(N)-ConciseandandReadable

The improvement upon the na\xEFve solution above, is the same as the improvement for the DSU solution. First creates a map to record all the nodes with the same X coordinate, and create another map of all the nodes with a same Y coordinate. We can then use these maps to find each node's neighbour in constant time. This means we can do a real `DFS`.

While this solution is `O(n)` because of the overhead of the Map objects it is slower than the DSU solution that uses simple arrays instead of Maps.
