# Share some thoughts

**Author:** dietpepsi
**Votes:** 1874
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/76055/](https://leetcode.com/problems/minimum-height-trees/solutions/76055/)

---

**See [here for a better view](http://algobox.org/minimum-height-trees/)**

First let's review some statement for tree in graph theory:

> (1) A tree is an undirected graph in which any two vertices are
> connected by exactly one path.
> 
> (2) Any connected graph who has `n` nodes with `n-1` edges is a tree.
> 
> (3) The degree of a vertex of a graph is the number of
> edges incident to the vertex.
> 
> (4) A leaf is a vertex of degree 1. An internal vertex is a vertex of
> degree at least 2.
> 
> (5) A path graph is a tree with two or more vertices that is not
> branched at all.
> 
> (6) A tree is called a rooted tree if one vertex has been designated
> the root.
> 
> (7) The height of a rooted tree is the number of edges on the longest
> downward path between root and a leaf.

OK. Let's stop here and look at our problem.

Our problem want us to find the minimum height trees and return their root labels. First we can think about a simple case -- a path graph.

For a path graph of `n` nodes, find the minimum height trees is trivial. Just designate the middle point(s) as roots.

Despite its triviality, let design a algorithm to find them.

Suppose we don't know `n`, nor do we have random access of the nodes. We have to traversal. It is very easy to get the idea of two pointers. One from each end and move at the same speed. When they meet or they are one step away, (depends on the parity of `n`), we have the roots we want.

This gives us a lot of useful ideas to crack our real problem.

For a tree we can do some thing similar. We start from every end, by end we mean vertex of degree 1 (aka leaves). We let the pointers move the same speed. When two pointers meet, we keep only one of them, until the last two pointers meet or one step away we then find the roots.

It is easy to see that the last two pointers are from the two ends of the longest path in the graph.

The actual implementation is similar to the BFS topological sort. Remove the leaves, update the degrees of inner vertexes. Then remove the new leaves. Doing so level by level until there are 2 or 1 nodes left. What's left is our answer!

The time complexity and space complexity are both O(n). 

Note that for a tree we always have `V = n`, `E = n-1`.


**Java**

    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        if (n == 1) return Collections.singletonList(0);

        List<Set<Integer>> adj = new ArrayList<>(n);
        for (int i = 0; i < n; ++i) adj.add(new HashSet<>());
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        List<Integer> leaves = new ArrayList<>();
        for (int i = 0; i < n; ++i)
            if (adj.get(i).size() == 1) leaves.add(i);

        while (n > 2) {
            n -= leaves.size();
            List<Integer> newLeaves = new ArrayList<>();
            for (int i : leaves) {
                int j = adj.get(i).iterator().next();
                adj.get(j).remove(i);
                if (adj.get(j).size() == 1) newLeaves.add(j);
            }
            leaves = newLeaves;
        }
        return leaves;
    }
	
    // Runtime: 53 ms

**Python**

    def findMinHeightTrees(self, n, edges):
        if n == 1: return [0] 
        adj = [set() for _ in xrange(n)]
        for i, j in edges:
            adj[i].add(j)
            adj[j].add(i)

        leaves = [i for i in xrange(n) if len(adj[i]) == 1]

        while n > 2:
            n -= len(leaves)
            newLeaves = []
            for i in leaves:
                j = adj[i].pop()
                adj[j].remove(i)
                if len(adj[j]) == 1: newLeaves.append(j)
            leaves = newLeaves
        return leaves
		
    # Runtime : 104ms