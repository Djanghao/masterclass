# Variation of House Robber III: Easy to Understand

**Author:** jimkirk
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3422043/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3422043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem has several steps.
1. Find shortest path in each trip using breadth-first search.
2. Count how many times each node appears in the trips.
2. Similar to [LC.337. House Robber III](https://leetcode.com/problems/house-robber-iii/). But this time, it is not rob or not rob, it is havle or whole (not havle), this step uses depth-first search.

# Approach
<!-- Describe your approach to solving the problem. -->
Step 1 is straightforward, and use a parent array to record the parent of current node, then rebuild the path.

Step 2 use a hash map or a counter array to record how many times a node appears in all trips, it is computed in step 1.

Step 3 is a little tricky. Use (post-order) depth-first search and return two values: One value is current node is computed without halving, and the other value is computed with havling. When current node is halving, because its adjacent nodes must be whole (not havle), so that whole (not havle) contains neighbors whose values are whole. When current node is whole (not havle), its adjacent nodes can be either whole or halved, so that we take the minimum between whole (not havle) and havle.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * numOfTrips).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n).

# Code
```
class Solution {
    public int minimumTotalPrice(int n, int[][] edges, int[] price, int[][] trips) {
        List<List<Integer>> tree = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            tree.add(new ArrayList<>());            
        }
        for (int[] edge : edges) {
            tree.get(edge[0]).add(edge[1]);
            tree.get(edge[1]).add(edge[0]);
        }
        Map<Integer, Integer> counts = new HashMap<>();
        for (int[] trip : trips) {
            bfs(tree, trip[0], trip[1], counts);
        }
        int[] currPrice = new int[n];
        for (int i = 0; i < n; i++) {
            currPrice[i] = counts.getOrDefault(i, 0) * price[i];
        }
        int[] result = helper(tree, 0, -1, currPrice);
        return Math.min(result[0], result[1]);
    }
    private int[] helper(List<List<Integer>> tree, int curr, int parent, int[] currPrice) {
        List<Integer> neighbors = tree.get(curr);
        int whole = 0;
        int halved = 0;
        for (int nei : neighbors) {
            if (nei == parent) {
                continue;
            }
            int[] neiResult = helper(tree, nei, curr, currPrice);
            whole += neiResult[0];
            halved += Math.min(neiResult[0], neiResult[1]);
        }
        return new int[] {currPrice[curr] + halved, currPrice[curr] / 2 + whole};
    }
    private void bfs(List<List<Integer>> tree, int src, int dst, Map<Integer, Integer> counts) {
        int n = tree.size();
        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] visited = new boolean[n];
        int[] parent = new int[n];
        Arrays.fill(parent, -1);
        queue.offer(src);
        visited[src] = true;
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            if (curr == dst) {
                break;
            }
            for (int nei : tree.get(curr)) {
                if (!visited[nei]) {
                    visited[nei] = true;
                    parent[nei] = curr;
                    queue.offer(nei);
                }
            }
        }
        int curr = dst;
        while (curr != -1) {
            counts.put(curr, counts.getOrDefault(curr, 0) + 1);
            curr  = parent[curr];
        }
    }
}

```