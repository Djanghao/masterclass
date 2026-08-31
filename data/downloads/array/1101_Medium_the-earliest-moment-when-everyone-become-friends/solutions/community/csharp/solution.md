# Union Find with rank and path compression

**Author:** jsangco
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4472213/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4472213/)

---

# Intuition
Determining when friends become part of another group of friends is like determining when verticies on a graph become part of a connected set. This problem is solved easily with a union find data structure.

# Approach
Implement Union Find with path compression and rank. Everytime a vertex is added to a set we increase our friend count. When taking the union of two verticies we ignore them if they share the same parent because that means they are already part of the same set.

The log times are out of order, so we sort the logs first to determine the earliest time that all verticies have been added to the set.

# Complexity
- Time complexity:
Sorting the logs in $$O(nlogn)$$ complexity, the union find with rank and path compression is $$O(logn)$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int EarliestAcq(int[][] logs, int n)
    {
        int[] parents = Enumerable.Range(0, n).ToArray();
        int[] rank = new int[n];

        // Finds the parent of a vertex
        int Find(int vertex)
        {
            if (vertex == parents[vertex])
            {
                return vertex;
            }
            int parent = Find(parents[vertex]);
            parents[vertex] = parent;
            return parent;
        }

        // Creates a union of the sets that verticies 
        // v1 and v2 belong to
        int Union(int v1, int v2)
        {
            int p1 = Find(v1);
            int p2 = Find(v2);
            if (p1 == p2)
            {
                return 0; // Already friends
            }

            // Different parents, so set new parents based on rank.
            // "Rank" is simillar to the height of a tree
            // from the parent
            if (rank[p1] < rank[p2])
            {
                parents[p1] = p2;
            }
            else if (rank[p1] > rank[p2])
            {
                parents[p2] = p1;
            }
            else
            {
                // Both parents have the same rank, so choose a
                // parent and increase its rank.
                parents[p2] = p1;
                rank[p1]++;
            }

            return 1; // New friends
        }

        int friendCount = 1;
        Array.Sort(logs, (x,y) => x[0].CompareTo(y[0]));
        foreach (var log in logs)
        {
            friendCount += Union(log[1], log[2]);
            if (friendCount == n)
            {
                return log[0];
            }
        }
        return -1;
    }
}
```