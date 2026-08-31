# 💥Memory beats 100.00%, Runtime beats 91.67% [EXPLAINED]

**Author:** r9n
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/5813868/](https://leetcode.com/problems/jump-game-iv/solutions/5813868/)

---

# Intuition
The problem revolves around finding the shortest path to the last index of an array by jumping to indices based on specific rules. You can jump to the next index, the previous index, or any index with the same value as the current index. The goal is to minimize the number of jumps, making it important to explore all possible routes efficiently.

# Approach
Graph Representation:

We treat the array as a graph where each index is a node. We create a mapping of each value to the indices that contain that value, which allows for quick access to potential jumps.

We use BFS to explore the graph:

Start from the first index and explore all possible jumps level by level.

Use a queue to keep track of indices to explore and a visited array to avoid processing the same index multiple times.

For each index, check possible jumps to neighboring indices and indices with the same value.

Stop when reaching the last index, counting the number of jumps taken.


# Complexity
- Time complexity:
O(n), where n is the length of the array. Each index is processed once, and we handle each value\u2019s indices only when needed.

- Space complexity:
O(n) for storing the graph of indices and the visited array, plus the queue used for BFS.


# Code
```csharp []
class Solution
{
    public int MinJumps(int[] arr)
    {
        int n = arr.Length;
        if (n == 1) return 0;

        // Step 1: Build the graph of indices with the same value
        Dictionary<int, List<int>> graph = new Dictionary<int, List<int>>();
        for (int i = 0; i < n; i++)
        {
            if (!graph.ContainsKey(arr[i]))
                graph[arr[i]] = new List<int>();
            graph[arr[i]].Add(i);
        }

        // Step 2: BFS initialization
        Queue<int> queue = new Queue<int>();
        bool[] visited = new bool[n];
        int steps = 0;
        
        queue.Enqueue(0); // Start from the first index
        visited[0] = true;

        while (queue.Count > 0)
        {
            int levelSize = queue.Count;

            for (int i = 0; i < levelSize; i++)
            {
                int index = queue.Dequeue();
                if (index == n - 1) return steps;

                // Check the next index
                if (index + 1 < n && !visited[index + 1])
                {
                    queue.Enqueue(index + 1);
                    visited[index + 1] = true;
                }

                // Check the previous index
                if (index - 1 >= 0 && !visited[index - 1])
                {
                    queue.Enqueue(index - 1);
                    visited[index - 1] = true;
                }

                // Check all indices with the same value
                if (graph.ContainsKey(arr[index]))
                {
                    foreach (int nextIndex in graph[arr[index]])
                    {
                        if (nextIndex != index && !visited[nextIndex])
                        {
                            queue.Enqueue(nextIndex);
                            visited[nextIndex] = true;
                        }
                    }
                    // Clear the list to prevent redundant work
                    graph[arr[index]].Clear();
                }
            }
            steps++;
        }

        return -1; // Just a fallback, theoretically should never reach here
    }
}

```