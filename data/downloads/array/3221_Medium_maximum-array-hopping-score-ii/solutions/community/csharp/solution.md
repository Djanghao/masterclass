# C# mono stack

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5495324/](https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5495324/)

---

# Intuition
Greedy: Each time, the best step is to jump to the maximum value right to the current position.

# Approach
Mono stack

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public long MaxScore(int[] nums) {
        var len = nums.Length;
        var stack = new Stack<long>();
        for (var i = 1; i < len; ++i)
        {
            var num = nums[i];
            while (stack.Count > 0 && nums[stack.Peek()] <= num) stack.Pop();
            stack.Push(i);
        }
        var res = 0L;
        var p = stack.Pop();
        while (stack.Count > 0)
        {
            var i = stack.Pop();
            res += (p - i) * nums[p];
            p = i;
        }
        return res + p * nums[p];
    }
}
```