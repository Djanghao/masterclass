# MINIMALISTIC APPROACH

**Author:** AniaKu
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4914986/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4914986/)

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
    public int FindGCD(int[] nums) => GCD(nums.Max(), nums.Min());

    private int GCD(int biggest, int second) => second == 0 ? biggest : GCD(second, biggest % second);
}
```