# C#

**Author:** kpzeus
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3521292/](https://leetcode.com/problems/power-of-heroes/solutions/3521292/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int SumOfPower(int[] nums) {        
        long res = 0;
        long sum = 0;
        long mod = 1000000007;
        Array.Sort(nums);

        foreach (var x in nums)
        {
            res = (res + (sum + x) * x % mod * x % mod) % mod;
            sum = (sum * 2 + x) % mod;
        }

        return (int)res;
    }
}
```