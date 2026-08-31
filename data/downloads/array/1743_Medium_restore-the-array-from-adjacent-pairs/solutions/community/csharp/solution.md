# C# DFS solution with explanation

**Author:** otabek_kholmirzaev
**Votes:** 7
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271573/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271573/)

---

# Intuition
To solve this problem, you can use a hashmap to store the adjacency information and then perform a depth-first search (DFS) to reconstruct the original array. Here's a C# implementation for the **RestoreArray** method:

# Approach
This implementation uses a depth-first search to traverse the graph and reconstruct the array. The **adjacencyMap** dictionary is used to store the adjacency information. The DFS starts from a node with only one adjacent node, and the result list is gradually populated as the traversal progresses.

# Complexity
- **Time complexity: O(n)** 
Building the adjacency map takes O(n) time, where n is the number of elements in the array.
Performing the depth-first search (DFS) also takes O(n) time because each node is visited once.
Therefore, the overall time complexity is O(n).

- **Space complexity: O(n)**
The space complexity is determined by the space used for the adjacency map, the result list, and the set of visited nodes.
The adjacency map stores information about adjacent elements, and in the worst case, it can have O(n) entries if every element has distinct neighbors. Thus, the space complexity for the adjacency map is O(n).
The result list also has a space complexity of O(n) since it contains all the elements of the original array.
The set of visited nodes in the DFS has a space complexity of O(n) in the worst case.
Therefore, the overall space complexity is O(n).

# Code
```
public class Solution {
    public int[] RestoreArray(int[][] adjacentPairs) {
        Dictionary<int, List<int>> adjacencyMap = new Dictionary<int, List<int>>();

        // Build the adjacency map
        foreach (var pair in adjacentPairs) {
            if (!adjacencyMap.ContainsKey(pair[0])) {
                adjacencyMap[pair[0]] = new List<int>();
            }
            if (!adjacencyMap.ContainsKey(pair[1])) {
                adjacencyMap[pair[1]] = new List<int>();
            }

            adjacencyMap[pair[0]].Add(pair[1]);
            adjacencyMap[pair[1]].Add(pair[0]);
        }

        // Find the start node (a node with only one adjacent node)
        int startNode = adjacencyMap.Keys.First(key => adjacencyMap[key].Count == 1);

        // Perform DFS to reconstruct the array
        List<int> result = new List<int>();
        HashSet<int> visited = new HashSet<int>();
        DFS(startNode, adjacencyMap, visited, result);

        return result.ToArray();
    }

    private void DFS(int node, Dictionary<int, List<int>> adjacencyMap, HashSet<int> visited, List<int> result) {
        visited.Add(node);
        result.Add(node);

        foreach (var neighbor in adjacencyMap[node]) {
            if (!visited.Contains(neighbor)) {
                DFS(neighbor, adjacencyMap, visited, result);
            }
        }
    }
}
```

![please upvote.png](./images/0.png)
