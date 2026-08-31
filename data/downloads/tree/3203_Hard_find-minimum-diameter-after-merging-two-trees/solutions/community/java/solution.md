# ✅ Beats 100% - Detailed Explaination - C++/Java/Python

**Author:** KarryJodd
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5391371/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5391371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to find the minimum diameter after merging two trees. The diameter of a tree is the longest path between any two nodes. When merging two trees, the optimal solution is to connect the two trees in such a way that minimizes the overall diameter. By visualizing the problem, we can infer that the minimum diameter after merging two trees would be when the midpoints of the two diameters are connected.

# Approach
<!-- Describe your approach to solving the problem. -->
**Graph Representation:** Represent the two trees as adjacency lists using the given edges.
**Calculate Diameter:** Use a depth-first search (DFS) to calculate the diameter of each tree separately. This involves finding the longest path in each tree.
**Merge and Calculate Minimum Diameter:** When merging the two trees, connect the midpoints of the diameters of the two trees. The potential new diameter would be the sum of half the diameters of the two trees plus one (for the connecting edge). The minimum diameter after merging will be the maximum of the original diameters and the new potential diameter.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Constructing the graphs: $$O(n1 + n2)$$, where $$n1$$ and $$n2$$ are the number of nodes in the first and second trees respectively.
Calculating the diameter using DFS: $$O(n1 + n2)$$.
Overall: $$O(n)$$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Storing the graphs: $$O(n1 + n2)$$.
Visited arrays and recursion stack: $$O(n1 + n2)$$.
Overall: $$O(n1 + n2)$$.

# Code
Java Code
```
import java.util.*;

class Solution {
    int dia; // Variable to keep track of the maximum diameter found

    public int minimumDiameterAfterMerge(int[][] edges1, int[][] edges2) {
        int n1 = edges1.length + 1; // Number of nodes in the first tree
        int n2 = edges2.length + 1; // Number of nodes in the second tree

        // Initialize adjacency lists for both trees
        ArrayList<Integer>[] graph1 = new ArrayList[n1];
        ArrayList<Integer>[] graph2 = new ArrayList[n2];

        for (int i = 0; i < n1; i++) graph1[i] = new ArrayList<>();
        for (int i = 0; i < n2; i++) graph2[i] = new ArrayList<>();

        // Fill adjacency list for the first tree
        for (int i = 0; i < edges1.length; i++) {
            int u = edges1[i][0];
            int v = edges1[i][1];
            graph1[u].add(v);
            graph1[v].add(u);
        }

        // Fill adjacency list for the second tree
        for (int i = 0; i < edges2.length; i++) {
            int u = edges2[i][0];
            int v = edges2[i][1];
            graph2[u].add(v);
            graph2[v].add(u);
        }

        // Calculate diameter of the first tree
        dia = -1;
        boolean[] visited1 = new boolean[n1]; // Visited array to prevent revisiting nodes
        getDia(0, graph1, visited1);
        int d1 = dia;

        // Calculate diameter of the second tree
        dia = -1;
        boolean[] visited2 = new boolean[n2]; // Visited array to prevent revisiting nodes
        getDia(0, graph2, visited2);
        int d2 = dia;

        // Calculate the potential new diameter if we connect the two trees
        int cand = (d1 + 1) / 2 + (d2 + 1) / 2 + 1;

        // The minimum diameter after merging is the maximum of the potential new diameter and the original diameters
        return Math.max(cand, Math.max(d1, d2));
    }

    private int getDia(int src, ArrayList<Integer>[] graph, boolean[] visited) {
        visited[src] = true; // Mark the current node as visited
        int dch = -1; // Deepest Child Height
        int sdch = -1; // Second Deepest Child Height

        // Explore all children of the current node
        for (int child : graph[src]) {
            if (!visited[child]) {
                int ch = getDia(child, graph, visited); // Calculate the height of the child's subtree
                // Update the deepest and second deepest child heights
                if (ch > dch) {
                    sdch = dch;
                    dch = ch;
                } else if (ch > sdch) {
                    sdch = ch;
                }
            }
        }

        // Update the maximum diameter if the current path through this node is longer
        if (dch + sdch + 2 > dia) dia = dch + sdch + 2;
        dch += 1; // Increment the deepest child height for the current node
        return dch;
    }
}
```

C++ Code 
```
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int dia; // Variable to keep track of the maximum diameter found

    int minimumDiameterAfterMerge(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        int n1 = edges1.size() + 1; // Number of nodes in the first tree
        int n2 = edges2.size() + 1; // Number of nodes in the second tree

        // Initialize adjacency lists for both trees
        vector<vector<int>> graph1(n1);
        vector<vector<int>> graph2(n2);

        // Fill adjacency list for the first tree
        for (const auto& edge : edges1) {
            int u = edge[0];
            int v = edge[1];
            graph1[u].push_back(v);
            graph1[v].push_back(u);
        }

        // Fill adjacency list for the second tree
        for (const auto& edge : edges2) {
            int u = edge[0];
            int v = edge[1];
            graph2[u].push_back(v);
            graph2[v].push_back(u);
        }

        // Calculate diameter of the first tree
        dia = -1;
        vector<bool> visited1(n1, false); // Visited array to prevent revisiting nodes
        getDia(0, graph1, visited1);
        int d1 = dia;

        // Calculate diameter of the second tree
        dia = -1;
        vector<bool> visited2(n2, false); // Visited array to prevent revisiting nodes
        getDia(0, graph2, visited2);
        int d2 = dia;

        // Calculate the potential new diameter if we connect the two trees
        int cand = (d1 + 1) / 2 + (d2 + 1) / 2 + 1;

        // The minimum diameter after merging is the maximum of the potential new diameter and the original diameters
        return max(cand, max(d1, d2));
    }

private:
    int getDia(int src, vector<vector<int>>& graph, vector<bool>& visited) {
        visited[src] = true; // Mark the current node as visited
        int dch = -1; // Deepest Child Height
        int sdch = -1; // Second Deepest Child Height

        // Explore all children of the current node
        for (int child : graph[src]) {
            if (!visited[child]) {
                int ch = getDia(child, graph, visited); // Calculate the height of the child's subtree
                // Update the deepest and second deepest child heights
                if (ch > dch) {
                    sdch = dch;
                    dch = ch;
                } else if (ch > sdch) {
                    sdch = ch;
                }
            }
        }

        // Update the maximum diameter if the current path through this node is longer
        if (dch + sdch + 2 > dia) dia = dch + sdch + 2;
        dch += 1; // Increment the deepest child height for the current node
        return dch;
    }
};
```

Python Code 
```
from typing import List

class Solution:
    def __init__(self):
        self.dia = -1  # Variable to keep track of the maximum diameter found

    def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
        n1 = len(edges1) + 1  # Number of nodes in the first tree
        n2 = len(edges2) + 1  # Number of nodes in the second tree

        # Initialize adjacency lists for both trees
        graph1 = [[] for _ in range(n1)]
        graph2 = [[] for _ in range(n2)]

        # Fill adjacency list for the first tree
        for u, v in edges1:
            graph1[u].append(v)
            graph1[v].append(u)

        # Fill adjacency list for the second tree
        for u, v in edges2:
            graph2[u].append(v)
            graph2[v].append(u)

        # Calculate diameter of the first tree
        self.dia = -1
        visited1 = [False] * n1  # Visited list to prevent revisiting nodes
        self.getDia(0, graph1, visited1)
        d1 = self.dia

        # Calculate diameter of the second tree
        self.dia = -1
        visited2 = [False] * n2  # Visited list to prevent revisiting nodes
        self.getDia(0, graph2, visited2)
        d2 = self.dia

        # Calculate the potential new diameter if we connect the two trees
        cand = (d1 + 1) // 2 + (d2 + 1) // 2 + 1

        # The minimum diameter after merging is the maximum of the potential new diameter and the original diameters
        return max(cand, max(d1, d2))

    def getDia(self, src: int, graph: List[List[int]], visited: List[bool]) -> int:
        visited[src] = True  # Mark the current node as visited
        dch = -1  # Deepest Child Height
        sdch = -1  # Second Deepest Child Height

        # Explore all children of the current node
        for child in graph[src]:
            if not visited[child]:
                ch = self.getDia(child, graph, visited)  # Calculate the height of the child's subtree
                # Update the deepest and second deepest child heights
                if ch > dch:
                    sdch = dch
                    dch = ch
                elif ch > sdch:
                    sdch = ch

        # Update the maximum diameter if the current path through this node is longer
        if dch + sdch + 2 > self.dia:
            self.dia = dch + sdch + 2
        dch += 1  # Increment the deepest child height for the current node
        return dch
```