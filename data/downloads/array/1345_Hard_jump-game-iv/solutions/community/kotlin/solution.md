# 🚀🔥 Kotlin/Java optimized BFS approach explained

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3261819/](https://leetcode.com/problems/jump-game-iv/solutions/3261819/)

---

# Approach
It is pretty intuitive to treat array items as nodes and the possible paths between them as edges in a graph.

Simplest approach to find a shortest path between two nodes is to do a BFS search from start and stop when target node is encountered.

This solution sadly gives a TLE and we must optimize.

The trick is to not repeat already traversed paths. The biggest problem seem to be running through the "same value" paths multiple times. 
If we traversed all neighbors of node of some value, we don't want to iterate this array again, because we'll find out that every one of them is already visited. Simplest way to prevent this is to remove the value key after first visit.
This optimizes greatly for that evil testcase, when there is a very large array where all nodes but last have same value.

# Complexity
- Time complexity:
$$O(n)$$ - every node is visited once

- Space complexity:
$$O(n)$$ - can be maximally allocated either in queue or visited array

```kotlin []
class Solution {
    fun minJumps(arr: IntArray): Int {
        val q: Queue<Int> = LinkedList()
        val visited = hashSetOf<Int>()

        q.add(0)
        visited.add(0)
        val nodesByValue = hashMapOf<Int, ArrayList<Int>>()

        for (i in arr.indices) {
            nodesByValue.computeIfAbsent(arr[i]) { arrayListOf() }.add(i)
        }

        var dist = 0

        while (q.isNotEmpty()) {
            val size = q.size

            for (i in 0 until size) {
                val curr = q.poll()
                if (curr == arr.size-1) return dist
                for (node in nodesByValue[arr[curr]] ?: arrayListOf()) {
                    if (visited.contains(node)) continue
                    if (node == arr.size-1) return dist+1
                    visited.add(node)
                    q.add(node)
                }

                nodesByValue.remove(arr[curr])

                if (curr-1 >= 0 && !visited.contains(curr-1)) {
                    q.add(curr-1)
                    visited.add(curr-1)
                }

                if (curr+1 < arr.size && !visited.contains(curr+1)) {
                    if (curr+1 == arr.size-1) return dist+1
                    q.add(curr+1)
                    visited.add(curr+1)
                }
            }

            dist++
        }

        return dist
    }
}
```
```java []
class Solution {
    public int minJumps(int[] arr) {
        int n = arr.length;
        Map<Integer, List<Integer>> nodesByValue = new HashMap<>();
        
        for (int i=0; i < n; i++) {
            nodesByValue.computeIfAbsent(arr[i], (key) -> new ArrayList<Integer>()).add(i);
        }

        Queue<Integer> q = new LinkedList<>();
        q.add(0);
        Set<Integer> visited = new HashSet<>();
        visited.add(0);
        int dist = 0;

        while (!q.isEmpty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int curr = q.poll();
                if (curr == n-1) return dist;

                for (int node: nodesByValue.getOrDefault(arr[curr], new ArrayList<>())) {
                    if (node == n-1) return dist+1;
                    if (visited.contains(node)) continue;
                    visited.add(node);
                    q.add(node);
                }

                nodesByValue.remove(arr[curr]);

                if (curr-1 >= 0 && !visited.contains(curr-1)) {
                    visited.add(curr-1);
                    q.add(curr-1);
                }

                if (curr+1 < n && !visited.contains(curr+1)) {
                    if (curr+1 == n-1) return dist+1;
                    visited.add(curr+1);
                    q.add(curr+1);
                }
            }

            dist++;
        }

        return dist;
    }
}
```