# Java || Concise and Clear Solution with Dijkstra

**Author:** Chris___Yang
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2823409/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2823409/)

---

# Intuition
1. The path you come back must be exactly the **same** **path** traversed before.
2. Only transfering **Path Cost** while doing Dijkstra
3. **k** and **appleCost** will only be used while updating the answer

# Approach
1. Based on the constraints\uFF0Cwe can build a sparse graph using adjacency list
2. For each starting city i, use Dijkstra to find the minimum cost of buring one apple

# Code
```
class Solution {
    public long[] minCost(int n, int[][] roads, int[] appleCost, int k) {

        // final result to be returned
        long[] result = new long[n];

        // Build the graph
        List<List<int[]>> graph = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; ++i) graph.add(new ArrayList<>());
        for (int[] road : roads) {
            int a = road[0], b = road[1], cost = road[2];
            graph.get(a).add(new int[]{b, cost});
            graph.get(b).add(new int[]{a, cost});
        }

        // Do dijkstra's algorithm to each starting city
        for (int i = 1; i <= n; ++i) {
            result[i - 1] = Dijkstra(graph, i, appleCost, k);
        }
        return result;
    }
    private long Dijkstra(List<List<int[]>> graph, int start, int[] appleCost, int k) {
        long ans = Long.MAX_VALUE;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        Set<Integer> visited = new HashSet<>();
        minHeap.offer(new int[]{start, 0}); // index, path cost
        
        while (!minHeap.isEmpty()) {
            int size = minHeap.size();
            for (int i = 0; i < size; ++i) {
                int[] top = minHeap.poll();
                // mark it as visited since it can't be smaller for this city
                visited.add(top[0]);
                // update the current ans
                ans = Math.min(ans, top[1] * (k + 1L) + appleCost[top[0] - 1]);
                // update the other sum
                List<int[]> cities = graph.get(top[0]);
                for (int[] city : cities) {
                    if (!visited.contains(city[0])) {
                        minHeap.offer(new int[]{city[0], top[1] + city[1]});
                    }
                }
            }
        }
        return ans;
    }
}
```