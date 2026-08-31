# C# Using Monotonic Queue, Sliding Window

**Author:** DanyloKarachentsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3760016/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3760016/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumRobots(int[] chargeTimes, int[] runningCosts, long budget) {
        int maxCount = 0;
        LinkedList<int> localMaximum = new LinkedList<int>();
        long currentBudget = 0;

        for (int start = 0, end = 0; end < chargeTimes.Length; end++)
        {
            while (localMaximum.Count != 0 && chargeTimes[localMaximum.Last.Value] < chargeTimes[end])
            {
                localMaximum.RemoveLast();
            }

            localMaximum.AddLast(end);
            currentBudget += runningCosts[end];

            while (localMaximum.Count != 0 && budget < (chargeTimes[localMaximum.First.Value] + (end - start + 1) * currentBudget))
            {
                currentBudget -= runningCosts[start];
                if (localMaximum.First.Value <= start)
                {
                    localMaximum.RemoveFirst();
                }

                start++;
            }

            maxCount = Math.Max(maxCount, end - start + 1);
        }

        return maxCount;
    }
}
```