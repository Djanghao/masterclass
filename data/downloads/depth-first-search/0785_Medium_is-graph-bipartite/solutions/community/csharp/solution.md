# Simple two Hash-set solution | C#

**Author:** Baymax_
**Votes:** 5
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/3540590/](https://leetcode.com/problems/is-graph-bipartite/solutions/3540590/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
*Given a graph, it can be said it is Bipartite if the nodes/vertices can divided into two groups such that no two noded/vertices in same group has an edge between them.*

***We'll use two hashsets to indicate two groups, left-nodes and right-nodes and use DFS approach for adding nodes to these hashsets alternatively*** and check if the current node and next node are in same hashset or not.. to decide if the graph is bi-partite or not.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) - as we need to visit all the nodes in the graph

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - as we use hashsets to store the nodes

![Screenshot 2023-05-19 110734.png](./images/0.png)


## Please upvote if you like the simple explaination and approach

# Code
```
public class Solution {
    public bool IsBipartite(int[][] graph) {
        //let's have two set of nodes, left and right
        HashSet<int> left = new HashSet<int>();
        HashSet<int> right = new HashSet<int>();

        //to check if node is already visited or not.
        HashSet<int> visited = new HashSet<int>();

        for (int i = 0; i < graph.Length; i++)
        {
            if (!visited.Contains(i))
            {
                visited.Add(i);
                left.Add(i);
                if (!DFS(i, graph, visited, left, right))
                    return false;
            }
        }

        return true;
    }

    private bool DFS(int node, int[][] graph, HashSet<int> visited, HashSet<int> h1, HashSet<int> h2)
    {
        for (int i = 0; i < graph[node].Length; i++)
        {
            //check if the next node is already present in same set as current node
            //return if present in same set
            if (h1.Contains(graph[node][i]))
                return false;

            if (!visited.Contains(graph[node][i]))
            {
                visited.Add(graph[node][i]);
                h2.Add(graph[node][i]);
                //reversing h1 and h2 params here...
                bool result = DFS(graph[node][i], graph, visited, h2, h1);
                if (!result)
                    return result;
            }
        }

        return true;
    }
}
```

## Please upvote if you like the simple explaination and approach
![Upvote please.jpg](./images/1.jpeg)
