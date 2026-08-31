# Easy solution C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/5951624/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/5951624/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public long MaxAlternatingSum(int[] nums) {
        long global = nums[0];
        long target = 0;
        for(int i = 1; i < nums.Length; i++)
        {
            global = Math.Max(global, target + nums[i]);
            target = Math.Max(target, global - nums[i]);
        }
        return global;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
