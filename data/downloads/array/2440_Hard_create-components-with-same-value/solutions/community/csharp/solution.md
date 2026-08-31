# Implementation

**Author:** Nanoray22-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/6092362/](https://leetcode.com/problems/create-components-with-same-value/solutions/6092362/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires splitting a tree into connected components such that each component has the same sum of node values. Since the structure is a tree, we know there are \uD835\uDC5B \u2212 1 edges, and removing edges creates separate components.

The key insight is that the target sum for each component must be a divisor of the total sum of node values (\uD835\uDC46). By iterating over the divisors of \uD835\uDC46

S, we can test if it's possible to divide the tree into components with the target sum.

# Approach
<!-- Describe your approach to solving the problem. -->
Calculate the Total Sum:

Compute \uD835\uDC46 the total sum of all node values.
Determine all divisors of \uD835\uDC46, as only these divisors can be possible values for the target sum of each component.

- Check for Valid Divisors:

For each divisor k, calculate targetSum = \uD835\uDC46/\uD835\uDC58

Verify if it's feasible to split the tree into \uD835\uDC58 components with a sum of targetSum.

- DFS for Validation:

Perform a depth-first search (DFS) to calculate the sum of nodes in each subtree.

If a subtree's sum equals targetSum, it is considered a valid component, and the DFS continues for the rest of the tree.

If a subtree\u2019s sum exceeds targetSum, the divisor \uD835\uDC58 is invalid, and we try the next divisor.

- Result:

The maximum \uD835\uDC58\u22121 for which the tree can be divided is the maximum number of edges that can be removed.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution 
{
    private int[] nums;

    public int ComponentValue(int[] nums, int[][] edges) 
    {
        int n = nums.Length;
        this.nums = nums;

        var graph = new List<int>[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new List<int>();
        }
        foreach (var edge in edges) {
            graph[edge[0]].Add(edge[1]);
            graph[edge[1]].Add(edge[0]);
        }

        int sum = nums.Sum();

        for (int k = n; k > 0; k--) {
            if (sum % k != 0) continue;
            int target = sum / k;

            if (Helper(graph, 0, -1, target) == 0) {
                return k - 1; 
            }
        }

        return 0;
    }

    private int Helper(List<int>[] graph, int node, int parent, int target) {
        // Caso base: nodo hoja
        if (graph[node].Count == 1 && graph[node][0] == parent) {
            if (nums[node] > target) return -1;
            return nums[node] == target ? 0 : nums[node];
        }

        int sum = nums[node];
        foreach (int neighbor in graph[node]) {
            if (neighbor == parent) continue;
            int result = Helper(graph, neighbor, node, target);
            if (result == -1) return -1;
            sum += result;
        }

        // Validar la suma obtenida
        if (sum > target) return -1;
        return sum == target ? 0 : sum;
    }
}
```