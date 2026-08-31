# C# | Floyd-Warshall algorithm | O(N^3)

**Author:** marcomu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/5909428/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/5909428/)

---

# Intuition
For every combination of possible closures, from none to all of them, verify that the minimum distance from every pair of branches isn't more than maxDistance.

# Approach
Use Floyd-Warshall to compute the minimum paths efficiently.
The rest is brute force.

# Complexity
- Time complexity: $$O(N^3)$$, with N = # of nodes
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N^2)$$, with N = # of nodes
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution
{
    public int NumberOfSets(int n, int maxDistance, int[][] roads)
    {
        // dist is initialized as the direct distance between `i` and `j`
        // aka, the roads
        var dist = new int[n][];
        for (var i = 0; i < n; ++i)
        {
            dist[i] = new int[n];
        }

        foreach (var road in roads)
        {
            if (dist[road[0]][road[1]] == 0 || dist[road[0]][road[1]] > road[2])
            {
                dist[road[0]][road[1]] = road[2];
                dist[road[1]][road[0]] = road[2];
            }
        }

        return this.ExploreAllCombinations(n, maxDistance, dist, new bool[n], 0);
    }

    private int ExploreAllCombinations(int n, int maxDistance, int[][] dist, bool[] closed, int branch)
    {
        if (branch == n)
        {
            return this.IsValid(n, maxDistance, dist, closed) ? 1 : 0;
        }

        var count = this.ExploreAllCombinations(n, maxDistance, dist, closed, branch + 1);

        closed[branch] = true;
        count += this.ExploreAllCombinations(n, maxDistance, dist, closed, branch + 1);
        closed[branch] = false;

        return count;
    }

    private bool IsValid(int n, int maxDistance, int[][] dist, bool[] closed)
    {
        // we deep-clone the `dist` array so we can modify it without breaking the original copy
        dist = this.Clone(dist);

        // we calculate all the minimum distances between `i` and `j`, skipping the closed branches
        for (var k = 0; k < n; ++k)
        {
            if (closed[k]) continue;

            for (var i = 0; i < n; ++i)
            {
                if (i == k) continue;
                if (closed[i]) continue;

                for (var j = 0; j < n; ++j)
                {
                    if (j == i || j == k) continue;
                    if (closed[j]) continue;

                    if (dist[i][k] > 0 && dist[k][j] > 0 && (dist[i][j] == 0 || dist[i][j] > dist[i][k] + dist[k][j]))
                    {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // we check every combination of `i` and `j` to verify they are connected, and not further than `maxDistance`
        for (var i = 0; i < n; ++i)
        {
            if (closed[i]) continue;

            for (var j = 0; j < n; ++j)
            {
                if (closed[j]) continue;

                if (i != j && (dist[i][j] == 0 || dist[i][j] > maxDistance))
                {
                    return false;
                }
            }
        }

        return true;
    }

    private int[][] Clone(int[][] arr)
    {
        var arr2 = new int[arr.Length][];

        for (var i = 0; i < arr.Length; ++i)
        {
            arr2[i] = arr[i].ToArray();
        }

        return arr2;
    }
}
```