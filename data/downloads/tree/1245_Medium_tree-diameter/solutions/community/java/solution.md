# Clear solution : Use topological sort.

**Author:** svib
**Votes:** 2
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/4769392/](https://leetcode.com/problems/tree-diameter/solutions/4769392/)

---

```
class Solution {
    public int treeDiameter(int[][] edges) {
        // one of the approaches 
        // find "centroids" it will be one or 2 elements
        // use topologival sort to peel leaf elements

        // corner case
        if (edges == null || edges.length == 0) {
            return 0;
        }

        Map<Integer, Set<Integer>> adjSet = new HashMap<>();

        // create adj set
        for (int[] edge : edges) {
            adjSet.computeIfAbsent(edge[0], k -> new HashSet<>()).add(edge[1]);
            adjSet.computeIfAbsent(edge[1], k -> new HashSet<>()).add(edge[0]);
        }

        // populate queue with leaf elements for topological sort
        Queue<Integer> queue = new ArrayDeque<>();
        for (Map.Entry<Integer, Set<Integer>> entry : adjSet.entrySet()) {
            if (entry.getValue().size() == 1) {
                queue.offer(entry.getKey());
            }
        }

        int diameter = 0;

        // start to peel
        while (queue.size() > 1) { // we have to peel until we get a 1 or 0 elements left
            int size = queue.size();
            for (int i = 0; i < size; ++i) {
                Integer node = queue.poll(); 
                for (int neighbor : adjSet.get(node)) {
                    adjSet.get(neighbor).remove(node);
                    if (adjSet.get(neighbor).size() == 1) {
                        queue.offer(neighbor);
                    }
                }
            }

            diameter += 2;
        }

        // in queue can stay only 1 or 0 elements
        return queue.size() == 1 ? diameter : diameter - 1;
    }
}
```