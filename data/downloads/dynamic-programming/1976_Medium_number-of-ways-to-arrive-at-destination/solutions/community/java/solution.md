# JAVA STEP BY STEP EXPLAINED✅✅ || SIMPLEST SOLUTION😀✌️

**Author:** abhiyadav05
**Votes:** 31
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/3979418/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/3979418/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(m + n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ --> O(m + n)
![Screenshot_20230205_171246.png](./images/0.png)


# Code
```
class Pair {
    long first;
    long second;

    Pair(long first, long second) {
        this.first = first;
        this.second = second;
    }
}

class Solution {
    public int countPaths(int n, int[][] roads) {
        
        // Create an adjacency list to represent the graph
        ArrayList<ArrayList<Pair>> adj = new ArrayList<>();

        // Initialize the adjacency list
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        int m = roads.length;

        // Populate the adjacency list with road information
        for (int i = 0; i < m; i++) {
            adj.get(roads[i][0]).add(new Pair(roads[i][1], roads[i][2]));
            adj.get(roads[i][1]).add(new Pair(roads[i][0], roads[i][2]));
        }

        // Create a priority queue for Dijkstra's algorithm
        PriorityQueue<Pair> pq = new PriorityQueue<>((Pair1, Pair2) -> Long.compare(Pair1.first, Pair2.first));

        // Initialize arrays for distances and ways
        long dist[] = new long[n];
        long ways[] = new long[n];
        long mod = (int)(1e9 + 7);

        // Initialize distance and ways arrays
        for (int i = 0; i < n; i++) {
            dist[i] = Long.MAX_VALUE;
            ways[i] = 0;
        }

        // Starting node has distance 0 and one way to reach it
        dist[0] = 0;
        ways[0] = 1;

        pq.add(new Pair(0, 0));

        while (pq.size() != 0) {
            long dis = pq.peek().first;
            long node = pq.peek().second;
            pq.remove();

            // Explore neighboring nodes
            for (Pair it : adj.get((int) node)) {
                long adjNode = it.first;
                long edW = it.second;

                // If a shorter path is found, update distance and ways
                if (dis + edW < dist[(int) adjNode]) {
                    dist[(int) adjNode] = dis + edW;
                    pq.add(new Pair(dis + edW, adjNode));
                    ways[(int) adjNode] = ways[(int) node];
                } else if (dis + edW == dist[(int) adjNode]) {
                    // If multiple paths with the same length are found, add their ways
                    ways[(int) adjNode] = (ways[(int) adjNode] + ways[(int) node]) % mod;
                }
            }
        }

        // Return the number of ways to reach the last node modulo mod
        return (int)(ways[n - 1] % mod);
    }
}

```