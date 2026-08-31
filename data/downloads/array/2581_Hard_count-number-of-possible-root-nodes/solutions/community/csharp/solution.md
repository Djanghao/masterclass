# C# | DFS & DP (Memoization), explained !

**Author:** bobdog1986
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256210/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256210/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a graph problem, we can try using every node as root , then traverse it , find how many correct guess , if >=k, this is a valid node.

# Approach
<!-- Describe your approach to solving the problem. -->

- using edges to build an undirected graph
- using guesses to build a directed graph
- For each node i, using it as root, then traverse the graph to find all correct guesses, if >=k, then i is a possible one
- Must avoid duplicate traversal, we using memo to cache the result of [parent-node, child-node] , so we only need to traverse the whole graph(all edges) twice.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
         public int RootCount(int[][] edges, int[][] guesses, int k)
        {
            int res = 0;
            int n = edges.Length+1;
            //build undirect graph by edges
            List<int>[] graph = new List<int>[n];
            for (int i = 0; i<n; i++)
                graph[i]=new List<int>();

            foreach(var e in edges)
            {
                graph[e[0]].Add(e[1]);
                graph[e[1]].Add(e[0]);
            }

            //build direct graph by guesses
            HashSet<int>[] directGraph = new HashSet<int>[n];
            for (int i = 0; i<n; i++)
                directGraph[i]=new HashSet<int>();

            foreach (var e in guesses)
            {
                directGraph[e[0]].Add(e[1]);
            }

            //memo is {parent, {child, count}}, count is all valid guesses traverse from parent to all childs
            var memo =new Dictionary<int, Dictionary<int,int>>();
            for(int i = 0; i<n; i++)
            {
                int count = RootCount(i, -1, graph, directGraph, memo);
                if (count>=k)
                    res++;
            }
            return res;
        }

        private int RootCount(int curr, int parent, List<int>[] graph, HashSet<int>[] set, Dictionary<int, Dictionary<int, int>> memo)
        {
            if (!memo.ContainsKey(parent))
                memo.Add(parent, new Dictionary<int, int>());
            //already traversed from
            if (memo[parent].ContainsKey(curr))
                return memo[parent][curr];
            else
            {
                int res = 0;
                foreach (var next in graph[curr])
                {
                    if (next == parent) continue;
                    if (set[curr].Contains(next)) res++;//{curr,next} is existed in guesses
                    res+=RootCount(next, curr, graph, set, memo);//DFS
                }
                memo[parent].Add(curr, res);
                return memo[parent][curr];
            }
        }
}
```