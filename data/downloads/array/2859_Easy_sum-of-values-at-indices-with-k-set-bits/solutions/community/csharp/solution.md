# [C#] [100%] Easy iterative solution

**Author:** akhlebka
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055521/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055521/)

---

# Algorithm
1. Iterate over all nums and counts **1** bits in it's index in nums array
2. Sum each number if amount of **1** bits in it's index is equal to **k**


# Complexity
- Time complexity: $$O(2 n)$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public int SumIndicesWithKSetBits(IList<int> nums, int k)
    {
        return nums.Where((t, i) => CountOnes(i) == k).Sum();
    }

    private static int CountOnes(int num) {
        int count = 0;
        while (num != 0) {
            if ((num & 1) == 1)
                ++count;
            num >>= 1;
        }
        return count;
    }
}
```