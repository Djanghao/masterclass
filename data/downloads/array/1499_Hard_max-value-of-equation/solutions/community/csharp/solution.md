# Beats 100% on runtime

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/5837537/](https://leetcode.com/problems/max-value-of-equation/solutions/5837537/)

---

# Intuition
Maximize yi + yi + |xi - xj| by finding pairs of points close in x-coordinates while maximizing their y-values.

# Approach
Use a deque to maintain candidate indices in a way that allows quick access to the optimal previous point, while iterating through the list of points and ensuring the distance condition with k is respected.

# Complexity
- Time complexity:
O(n) since each point is processed once and deque operations (add/remove) are efficient.

- Space complexity:
O(n) due to the storage of indices in the deque, though it generally holds fewer elements in practice.

# Code
```csharp []
using System.Collections.Generic;

public class Solution {
    public int FindMaxValueOfEquation(int[][] points, int k) {
        int maxValue = int.MinValue;
        int n = points.Length;
        var deque = new LinkedList<int>();

        for (int i = 0; i < n; i++) {
            // Remove indices that are out of the valid range
            while (deque.Count > 0 && points[i][0] - points[deque.First.Value][0] > k) {
                deque.RemoveFirst();
            }

            // Calculate max value using the front of the deque
            if (deque.Count > 0) {
                maxValue = Math.Max(maxValue, points[i][1] + points[deque.First.Value][1] + points[i][0] - points[deque.First.Value][0]);
            }

            // Maintain a decreasing order in deque based on (y - x)
            while (deque.Count > 0 && (points[deque.Last.Value][1] - points[deque.Last.Value][0]) <= (points[i][1] - points[i][0])) {
                deque.RemoveLast();
            }

            // Add the current index to the deque
            deque.AddLast(i);
        }

        return maxValue;
    }
}

```