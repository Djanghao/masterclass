# C# Solution Similar to Linked List with Explanation

**Author:** woi55
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583581/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583581/)

---

# Intuition
So firstly a key constraint of this problem is that there are no interleaving paths. This means you do not need to track any alternating paths. You only need to track one main path and only the nodes on this path stay relevant all other nodes become irrelevant when you add a path that bypasses them.

So you might notice that this means a linked list approach is ideal and when adding a path you delete then nodes between those points in the linked list. The only downside to this is that you can't skip to a particular node in a linked list. To get around this you can track each node in the linked list in a array to instantly jump to where you insert the new path. 

Because of the no interleaving paths constraint, if either the start or the end node of a path has already been removed, then all nodes on this path have already been removed and this path is not relevant. If either start or end node still exist, then they both do, although some nodes in between may have already been removed.

# Approach
A linked list approach is workable or you can just simulate a linked list using an array that tracks next pointers. Initially all pointers simply point to the next node in the list and the length of the shortest path from nodes 0 to n is $n - 1$.

When you add a new path, check if the start node still exists, if not skip adding the path. If the start node exists, traverse the next pointers and delete every node you encounter until you reach the end node and set the start pointer to the end node. For every node you delete, decrement the length of the shortest path by 1.

# Complexity
- Time complexity:
$O(n + queries.length)$

- Space complexity:
$O(n)$

# Code
```
public class Solution {
    public int[] ShortestDistanceAfterQueries(int n, int[][] queries) {
        int[] answer = new int[queries.Length];
        int shortest = n - 1;
        int[] nextNode = new int[n];
        for (int i = 0; i < n; ++i) {
            nextNode[i] = i + 1;
        }
        int node, next;
        for (int q = 0; q < queries.Length; ++q) {
            node = queries[q][0];
            if (nextNode[node] != -1) {
                next = nextNode[node];
                nextNode[node] = queries[q][1];
                while (next < queries[q][1]) {
                    node = next;
                    next = nextNode[node];
                    nextNode[node] = -1;
                    --shortest;
                }
            }
            answer[q] = shortest;
        }
        return answer;
    }
}
```