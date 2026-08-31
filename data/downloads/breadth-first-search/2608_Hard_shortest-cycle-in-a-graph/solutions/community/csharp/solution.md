# 🔥💯✅Shortest Cycle in a Graph✅💯🔥

**Author:** sultanalif533
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/5610021/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/5610021/)

---

# Intuition
*The problem of finding the shortest cycle in a graph can be broken down into two main components: building the graph and performing a breadth-first search (BFS) to detect cycles. By representing the graph as an adjacency list, we can efficiently traverse the graph and keep track of the distance from the starting node to each node. The key insight is to use a BFS approach to explore the graph level by level, and to keep track of the shortest cycle found so far.*

# Approach
# 1. Step 1: Initialize the Graph and Data Structures

* Create an adjacency list adj of size n to represent the graph, where each index i represents a node and adj[i] is a list of its neighbors.
* Initialize a visited array vis of size n to keep track of the distance from the starting node to each node.
* Create a queue q to store nodes to visit, where each node is represented as a tuple (node, parent).
* 
    ```
    List<int>[] adj = new List<int>[n];
    for (int i = 0; i < adj.Length; i++) adj[i] = new List<int>();
    int[] vis;
    Queue<(int, int)> q = new Queue<(int, int)>();
    ```
# 2. Step 2: Build the Graph

* Iterate over the given edges and add each edge to the adjacency list.
* For each edge (u, v), add v to the list of neighbors of u and add u to the list of neighbors of v.
* ```
  foreach (var i in edges)
  {
    adj[i[0]].Add(i[1]);
    adj[i[1]].Add(i[0]);
  }
  ```

# Step 3: Perform BFS Traversal from Each Node

* Iterate over all nodes e from 0 to n-1.
* For each node e, reset the visited array vis and enqueue the node e with its parent set to -1.
* ```
  for (int e = 0; e < n; e++)
  {
    vis = new int[n];
    vis[e] = 1;
    q.Enqueue((e, -1));
    // ...
  }
  ```

# Step 4: Explore Neighbors and Update Distances

* While the queue is not empty, dequeue a node (curr, parent) and explore its neighbors.
* For each neighbor i of curr, if i is not the parent of curr, check if i has been visited before.
* If i has been visited, update the shortest cycle length if the current distance is shorter.
* If i has not been visited, mark it as visited, update its distance, and enqueue it with its parent set to curr.
* ```
  while (q.Count > 0)
  {
    var (curr, parent) = q.Dequeue();
    foreach (var i in adj[curr])
    {
        if (i == parent) continue;
        if (vis[i] != 0) ans = Math.Min(vis[i] + vis[curr] - 1, ans);
        else
        {
            vis[i] = vis[curr] + 1;
            q.Enqueue((i, curr));
        }
    }
  }
  ```
# Step 5: Return the Shortest Cycle Length

* After iterating over all nodes and performing BFS traversal from each node, return the shortest cycle length found.
* If no cycle is found, return -1.
* ```
  return ans == int.MaxValue ? -1 : ans;
  ```

# Complexity
- Time complexity:
$$O(N^2)$$

- Space complexity:
$$O(M + N)$$

![image.png](./images/0.png)


# Code
```
public class Solution {
    public int FindShortestCycle(int n, int[][] edges) {
        int[] vis;
        List<int>[] adj = new List<int>[n];
        for(int i=0;i<adj.Length;i++) adj[i] =  new List<int>();
        foreach(var i in edges) 
        {
            adj[i[0]].Add(i[1]);
            adj[i[1]].Add(i[0]);
        }
        int ans = int.MaxValue;
        Queue<(int,int)> q = new Queue<(int,int)>();
        for(int e=0;e<n;e++)
        {
            vis = new int[n];
            vis[e] = 1;
            q.Enqueue((e,-1));
            while(q.Count>0)
            {
                var (curr, parent) = q.Dequeue();
                foreach(var i in adj[curr])
                {
                    if(i==parent) continue;
                    if(vis[i]!=0) ans = Math.Min(vis[i]+vis[curr]-1, ans);
                    else
                    {
                        vis[i] = vis[curr]+1;   
                        q.Enqueue((i,curr));
                    }
                }
            }
            q.Clear();
        }
        return ans==int.MaxValue?-1:ans;
    }
}
```