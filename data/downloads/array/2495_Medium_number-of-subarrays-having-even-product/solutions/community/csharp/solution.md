# c#, simple loop

**Author:** bytchenko
**Votes:** -1
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2884290/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2884290/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Every *even* product must contain at least one *even* term. When `i`th item is even it means that we have `(i - j + 1) * (nums.Length - i)` subarrays where `j` is the previous even term.

# Approach
<!-- Describe your approach to solving the problem. -->
- Find out all *even* items from `nums`
- Loop over index `i` and count target subarrays which starts from `i`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n)`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)` 

# Code
```
public class Solution {
    public long EvenProduct(int[] nums) {
        long result = 0;

        for (int i = 0, j = 0; i < nums.Length; ++i)
            if (nums[i] % 2 == 0) {
                result += ((long)i - j + 1) * (nums.Length - i);

                j = i + 1;
            }

        return result;
    }
}
```