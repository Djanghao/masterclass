# Simple C#

**Author:** ramnov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-interval/solutions/4773287/](https://leetcode.com/problems/remove-interval/solutions/4773287/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public IList<IList<int>> RemoveInterval(int[][] intervals, int[] toBeRemoved) {
        var result = new List<IList<int>>();
        foreach(var interval in intervals)
        {
            if(interval[0] < toBeRemoved[0] && interval[1] > toBeRemoved[1])
            {
                result.Add(new int[] { interval[0], toBeRemoved[0] });
                result.Add(new int[] { toBeRemoved[1], interval[1] });
            } 
            else if(interval[0] >= toBeRemoved[0] && interval[1] <= toBeRemoved[1])
            {
                continue;
            }
            else if(interval[0] < toBeRemoved[1] && interval[1] > toBeRemoved[1])
            {
                result.Add(new int[] { toBeRemoved[1], interval[1] });
            }
            else if(interval[0] < toBeRemoved[0] && interval[1] > toBeRemoved[0])
            {
                result.Add(new int[] { interval[0], toBeRemoved[0] });
            }
            else result.Add(interval);
        }

        return result;
    }
}
```